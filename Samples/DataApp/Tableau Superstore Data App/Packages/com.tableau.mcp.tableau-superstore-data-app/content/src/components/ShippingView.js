(function (SV) {
  'use strict';
  var {
    MONTH_NAMES,
    TipRow,
    clear,
    dateFilters,
    fmtInt,
    fmtPct,
    frag,
    h,
    niceStep,
    observeWidth,
    query,
    regionFilters,
    svg,
  } = SV;
  // ============================================================================
  // Shipping tab — a reproduction of the Superstore "On-Time Shipment Trends"
  // sheet. The datasource carries no explicit on-time/SLA field, so "Early /
  // On Time / Late" is derived client-side from two live-queried date columns:
  //   days-to-ship = Ship Date − Order Date (per order), classified against a
  //   fixed expected-transit-days table keyed by Ship Mode (the closest thing
  //   the classic Superstore Ship Mode semantics offer to an SLA — Same Day
  //   fastest, Standard Class slowest). This mapping is a display convention,
  //   not queried data; only Order ID / Order Date / Ship Date / Ship Mode are
  //   fetched live, scoped by the shared Region + Order Date filters.
  //
  // Panels:
  //   1. On-Time Shipment Trends — overall Early/On Time/Late % bar, plus a
  //      monthly stacked-area trend of shipment counts by that classification.
  //   2. On-Time Performance by Ship Mode — same classification broken out per
  //      Ship Mode, with order count and average days-to-ship.
  // ============================================================================

  const errMsg = (err) => (err && (err.message || err.errorCode)) || String(err);

  // Expected transit days (Ship Date − Order Date) per Ship Mode. daysToShip
  // below this → Early, equal → On Time, above → Late. Unmapped modes are
  // dropped rather than guessed at.
  const EXPECTED_DAYS = { 'Same Day': 0, 'First Class': 2, 'Second Class': 4, 'Standard Class': 6 };
  const SHIP_MODE_ORDER = ['Same Day', 'First Class', 'Second Class', 'Standard Class'];

  const BUCKET = { Early: 'early', 'On Time': 'onTime', Late: 'late' };
  const COLOR_VAR = { early: '--div-pos', onTime: '--div-mid', late: '--div-neg' };

  function classify(daysToShip, mode) {
    const target = EXPECTED_DAYS[mode];
    if (target == null) return null;
    if (daysToShip < target) return 'Early';
    if (daysToShip > target) return 'Late';
    return 'On Time';
  }

  // Parse a VDS date value at LOCAL noon. VDS returns Order/Ship Date as a bare
  // 'YYYY-MM-DD' string; `new Date('YYYY-MM-DD')` parses as UTC midnight, so in any
  // timezone west of UTC the local getFullYear()/getMonth() roll first-of-month
  // dates back a month (Jan-1 → prior year), mis-bucketing the monthly trend.
  // Anchoring at noon keeps both the day-diff and the month key timezone-stable.
  function localDate(x) {
    const m = String(x).match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (m) return new Date(+m[1], +m[2] - 1, +m[3], 12);
    const d = new Date(x);
    return isNaN(d) ? null : d;
  }

  // ---- fetch + client-side classification -------------------------------------
  function fetchShipping(ds, { region, dateSel }) {
    return query(
      ds,
      [
        { fieldCaption: 'Order ID' },
        { fieldCaption: 'Order Date' },
        { fieldCaption: 'Ship Date' },
        { fieldCaption: 'Ship Mode' },
      ],
      regionFilters(region).concat(dateFilters(dateSel)),
    ).then((rows) => {
      const seen = new Set();
      const overall = { early: 0, onTime: 0, late: 0, total: 0 };
      const byMode = Object.create(null);
      const monthly = Object.create(null);
      let minT = Infinity,
        maxT = -Infinity;

      rows.forEach((r) => {
        const id = r['Order ID'];
        if (id == null || seen.has(id)) return;
        seen.add(id);

        const od = r['Order Date'],
          sd = r['Ship Date'],
          mode = r['Ship Mode'];
        if (od == null || sd == null || mode == null) return;
        const orderDate = localDate(od),
          shipDate = localDate(sd);
        if (!orderDate || !shipDate) return;
        const days = Math.round((shipDate - orderDate) / 86400000);
        const cls = classify(days, mode);
        if (!cls) return;
        const key = BUCKET[cls];

        overall.total++;
        overall[key]++;

        const m =
          byMode[mode] || (byMode[mode] = { early: 0, onTime: 0, late: 0, total: 0, daysSum: 0 });
        m.total++;
        m.daysSum += days;
        m[key]++;

        const t = new Date(orderDate.getFullYear(), orderDate.getMonth(), 1).getTime();
        const mo = monthly[t] || (monthly[t] = { t, early: 0, onTime: 0, late: 0 });
        mo[key]++;
        if (t < minT) minT = t;
        if (t > maxT) maxT = t;
      });

      const months = Object.keys(monthly)
        .map(Number)
        .sort((a, b) => a - b)
        .map((t) => monthly[t]);
      let maxCount = 0;
      months.forEach((mo) => {
        const c = mo.early + mo.onTime + mo.late;
        if (c > maxCount) maxCount = c;
      });

      return {
        overall,
        byMode,
        months,
        minT: isFinite(minT) ? minT : 0,
        maxT: isFinite(maxT) ? maxT : 0,
        maxCount,
      };
    });
  }

  // ---- shared 3-segment Early/On Time/Late bar --------------------------------
  function PercentBar(seg, big, viz) {
    if (!seg.total) return h('p', { class: 'muted' }, 'No data.');
    const parts = [
      { key: 'early', label: 'Shipped Early', count: seg.early },
      { key: 'onTime', label: 'Shipped On Time', count: seg.onTime },
      { key: 'late', label: 'Shipped Late', count: seg.late },
    ].filter((p) => p.count > 0);

    function over(e, p) {
      const pct = p.count / seg.total;
      viz.showTip(
        frag(
          h('div', { class: 'tip-head' }, p.label),
          TipRow({
            colorVar: COLOR_VAR[p.key],
            label: fmtInt.format(p.count) + ' orders',
            value: fmtPct(pct, 0),
          }),
        ),
        e.clientX,
        e.clientY,
      );
    }

    return h(
      'div',
      { class: 'ship-bar' + (big ? ' ship-bar-big' : '') },
      parts.map((p) => {
        const pct = p.count / seg.total;
        return h(
          'div',
          {
            class: 'ship-bar-seg ship-seg-' + p.key,
            style: { width: pct * 100 + '%' },
            onPointerEnter: (e) => over(e, p),
            onPointerMove: (e) => over(e, p),
            onPointerLeave: () => viz.hideTip(),
          },
          big
            ? h(
                'span',
                { class: 'ship-bar-text' },
                h('strong', null, fmtPct(pct, 0)),
                ' ' + p.label,
              )
            : null,
        );
      }),
    );
  }

  // ---- Panel 1 trend chart: monthly stacked area of Early/On Time/Late counts -
  const PAD_L = 44,
    PAD_R = 10,
    CHART_H = 160,
    AXIS_H = 20;

  function bandPath(pts, topOf, bottomOf, xOf, yOf) {
    let d = '';
    pts.forEach((p, i) => {
      d += (i === 0 ? 'M' : 'L') + xOf(p.t).toFixed(1) + ' ' + yOf(topOf(p)).toFixed(1) + ' ';
    });
    for (let i = pts.length - 1; i >= 0; i--) {
      const p = pts[i];
      d += 'L' + xOf(p.t).toFixed(1) + ' ' + yOf(bottomOf(p)).toFixed(1) + ' ';
    }
    return (d + 'Z').trim();
  }

  function MonthlyArea(model, viz) {
    const { months, minT, maxT, maxCount } = model;
    const wrap = h('div', { class: 'ship-chart' });
    let svgEl, crosshair;

    function render(width) {
      clear(wrap);
      const cellW = Math.max(280, width || 600);
      const plotW = cellW - PAD_L - PAD_R;
      const step = niceStep(maxCount, 4) || 1;
      const domainMax = Math.max(step, Math.ceil(maxCount / step) * step);
      const yTicks = [];
      for (let v = 0; v <= domainMax + 0.5; v += step) yTicks.push(v);

      const span = Math.max(1, maxT - minT);
      const xOf = (t) => PAD_L + ((t - minT) / span) * plotW;
      const innerH = CHART_H - AXIS_H - 4;
      const yOf = (v) => 4 + innerH - (v / domainMax) * innerH;

      const earlyPath = bandPath(
        months,
        (p) => p.early,
        () => 0,
        xOf,
        yOf,
      );
      const onTimePath = bandPath(
        months,
        (p) => p.early + p.onTime,
        (p) => p.early,
        xOf,
        yOf,
      );
      const latePath = bandPath(
        months,
        (p) => p.early + p.onTime + p.late,
        (p) => p.early + p.onTime,
        xOf,
        yOf,
      );

      const y0 = new Date(minT).getFullYear();
      const yN = new Date(maxT).getFullYear() + 1;
      const years = [];
      for (let yr = y0; yr <= yN; yr++) years.push(yr);

      crosshair = svg('line', {
        class: 'crosshair',
        x1: -10,
        x2: -10,
        y1: 4,
        y2: 4 + innerH,
        style: { display: 'none' },
      });

      function nearest(clientX) {
        const box = svgEl.getBoundingClientRect();
        const svgX = ((clientX - box.left) / box.width) * cellW;
        let best = months[0],
          bd = Infinity;
        months.forEach((p) => {
          const dx = Math.abs(xOf(p.t) - svgX);
          if (dx < bd) {
            bd = dx;
            best = p;
          }
        });
        return best;
      }
      function move(e) {
        if (!svgEl || !months.length) return;
        const p = nearest(e.clientX);
        const cx = xOf(p.t);
        crosshair.setAttribute('x1', cx);
        crosshair.setAttribute('x2', cx);
        crosshair.style.display = '';
        const d = new Date(p.t);
        const total = p.early + p.onTime + p.late;
        viz.showTip(
          frag(
            h('div', { class: 'tip-head' }, `${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`),
            TipRow({
              colorVar: '--div-pos',
              label: 'Shipped Early',
              value: `${fmtInt.format(p.early)} (${fmtPct(total ? p.early / total : 0, 0)})`,
            }),
            TipRow({
              colorVar: '--div-mid',
              label: 'Shipped On Time',
              value: `${fmtInt.format(p.onTime)} (${fmtPct(total ? p.onTime / total : 0, 0)})`,
            }),
            TipRow({
              colorVar: '--div-neg',
              label: 'Shipped Late',
              value: `${fmtInt.format(p.late)} (${fmtPct(total ? p.late / total : 0, 0)})`,
            }),
          ),
          e.clientX,
          e.clientY,
        );
      }
      function leave() {
        crosshair.style.display = 'none';
        viz.hideTip();
      }

      svgEl = svg(
        'svg',
        {
          class: 'ship-chart-svg',
          width: cellW,
          height: CHART_H,
          viewBox: `0 0 ${cellW} ${CHART_H}`,
        },
        yTicks.map((v) => {
          const y = yOf(v);
          return svg(
            'g',
            null,
            svg('line', { x1: PAD_L, y1: y, x2: PAD_L + plotW, y2: y, class: 'grid' }),
            svg(
              'text',
              { x: PAD_L - 6, y: y + 3, class: 'y-lbl', 'text-anchor': 'end' },
              fmtInt.format(v),
            ),
          );
        }),
        svg('path', { d: earlyPath, class: 'ship-area-early' }),
        svg('path', { d: onTimePath, class: 'ship-area-ontime' }),
        svg('path', { d: latePath, class: 'ship-area-late' }),
        crosshair,
        years.map((yr) => {
          const tx = xOf(new Date(yr, 0, 1).getTime());
          if (tx < PAD_L - 2 || tx > PAD_L + plotW + 2) return null;
          return svg(
            'g',
            null,
            svg('line', { x1: tx, y1: 4 + innerH, x2: tx, y2: 4 + innerH + 4, class: 'grid' }),
            svg('text', { x: tx, y: CHART_H - 4, class: 'x-lbl', 'text-anchor': 'middle' }, yr),
          );
        }),
        svg('rect', {
          x: PAD_L,
          y: 0,
          width: plotW,
          height: 4 + innerH,
          fill: 'transparent',
          class: 'hit',
          onPointerMove: move,
          onPointerLeave: leave,
        }),
      );
      wrap.appendChild(svgEl);
    }

    const disconnect = observeWidth(wrap, render);
    return { el: wrap, disconnect };
  }

  // ---- Panel 2: per-Ship-Mode breakdown ---------------------------------------
  function ShipModeRows(byMode, viz) {
    const order = SHIP_MODE_ORDER.filter((m) => byMode[m]);
    Object.keys(byMode).forEach((m) => {
      if (order.indexOf(m) < 0) order.push(m);
    });

    return h(
      'div',
      { class: 'ship-modes' },
      order.map((mode) => {
        const seg = byMode[mode];
        const avgDays = seg.total ? seg.daysSum / seg.total : 0;
        return h(
          'div',
          { class: 'ship-mode-row' },
          h('div', { class: 'ship-mode-name' }, mode),
          PercentBar(seg, false, viz),
          h(
            'div',
            { class: 'ship-mode-meta' },
            `${fmtInt.format(seg.total)} orders · avg ${avgDays.toFixed(1)}d to ship`,
          ),
        );
      }),
    );
  }

  function Legend() {
    return h(
      'div',
      { class: 'series-legend' },
      h(
        'span',
        { class: 'series-item' },
        h('span', { class: 'series-swatch', style: { background: 'var(--div-pos)' } }),
        'Early',
      ),
      h(
        'span',
        { class: 'series-item' },
        h('span', { class: 'series-swatch', style: { background: 'var(--div-mid)' } }),
        'On Time',
      ),
      h(
        'span',
        { class: 'series-item' },
        h('span', { class: 'series-swatch', style: { background: 'var(--div-neg)' } }),
        'Late',
      ),
    );
  }

  const muted = (t) => h('p', { class: 'muted' }, t);
  const errP = (t) => h('p', { class: 'error' }, t);
  function setBody(slot, node) {
    clear(slot);
    slot.appendChild(node);
  }

  function ShippingView({ ds, viz }) {
    let region = null,
      dateSel = null;
    let token = 0;
    let areaDc = null;

    const trendsSlot = h('div', null, muted('Loading…'));
    const modesSlot = h('div', null, muted('Loading…'));

    const el = h(
      'div',
      { style: { display: 'contents' } },
      h(
        'section',
        { class: 'card' },
        h(
          'div',
          { class: 'panel-head' },
          h('h2', { class: 'card-title' }, 'On-Time Shipment Trends'),
          Legend(),
        ),
        trendsSlot,
      ),
      h(
        'section',
        { class: 'card' },
        h('h2', { class: 'card-title' }, 'On-Time Performance by Ship Mode'),
        modesSlot,
      ),
    );

    function clearArea() {
      if (areaDc) {
        areaDc();
        areaDc = null;
      }
    }

    function load() {
      const my = ++token;
      viz.beginLoad();
      fetchShipping(ds, { region, dateSel })
        .then((data) => {
          if (my !== token) return;
          clearArea();
          if (!data.overall.total) {
            setBody(trendsSlot, muted('No data in current scope.'));
            setBody(modesSlot, muted('No data in current scope.'));
            return;
          }
          const area = MonthlyArea(data, viz);
          areaDc = area.disconnect;
          const trends = frag(PercentBar(data.overall, true, viz), area.el);
          setBody(trendsSlot, trends);
          setBody(modesSlot, ShipModeRows(data.byMode, viz));
        })
        .catch((e) => {
          if (my !== token) return;
          clearArea();
          const msg = 'Could not load shipments: ' + errMsg(e);
          setBody(trendsSlot, errP(msg));
          setBody(modesSlot, errP(msg));
        })
        .then(() => viz.endLoad());
    }

    return {
      el,
      update({ region: r, dateSel: d }) {
        region = r ?? null;
        dateSel = d ?? null;
        load();
      },
      destroy() {
        token++;
        clearArea();
      },
    };
  }

  Object.assign(SV, { ShippingView });
})((window.SV = window.SV || {}));
