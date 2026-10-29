(function (SV) {
  'use strict';
  var { GEO, TipRow, fmtPct, fmtUSD0, frag, h, makeRatioColor, svg } = SV;
  // Profit-Ratio choropleth over pre-projected Albers-USA state paths. Each state
  // is filled by the diverging ramp on its profit ratio; states with no data in
  // the current scope use the no-data token. Hovering shows a tooltip; clicking or
  // pressing Enter/Space toggles that state in the panel filter (onToggle).
  //
  // The paths are created ONCE and repainted in place (fill + class + aria) so a
  // focused/clicked state keeps its focus. Hover is imperative too — only the two
  // affected paths restyle, never the whole map.
  function ChoroplethMap({ viz, onToggle }) {
    let data = null;
    let selSet = new Set();
    let hovered = null;

    if (!GEO || !GEO.states) {
      return {
        el: h('p', { class: 'muted' }, 'Map geometry unavailable.'),
        setData() {},
        setSelection() {},
      };
    }

    const records = new Map(); // name -> { st, path }

    function classFor(name) {
      const d = data ? data[name] : null;
      const isSel = selSet.has(name);
      return (
        'state' +
        (d ? '' : ' nodata') +
        (name === hovered ? ' is-hover' : '') +
        (isSel ? ' is-selected' : '') +
        (selSet.size && !isSel ? ' is-dim' : '')
      );
    }

    // Repaint one state's fill + class + aria against the current data/selection.
    function paint(name, color) {
      const rec = records.get(name);
      if (!rec) return;
      const d = data ? data[name] : null;
      rec.path.setAttribute('class', classFor(name));
      rec.path.setAttribute('fill', d ? color(d.ratio) : 'var(--state-nodata)');
      rec.path.setAttribute(
        'aria-label',
        rec.st.name + (d ? ', profit ratio ' + fmtPct(d.ratio, 1) : ', no data'),
      );
    }
    function paintAll() {
      const color = makeRatioColor(viz.vizRootEl);
      for (const name of records.keys()) paint(name, color);
    }

    function over(e, st) {
      const d = data ? data[st.name] : null;
      const prev = hovered;
      hovered = st.name;
      const color = makeRatioColor(viz.vizRootEl);
      if (prev && prev !== st.name) paint(prev, color); // un-hover the previous state
      paint(st.name, color);

      const content = frag(
        h('div', { class: 'tip-head' }, st.name),
        d
          ? frag(
              TipRow({
                colorVar: '--series-sales',
                label: 'Sales',
                value: fmtUSD0.format(d.sales),
              }),
              TipRow({
                colorVar: '--series-profit',
                label: 'Profit',
                value: fmtUSD0.format(d.profit),
              }),
              TipRow({ label: 'Profit ratio', value: fmtPct(d.ratio, 1) }),
            )
          : h('div', { class: 'tip-lbl' }, 'No sales in current scope'),
      );
      // focus events carry no clientX/Y — fall back to the state's own box
      const box = e.currentTarget.getBoundingClientRect();
      const cx = e.clientX != null ? e.clientX : box.left + box.width / 2;
      const cy = e.clientY != null ? e.clientY : box.top;
      viz.showTip(content, cx, cy);
    }
    function out() {
      const prev = hovered;
      hovered = null;
      if (prev) paint(prev, makeRatioColor(viz.vizRootEl));
      viz.hideTip();
    }

    const paths = GEO.states.map((st) => {
      const path = svg('path', {
        d: st.d,
        class: 'state nodata',
        fill: 'var(--state-nodata)',
        tabindex: 0,
        role: 'button',
        'aria-label': st.name + ', no data',
        onPointerEnter: (e) => over(e, st),
        onPointerMove: (e) => over(e, st),
        onPointerLeave: out,
        onFocus: (e) => over(e, st),
        onBlur: out,
        onClick: () => onToggle(st.name),
        onKeyDown: (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle(st.name);
          }
        },
      });
      records.set(st.name, { st, path });
      return path;
    });

    const el = svg(
      'svg',
      {
        class: 'map-svg',
        viewBox: GEO.viewBox,
        preserveAspectRatio: 'xMidYMid meet',
        role: 'group',
        'aria-label': 'Profit ratio by state',
      },
      paths,
    );

    return {
      el,
      setData(d, sel) {
        data = d;
        selSet = new Set(sel);
        paintAll();
      },
      setSelection(sel) {
        selSet = new Set(sel);
        paintAll();
      },
    };
  }

  Object.assign(SV, { ChoroplethMap });
})((window.SV = window.SV || {}));
