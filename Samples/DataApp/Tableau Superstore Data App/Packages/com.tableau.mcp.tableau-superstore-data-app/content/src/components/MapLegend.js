(function (SV) {
  'use strict';
  var { h } = SV;
  // Right-rail legend for the choropleth: the diverging red→gray→blue ramp with
  // ±50% ticks and a note on how the fill is computed. Static — no data in, no
  // state; the ramp is a pure CSS gradient built from the palette tokens.
  function MapLegend() {
    return h(
      'aside',
      { class: 'rail' },
      h(
        'div',
        { class: 'legend' },
        h('div', { class: 'legend-title' }, 'Profit Ratio'),
        h('div', {
          class: 'legend-bar',
          style: {
            background: 'linear-gradient(to right, var(--div-neg), var(--div-mid), var(--div-pos))',
          },
        }),
        h(
          'div',
          { class: 'legend-ticks' },
          h('span', null, '-50%'),
          h('span', null, '0%'),
          h('span', null, '+50%'),
        ),
        h(
          'p',
          { class: 'legend-note' },
          'Filled by SUM(Profit) ÷ SUM(Sales) per state. Click states to filter the monthly charts.',
        ),
      ),
    );
  }

  Object.assign(SV, { MapLegend });
})((window.SV = window.SV || {}));
