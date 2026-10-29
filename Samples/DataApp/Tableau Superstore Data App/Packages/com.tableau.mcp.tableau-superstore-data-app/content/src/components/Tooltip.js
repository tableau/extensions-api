(function (SV) {
  'use strict';
  var { h } = SV;
  // One tooltip row: colored key swatch (optional), the value (leads, strong),
  // then the label. Returns a DOM node.
  function TipRow({ colorVar, label, value }) {
    return h(
      'div',
      { class: 'tip-row' },
      h('span', { class: 'tip-key', style: colorVar ? { background: `var(${colorVar})` } : null }),
      h('span', { class: 'tip-val' }, value),
      h('span', { class: 'tip-lbl' }, label),
    );
  }

  // The shared floating tooltip. Owns a single persistent .tip element appended to
  // .viz-root and exposes show(content, clientX, clientY) / hide(). content is a
  // DOM node (or fragment). Driven imperatively on pointermove so hovering never
  // rebuilds the map/panels. Positioning: offset from the cursor, clamped inside
  // .viz-root.
  function createTooltip(vizRootEl) {
    const el = h('div', { class: 'tip', hidden: true });
    vizRootEl.appendChild(el);

    return {
      el,
      show(content, clientX, clientY) {
        while (el.firstChild) el.removeChild(el.firstChild);
        if (content) el.appendChild(content);
        el.hidden = false; // unhide before measuring offsetW/H
        const rect = vizRootEl.getBoundingClientRect();
        let x = clientX - rect.left + 14;
        let y = clientY - rect.top + 14;
        const tw = el.offsetWidth;
        const th = el.offsetHeight;
        if (x + tw > rect.width) x = clientX - rect.left - tw - 14;
        if (y + th > rect.height) y = rect.height - th - 4;
        if (x < 0) x = 4;
        if (y < 0) y = 4;
        el.style.left = x + 'px';
        el.style.top = y + 'px';
      },
      hide() {
        el.hidden = true;
      },
    };
  }

  Object.assign(SV, { TipRow, createTooltip });
})((window.SV = window.SV || {}));
