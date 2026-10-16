(function (SV) {
  'use strict';
  var {
    MONTH_NAMES,
    TipRow,
    clear,
    fmtUSD0,
    fmtUSDk,
    frag,
    h,
    niceStep,
    observeWidth,
    selectionLabel,
    svg,
  } = SV;
  // Layout constants (viewBox units).
  const LABEL_W = 96;
  const PAD_L = 44;
  const PAD_R = 10;
  const FACET_H = 78;
  const AXIS_H = 20;
  const INNER_H = FACET_H - 8;

  // Explicit M/L path for a measure's line, plus a baseline-closed area. Separators
  // between every coordinate so adjacent numbers never merge into an ambiguous one.
  function seriesPath(pts, getter, xOf, yOf) {
    let line = '';
    pts.forEach((p, i) => {
      line += (i === 0 ? 'M' : 'L') + xOf(p.t).toFixed(1) + ' ' + yOf(getter(p)).toFixed(1) + ' ';
    });
    const x0 = xOf(pts[0].t);
    const xN = xOf(pts[pts.length - 1].t);
    const yb = yOf(0);
    let area = 'M' + x0.toFixed(1) + ' ' + yb.toFixed(1) + ' ';
    pts.forEach((p) => {
      area += 'L' + xOf(p.t).toFixed(1) + ' ' + yOf(getter(p)).toFixed(1) + ' ';
    });
    area += 'L' + xN.toFixed(1) + ' ' + yb.toFixed(1) + ' Z';
    return { line: line.trim(), area };
  }

  // One facet row: Sales (blue) + Profit (orange) area/line over the shared domain,
  // with a crosshair + dots that track the nearest month on hover. Hover is local
  // and imperative — moving the pointer touches only this facet's crosshair/dots.
  function Facet({ viz, facet, pts, cellW, plotW, xOf, yOf, yTicks, domainMin }) {
    const sales = seriesPath(pts, (p) => p.sales, xOf, yOf);
    const profit = seriesPath(pts, (p) => p.profit, xOf, yOf);

    const grid = yTicks.map((v) => {
      const y = yOf(v);
      const gridCls = v === 0 && domainMin < 0 ? 'grid zero' : 'grid';
      return svg(
        'g',
        null,
        svg('line', { x1: PAD_L, y1: y, x2: PAD_L + plotW, y2: y, class: gridCls }),
        svg(
          'text',
          { x: PAD_L - 6, y: y + 3, class: 'y-lbl', 'text-anchor': 'end' },
          v === 0 ? '$0' : fmtUSDk(v),
        ),
      );
    });

    const crosshair = svg('line', {
      class: 'crosshair',
      x1: -10,
      x2: -10,
      y1: 4,
      y2: 4 + INNER_H,
      style: { display: 'none' },
    });
    const dotSales = svg('circle', {
      class: 'cross-dot',
      r: 3.2,
      fill: 'var(--series-sales)',
      cx: -10,
      cy: 0,
      style: { display: 'none' },
    });
    const dotProfit = svg('circle', {
      class: 'cross-dot',
      r: 3.2,
      fill: 'var(--series-profit)',
      cx: -10,
      cy: 0,
      style: { display: 'none' },
    });

    let svgEl;
    function nearest(clientX) {
      const box = svgEl.getBoundingClientRect();
      const svgX = ((clientX - box.left) / box.width) * cellW; // client px → viewBox units
      let best = pts[0];
      let bd = Infinity;
      pts.forEach((p) => {
        const dx = Math.abs(xOf(p.t) - svgX);
        if (dx < bd) {
          bd = dx;
          best = p;
        }
      });
      return best;
    }
    function move(e) {
      const p = nearest(e.clientX);
      const cx = xOf(p.t);
      crosshair.setAttribute('x1', cx);
      crosshair.setAttribute('x2', cx);
      crosshair.style.display = '';
      dotSales.setAttribute('cx', cx);
      dotSales.setAttribute('cy', yOf(p.sales));
      dotSales.style.display = '';
      dotProfit.setAttribute('cx', cx);
      dotProfit.setAttribute('cy', yOf(p.profit));
      dotProfit.style.display = '';
      const dt = new Date(p.t);
      viz.showTip(
        frag(
          h(
            'div',
            { class: 'tip-head' },
            `${facet} · ${MONTH_NAMES[dt.getMonth()]} ${dt.getFullYear()}`,
          ),
          TipRow({ colorVar: '--series-sales', label: 'Sales', value: fmtUSD0.format(p.sales) }),
          TipRow({ colorVar: '--series-profit', label: 'Profit', value: fmtUSD0.format(p.profit) }),
        ),
        e.clientX,
        e.clientY,
      );
    }
    function leave() {
      crosshair.style.display = 'none';
      dotSales.style.display = 'none';
      dotProfit.style.display = 'none';
      viz.hideTip();
    }

    svgEl = svg(
      'svg',
      { class: 'facet-svg', width: cellW, height: FACET_H, viewBox: `0 0 ${cellW} ${FACET_H}` },
      grid,
      svg('path', { d: sales.area, class: 'area area-sales' }),
      svg('path', { d: profit.area, class: 'area area-profit' }),
      svg('path', { d: sales.line, class: 'line line-sales' }),
      svg('path', { d: profit.line, class: 'line line-profit' }),
      crosshair,
      dotSales,
      dotProfit,
      svg('rect', {
        x: PAD_L,
        y: 0,
        width: plotW,
        height: FACET_H,
        fill: 'transparent',
        class: 'hit',
        onPointerMove: move,
        onPointerLeave: leave,
      }),
    );

    return h(
      'div',
      { class: 'facet' },
      h('div', { class: 'facet-label' }, facet),
      h('div', { class: 'plot-cell' }, svgEl),
    );
  }

  // A monthly small-multiple panel: header (title + current scope + series legend)
  // and a stack of facets sharing one step-aligned y-domain (dipping below zero for
  // loss months) and one year axis. Reflows on container resize. update(data,
  // selectedNames) swaps the data; selectedNames is the map selection (array).
  function MonthlyPanel({ viz, title }) {
    let data = null;
    let selectedNames = [];

    const scopeStrong = h('strong', null, 'All');
    const head = h(
      'div',
      { class: 'panel-head' },
      h('h2', { class: 'card-title' }, title + ' — States/Provinces: ', scopeStrong),
      h(
        'div',
        { class: 'series-legend' },
        h(
          'span',
          { class: 'series-item' },
          h('span', { class: 'series-swatch', style: { background: 'var(--series-sales)' } }),
          h('span', null, 'Sales'),
        ),
        h(
          'span',
          { class: 'series-item' },
          h('span', { class: 'series-swatch', style: { background: 'var(--series-profit)' } }),
          h('span', null, 'Profit'),
        ),
      ),
    );

    const facetsEl = h('div', { class: 'facets' });
    const root = h('section', { class: 'card panel' }, head, facetsEl);
    let emptyMsg = null;

    function setEmpty(on) {
      if (on && !emptyMsg) {
        emptyMsg = h('p', { class: 'muted' }, 'No data in current scope.');
        root.appendChild(emptyMsg);
      } else if (!on && emptyMsg) {
        emptyMsg.remove();
        emptyMsg = null;
      }
    }

    function render() {
      clear(facetsEl);
      if (!data || !data.order.length) {
        setEmpty(true);
        return;
      }
      setEmpty(false);

      const width = facetsEl.clientWidth;
      const cellW = Math.max(160, width - LABEL_W);
      const plotW = cellW - PAD_L - PAD_R;

      // step-aligned domain spanning Sales (≥0) and any negative Profit
      const step = niceStep(data.maxSales, 3);
      let domainMax = Math.ceil(data.maxSales / step) * step;
      if (domainMax <= 0) domainMax = step;
      const vMin = Math.min(0, data.minProfit || 0);
      const domainMin = vMin < 0 ? Math.floor(vMin / step) * step : 0;
      const domainSpan = Math.max(step, domainMax - domainMin);
      const yTicks = [];
      for (let v = domainMin; v <= domainMax + 0.5; v += step) yTicks.push(v);

      const span = Math.max(1, data.maxT - data.minT);
      const xOf = (t) => PAD_L + ((t - data.minT) / span) * plotW;
      const yOf = (val) => 4 + INNER_H - ((val - domainMin) / domainSpan) * INNER_H;

      const y0 = new Date(data.minT).getFullYear();
      const yN = new Date(data.maxT).getFullYear() + 1;
      const years = [];
      for (let yr = y0; yr <= yN; yr++) years.push(yr);

      data.order.forEach((facet) => {
        facetsEl.appendChild(
          Facet({
            viz,
            facet,
            pts: data.facets[facet],
            cellW,
            plotW,
            xOf,
            yOf,
            yTicks,
            domainMin,
          }),
        );
      });

      // shared x-axis (years), aligned to the plot area
      const axisTicks = years.map((yr) => {
        const tx = xOf(new Date(yr, 0, 1).getTime());
        if (tx < PAD_L - 2 || tx > PAD_L + plotW + 2) return null;
        return svg(
          'g',
          null,
          svg('line', { x1: tx, y1: 0, x2: tx, y2: 4, class: 'grid' }),
          svg('text', { x: tx, y: 14, class: 'x-lbl', 'text-anchor': 'middle' }, yr),
        );
      });
      facetsEl.appendChild(
        h(
          'div',
          { class: 'facet axis-row' },
          h('div', { class: 'facet-label' }),
          h(
            'div',
            { class: 'plot-cell' },
            svg(
              'svg',
              {
                class: 'axis-svg',
                width: cellW,
                height: AXIS_H,
                viewBox: `0 0 ${cellW} ${AXIS_H}`,
              },
              axisTicks,
            ),
          ),
        ),
      );
    }

    const disconnect = observeWidth(facetsEl, render);

    return {
      el: root,
      update(d, sel) {
        data = d;
        selectedNames = sel || [];
        scopeStrong.textContent = selectedNames.length ? selectionLabel(selectedNames) : 'All';
        render();
      },
      destroy() {
        disconnect();
      },
    };
  }

  Object.assign(SV, { MonthlyPanel });
})((window.SV = window.SV || {}));
