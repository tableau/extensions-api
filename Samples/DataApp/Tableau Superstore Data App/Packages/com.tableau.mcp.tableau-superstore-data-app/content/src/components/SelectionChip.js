(function (SV) {
  'use strict';
  var { h, selectionLabel } = SV;
  // Names the picked states and offers a Clear button. `selected` is an array of
  // state names; returns null when empty (caller hides the slot).
  function SelectionChip(selected, onClear) {
    if (!selected.length) return null;
    return h(
      'div',
      { class: 'sel-chip' },
      h('span', { class: 'sel-chip-text' }, 'States: ' + selectionLabel(selected)),
      h('button', { type: 'button', class: 'sel-chip-clear', onClick: onClear }, 'Clear'),
    );
  }

  Object.assign(SV, { SelectionChip });
})((window.SV = window.SV || {}));
