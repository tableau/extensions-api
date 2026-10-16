(function (SV) {
  'use strict';
  var { h } = SV;
  // ============================================================================
  // Dual-thumb range slider — dependency-free, pointer + keyboard accessible.
  //
  // Controlled by an initial `value` [lo, hi] in domain units (min..max). Fires
  // two callbacks so the parent can split cheap visual updates from expensive work:
  //   onInput(next)  — continuous, on every drag move / key repeat (move a label)
  //   onCommit(next) — once, on pointer release / key-up (trigger a live refetch)
  // For a purely client-side filter, wire both to the same handler.
  //
  // The slider owns its live position and repaints the thumbs/fill/labels
  // imperatively — so a drag
  // never re-renders the map or panels. The lo thumb can't cross above hi and
  // vice-versa (clamped, never swapped). Drag is tracked at the window level so the
  // thumb keeps following the pointer even when it leaves the track. All values
  // snap to `step`. Returns { el, setValue } — setValue repaints without callbacks.
  // ============================================================================
  function RangeSlider({
    min,
    max,
    step = 1,
    value,
    onInput,
    onCommit,
    format = (v) => String(v),
    label,
  }) {
    let cur = value.slice();
    let dragging = null; // 'lo' | 'hi' | null
    let commitPending = false; // a key changed the value → commit on key-up

    const span = max - min || 1;
    const pct = (v) => Math.max(0, Math.min(100, ((v - min) / span) * 100));
    const snap = (v) => {
      const s = Math.round((v - min) / step) * step + min;
      return Math.max(min, Math.min(max, s));
    };
    const rawFromX = (clientX) => {
      const rect = track.getBoundingClientRect();
      const t = rect.width ? (clientX - rect.left) / rect.width : 0;
      return snap(min + t * span);
    };
    // clamp so a thumb never crosses its sibling
    const nextFor = (which, raw, c) =>
      which === 'lo' ? [Math.min(raw, c[1]), c[1]] : [c[0], Math.max(raw, c[0])];

    const loVal = h('span', { class: 'rs-val' }, format(cur[0]));
    const hiVal = h('span', { class: 'rs-val' }, format(cur[1]));
    const fill = h('span', { class: 'rs-fill' });

    const makeThumb = (which) =>
      h('button', {
        type: 'button',
        class: 'rs-thumb',
        role: 'slider',
        'aria-label': (label ? label + ' ' : '') + (which === 'lo' ? 'minimum' : 'maximum'),
        onPointerDown: (e) => {
          e.preventDefault();
          e.stopPropagation();
          e.currentTarget.focus();
          startDrag(which);
        },
        onKeyDown: (e) => onThumbKey(which, e),
        onKeyUp: onThumbKeyUp,
      });
    const loThumb = makeThumb('lo');
    const hiThumb = makeThumb('hi');

    const track = h(
      'span',
      { class: 'rs-track', onPointerDown: onTrackDown },
      h('span', { class: 'rs-rail' }),
      fill,
      loThumb,
      hiThumb,
    );
    const root = h('span', { class: 'rangeslider' }, loVal, track, hiVal);

    function setAria(thumb, which) {
      const v = which === 'lo' ? cur[0] : cur[1];
      thumb.setAttribute('aria-valuemin', which === 'lo' ? min : cur[0]);
      thumb.setAttribute('aria-valuemax', which === 'lo' ? cur[1] : max);
      thumb.setAttribute('aria-valuenow', v);
      thumb.setAttribute('aria-valuetext', format(v));
    }
    function reflect() {
      loVal.textContent = format(cur[0]);
      hiVal.textContent = format(cur[1]);
      fill.style.left = pct(cur[0]) + '%';
      fill.style.right = 100 - pct(cur[1]) + '%';
      loThumb.style.left = pct(cur[0]) + '%';
      hiThumb.style.left = pct(cur[1]) + '%';
      setAria(loThumb, 'lo');
      setAria(hiThumb, 'hi');
    }
    // Set the live value, repaint, and notify onInput (the continuous channel).
    function apply(next) {
      cur = next;
      reflect();
      if (onInput) onInput(cur.slice());
    }

    function onTrackDown(e) {
      const raw = rawFromX(e.clientX);
      if (raw == null) return;
      const c = cur;
      // A press outside the span grabs the thumb on that side (so coincident
      // thumbs, lo===hi, can still be pulled apart); between them, nearest wins.
      const which =
        raw > c[1]
          ? 'hi'
          : raw < c[0]
            ? 'lo'
            : Math.abs(raw - c[0]) <= Math.abs(raw - c[1])
              ? 'lo'
              : 'hi';
      apply(nextFor(which, raw, c));
      startDrag(which);
    }

    function onMove(e) {
      const raw = rawFromX(e.clientX);
      if (raw != null) apply(nextFor(dragging, raw, cur));
    }
    function onUp() {
      (dragging === 'lo' ? loThumb : hiThumb).classList.remove('is-drag');
      dragging = null;
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      if (onCommit) onCommit(cur.slice());
    }
    function startDrag(which) {
      dragging = which;
      (which === 'lo' ? loThumb : hiThumb).classList.add('is-drag');
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    }

    function onThumbKey(which, e) {
      const big = step * 10;
      let d = 0;
      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowDown':
          d = -step;
          break;
        case 'ArrowRight':
        case 'ArrowUp':
          d = step;
          break;
        case 'PageDown':
          d = -big;
          break;
        case 'PageUp':
          d = big;
          break;
        case 'Home':
          d = -Infinity;
          break;
        case 'End':
          d = Infinity;
          break;
        default:
          return;
      }
      e.preventDefault();
      const base = which === 'lo' ? cur[0] : cur[1];
      const nv = snap(d === Infinity ? max : d === -Infinity ? min : base + d);
      apply(nextFor(which, nv, cur));
      commitPending = true;
    }
    function onThumbKeyUp() {
      if (!commitPending) return;
      commitPending = false;
      if (onCommit) onCommit(cur.slice());
    }

    reflect();
    return {
      el: root,
      setValue(next) {
        cur = next.slice();
        reflect();
      },
    };
  }

  Object.assign(SV, { RangeSlider });
})((window.SV = window.SV || {}));
