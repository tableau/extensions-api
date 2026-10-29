// Vanilla entry: no framework, no build. index.html loads every app script as a
// classic <script> in dependency order (each one registers its exports on the
// shared window.SV namespace), and this one last. Classic scripts, not ES
// modules: the extension runs in a sandboxed iframe, and module scripts are
// fetched in CORS mode, which the host can refuse, leaving a blank sheet. The
// Tableau Extensions API script loads before all of them, so window.tableau is
// available by the time boot() calls initializeAsync().
(function (SV) {
  'use strict';
  try {
    const app = SV.createApp();
    document.getElementById('root').replaceChildren(app.el);
    app.boot();
  } catch (err) {
    SV.showFatal(err);
  }
})((window.SV = window.SV || {}));
