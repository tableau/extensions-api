(function (SV) {
  'use strict';
  var { REGIONS, h } = SV;
  // Region scope selector — "All" (null) plus the four regions. Scopes the whole
  // view; sits in the filter row above the content it affects. onChange receives
  // the region name or null for All.
  function RegionFilter(region, onChange) {
    const select = h(
      'select',
      {
        class: 'filter-select',
        onChange: (e) => onChange(e.target.value || null),
      },
      h('option', { value: '' }, 'All'),
      REGIONS.map((r) => h('option', { value: r }, r)),
    );
    select.value = region || '';
    return h('label', { class: 'filter' }, h('span', { class: 'filter-label' }, 'Region'), select);
  }

  Object.assign(SV, { RegionFilter });
})((window.SV = window.SV || {}));
