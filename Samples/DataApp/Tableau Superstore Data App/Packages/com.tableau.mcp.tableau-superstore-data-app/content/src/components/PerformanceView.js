(function (SV) {
  'use strict';
  var {
    CATEGORIES,
    MONTH_NAMES,
    SEGMENTS,
    TipRow,
    clear,
    dateFilters,
    fmtPct,
    fmtUSD0,
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
  // Performance tab — a reproduction of the Superstore "Sales Performance vs
  // Target" sheet. The real workbook joins Orders against a separate "Sales
  // Target" datasource (Category x Month x Segment x Year budget numbers) that
  // is NOT part of this app's wired datasource (it has no Sales Target field).
  // Reproducing the exact bullet-vs-target encoding would require inventing
  // data, so this view substitutes an honestly-computed reference line: each
  // Category x Segment's own mean monthly Sales across the current scope. The visual
  // language (rail = reference, bar = actual, tick = reference position, color
  // = above/below) is preserved from the source view; the reference itself is
  // computed live like everything else, never embedded.
  //   1. Sales Performance vs Period Average — small-multiples bar-in-bar,
  //      rows = Month x Segment (chronological), columns = Category.
  //   2. Sub-Category Performance — ranked Sales bars grouped by Category,
  //      colored by the shared diverging profit-ratio ramp.
  // ============================================================================

  const errMsg = (err) => (err && (err.message || err.errorCode)) || String(err);

  // ---- layout constants (px) --------------------------------------------------
  const LABEL_W = 92; // month+year label column
  const SEG_W = 78; // segment label column
  const ROW_H = 20; // bar-in-bar row height
  const AXIS_H = 26;
  const PAD_R = 6;

  const RANK_LABEL_W = 92;
  const RANK_VAL_W = 62;
  const RANK_BAR_H = 16;

  // ---- fetch: Sales + Profit by Month x Category x Segment -------------------
  function fetchMonthlyPerf(ds, { region, dateSel } = {}) {
    return query(
      ds,
      [
        { fieldCaption: 'Order Date', function: 'TRUNC_MONTH', fieldAlias: 'Month' },
        { fieldCaption: 'Category' },
        { fieldCaption: 'Segment' },
        { fieldCaption: 'Sales', function: 'SUM', fieldAlias: 'Sales' },
        { fieldCaption: 'Profit', function: 'SUM', fieldAlias: 'Profit' },
      ],
      regionFilters(region).concat(dateFilters(dateSel)),
    ).then((rows) => {
      const periodsMap = new Map(); // t -> { t, year, month }
      const cells = new Map(); // "t|cat|seg" -> { sales, profit }
      const sums = new Map(); // "cat|seg" -> { sum, count }
      let maxSales = 0;
      rows.forEach((r) => {
        const cat = r.Category;
        const seg = r.Segment;
        const mStr = getVal(r, 'Month', 'TRUNC_MONTH(Order Date)');
        if (cat == null || seg == null || mStr == null) return;
        const d = new Date(mStr);
        if (isNaN(d)) return;
        const t = d.getTime();
        const sales = num(getVal(r, 'Sales', 'SUM(Sales)'));
        const profit = num(getVal(r, 'Profit', 'SUM(Profit)'));
        if (!periodsMap.has(t))
          periodsMap.set(t, { t, year: d.getFullYear(), month: d.getMonth() });
        cells.set(t + '|' + cat + '|' + seg, { sales, profit });
        const key = cat + '|' + seg;
        const s = sums.get(key) || { sum: 0, count: 0 };
        s.sum += sales;
        s.count += 1;
        sums.set(key, s);
        if (sales > maxSales) maxSales = sales;
      });
      const periods = Array.from(periodsMap.values()).sort((a, b) => a.t - b.t);
      const avg = new Map();
      sums.forEach((v, k) => avg.set(k, v.count ? v.sum / v.count : 0));
      return { periods, cells, avg, maxSales };
    });
  }

  // ---- fetch: Sales + Profit by Category x Sub-Category ----------------------
  function fetchSubcatPerf(ds, { region, dateSel } = {}) {
    return query(
      ds,
      [
        { fieldCaption: 'Category' },
        { fieldCaption: 'Sub-Category' },
        { fieldCaption: 'Sales', function: 'SUM', fieldAlias: 'Sales' },
        { fieldCaption: 'Profit', function: 'SUM', fieldAlias: 'Profit' },
      ],
      regionFilters(region).concat(dateFilters(dateSel)),
    ).then((rows) => {
      const items = [];
      let maxSales = 0;
      rows.forEach((r) => {
        const category = r.Category;
        const subCategory = r['Sub-Category'];
        if (category == null || subCategory == null) return;
        const sales = num(getVal(r, 'Sales', 'SUM(Sales)'));
        const profit = num(getVal(r, 'Profit', 'SUM(Profit)'));
        if (sales > maxSales) maxSales = sales;
        items.push({ category, subCategory, sales, profit, ratio: sales ? profit / sales : 0 });
      });
      return { items, maxSales };
    });
  }

  // ---- Panel 1: one bar-in-bar cell (actual Sales vs the period-average rail) -
  function PerfCell(cellW, xOf, sales, avgSales, onOver, onOut) {
    const above = sales >= avgSales;
    const barColor = above ? 'var(--div-pos)' : 'var(--div-neg)';
    const barW = Math.max(0, xOf(sales));
    const tickX = Math.max(0, xOf(avgSales));
    return svg(
      'svg',
      {
        class: 'perf-bar-svg',
        width: cellW,
        height: ROW_H,
        viewBox: `0 0 ${cellW} ${ROW_H}`,
        onPointerEnter: onOver,
        onPointerMove: onOver,
        onPointerLeave: onOut,
      },
      svg('rect', { class: 'perf-rail', x: 0, y: 3, width: cellW - PAD_R, height: ROW_H - 6 }),
      svg('rect', {
        class: 'perf-bar',
        x: 0,
        y: 5,
        width: barW,
        height: ROW_H - 10,
        fill: barColor,
      }),
      svg('line', { class: 'perf-tick', x1: tickX, x2: tickX, y1: 1, y2: ROW_H - 1 }),
    );
  }

  function PerformanceBarChart(data, viz) {
    const wrap = h('div', { class: 'perf-chart' });

    function over(e, period, seg, cat, sales, profit, avgSales) {
      const above = sales >= avgSales;
      viz.showTip(
        frag(
          h(
            'div',
            { class: 'tip-head' },
            `${MONTH_NAMES[period.month]} ${period.year} · ${cat} · ${seg}`,
          ),
          TipRow({ colorVar: '--series-sales', label: 'Sales', value: fmtUSD0.format(sales) }),
          TipRow({ colorVar: '--series-profit', label: 'Profit', value: fmtUSD0.format(profit) }),
          TipRow({ label: 'Profit ratio', value: fmtPct(sales ? profit / sales : 0, 1) }),
          TipRow({ label: 'Period avg', value: fmtUSD0.format(avgSales) }),
          TipRow({ label: above ? 'Above average' : 'Below average', value: '' }),
        ),
        e.clientX,
        e.clientY,
      );
    }

    function render(width) {
      clear(wrap);
      const cellW = Math.max(
        120,
        Math.floor(((width || 720) - LABEL_W - SEG_W) / CATEGORIES.length),
      );
      const step = niceStep(data.maxSales, 5) || 1000;
      const domainMax = Math.max(step, Math.ceil(data.maxSales / step) * step);
      const xOf = (v) => (Math.min(v, domainMax) / domainMax) * (cellW - PAD_R);

      const ticks = [];
      for (let v = 0; v <= domainMax + 0.5; v += step) ticks.push(v);

      wrap.appendChild(
        h(
          'div',
          { class: 'perf-head' },
          h('div', { class: 'perf-head-spacer', style: { width: LABEL_W + SEG_W + 'px' } }),
          CATEGORIES.map((cat) =>
            h('div', { class: 'perf-col-head', style: { width: cellW + 'px' } }, cat),
          ),
        ),
      );

      data.periods.forEach((period, pi) => {
        wrap.appendChild(
          h(
            'div',
            { class: 'perf-group' + (pi % 2 ? ' perf-group-alt' : '') },
            h(
              'div',
              { class: 'perf-month', style: { width: LABEL_W + 'px' } },
              `${MONTH_NAMES[period.month]} ${period.year}`,
            ),
            h(
              'div',
              { class: 'perf-seg-rows' },
              SEGMENTS.map((seg) =>
                h(
                  'div',
                  { class: 'perf-row' },
                  h('div', { class: 'perf-seg-label', style: { width: SEG_W + 'px' } }, seg),
                  CATEGORIES.map((cat) => {
                    const cell = data.cells.get(period.t + '|' + cat + '|' + seg);
                    const sales = cell ? cell.sales : 0;
                    const profit = cell ? cell.profit : 0;
                    const avgSales = data.avg.get(cat + '|' + seg) || 0;
                    return h(
                      'div',
                      { class: 'perf-cell', style: { width: cellW + 'px' } },
                      PerfCell(
                        cellW,
                        xOf,
                        sales,
                        avgSales,
                        (e) => over(e, period, seg, cat, sales, profit, avgSales),
                        () => viz.hideTip(),
                      ),
                    );
                  }),
                ),
              ),
            ),
          ),
        );
      });

      wrap.appendChild(
        h(
          'div',
          { class: 'perf-axis-row' },
          h('div', { class: 'perf-head-spacer', style: { width: LABEL_W + SEG_W + 'px' } }),
          CATEGORIES.map(() =>
            h(
              'div',
              { class: 'perf-axis-cell', style: { width: cellW + 'px' } },
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
              ),
            ),
          ),
        ),
      );
    }

    const disconnect = observeWidth(wrap, render);
    return { el: wrap, disconnect };
  }

  function AvgLegend() {
    return h(
      'div',
      { class: 'perf-legend-swatches' },
      h(
        'span',
        { class: 'perf-swatch-item' },
        h('span', { class: 'perf-swatch', style: { background: 'var(--div-pos)' } }),
        'Above period avg.',
      ),
      h(
        'span',
        { class: 'perf-swatch-item' },
        h('span', { class: 'perf-swatch', style: { background: 'var(--div-neg)' } }),
        'Below period avg.',
      ),
    );
  }

  // ---- Panel 2: ranked Sub-Category Sales, colored by profit ratio -----------
  function SubCategoryRanked(data, vizRootEl, viz) {
    const color = makeRatioColor(vizRootEl);
    const wrap = h('div', { class: 'perf-rank' });

    function over(e, item) {
      viz.showTip(
        frag(
          h('div', { class: 'tip-head' }, `${item.category} · ${item.subCategory}`),
          TipRow({ colorVar: '--series-sales', label: 'Sales', value: fmtUSD0.format(item.sales) }),
          TipRow({
            colorVar: '--series-profit',
            label: 'Profit',
            value: fmtUSD0.format(item.profit),
          }),
          TipRow({ label: 'Profit ratio', value: fmtPct(item.ratio, 1) }),
        ),
        e.clientX,
        e.clientY,
      );
    }

    function render(width) {
      clear(wrap);
      const step = niceStep(data.maxSales, 5) || 1000;
      const domainMax = Math.max(step, Math.ceil(data.maxSales / step) * step);
      const plotW = Math.max(160, (width || 640) - RANK_LABEL_W - RANK_VAL_W - 16);
      const xOf = (v) => (Math.min(v, domainMax) / domainMax) * plotW;

      const groups = CATEGORIES.map((cat) => ({
        cat,
        items: data.items.filter((it) => it.category === cat).sort((a, b) => b.sales - a.sales),
      })).filter((g) => g.items.length);

      groups.forEach((g) => {
        wrap.appendChild(
          h(
            'div',
            { class: 'perf-rank-group' },
            h('div', { class: 'perf-rank-cat' }, g.cat),
            g.items.map((it) =>
              h(
                'div',
                { class: 'perf-rank-row' },
                h(
                  'div',
                  { class: 'perf-rank-label', style: { width: RANK_LABEL_W + 'px' } },
                  it.subCategory,
                ),
                svg(
                  'svg',
                  {
                    class: 'perf-rank-svg',
                    width: plotW,
                    height: RANK_BAR_H,
                    viewBox: `0 0 ${plotW} ${RANK_BAR_H}`,
                    onPointerEnter: (e) => over(e, it),
                    onPointerMove: (e) => over(e, it),
                    onPointerLeave: () => viz.hideTip(),
                  },
                  svg('rect', {
                    x: 0,
                    y: 2,
                    width: xOf(it.sales),
                    height: RANK_BAR_H - 4,
                    fill: color(it.ratio),
                    rx: 2,
                  }),
                ),
                h(
                  'div',
                  { class: 'perf-rank-val', style: { width: RANK_VAL_W + 'px' } },
                  fmtUSD0.format(it.sales),
                ),
              ),
            ),
          ),
        );
      });
    }

    const disconnect = observeWidth(wrap, render);
    return { el: wrap, disconnect };
  }

  function RatioLegend() {
    return h(
      'div',
      { class: 'perf-ratio-legend' },
      h('span', { class: 'perf-ratio-legend-lbl' }, 'Profit Ratio'),
      h('span', { class: 'perf-ratio-legend-bar' }),
      h(
        'span',
        { class: 'perf-ratio-legend-ticks' },
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

  function PerformanceView({ ds, viz }) {
    const vizRootEl = viz.vizRootEl;
    let region = null,
      dateSel = null;
    let token = 0;
    let perfDc = null,
      rankDc = null;

    const perfSlot = h('div', null, muted('Loading…'));
    const rankSlot = h('div', null, muted('Loading…'));

    const el = h(
      'div',
      { style: { display: 'contents' } },
      h(
        'section',
        { class: 'card' },
        h(
          'div',
          { class: 'panel-head' },
          h('h2', { class: 'card-title' }, 'Sales Performance vs Period Average'),
          AvgLegend(),
        ),
        perfSlot,
      ),
      h(
        'section',
        { class: 'card' },
        h(
          'div',
          { class: 'panel-head' },
          h('h2', { class: 'card-title' }, 'Sub-Category Performance'),
          RatioLegend(),
        ),
        rankSlot,
      ),
    );

    function clearPerf() {
      if (perfDc) {
        perfDc();
        perfDc = null;
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
      const p1p = fetchMonthlyPerf(ds, { region, dateSel })
        .then((d) => {
          if (my !== token) return;
          clearPerf();
          if (d.periods.length) {
            const c = PerformanceBarChart(d, viz);
            perfDc = c.disconnect;
            setBody(perfSlot, c.el);
          } else setBody(perfSlot, muted('No data in current scope.'));
        })
        .catch((e) => {
          if (my === token) {
            clearPerf();
            setBody(perfSlot, errP('Could not load performance: ' + errMsg(e)));
          }
        });
      const p2p = fetchSubcatPerf(ds, { region, dateSel })
        .then((d) => {
          if (my !== token) return;
          clearRank();
          if (d.items.length) {
            const c = SubCategoryRanked(d, vizRootEl, viz);
            rankDc = c.disconnect;
            setBody(rankSlot, c.el);
          } else setBody(rankSlot, muted('No data in current scope.'));
        })
        .catch((e) => {
          if (my === token) {
            clearRank();
            setBody(rankSlot, errP('Could not load sub-category performance: ' + errMsg(e)));
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
        clearPerf();
        clearRank();
      },
    };
  }

  Object.assign(SV, { PerformanceView });
})((window.SV = window.SV || {}));
