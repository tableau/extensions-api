// ============================================================================
// Tiny dependency-free DOM builder: the JSX replacement for this no-build app.
//
// h(tag, props, ...children)   → HTML element
// svg(tag, props, ...children) → SVG-namespaced element (svg/g/path/line/text/…)
// frag(...children)            → a DocumentFragment
// clear(el)                    → remove all children
// observeWidth(el, cb)         → ResizeObserver wired to el.clientWidth; returns
//                                disconnect.
//
// Props mirror the DOM, not React: write real attribute names (class, tabindex,
// text-anchor, colspan…). Conveniences: `class`/`className` both set class,
// `style` accepts a string or a {prop: value} object, `on<Event>` adds a
// listener (name lowercased, so onPointerMove → 'pointermove'), boolean `true`
// renders a bare attribute and `false`/null/undefined skip it. Children may be
// nodes, strings/numbers (→ text nodes), arrays (flattened), or null (skipped) —
// text always goes through createTextNode, so untrusted names can never inject
// markup (the analog of React escaping JSX children).
// ============================================================================
(function (SV) {
  'use strict';
  const SVG_NS = 'http://www.w3.org/2000/svg';

  function build(el, props, children) {
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === 'class' || k === 'className') el.setAttribute('class', v);
        else if (k === 'style' && v && typeof v === 'object') Object.assign(el.style, v);
        else if (k.length > 2 && k[0] === 'o' && k[1] === 'n' && typeof v === 'function') {
          el.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (v === true) el.setAttribute(k, '');
        else el.setAttribute(k, v);
      }
    }
    append(el, children);
    return el;
  }

  function append(el, children) {
    for (const c of children) {
      if (c == null || c === false || c === true) continue;
      if (Array.isArray(c)) append(el, c);
      else if (c.nodeType) el.appendChild(c);
      else el.appendChild(document.createTextNode(String(c)));
    }
  }

  /**
   * Creates an HTML element (prop conventions are in the header above).
   * @param {string} tag
   * @param {object | null} [props]
   * @param {...*} children Nodes, strings/numbers, arrays, or null.
   * @returns {HTMLElement}
   */
  function h(tag, props, ...children) {
    return build(document.createElement(tag), props, children);
  }

  /**
   * Creates an SVG-namespaced element (prop conventions are in the header above).
   * @param {string} tag e.g. 'svg', 'g', 'path'
   * @param {object | null} [props]
   * @param {...*} children Nodes, strings/numbers, arrays, or null.
   * @returns {SVGElement}
   */
  function svg(tag, props, ...children) {
    return build(document.createElementNS(SVG_NS, tag), props, children);
  }

  /**
   * Creates a DocumentFragment holding the given children.
   * @param {...*} children Nodes, strings/numbers, arrays, or null.
   * @returns {DocumentFragment}
   */
  function frag(...children) {
    const f = document.createDocumentFragment();
    append(f, children);
    return f;
  }

  /**
   * Removes all of an element's children.
   * @param {Node} el
   */
  function clear(el) {
    while (el.firstChild) el.removeChild(el.firstChild);
  }

  /**
   * Measures el.clientWidth now (synchronously, pre-paint, like the React layout
   * effect) and on every resize, calling cb(width) only when it changes. Charts use
   * it to lay out at their true width without a 0-width flash and to reflow on
   * container resize, with no window listener.
   * @param {Element} el
   * @param {(width: number) => void} cb
   * @returns {() => void} Disconnects the observer.
   */
  function observeWidth(el, cb) {
    let last = -1;
    const measure = () => {
      const w = el.clientWidth;
      if (w !== last) {
        last = w;
        cb(w);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }

  Object.assign(SV, { h, svg, frag, clear, observeWidth });
})((window.SV = window.SV || {}));
