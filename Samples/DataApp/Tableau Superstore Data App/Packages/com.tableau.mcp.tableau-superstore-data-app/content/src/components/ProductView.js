(function (SV) {
  'use strict';
  var {
    CATEGORIES,
    MONTH_NAMES,
    SEGMENTS,
    SUB_CATEGORIES,
    TipRow,
    clear,
    fetchCategorySales,
    fetchProductScatter,
    fmtPct,
    fmtUSD0,
    fmtUSDk,
    frag,
    h,
    makeRatioColor,
    makeSalesColor,
    niceStep,
    observeWidth,
    svg,
  } = SV;
  // ============================================================================
  // Product tab — a reproduction of the Superstore "Product Drilldown" sheet, as
  // a second in-app view. Two live-queried panels, sharing the Overview's Region +
  // Order Date scope:
  //   1. Sales by Product Category — a highlight table (Category × Year rows, month
  //      columns) whose cells are shaded by a sequential Sales ramp.
  //   2. Sales and Profit by Product Names — a strip plot: one dot per product,
  //      laid out by Sub-Category (rows) × Segment (columns), positioned by Sales
  //      and colored by the diverging profit-ratio ramp (same one the map uses).
  // Data carries no embedded values; both panels query the wired datasource live.
  // ============================================================================

  const errMsg = (err) => (err && (err.message || err.errorCode)) || String(err);

  // ---- strip-plot layout (px; the SVGs render 1:1 so dots stay circular) ------
  const BAND_H = 22; // height of one Sub-Category row
  const AXIS_H = 26;
  const CAT_W = 64; // left Category rail
  const SUB_W = 88; // Sub-Category label column
  const PAD_L = 2;
  const PAD_R = 8;

  // Stable pseudo-vertical-jitter per product name so dots spread within a band
  // without overplotting — deterministic (no Math.random) so renders don't jump.
  function jitterY(name) {
    let hh = 0;
    const s = name || '';
    for (let i = 0; i < s.length; i++) hh = (hh * 31 + s.charCodeAt(i)) | 0;
    const f = (((hh % 1000) + 1000) % 1000) / 1000 - 0.5; // -0.5..0.5
    return BAND_H / 2 + f * BAND_H * 0.62;
  }
  function median(pts) {
    if (!pts.length) return null;
    const s = pts.map((p) => p.sales).sort((a, b) => a - b);
    const m = Math.floor(s.length / 2);
    return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
  }

  // ---- Panel 1: Sales-by-Category highlight table -----------------------------
  function CategoryHeatmap(data, vizRootEl, viz) {
    const scale = makeSalesColor(vizRootEl, data.minSales, data.maxSales);

    function over(e, cat, mo, yr, cell) {
      if (!cell) {
        viz.hideTip();
        return;
      }
      viz.showTip(
        frag(
          h('div', { class: 'tip-head' }, `${cat} · ${MONTH_NAMES[mo]} ${yr}`),
          TipRow({ colorVar: '--series-sales', label: 'Sales', value: fmtUSD0.format(cell.sales) }),
          TipRow({
            colorVar: '--series-profit',
            label: 'Profit',
            value: fmtUSD0.format(cell.profit),
          }),
          TipRow({
            label: 'Profit ratio',
            value: fmtPct(cell.sales ? cell.profit / cell.sales : 0, 1),
          }),
        ),
        e.clientX,
        e.clientY,
      );
    }

    const body = data.rows.map((row) =>
      h(
        'tr',
        null,
        row.firstOfCat ? h('th', { class: 'heat-cat', rowspan: row.catSpan }, row.category) : null,
        h('th', { class: 'heat-year' }, row.year),
        row.cells.map((cell, mo) => {
          if (!cell) return h('td', { class: 'heat-cell heat-empty' });
          const dark = scale.t(cell.sales) > 0.55;
          return h(
            'td',
            {
              class: 'heat-cell',
              style: {
                background: scale.color(cell.sales),
                color: dark ? '#fff' : 'var(--text-primary)',
              },
              onPointerEnter: (e) => over(e, row.category, mo, row.year, cell),
              onPointerMove: (e) => over(e, row.category, mo, row.year, cell),
              onPointerLeave: () => viz.hideTip(),
            },
            fmtUSD0.format(cell.sales),
          );
        }),
      ),
    );

    return h(
      'div',
      { class: 'heat-scroll' },
      h(
        'table',
        { class: 'heat-table' },
        h(
          'thead',
          null,
          h(
            'tr',
            null,
            h('th', { class: 'heat-corner', colspan: 2 }),
            MONTH_NAMES.map((m) => h('th', { class: 'heat-col' }, m)),
          ),
        ),
        h('tbody', null, body),
      ),
    );
  }

  // One (Sub-Category × Segment) cell: dots by Sales, a median reference line, and
  // a shared pointer handler that tooltips the nearest product (no per-dot events).
  function ScatterCell(pts, cellW, xOf, color, viz) {
    const dots = pts.map((p) => ({ p, cx: xOf(p.sales), cy: jitterY(p.name) }));
    const med = median(pts);
    let svgEl;

    function move(e) {
      if (!dots.length) return;
      const box = svgEl.getBoundingClientRect();
      const sx = ((e.clientX - box.left) / box.width) * cellW;
      const sy = ((e.clientY - box.top) / box.height) * BAND_H;
      let best = null,
        bd = Infinity;
      dots.forEach((d) => {
        const dx = d.cx - sx,
          dy = d.cy - sy,
          q = dx * dx + dy * dy;
        if (q < bd) {
          bd = q;
          best = d.p;
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

    svgEl = svg(
      'svg',
      {
        width: cellW,
        height: BAND_H,
        viewBox: `0 0 ${cellW} ${BAND_H}`,
        onPointerMove: move,
        onPointerLeave: () => viz.hideTip(),
      },
      med != null
        ? svg('line', {
            class: 'scatter-med',
            x1: xOf(med),
            x2: xOf(med),
            y1: 2.5,
            y2: BAND_H - 2.5,
          })
        : null,
      dots.map((d) =>
        svg('circle', { class: 'scatter-dot', cx: d.cx, cy: d.cy, r: 3, fill: color(d.p.ratio) }),
      ),
    );

    return h('div', { class: 'scatter-cell' }, svgEl);
  }

  // ---- Panel 2: per-product strip plot ----------------------------------------
  function ProductScatter(data, vizRootEl, viz) {
    const color = makeRatioColor(vizRootEl);
    const wrap = h('div', { class: 'scatter' });

    // subCategory|segment -> points
    const byKey = new Map();
    data.pts.forEach((p) => {
      const k = p.subCategory + '|' + p.segment;
      const arr = byKey.get(k);
      if (arr) arr.push(p);
      else byKey.set(k, [p]);
    });

    function render(width) {
      clear(wrap);
      const cellW = Math.max(120, Math.floor(((width || 720) - CAT_W - SUB_W) / SEGMENTS.length));
      const step = niceStep(data.maxSales, 6) || 5000;
      const domainMax = Math.max(step, Math.ceil(data.maxSales / step) * step);
      const xOf = (sales) =>
        PAD_L + (Math.min(sales, domainMax) / domainMax) * (cellW - PAD_L - PAD_R);

      const ticks = [];
      for (let v = 0; v <= domainMax + 0.5; v += step) ticks.push(v);

      wrap.appendChild(
        h(
          'div',
          { class: 'scatter-head' },
          h('div', { class: 'scatter-head-spacer', style: { width: CAT_W + SUB_W + 'px' } }),
          SEGMENTS.map((seg) =>
            h('div', { class: 'scatter-seg', style: { width: cellW + 'px' } }, seg),
          ),
        ),
      );

      CATEGORIES.forEach((cat) => {
        wrap.appendChild(
          h(
            'div',
            { class: 'scatter-group' },
            h('div', { class: 'scatter-cat', style: { width: CAT_W + 'px' } }, cat),
            h(
              'div',
              { class: 'scatter-rows' },
              (SUB_CATEGORIES[cat] || []).map((sub) =>
                h(
                  'div',
                  { class: 'scatter-row' },
                  h('div', { class: 'scatter-sub', style: { width: SUB_W + 'px' } }, sub),
                  SEGMENTS.map((seg) =>
                    ScatterCell(byKey.get(sub + '|' + seg) || [], cellW, xOf, color, viz),
                  ),
                ),
              ),
            ),
          ),
        );
      });

      wrap.appendChild(
        h(
          'div',
          { class: 'scatter-axis-row' },
          h('div', { class: 'scatter-head-spacer', style: { width: CAT_W + SUB_W + 'px' } }),
          SEGMENTS.map(() =>
            h(
              'div',
              { class: 'scatter-axis-cell', style: { width: cellW + 'px' } },
              svg(
                'svg',
                { width: cellW, height: AXIS_H, viewBox: `0 0 ${cellW} ${AXIS_H}` },
                ticks.map((v) => {
                  const tx = xOf(v);
                  return svg(
                    'g',
                    null,
                    svg('line', { class: 'grid', x1: tx, y1: 0, x2: tx, y2: 4 }),
                    svg(
                      'text',
                      { class: 'x-lbl', x: tx, y: 14, 'text-anchor': 'middle' },
                      v === 0 ? '$0' : fmtUSDk(v),
                    ),
                  );
                }),
                svg(
                  'text',
                  {
                    class: 'scatter-axis-title',
                    x: PAD_L + (cellW - PAD_L - PAD_R) / 2,
                    y: 24,
                    'text-anchor': 'middle',
                  },
                  'Sales',
                ),
              ),
            ),
          ),
        ),
      );
    }

    const disconnect = observeWidth(wrap, render);
    return { el: wrap, disconnect };
  }

  function RatioLegend() {
    return h(
      'div',
      { class: 'scatter-legend' },
      h('span', { class: 'scatter-legend-lbl' }, 'Profit Ratio'),
      h('span', { class: 'scatter-legend-bar' }),
      h(
        'span',
        { class: 'scatter-legend-ticks' },
        h('span', null, '−50%'),
        h('span', null, '+50%'),
      ),
    );
  }

  const muted = (t) => h('p', { class: 'muted' }, t);
  const errP = (t) => h('p', { class: 'error' }, t);
  function setBody(slot, node) {
    clear(slot);
    slot.appendChild(node);
  }

  function ProductView({ ds, viz }) {
    const vizRootEl = viz.vizRootEl;
    let region = null,
      dateSel = null;
    let token = 0;
    let scatterDisconnect = null;

    const p1 = h('div', null, muted('Loading…'));
    const p2 = h('div', null, muted('Loading…'));

    const el = h(
      'div',
      { style: { display: 'contents' } },
      h(
        'section',
        { class: 'card' },
        h('h2', { class: 'card-title' }, 'Sales by Product Category'),
        p1,
      ),
      h(
        'section',
        { class: 'card' },
        h(
          'div',
          { class: 'panel-head' },
          h('h2', { class: 'card-title' }, 'Sales and Profit by Product Names'),
          RatioLegend(),
        ),
        p2,
      ),
    );

    function clearScatter() {
      if (scatterDisconnect) {
        scatterDisconnect();
        scatterDisconnect = null;
      }
    }

    function load() {
      const my = ++token;
      viz.beginLoad();
      const p1p = fetchCategorySales(ds, { region, dateSel })
        .then((d) => {
          if (my !== token) return;
          setBody(
            p1,
            d.rows.length ? CategoryHeatmap(d, vizRootEl, viz) : muted('No data in current scope.'),
          );
        })
        .catch((e) => {
          if (my === token) setBody(p1, errP('Could not load category sales: ' + errMsg(e)));
        });
      const p2p = fetchProductScatter(ds, { region, dateSel })
        .then((d) => {
          if (my !== token) return;
          clearScatter();
          if (d.pts.length) {
            const sc = ProductScatter(d, vizRootEl, viz);
            scatterDisconnect = sc.disconnect;
            setBody(p2, sc.el);
          } else setBody(p2, muted('No products in current scope.'));
        })
        .catch((e) => {
          if (my === token) {
            clearScatter();
            setBody(p2, errP('Could not load products: ' + errMsg(e)));
          }
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
      },
    };
  }

  Object.assign(SV, { ProductView });
})((window.SV = window.SV || {}));
