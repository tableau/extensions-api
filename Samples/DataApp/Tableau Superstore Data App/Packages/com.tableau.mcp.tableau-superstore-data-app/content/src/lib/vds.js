// ============================================================================
// VizQL Data Service query plumbing, filter builders, and the shared fetchers
// (Overview and Product tabs; the other tabs compose query() + the filter
// builders directly). These are framework-agnostic: each takes the live
// datasource handle plus the current scope ({ region, states, dateSel }) and
// resolves to plain data objects the views render. No DOM.
//
// ds.queryAsync takes the VDS shape { fields, filters }. Aggregated columns are
// aliased to stable keys; getVal falls back to the "FUNC(Caption)" key VDS uses
// when an alias is absent.
// ============================================================================
(function (SV) {
  'use strict';
  var { CATEGORIES } = SV;
  /**
   * Reads an aggregated column from a VDS row.
   * @param {object} row
   * @param {string} alias The `fieldAlias` the query set.
   * @param {string} [funcCap] The key VDS uses without an alias, e.g. `SUM(Sales)`.
   * @returns {*} The value, or null if neither key is present.
   */
  function getVal(row, alias, funcCap) {
    if (row[alias] != null) return row[alias];
    if (funcCap != null && row[funcCap] != null) return row[funcCap];
    return null;
  }
  /**
   * Coerces a VDS value to a number.
   * @param {*} v
   * @returns {number} 0 for null, missing, or non-numeric values.
   */
  const num = (v) => Number(v) || 0;

  /**
   * Region scope as VDS filters.
   * @param {string | null} region A Region name, or null for all regions.
   * @returns {object[]} One SET filter, or [] when unscoped.
   */
  function regionFilters(region) {
    return region
      ? [{ field: { fieldCaption: 'Region' }, filterType: 'SET', values: [region] }]
      : [];
  }
  /**
   * Map-selection scope as VDS filters.
   * @param {string[]} [states] Selected state names.
   * @returns {object[]} One SET filter, or [] when nothing is selected.
   */
  function stateFilters(states) {
    const names = states || [];
    return names.length
      ? [{ field: { fieldCaption: 'State/Province' }, filterType: 'SET', values: names }]
      : [];
  }
  /**
   * Order Date scope as VDS filters: a QUANTITATIVE_DATE RANGE filter, the same
   * wire shape ds.queryAsync accepts. A null or partial selection means "full
   * range", so no filter is added and the query is unscoped by date.
   * @param {{ minDate: string, maxDate: string } | null} dateSel Bounds as 'YYYY-MM-DD'.
   * @returns {object[]}
   */
  function dateFilters(dateSel) {
    if (!dateSel || !dateSel.minDate || !dateSel.maxDate) return [];
    return [
      {
        field: { fieldCaption: 'Order Date' },
        filterType: 'QUANTITATIVE_DATE',
        quantitativeFilterType: 'RANGE',
        minDate: dateSel.minDate,
        maxDate: dateSel.maxDate,
      },
    ];
  }
  /**
   * Normalizes whatever VDS returns for a date column to a plain 'YYYY-MM-DD'
   * string with no timezone drift: the leading date if already ISO-like, else the
   * local Y/M/D of a parsed Date.
   * @param {*} x
   * @returns {string | null} null if `x` isn't a date.
   */
  function isoDate(x) {
    if (x == null) return null;
    const m = String(x).match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (m) return `${m[1]}-${m[2]}-${m[3]}`;
    const d = new Date(x);
    if (isNaN(d)) return null;
    const p = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }
  /**
   * Runs one VDS query through the Extensions API.
   * @param {{ queryAsync: Function }} ds The Tableau datasource.
   * @param {object[]} fields VDS fields: `{ fieldCaption, function?, fieldAlias? }`.
   * @param {object[]} [filters] VDS filters.
   * @returns {Promise<object[]>} The result rows ([] if the response has none).
   */
  function query(ds, fields, filters) {
    return ds
      .queryAsync({ fields, filters: filters || [] })
      .then((res) => (res && Array.isArray(res.data) ? res.data : []));
  }

  // ---- KPI headline row -------------------------------------------------------
  /**
   * Headline KPIs for the current scope.
   * @param {{ queryAsync: Function }} ds
   * @param {{ region?: string, dateSel?: object }} [scope]
   * @returns {Promise<{ sales: number, profit: number, quantity: number, discount: number,
   *   orders: number, customers: number, profitRatio: number, profitPerOrder: number,
   *   salesPerCustomer: number }>}
   */
  function fetchKpis(ds, { region, dateSel } = {}) {
    return query(
      ds,
      [
        { fieldCaption: 'Sales', function: 'SUM', fieldAlias: 'Sales' },
        { fieldCaption: 'Profit', function: 'SUM', fieldAlias: 'Profit' },
        { fieldCaption: 'Quantity', function: 'SUM', fieldAlias: 'Qty' },
        { fieldCaption: 'Discount', function: 'AVG', fieldAlias: 'Discount' },
        { fieldCaption: 'Order ID', function: 'COUNTD', fieldAlias: 'Orders' },
        { fieldCaption: 'Customer Name', function: 'COUNTD', fieldAlias: 'Customers' },
      ],
      regionFilters(region).concat(dateFilters(dateSel)),
    ).then((rows) => {
      const r = rows[0] || {};
      const sales = num(getVal(r, 'Sales', 'SUM(Sales)'));
      const profit = num(getVal(r, 'Profit', 'SUM(Profit)'));
      const qty = num(getVal(r, 'Qty', 'SUM(Quantity)'));
      const disc = num(getVal(r, 'Discount', 'AVG(Discount)'));
      const orders = num(getVal(r, 'Orders', 'COUNTD(Order ID)'));
      const customers = num(getVal(r, 'Customers', 'COUNTD(Customer Name)'));
      return {
        sales,
        profit,
        quantity: qty,
        discount: disc,
        orders,
        customers,
        profitRatio: sales ? profit / sales : 0,
        profitPerOrder: orders ? profit / orders : 0,
        salesPerCustomer: customers ? sales / customers : 0,
      };
    });
  }

  // ---- per-state rollup for the choropleth ------------------------------------
  /**
   * Per-state Sales and Profit for the choropleth.
   * @param {{ queryAsync: Function }} ds
   * @param {{ region?: string, dateSel?: object }} [scope]
   * @returns {Promise<Object<string, { name: string, sales: number, profit: number,
   *   ratio: number }>>} Keyed by state name.
   */
  function fetchMap(ds, { region, dateSel } = {}) {
    return query(
      ds,
      [
        { fieldCaption: 'State/Province' },
        { fieldCaption: 'Sales', function: 'SUM', fieldAlias: 'Sales' },
        { fieldCaption: 'Profit', function: 'SUM', fieldAlias: 'Profit' },
      ],
      regionFilters(region).concat(dateFilters(dateSel)),
    ).then((rows) => {
      const byState = Object.create(null);
      rows.forEach((r) => {
        const name = r['State/Province'];
        if (name == null) return;
        const sales = num(getVal(r, 'Sales', 'SUM(Sales)'));
        const profit = num(getVal(r, 'Profit', 'SUM(Profit)'));
        byState[name] = { name, sales, profit, ratio: sales ? profit / sales : 0 };
      });
      return byState;
    });
  }

  // ---- monthly Sales + Profit grouped by a facet dimension --------------------
  /**
   * Monthly Sales and Profit grouped by a facet dimension (the Overview's small
   * multiples).
   * @param {{ queryAsync: Function }} ds
   * @param {{ region?: string, states?: string[], dateSel?: object }} [scope]
   * @param {string} dimCaption The facet field, e.g. 'Segment' or 'Category'.
   * @param {string[]} facetOrder Preferred facet order; unlisted facets follow it.
   * @returns {Promise<{ order: string[], facets: Object<string, { t: number, sales: number,
   *   profit: number }[]>, minT: number, maxT: number, maxSales: number, minProfit: number }>}
   *   Each facet's points are sorted by month (`t`, in ms). `minProfit` is ≤ 0 so
   *   the y-domain reaches loss months.
   */
  function fetchMonthly(ds, { region, states, dateSel } = {}, dimCaption, facetOrder) {
    return query(
      ds,
      [
        { fieldCaption: 'Order Date', function: 'TRUNC_MONTH', fieldAlias: 'Month' },
        { fieldCaption: dimCaption },
        { fieldCaption: 'Sales', function: 'SUM', fieldAlias: 'Sales' },
        { fieldCaption: 'Profit', function: 'SUM', fieldAlias: 'Profit' },
      ],
      regionFilters(region).concat(stateFilters(states)).concat(dateFilters(dateSel)),
    ).then((rows) => {
      const facets = Object.create(null);
      let minT = Infinity,
        maxT = -Infinity;
      rows.forEach((r) => {
        const facet = r[dimCaption];
        const mStr = getVal(r, 'Month', 'TRUNC_MONTH(Order Date)');
        if (facet == null || mStr == null) return;
        const t = new Date(mStr).getTime();
        if (isNaN(t)) return;
        if (t < minT) minT = t;
        if (t > maxT) maxT = t;
        (facets[facet] || (facets[facet] = [])).push({
          t,
          sales: num(getVal(r, 'Sales', 'SUM(Sales)')),
          profit: num(getVal(r, 'Profit', 'SUM(Profit)')),
        });
      });
      const order = facetOrder.filter((f) => facets[f]);
      Object.keys(facets).forEach((f) => {
        if (order.indexOf(f) < 0) order.push(f);
      });
      order.forEach((f) => facets[f].sort((a, b) => a.t - b.t));
      // Sales is always ≥0; Profit can go negative (loss months), so track the
      // most-negative profit too — the panel's y-domain must reach below zero or
      // loss months get drawn under the baseline and clipped by the SVG.
      let maxSales = 0,
        minProfit = 0;
      order.forEach((f) => {
        facets[f].forEach((p) => {
          if (p.sales > maxSales) maxSales = p.sales;
          if (p.profit < minProfit) minProfit = p.profit;
        });
      });
      return { order, facets, minT, maxT, maxSales, minProfit };
    });
  }

  // ---- Product tab: Sales by Category × Year × Month (highlight table) --------
  /**
   * Product tab highlight table: one query row per (Category, month), pivoted
   * client-side into Category → Year rows of 12 month cells.
   * @param {{ queryAsync: Function }} ds
   * @param {{ region?: string, dateSel?: object }} [scope]
   * @returns {Promise<{ rows: { category: string, year: number, firstOfCat: boolean,
   *   catSpan: number, cells: ({ sales: number, profit: number } | null)[] }[],
   *   minSales: number, maxSales: number }>} `minSales`/`maxSales` span the whole
   *   table, so the sequential color ramp has a stable domain.
   */
  function fetchCategorySales(ds, { region, dateSel } = {}) {
    return query(
      ds,
      [
        { fieldCaption: 'Category' },
        { fieldCaption: 'Order Date', function: 'TRUNC_MONTH', fieldAlias: 'Month' },
        { fieldCaption: 'Sales', function: 'SUM', fieldAlias: 'Sales' },
        { fieldCaption: 'Profit', function: 'SUM', fieldAlias: 'Profit' },
      ],
      regionFilters(region).concat(dateFilters(dateSel)),
    ).then((rows) => {
      const byCat = Object.create(null); // category -> { year -> [12] cells }
      let minSales = Infinity,
        maxSales = -Infinity;
      rows.forEach((r) => {
        const cat = r.Category;
        const mStr = getVal(r, 'Month', 'TRUNC_MONTH(Order Date)');
        if (cat == null || mStr == null) return;
        const d = new Date(mStr);
        if (isNaN(d)) return;
        const sales = num(getVal(r, 'Sales', 'SUM(Sales)'));
        const profit = num(getVal(r, 'Profit', 'SUM(Profit)'));
        const years = byCat[cat] || (byCat[cat] = Object.create(null));
        const cells = years[d.getFullYear()] || (years[d.getFullYear()] = new Array(12).fill(null));
        cells[d.getMonth()] = { sales, profit };
        if (sales < minSales) minSales = sales;
        if (sales > maxSales) maxSales = sales;
      });
      const cats = CATEGORIES.filter((c) => byCat[c]);
      Object.keys(byCat).forEach((c) => {
        if (cats.indexOf(c) < 0) cats.push(c);
      });
      const out = [];
      cats.forEach((cat) => {
        const years = Object.keys(byCat[cat])
          .map(Number)
          .sort((a, b) => a - b);
        years.forEach((yr, i) => {
          out.push({
            category: cat,
            year: yr,
            firstOfCat: i === 0,
            catSpan: years.length,
            cells: byCat[cat][yr],
          });
        });
      });
      if (!isFinite(minSales)) {
        minSales = 0;
        maxSales = 0;
      }
      return { rows: out, minSales, maxSales };
    });
  }

  // ---- Product tab: per-product Sales + Profit (strip plot) -------------------
  /**
   * Product tab strip plot: one point per (Category, Sub-Category, Segment,
   * Product Name), positioned by Sales and colored by profit ratio.
   * @param {{ queryAsync: Function }} ds
   * @param {{ region?: string, dateSel?: object }} [scope]
   * @returns {Promise<{ pts: { category: string, subCategory: string, segment: string,
   *   name: string, sales: number, profit: number, ratio: number }[], maxSales: number }>}
   *   `maxSales` lets all three Segment columns share one x-domain.
   */
  function fetchProductScatter(ds, { region, dateSel } = {}) {
    return query(
      ds,
      [
        { fieldCaption: 'Category' },
        { fieldCaption: 'Sub-Category' },
        { fieldCaption: 'Segment' },
        { fieldCaption: 'Product Name' },
        { fieldCaption: 'Sales', function: 'SUM', fieldAlias: 'Sales' },
        { fieldCaption: 'Profit', function: 'SUM', fieldAlias: 'Profit' },
      ],
      regionFilters(region).concat(dateFilters(dateSel)),
    ).then((rows) => {
      const pts = [];
      let maxSales = 0;
      rows.forEach((r) => {
        const category = r.Category,
          subCategory = r['Sub-Category'],
          segment = r.Segment;
        if (category == null || subCategory == null || segment == null) return;
        const sales = num(getVal(r, 'Sales', 'SUM(Sales)'));
        const profit = num(getVal(r, 'Profit', 'SUM(Profit)'));
        if (sales > maxSales) maxSales = sales;
        pts.push({
          category,
          subCategory,
          segment,
          name: r['Product Name'],
          sales,
          profit,
          ratio: sales ? profit / sales : 0,
        });
      });
      return { pts, maxSales };
    });
  }

  // ---- Order Date domain (min/max) — seeds the date range slider --------------
  /**
   * The Order Date domain, which seeds the date range slider. Never rejects.
   * @param {{ queryAsync: Function }} ds
   * @returns {Promise<{ min: string, max: string } | null>} 'YYYY-MM-DD' bounds, or
   *   null if unavailable.
   */
  function loadDateRange(ds) {
    return query(
      ds,
      [
        { fieldCaption: 'Order Date', function: 'MIN', fieldAlias: 'MinD' },
        { fieldCaption: 'Order Date', function: 'MAX', fieldAlias: 'MaxD' },
      ],
      [],
    )
      .then((rows) => {
        const r = rows[0] || {};
        const min = isoDate(getVal(r, 'MinD', 'MIN(Order Date)'));
        const max = isoDate(getVal(r, 'MaxD', 'MAX(Order Date)'));
        return min && max ? { min, max } : null;
      })
      .catch(() => null);
  }

  Object.assign(SV, {
    getVal,
    num,
    regionFilters,
    stateFilters,
    dateFilters,
    isoDate,
    query,
    fetchKpis,
    fetchMap,
    fetchMonthly,
    fetchCategorySales,
    fetchProductScatter,
    loadDateRange,
  });
})((window.SV = window.SV || {}));
