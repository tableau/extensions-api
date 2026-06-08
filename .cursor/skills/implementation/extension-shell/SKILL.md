---
name: extension-shell
description: Bootstraps the Tableau extension shell — manifest.trex, index.html, initializeAsync, React mount, and webpack entry. Use when creating or modifying extension bootstrap files.
paths:
  - "extension/manifest.trex"
  - "extension/index.html"
  - "extension/src/index.tsx"
  - "extension/webpack.config.js"
---

# Extension Shell

## File responsibilities

| File | Purpose |
|------|---------|
| `manifest.trex` | Extension ID, `min-api-version`, localhost URL |
| `index.html` | Load `tableau.extensions.*.js` + webpack bundle |
| `src/index.tsx` | `initializeAsync` → mount React |
| `webpack.config.js` | Bundle to `dist/extension.js` |

## Init lifecycle

```typescript
await tableau.extensions.initializeAsync();
// Create TableauBridge, wrap in ExtensionContext provider
ReactDOM.render(<App />, document.getElementById('root'));
```

## Manifest conventions

- `dashboard-extension` with reverse-DNS `id`
- `min-api-version` ≥ 1.14 for `executeCommandAsync` (BeFree uses 1.14)
- `source-location` → `http://localhost:8765/extension/index.html`
- Optional `<configure-context-menu-item />` for authoring config

## HTML shell

```html
<script src="../lib/tableau.extensions.1.latest.js"></script>
<script src="dist/extension.js"></script>
<div id="root"></div>
```

For alpha metadata commands, may require beta lib — document in `docs/implementation-log.md`.

## Dev server

Extension is served from repo root `npm start` (port 8765) or `extension/npm run dev` with watch.

## References

- `Samples-Typescript/Dashboard/PdfViewer/PdfViewer.trex`
- `Samples-Typescript/Dashboard/PdfViewer/pdfViewer.tsx`
