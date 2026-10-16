// ============================================================================
// Diverging color scale + nice-axis math.
//
// Custom properties (--div-neg/mid/pos) are declared on .viz-root and swap for
// dark mode there, so the ramp must be read from that element. makeRatioColor()
// resolves the three endpoints ONCE and returns a closure — the map calls it a
// single time per render, then colors all ~50 states without re-reading styles.
// ============================================================================
(function (SV) {
  'use strict';
  /**
   * Parses a CSS color as returned by getComputedStyle.
   * @param {string} str `#rgb`, `#rrggbb`, `rgb()`, or `rgba()`.
   * @returns {number[]} `[r, g, b]`; mid gray for anything unrecognized.
   */
  function parseColor(str) {
    str = String(str).trim();
    if (str[0] === '#') {
      let h = str.slice(1);
      if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
      return [
        parseInt(h.slice(0, 2), 16),
        parseInt(h.slice(2, 4), 16),
        parseInt(h.slice(4, 6), 16),
      ];
    }
    const m = str.match(/rgba?\(([^)]+)\)/);
    if (m) {
      const p = m[1].split(',').map((x) => parseFloat(x));
      return [p[0], p[1], p[2]];
    }
    return [128, 128, 128];
  }

  /**
   * Linear interpolation from `a` to `b`.
   * @param {number} a
   * @param {number} b
   * @param {number} t 0..1
   * @returns {number}
   */
  const lerp = (a, b, t) => a + (b - a) * t;
  /**
   * Mixes two `[r, g, b]` colors.
   * @param {number[]} c1
   * @param {number[]} c2
   * @param {number} t 0 (all c1) .. 1 (all c2)
   * @returns {string} `rgb(r,g,b)`
   */
  const mix = (c1, c2, t) =>
    `rgb(${Math.round(lerp(c1[0], c2[0], t))},${Math.round(lerp(c1[1], c2[1], t))},${Math.round(lerp(c1[2], c2[2], t))})`;

  /**
   * Reads a CSS custom property's computed value.
   * @param {Element | null} el The element the property is declared on (defaults to <html>).
   * @param {string} name e.g. `--div-pos`
   * @returns {string} The trimmed value, or "" if unset.
   */
  function cssVar(el, name) {
    const host = el || document.documentElement;
    return getComputedStyle(host).getPropertyValue(name).trim();
  }

  /**
   * Diverging profit-ratio scale: blue (+) ↔ gray (0) ↔ red (−), clamped to ±50%.
   * Reads the endpoints once, so call it once per render.
   * @param {Element} vizRootEl The .viz-root element that declares --div-neg/mid/pos.
   * @returns {(ratio: number) => string} Maps a ratio to `rgb()`.
   */
  function makeRatioColor(vizRootEl) {
    const neg = parseColor(cssVar(vizRootEl, '--div-neg'));
    const mid = parseColor(cssVar(vizRootEl, '--div-mid'));
    const pos = parseColor(cssVar(vizRootEl, '--div-pos'));
    return function ratioColor(ratio) {
      const t = Math.max(-1, Math.min(1, ratio / 0.5)); // -1..1
      return t >= 0 ? mix(mid, pos, t) : mix(mid, neg, -t);
    };
  }

  /**
   * Sequential Sales ramp for the Product highlight table: light tint (low) →
   * series blue (high), endpoints read from --heat-sales-lo/-hi so dark mode swaps
   * in one place.
   * @param {Element} vizRootEl The .viz-root element that declares the endpoints.
   * @param {number} min
   * @param {number} max
   * @returns {{ color: (v: number) => string, t: (v: number) => number }} `color`
   *   maps a value to `rgb()`; `t` maps it to 0..1 so the caller can pick a
   *   readable text color (white once the cell is dark enough).
   */
  function makeSalesColor(vizRootEl, min, max) {
    const lo = parseColor(cssVar(vizRootEl, '--heat-sales-lo'));
    const hi = parseColor(cssVar(vizRootEl, '--heat-sales-hi'));
    const span = max > min ? max - min : 1;
    const t = (v) => Math.max(0, Math.min(1, (v - min) / span));
    return { color: (v) => mix(lo, hi, t(v)), t };
  }

  /**
   * A "nice" axis tick step (1, 2, or 5 × 10^n) for a 0..max domain.
   * @param {number} max
   * @param {number} [targetTicks=3] Approximate number of ticks.
   * @returns {number}
   */
  function niceStep(max, targetTicks) {
    const raw = max / (targetTicks || 3);
    if (raw <= 0) return 1;
    const p = Math.pow(10, Math.floor(Math.log10(raw)));
    const n = raw / p;
    const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
    return step * p;
  }

  Object.assign(SV, { parseColor, lerp, mix, cssVar, makeRatioColor, makeSalesColor, niceStep });
})((window.SV = window.SV || {}));
