// Fixed facet + filter orders. Categorical identity is assigned in a stable
// order, never cycled, so a series keeps the same color in every view.
(function (SV) {
  'use strict';
  const SEGMENTS = ['Consumer', 'Corporate', 'Home Office'];
  const CATEGORIES = ['Furniture', 'Office Supplies', 'Technology'];
  const REGIONS = ['Central', 'East', 'South', 'West'];

  // Sub-Categories in the canonical Superstore order, grouped under their Category.
  // Drives the row order of the Product tab's per-product strip plot.
  const SUB_CATEGORIES = {
    Furniture: ['Bookcases', 'Chairs', 'Furnishings', 'Tables'],
    'Office Supplies': [
      'Appliances',
      'Art',
      'Binders',
      'Envelopes',
      'Fasteners',
      'Labels',
      'Paper',
      'Storage',
      'Supplies',
    ],
    Technology: ['Accessories', 'Copiers', 'Machines', 'Phones'],
  };

  const MONTH_NAMES = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  Object.assign(SV, { SEGMENTS, CATEGORIES, REGIONS, SUB_CATEGORIES, MONTH_NAMES });
})((window.SV = window.SV || {}));
