(function (SV) {
  'use strict';
  var { fmtInt, fmtPct, fmtUSD0, fmtUSD2, h } = SV;
  // Seven headline KPIs, in fixed order. Before data arrives (or when a value is
  // missing) each tile shows an em dash rather than an empty box.
  const LABELS = [
    'Sales',
    'Profit',
    'Profit Ratio',
    'Profit per Order',
    'Sales per Customer',
    'Avg. Discount',
    'Quantity',
  ];

  function values(k) {
    return [
      fmtUSD0.format(k.sales),
      fmtUSD0.format(k.profit),
      fmtPct(k.profitRatio, 1),
      fmtUSD2.format(k.profitPerOrder),
      fmtUSD2.format(k.salesPerCustomer),
      fmtPct(k.discount, 2),
      fmtInt.format(k.quantity),
    ];
  }

  // Returns the .kpis grid, or a .error paragraph on failure. Callers swap the
  // whole node when data changes.
  function KpiRow(kpis, error) {
    if (error) return h('p', { class: 'error' }, 'Could not load KPIs: ' + error);
    const vals = kpis ? values(kpis) : LABELS.map(() => '—');
    return h(
      'div',
      { class: 'kpis' },
      LABELS.map((label, i) =>
        h(
          'div',
          { class: 'kpi' },
          h('div', { class: 'kpi-label' }, label),
          h('div', { class: 'kpi-value' }, vals[i]),
        ),
      ),
    );
  }

  Object.assign(SV, { KpiRow });
})((window.SV = window.SV || {}));
