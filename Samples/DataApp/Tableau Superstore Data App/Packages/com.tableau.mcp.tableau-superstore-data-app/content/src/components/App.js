(function (SV) {
  'use strict';
  var {
    CustomersView,
    OverviewView,
    PerformanceView,
    ProductView,
    RangeSlider,
    RegionFilter,
    SelectionChip,
    ShippingView,
    clear,
    createTooltip,
    fmtDateUS,
    fmtPct,
    h,
    loadDateRange,
  } = SV;
  const errMsg = (err) => (err && (err.message || err.errorCode)) || String(err);

  // In-app tabs (NOT Tableau workbook sheets) mirroring the reference Superstore
  // workbook's views. 'overview' owns the shell's Region/date/selection state + the
  // map; the rest are self-contained view factories fed the shared { ds, region,
  // dateSel } scope and own their own live queries. Each factory returns
  // { el, update({region,dateSel}), destroy() }.
  const TABS = [
    { id: 'overview', label: 'Overview', title: 'Executive Overview — Profitability' },
    { id: 'product', label: 'Product', title: 'Product Drilldown', make: ProductView },
    { id: 'customers', label: 'Customers', title: 'Customer Analysis', make: CustomersView },
    { id: 'shipping', label: 'Shipping', title: 'Shipping Overview', make: ShippingView },
    { id: 'performance', label: 'Performance', title: 'Performance', make: PerformanceView },
  ];

  // Profit Ratio slider domain (matches the map legend's ±50%); the ends stay
  // "open" so states beyond ±50% aren't hidden at full range. 1% step.
  const RATIO_MIN = -0.5,
    RATIO_MAX = 0.5,
    RATIO_STEP = 0.01;
  const DAY = 86400000;

  // 'YYYY-MM-DD' <-> timestamp, anchored at local noon so day math and the
  // M/D/YYYY labels round-trip without a timezone shift.
  function isoToTs(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d, 12).getTime();
  }
  function tsToIso(t) {
    const d = new Date(t);
    const p = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }

  // Datasources live on the workbook (dashboard/viz extension) or, failing that,
  // on the current worksheet's content, so try both.
  function getDataSources() {
    const wb = window.tableau.extensions.workbook;
    if (wb && typeof wb.getAllDataSourcesAsync === 'function') return wb.getAllDataSourcesAsync();
    const wc = window.tableau.extensions.worksheetContent;
    if (wc && wc.worksheet && typeof wc.worksheet.getDataSourcesAsync === 'function') {
      return wc.worksheet.getDataSourcesAsync();
    }
    return Promise.resolve([]);
  }

  // ============================================================================
  // Superstore Data App — shell (vanilla entry).
  //
  // A dependency-free reproduction of the classic Superstore dashboards, rebuilt
  // as a Tableau viz (worksheet) extension. It carries NO embedded data: every
  // number is queried live from the wired published datasource through the
  // Extensions API (ds.queryAsync → VizQL Data Service). A Region filter and an
  // Order Date range scope the whole app; on the Overview tab, selecting states on
  // the map scopes the two monthly panels and a Profit Ratio slider filters the
  // map client-side.
  //
  // App owns the shell, boot, and orchestration; each tab is a self-contained view
  // factory. Region/Date changes call the active view's update(); the Overview view
  // additionally exposes setSelection()/setRatio() for the map interactions. All
  // untrusted text (state/segment/category names) flows through DOM text/attributes
  // via the h()/svg() builders — never innerHTML.
  // ============================================================================
  function createApp() {
    let ds = null;
    let tab = 'overview';
    let region = null; // null = All
    let selected = []; // array of state names (Overview map selection)
    let ratioSel = [RATIO_MIN, RATIO_MAX];
    let dateDomain = null; // { minT, maxT, minIso, maxIso }
    let dateSel = null; // { minDate, maxDate } | null (full range)
    let activeView = null;
    let busyCount = 0;

    const vizRoot = h('div', { class: 'viz-root' });
    const tip = createTooltip(vizRoot);

    // Render-stable viz context handed to every view (hover never rebuilds trees).
    const viz = {
      showTip: (content, x, y) => tip.show(content, x, y),
      hideTip: () => tip.hide(),
      vizRootEl: vizRoot,
      beginLoad() {
        busyCount++;
        vizRoot.classList.add('is-busy');
      },
      endLoad() {
        busyCount = Math.max(0, busyCount - 1);
        if (!busyCount) vizRoot.classList.remove('is-busy');
      },
    };

    // ---- header --------------------------------------------------------------
    const titleEl = h('h1', { class: 'title' });
    const tagEl = h('span', { class: 'title-tag' });

    function onRegionChange(r) {
      region = r;
      tagEl.textContent = region || 'All';
      if (activeView) activeView.update({ region, dateSel });
    }
    const regionEl = RegionFilter(region, onRegionChange);

    const dateSlot = h('div', { style: { display: 'contents' } }); // filled once domain loads

    // Profit Ratio slider + selection chip — Overview only, kept as persistent
    // nodes so their state survives tab switches.
    const ratioSlider = RangeSlider({
      min: RATIO_MIN,
      max: RATIO_MAX,
      step: RATIO_STEP,
      value: ratioSel,
      onInput: onRatio,
      onCommit: onRatio,
      format: (v) => fmtPct(v, 0),
      label: 'Profit ratio',
    });
    const ratioFilterEl = h(
      'div',
      { class: 'filter filter-range' },
      h('span', { class: 'filter-label' }, 'Profit Ratio'),
      ratioSlider.el,
    );
    const chipHolder = h('span', { style: { display: 'contents' } });

    function onRatio(next) {
      ratioSel = next;
      if (activeView && tab === 'overview' && activeView.setRatio) activeView.setRatio(ratioSel);
    }
    function renderChip() {
      clear(chipHolder);
      const c = SelectionChip(selected, clearSelection);
      if (c) chipHolder.appendChild(c);
    }

    const filtersEl = h('div', { class: 'filters' }, regionEl, dateSlot);

    function setOverviewFilters(on) {
      const present = ratioFilterEl.parentNode === filtersEl;
      if (on && !present) {
        filtersEl.appendChild(ratioFilterEl);
        filtersEl.appendChild(chipHolder);
      } else if (!on && present) {
        ratioFilterEl.remove();
        chipHolder.remove();
      }
    }

    const header = h(
      'header',
      { class: 'top' },
      h('div', { class: 'title-wrap' }, titleEl, tagEl),
      filtersEl,
    );

    // ---- tabs ----------------------------------------------------------------
    const tabButtons = TABS.map((t) =>
      h(
        'button',
        {
          type: 'button',
          role: 'tab',
          class: 'tab',
          onClick: () => setTab(t.id),
        },
        t.label,
      ),
    );
    const tabsEl = h(
      'div',
      { class: 'tabs', role: 'tablist', 'aria-label': 'Dashboards' },
      tabButtons,
    );

    function syncTabs() {
      TABS.forEach((t, i) => {
        const on = t.id === tab;
        tabButtons[i].setAttribute('aria-selected', on ? 'true' : 'false');
        tabButtons[i].classList.toggle('is-active', on);
      });
    }

    // ---- content host (display:contents → view cards are flex items of viz-root)
    const contentHost = h('div', { style: { display: 'contents' } });

    vizRoot.appendChild(header);
    vizRoot.appendChild(tabsEl);
    vizRoot.appendChild(contentHost);
    // tip was appended to vizRoot by createTooltip; keep it last so it floats above.
    vizRoot.appendChild(tip.el);

    // ---- Overview map interactions -------------------------------------------
    function toggleState(name) {
      selected = selected.includes(name)
        ? selected.filter((n) => n !== name)
        : selected.concat([name]);
      renderChip();
      if (activeView && tab === 'overview' && activeView.setSelection)
        activeView.setSelection(selected);
    }
    function clearSelection() {
      selected = [];
      renderChip();
      if (activeView && tab === 'overview' && activeView.setSelection)
        activeView.setSelection(selected);
    }

    // ---- tab mounting --------------------------------------------------------
    function mountTab() {
      if (activeView) {
        activeView.destroy();
        activeView = null;
      }
      clear(contentHost);
      const t = TABS.find((x) => x.id === tab) || TABS[0];
      titleEl.textContent = t.title;
      if (!ds) return; // deferred until boot resolves the datasource
      if (t.id === 'overview') {
        activeView = OverviewView({ ds, viz, onToggleState: toggleState, selected, ratioSel });
      } else {
        activeView = t.make({ ds, viz });
      }
      contentHost.appendChild(activeView.el);
      activeView.update({ region, dateSel });
    }

    function setTab(id) {
      if (id === tab) return;
      tab = id;
      syncTabs();
      setOverviewFilters(id === 'overview');
      if (id === 'overview') renderChip();
      mountTab();
    }

    // ---- Order Date domain → build the range slider once ---------------------
    function buildDateSlider(domain) {
      dateDomain = domain;
      const slider = RangeSlider({
        min: domain.minT,
        max: domain.maxT,
        step: DAY,
        value: [domain.minT, domain.maxT],
        onInput: () => {},
        onCommit: commitDate,
        format: fmtDateUS,
        label: 'Order date',
      });
      clear(dateSlot);
      dateSlot.appendChild(
        h(
          'div',
          { class: 'filter filter-range' },
          h('span', { class: 'filter-label' }, 'Order Date'),
          slider.el,
        ),
      );
    }

    // Commit a dragged/keyed date range into the query scope. A range that spans
    // the full domain sends no filter (null). Full-range is decided on the ISO
    // strings actually sent to VDS (DST-stable), and the prior selection's identity
    // is preserved so a no-op release doesn't refetch.
    function commitDate(next) {
      if (!dateDomain) return;
      const [loT, hiT] = next;
      const selMin = tsToIso(loT),
        selMax = tsToIso(hiT);
      const full = selMin <= dateDomain.minIso && selMax >= dateDomain.maxIso;
      const sel = full ? null : { minDate: selMin, maxDate: selMax };
      const same =
        (dateSel === null && sel === null) ||
        (dateSel && sel && dateSel.minDate === sel.minDate && dateSel.maxDate === sel.maxDate);
      if (same) return;
      dateSel = sel;
      if (activeView) activeView.update({ region, dateSel });
    }

    // ---- boot ----------------------------------------------------------------
    function setFatal(msg) {
      clear(vizRoot);
      vizRoot.className = 'viz-root';
      vizRoot.appendChild(
        h('p', { class: 'error', style: { padding: '1.5rem' } }, 'Live query unavailable: ' + msg),
      );
    }

    function boot() {
      if (!window.tableau || !window.tableau.extensions) {
        setFatal('Extensions API not loaded');
        return;
      }
      window.tableau.extensions
        .initializeAsync()
        .then(() => getDataSources())
        .then((list) => {
          const first = list && list.length ? list[0] : null;
          if (!first) {
            setFatal('no data source found in the workbook');
            return;
          }
          ds = first;
          mountTab(); // ds now available → mount the active view
          loadDateRange(ds)
            .then((r) => {
              if (!r) return;
              buildDateSlider({
                minT: isoToTs(r.min),
                maxT: isoToTs(r.max),
                minIso: r.min,
                maxIso: r.max,
              });
            })
            .catch(() => {});
        })
        .catch((err) => setFatal(errMsg(err)));
    }

    // initial paint (pre-ds): title/tag/tabs/overview filters visible, content empty
    titleEl.textContent = TABS[0].title;
    tagEl.textContent = region || 'All';
    syncTabs();
    setOverviewFilters(true);
    renderChip();

    return { el: vizRoot, boot };
  }

  Object.assign(SV, { createApp });
})((window.SV = window.SV || {}));
