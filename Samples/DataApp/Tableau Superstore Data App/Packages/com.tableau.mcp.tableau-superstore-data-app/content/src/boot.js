// Loaded first, before every other app script. The extension sandbox has no
// visible console, so any error thrown while the app's scripts load or boot is
// written over the #root placeholder instead of leaving a blank sheet. Once the
// app has mounted (.viz-root exists) it reports its own errors.
(function () {
  'use strict';
  window.SV = window.SV || {};
  function showFatal(err) {
    var root = document.getElementById('root');
    if (!root || root.querySelector('.viz-root')) return;
    var p = document.createElement('p');
    p.className = 'error boot';
    p.textContent =
      'Data app failed to start: ' + ((err && (err.message || err.errorCode)) || String(err));
    root.replaceChildren(p);
  }
  window.SV.showFatal = showFatal;
  window.addEventListener('error', function (e) {
    showFatal(e.error || e.message);
  });
})();
