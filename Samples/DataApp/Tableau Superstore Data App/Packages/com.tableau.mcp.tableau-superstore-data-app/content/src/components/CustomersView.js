(function (SV) {
  'use strict';
  var {
    TipRow,
    clear,
    dateFilters,
    fmtInt,
    fmtPct,
    fmtUSD0,
    fmtUSD2,
    fmtUSDk,
    frag,
    getVal,
    h,
    makeRatioColor,
    niceStep,
    num,
    observeWidth,
    query,
    regionFilters,
    svg,
  } = SV;
  // ============================================================================
  // Customers tab — a reproduction of the Superstore "Customer Analysis" sheet.
  // Three live-queried panels, sharing the Overview's Region + Order Date scope:
  //   1. Customers by Region — six small horizontal-bar strips (Count of
  //      Customers, Sales, Quantity, Sales per Customer, Profit, Profit Ratio),
  //      all rows ordered by Count of Customers descending.
  //   2. Sales and Profit by Customer — one dot per customer, positioned by
  //      SUM(Sales)/SUM(Profit) and colored by the shared diverging profit-ratio
  //      ramp, with a dashed zero-profit reference line.
  //   3. Customer Ranking — customers ranked by Sales descending as a scrollable
  //      list of horizontal bars, colored by the same profit-ratio ramp.
  // Data carries no embedded values; every panel queries the wired datasource
  // live via ../lib/vds.js's query/getVal/num/regionFilters/dateFilters helpers.
  // ============================================================================

  const errMsg = (err) => (err && (err.message || err.errorCode)) || String(err);

  // ---- fetchers ----------------------------------------------------------------
  // Per-Region rollup: Count of Customers (COUNTD), Sales, Quantity, Profit (all
  // SUM), plus Sales-per-Customer and Profit Ratio computed client-side. Rows are
  // sorted by Count of Customers descending — the shared row order every one of
  // the six mini bar-charts uses, matching the reference sheet.
  function fetchRegionSummary(ds, region, dateSel) {
    return query(
      ds,
      [
        { fieldCaption: 'Region' },
        { fieldCaption: 'Customer Name', function: 'COUNTD', fieldAlias: 'Customers' },
        { fieldCaption: 'Sales', function: 'SUM', fieldAlias: 'Sales' },
        { fieldCaption: 'Profit', function: 'SUM', fieldAlias: 'Profit' },
        { fieldCaption: 'Quantity', function: 'SUM', fieldAlias: 'Qty' },
      ],
      regionFilters(region).concat(dateFilters(dateSel)),
    ).then((rows) => {
      const list = [];
      rows.forEach((r) => {
        const name = r.Region;
        if (name == null) return;
        const sales = num(getVal(r, 'Sales', 'SUM(Sales)'));
        const profit = num(getVal(r, 'Profit', 'SUM(Profit)'));
        const qty = num(getVal(r, 'Qty', 'SUM(Quantity)'));
        const customers = num(getVal(r, 'Customers', 'COUNTD(Customer Name)'));
        list.push({
          region: name,
          customers,
          sales,
          quantity: qty,
          profit,
          salesPerCustomer: customers ? sales / customers : 0,
          profitRatio: sales ? profit / sales : 0,
        });
      });
      list.sort((a, b) => b.customers - a.customers);
      return list;
    });
  }

  // Per-Customer-Name rollup: SUM(Sales), SUM(Profit) → profit ratio computed
  // client-side. Feeds both the scatter (unsorted) and the ranking (sorted by
  // Sales desc); also returns the domain extrema the scatter needs for its axes.
  function fetchCustomerAgg(ds, region, dateSel) {
    return query(
      ds,
      [
        { fieldCaption: 'Customer Name' },
        { fieldCaption: 'Sales', function: 'SUM', fieldAlias: 'Sales' },
        { fieldCaption: 'Profit', function: 'SUM', fieldAlias: 'Profit' },
      ],
      regionFilters(region).concat(dateFilters(dateSel)),
    ).then((rows) => {
      const pts = [];
      let maxSales = 0,
        maxProfit = -Infinity,
        minProfit = Infinity;
      rows.forEach((r) => {
        const name = r['Customer Name'];
        if (name == null) return;
        const sales = num(getVal(r, 'Sales', 'SUM(Sales)'));
        const profit = num(getVal(r, 'Profit', 'SUM(Profit)'));
        pts.push({ name, sales, profit, ratio: sales ? profit / sales : 0 });
        if (sales > maxSales) maxSales = sales;
        if (profit > maxProfit) maxProfit = profit;
        if (profit < minProfit) minProfit = profit;
      });
      if (!isFinite(maxProfit)) maxProfit = 0;
      if (!isFinite(minProfit)) minProfit = 0;
      const ranked = pts.slice().sort((a, b) => b.sales - a.sales);
      return { pts, ranked, maxSales, maxProfit, minProfit };
    });
  }

  // ---- Panel 1: Customers by Region -------------------------------------------
  const REGION_MEASURES = [
    { key: 'customers', label: 'Count of Customers', fmt: (v) => fmtInt.format(v) },
    { key: 'sales', label: 'Sales', fmt: (v) => fmtUSD0.format(v) },
    { key: 'quantity', label: 'Quantity', fmt: (v) => fmtInt.format(v) },
    { key: 'salesPerCustomer', label: 'Sales per Customer', fmt: (v) => fmtUSD2.format(v) },
    { key: 'profit', label: 'Profit', fmt: (v) => fmtUSD0.format(v) },
    { key: 'profitRatio', label: 'Profit Ratio', fmt: (v) => fmtPct(v, 1) },
  ];

  function RegionBars(data) {
    return h(
      'div',
      { class: 'cust-region-grid' },
      REGION_MEASURES.map((m) => {
        const max = Math.max(1, ...data.map((d) => d[m.key]));
        return h(
          'div',
          { class: 'cust-region-col' },
          h('div', { class: 'cust-region-head' }, m.label),
          data.map((d) => {
            const pct = max > 0 ? Math.max(0, Math.min(100, (d[m.key] / max) * 100)) : 0;
            return h(
              'div',
              { class: 'cust-region-row' },
              h('span', { class: 'cust-region-name' }, d.region),
              h(
                'span',
                { class: 'cust-region-barwrap' },
                h('span', { class: 'cust-region-bar', style: { width: pct + '%' } }),
              ),
              h('span', { class: 'cust-region-val' }, m.fmt(d[m.key])),
            );
          }),
        );
      }),
    );
  }

  // ---- shared diverging profit-ratio legend ------------------------------------
  function RatioLegend() {
    return h(
      'div',
      { class: 'cust-legend' },
      h('span', { class: 'cust-legend-lbl' }, 'Profit Ratio'),
      h('span', { class: 'cust-legend-bar' }),
      h('span', { class: 'cust-legend-ticks' }, h('span', null, '−50%'), h('span', null, '+50%')),
    );
  }

  // ---- Panel 2: Sales and Profit by Customer (scatter) -------------------------
  const SC_H = 340;
  const SC_PAD_L = 56;
  const SC_PAD_R = 14;
  const SC_PAD_T = 10;
  const SC_PAD_B = 30;

  function CustomerScatter(data, vizRootEl, viz) {
    const color = makeRatioColor(vizRootEl);
    const wrap = h('div', { class: 'cust-scatter' });
    let svgEl;

    function move(e) {
      if (!svgEl || !data.pts.length) return;
      const box = svgEl.getBoundingClientRect();
      const vw = svgEl._w; // current viewBox width (updated each render)
      const sx = ((e.clientX - box.left) / box.width) * vw;
      const sy = ((e.clientY - box.top) / box.height) * SC_H;
      const xOf = svgEl._xOf,
        yOf = svgEl._yOf;
      let best = null,
        bd = Infinity;
      data.pts.forEach((p) => {
        const dx = xOf(p.sales) - sx,
          dy = yOf(p.profit) - sy,
          q = dx * dx + dy * dy;
        if (q < bd) {
          bd = q;
          best = p;
        }
      });
      if (!best) return;
      viz.showTip(
        frag(
          h('div', { class: 'tip-head' }, best.name),
          TipRow({ colorVar: '--series-sales', label: 'Sales', value: fmtUSD0.format(best.sales) }),
          TipRow({
            colorVar: '--series-profit',
            label: 'Profit',
            value: fmtUSD0.format(best.profit),
          }),
          TipRow({ label: 'Profit ratio', value: fmtPct(best.ratio, 1) }),
        ),
        e.clientX,
        e.clientY,
      );
    }

    function render(width) {
      clear(wrap);
      const w = Math.max(280, width || 720);
      const plotW = w - SC_PAD_L - SC_PAD_R;
      const plotH = SC_H - SC_PAD_T - SC_PAD_B;

      const stepX = niceStep(data.maxSales, 6) || 1000;
      let xMax = Math.ceil(data.maxSales / stepX) * stepX;
      if (xMax <= 0) xMax = stepX;

      const stepY = niceStep(Math.max(data.maxProfit, -data.minProfit, 1), 5) || 500;
      const yMaxRaw = Math.max(data.maxProfit, 0);
      let yMax = Math.ceil(yMaxRaw / stepY) * stepY;
      if (yMax <= 0) yMax = stepY;
      const yMinRaw = Math.min(data.minProfit, 0);
      const yMin = yMinRaw < 0 ? Math.floor(yMinRaw / stepY) * stepY : 0;
      const ySpan = Math.max(stepY, yMax - yMin);

      const xOf = (v) => SC_PAD_L + (Math.min(v, xMax) / xMax) * plotW;
      const yOf = (v) =>
        SC_PAD_T + plotH - ((Math.max(yMin, Math.min(v, yMax)) - yMin) / ySpan) * plotH;

      const xTicks = [];
      for (let v = 0; v <= xMax + 0.5; v += stepX) xTicks.push(v);
      const yTicks = [];
      for (let v = yMin; v <= yMax + 0.5; v += stepY) yTicks.push(v);

      svgEl = svg(
        'svg',
        {
          width: w,
          height: SC_H,
          viewBox: `0 0 ${w} ${SC_H}`,
          onPointerMove: move,
          onPointerLeave: () => viz.hideTip(),
        },
        yTicks.map((v) =>
          svg(
            'g',
            null,
            svg('line', {
              class: 'cust-grid',
              x1: SC_PAD_L,
              x2: SC_PAD_L + plotW,
              y1: yOf(v),
              y2: yOf(v),
            }),
            svg(
              'text',
              { class: 'cust-axis-lbl', x: SC_PAD_L - 6, y: yOf(v) + 3, 'text-anchor': 'end' },
              v === 0 ? '$0' : fmtUSDk(v),
            ),
          ),
        ),
        xTicks.map((v) =>
          svg(
            'g',
            null,
            svg('line', {
              class: 'cust-grid',
              x1: xOf(v),
              x2: xOf(v),
              y1: SC_PAD_T,
              y2: SC_PAD_T + plotH,
            }),
            svg(
              'text',
              {
                class: 'cust-axis-lbl',
                x: xOf(v),
                y: SC_PAD_T + plotH + 16,
                'text-anchor': 'middle',
              },
              v === 0 ? '$0' : fmtUSDk(v),
            ),
          ),
        ),
        svg('line', {
          class: 'cust-zero',
          x1: SC_PAD_L,
          x2: SC_PAD_L + plotW,
          y1: yOf(0),
          y2: yOf(0),
        }),
        svg('line', {
          class: 'cust-zero',
          x1: xOf(0),
          x2: xOf(0),
          y1: SC_PAD_T,
          y2: SC_PAD_T + plotH,
        }),
        data.pts.map((p) =>
          svg('circle', {
            class: 'cust-dot',
            cx: xOf(p.sales),
            cy: yOf(p.profit),
            r: 3.2,
            fill: color(p.ratio),
          }),
        ),
        svg(
          'text',
          {
            class: 'cust-axis-title',
            x: SC_PAD_L + plotW / 2,
            y: SC_H - 4,
            'text-anchor': 'middle',
          },
          'Sales',
        ),
        svg(
          'text',
          {
            class: 'cust-axis-title',
            transform: `translate(14 ${SC_PAD_T + plotH / 2}) rotate(-90)`,
            'text-anchor': 'middle',
          },
          'Profit',
        ),
      );
      // stash geometry the pointer handler needs (recomputed each render)
      svgEl._w = w;
      svgEl._xOf = xOf;
      svgEl._yOf = yOf;
      wrap.appendChild(svgEl);
    }

    const disconnect = observeWidth(wrap, render);
    return { el: wrap, disconnect };
  }

  // ---- Panel 3: Customer Ranking (scrollable ranked bar list) -----------------
  const RANK_NAME_W = 132;
  const RANK_VAL_W = 74;

  function CustomerRanking(data, vizRootEl, viz) {
    const color = makeRatioColor(vizRootEl);
    const maxSales = data.ranked.length ? data.ranked[0].sales : 0;
    const wrap = h('div', { class: 'cust-rank' });

    function over(e, p) {
      viz.showTip(
        frag(
          h('div', { class: 'tip-head' }, p.name),
          TipRow({ colorVar: '--series-sales', label: 'Sales', value: fmtUSD0.format(p.sales) }),
          TipRow({ colorVar: '--series-profit', label: 'Profit', value: fmtUSD0.format(p.profit) }),
          TipRow({ label: 'Profit ratio', value: fmtPct(p.ratio, 1) }),
        ),
        e.clientX,
        e.clientY,
      );
    }

    function render(width) {
      clear(wrap);
      const barAvail = Math.max(60, (width || 420) - RANK_NAME_W - RANK_VAL_W - 20);
      wrap.appendChild(
        h(
          'div',
          { class: 'cust-rank-scroll' },
          data.ranked.map((p) => {
            const barPx =
              maxSales > 0 ? Math.max(1, (Math.max(0, p.sales) / maxSales) * barAvail) : 0;
            return h(
              'div',
              {
                class: 'cust-rank-row',
                onPointerEnter: (e) => over(e, p),
                onPointerMove: (e) => over(e, p),
                onPointerLeave: () => viz.hideTip(),
              },
              h('span', { class: 'cust-rank-name', style: { width: RANK_NAME_W + 'px' } }, p.name),
              h('span', {
                class: 'cust-rank-bar',
                style: { width: barPx + 'px', background: color(p.ratio) },
              }),
              h(
                'span',
                { class: 'cust-rank-val', style: { width: RANK_VAL_W + 'px' } },
                fmtUSD0.format(p.sales),
              ),
            );
          }),
        ),
      );
    }

    const disconnect = observeWidth(wrap, render);
    return { el: wrap, disconnect };
  }

  const muted = (t) => h('p', { class: 'muted' }, t);
  const errP = (t) => h('p', { class: 'error' }, t);
  function setBody(slot, node) {
    clear(slot);
    slot.appendChild(node);
  }

  // ---- top-level view -----------------------------------------------------------
  function CustomersView({ ds, viz }) {
    const vizRootEl = viz.vizRootEl;
    let region = null,
      dateSel = null;
    let token = 0;
    let scatterDc = null,
      rankDc = null;

    const regionSlot = h('div', null, muted('Loading…'));
    const scatterSlot = h('div', null, muted('Loading…'));
    const rankSlot = h('div', null, muted('Loading…'));

    const el = h(
      'div',
      { style: { display: 'contents' } },
      h(
        'section',
        { class: 'card' },
        h('h2', { class: 'card-title' }, 'Customers by Region'),
        regionSlot,
      ),
      h(
        'div',
        { class: 'cust-mid' },
        h(
          'section',
          { class: 'card cust-scatter-card' },
          h(
            'div',
            { class: 'panel-head' },
            h('h2', { class: 'card-title' }, 'Sales and Profit by Customer'),
            RatioLegend(),
          ),
          scatterSlot,
        ),
        h(
          'section',
          { class: 'card cust-rank-card' },
          h('h2', { class: 'card-title' }, 'Customer Ranking'),
          rankSlot,
        ),
      ),
    );

    function clearScatter() {
      if (scatterDc) {
        scatterDc();
        scatterDc = null;
      }
    }
    function clearRank() {
      if (rankDc) {
        rankDc();
        rankDc = null;
      }
    }

    function load() {
      const my = ++token;
      viz.beginLoad();
      const p1p = fetchRegionSummary(ds, region, dateSel)
        .then((d) => {
          if (my !== token) return;
          setBody(regionSlot, d.length ? RegionBars(d) : muted('No data in current scope.'));
        })
        .catch((e) => {
          if (my === token)
            setBody(regionSlot, errP('Could not load region summary: ' + errMsg(e)));
        });
      const p2p = fetchCustomerAgg(ds, region, dateSel)
        .then((d) => {
          if (my !== token) return;
          clearScatter();
          clearRank();
          if (d.pts.length) {
            const sc = CustomerScatter(d, vizRootEl, viz);
            scatterDc = sc.disconnect;
            setBody(scatterSlot, sc.el);
          } else setBody(scatterSlot, muted('No customers in current scope.'));
          if (d.ranked.length) {
            const rk = CustomerRanking(d, vizRootEl, viz);
            rankDc = rk.disconnect;
            setBody(rankSlot, rk.el);
          } else setBody(rankSlot, muted('No customers in current scope.'));
        })
        .catch((e) => {
          if (my !== token) return;
          clearScatter();
          clearRank();
          const msg = 'Could not load customers: ' + errMsg(e);
          setBody(scatterSlot, errP(msg));
          setBody(rankSlot, errP(msg));
        });
      Promise.all([p1p, p2p]).then(() => viz.endLoad());
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
        clearScatter();
        clearRank();
      },
    };
  }

  Object.assign(SV, { CustomersView });
})((window.SV = window.SV || {}));
