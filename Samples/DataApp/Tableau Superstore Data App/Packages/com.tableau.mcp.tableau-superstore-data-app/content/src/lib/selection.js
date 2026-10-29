// Human-readable label for the current map selection (array of state names).
// One name verbatim, up to three comma-joined, otherwise a count. Shared by the
// selection chip and each monthly panel's title.
(function (SV) {
  'use strict';
  /**
   * Human-readable label for the current map selection: one name verbatim, up to
   * three comma-joined, otherwise a count. Shared by the selection chip and each
   * monthly panel's title.
   * @param {string[]} names Selected state names.
   * @returns {string}
   */
  function selectionLabel(names) {
    if (names.length === 1) return names[0];
    if (names.length <= 3) return names.join(', ');
    return names.length + ' states';
  }

  Object.assign(SV, { selectionLabel });
})((window.SV = window.SV || {}));
