// ============================================================================
// Number / percent / currency formatting, shared so KPI tiles, axes, and
// tooltips all read identically.
// ============================================================================
(function (SV) {
  'use strict';
  /** Whole-dollar currency, e.g. "$2,326,534". */
  const fmtUSD0 = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
  /** Currency with cents, e.g. "$57.19". */
  const fmtUSD2 = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  /** Integer with thousands separators, e.g. "38,654". */
  const fmtInt = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

  /**
   * Formats a ratio as a percentage.
   * @param {number} v Ratio (0.126 → "12.6%").
   * @param {number} [dp=1] Decimal places.
   * @returns {string}
   */
  function fmtPct(v, dp) {
    return (v * 100).toFixed(dp == null ? 1 : dp) + '%';
  }

  /**
   * M/D/YYYY from a timestamp, used by the Order Date range slider labels. Built
   * from local Y/M/D so it round-trips with the slider's noon-anchored timestamps
   * without a timezone shift.
   * @param {number} t Timestamp in ms.
   * @returns {string} The date, or a dash placeholder if `t` isn't a valid time.
   */
  function fmtDateUS(t) {
    const d = new Date(t);
    if (isNaN(d)) return '—';
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  }

  /**
   * Compact currency for axis ticks: "$5K", "$1.5K", "-$5K". Values under 1,000
   * use whole dollars.
   * @param {number} v
   * @returns {string}
   */
  function fmtUSDk(v) {
    const a = Math.abs(v);
    if (a >= 1000) {
      // keep one decimal for non-whole-thousand ticks (a 1500 gridline is "$1.5K",
      // not the misleading "$2K"); sign leads the "$" so negatives read "-$5K".
      const s = (a / 1000).toFixed(1).replace(/\.0$/, '');
      return (v < 0 ? '-$' : '$') + s + 'K';
    }
    return fmtUSD0.format(v);
  }

  Object.assign(SV, { fmtUSD0, fmtUSD2, fmtInt, fmtPct, fmtDateUS, fmtUSDk });
})((window.SV = window.SV || {}));
