(function (SV) {
  'use strict';
  var {
    CATEGORIES,
    ChoroplethMap,
    KpiRow,
    MapLegend,
    MonthlyPanel,
    SEGMENTS,
    clear,
    fetchKpis,
    fetchMap,
    fetchMonthly,
    h,
  } = SV;
  const errMsg = (err) => (err && (err.message || err.errorCode)) || String(err);

  // Profit Ratio filter domain (matches the map legend's ±50%); the ends stay
  // "open" so states beyond ±50% aren't hidden at full range.
  const RATIO_MIN = -0.5,
    RATIO_MAX = 0.5;
  const EPS = 1e-9;

  // Client-side Profit Ratio filter over the map. Thumbs at the domain ends are
  // "open" (no bound that side), so full range shows every state — including any
  // beyond ±50%, which the color ramp clamps but the filter must not hide.
  function visibleMap(mapData, ratioSel) {
    if (!mapData) return mapData;
    const [lo, hi] = ratioSel;
    const loOpen = lo <= RATIO_MIN + EPS;
    const hiOpen = hi >= RATIO_MAX - EPS;
    if (loOpen && hiOpen) return mapData;
    const out = Object.create(null);
    for (const k in mapData) {
      const r = mapData[k].ratio;
      if ((loOpen || r >= lo) && (hiOpen || r <= hi)) out[k] = mapData[k];
    }
    return out;
  }

  // ============================================================================
  // Overview view — the classic "Executive Overview – Profitability" dashboard.
  // Owns the KPI row, the choropleth (region/date scope), and the two monthly
  // panels (region/date + map selection scope). The Profit Ratio filter narrows
  // the map client-side with no refetch. Two cancel tokens: one for KPIs+map
  // (region/date), one for the monthly panels
  // (region/date + selection), so a slower earlier query can't overwrite a newer.
  // ============================================================================
  function OverviewView({ ds, viz, onToggleState, selected: initSel, ratioSel: initRatio }) {
    let region = null,
      dateSel = null;
    let selected = initSel ? initSel.slice() : [];
    let ratioSel = initRatio ? initRatio.slice() : [RATIO_MIN, RATIO_MAX];
    let mapData = null,
      mapErr = null;
    let scopeToken = 0,
      monthlyToken = 0;

    // KPI slot — swapped wholesale (grid ↔ error paragraph).
    let kpiNode = KpiRow(null, null);
    function setKpis(kpis, err) {
      const n = KpiRow(kpis, err);
      kpiNode.replaceWith(n);
      kpiNode = n;
    }

    const map = ChoroplethMap({ viz, onToggle: onToggleState });
    const mapHolder = h('div', { class: 'map-holder' }, map.el);

    const segPanel = MonthlyPanel({ viz, title: 'Monthly Sales by Segment' });
    const catPanel = MonthlyPanel({ viz, title: 'Monthly Sales by Product Category' });

    const el = h(
      'div',
      { style: { display: 'contents' } },
      kpiNode,
      h(
        'div',
        { class: 'mid' },
        h(
          'div',
          { class: 'card map-card' },
          h('h2', { class: 'card-title' }, 'Profit Ratio by State'),
          mapHolder,
        ),
        MapLegend(),
      ),
      h('div', { class: 'panels' }, segPanel.el, catPanel.el),
    );

    function renderMap() {
      if (mapErr) {
        clear(mapHolder);
        mapHolder.appendChild(h('p', { class: 'error' }, 'Could not load map: ' + mapErr));
        return;
      }
      if (mapHolder.firstChild !== map.el) {
        clear(mapHolder);
        mapHolder.appendChild(map.el);
      }
      map.setData(visibleMap(mapData, ratioSel), selected);
    }

    function loadScope() {
      const my = ++scopeToken;
      viz.beginLoad();
      Promise.all([
        fetchKpis(ds, { region, dateSel })
          .then((k) => {
            if (my === scopeToken) setKpis(k, null);
          })
          .catch((e) => {
            if (my === scopeToken) setKpis(null, errMsg(e));
          }),
        fetchMap(ds, { region, dateSel })
          .then((m) => {
            if (my === scopeToken) {
              mapData = m;
              mapErr = null;
              renderMap();
            }
          })
          .catch((e) => {
            if (my === scopeToken) {
              mapErr = errMsg(e);
              renderMap();
            }
          }),
      ]).then(() => {
        viz.endLoad();
      }); // always balance beginLoad, even if superseded
    }

    function loadMonthly() {
      const my = ++monthlyToken;
      viz.beginLoad();
      const scope = { region, states: selected, dateSel };
      Promise.all([
        fetchMonthly(ds, scope, 'Segment', SEGMENTS)
          .then((d) => {
            if (my === monthlyToken) segPanel.update(d, selected);
          })
          .catch(() => {
            if (my === monthlyToken) segPanel.update(null, selected);
          }),
        fetchMonthly(ds, scope, 'Category', CATEGORIES)
          .then((d) => {
            if (my === monthlyToken) catPanel.update(d, selected);
          })
          .catch(() => {
            if (my === monthlyToken) catPanel.update(null, selected);
          }),
      ]).then(() => {
        viz.endLoad();
      }); // always balance beginLoad, even if superseded
    }

    return {
      el,
      // Region / Order Date scope changed → both KPIs+map and the monthly panels refetch.
      update({ region: r, dateSel: d }) {
        region = r ?? null;
        dateSel = d ?? null;
        loadScope();
        loadMonthly();
      },
      // Map selection changed → re-mark the map + refetch only the monthly panels.
      setSelection(sel) {
        selected = sel;
        map.setSelection(selected);
        loadMonthly();
      },
      // Profit Ratio filter changed → re-filter the map client-side, no refetch.
      setRatio(r) {
        ratioSel = r;
        renderMap();
      },
      destroy() {
        scopeToken++;
        monthlyToken++;
        segPanel.destroy();
        catPanel.destroy();
      },
    };
  }

  Object.assign(SV, { OverviewView });
})((window.SV = window.SV || {}));
