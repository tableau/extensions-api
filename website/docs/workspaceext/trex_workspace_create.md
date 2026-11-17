---
title: Create a "Hello World" Workspace Extension
description: Build a simple workspace extension
---

A workspace extension is still just a web page. This walkthrough is the smallest useful one: load the library, initialize, show the active workbook, and update when that workbook (or its active sheet) changes.

The type of extension comes from the `.trex` (`<workspace-extension>`), not from a special `initializeAsync()` argument. `<entry-points>` add the authoring toolbar button and the authoring menu item. Both open a side pane. The Hello World manifest is on [Get Started with Workspace Extensions](./trex_workspace_getstarted.md).

```xml
<entry-points>
  <authoring-toolbar region="primary">
    <label resource-id="name"/>
    <on-click><side-pane/></on-click>
  </authoring-toolbar>
  <authoring-menu>
    <label resource-id="name"/>
    <on-click><side-pane/></on-click>
  </authoring-menu>
</entry-points>
```

## The web page

Same pattern as other Tableau extensions — an HTML page that links the Extensions API library.

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Tableau Extensions API library -->
  <!-- <script src="https://tableau.github.io/extensions-api/lib/tableau.extensions.1.latest.js"></script> -->
  <script src="./tableau.extensions.1.latest.js"></script>
  <script src="workspace-extension.js"></script>
</head>
<body>
  <h1>Workspace Extension Example</h1>
  <div id="status">Initializing...</div>
  <div id="workbook-info"></div>
</body>
</html>
```

## Initialize

Same `initializeAsync()` entry point as dashboard and viz extensions. You do **not** pass `{ context: 'workspace' }`. Optional context-menu callbacks (`{ configure: fn }`) work the same way as for other extensions if your manifest includes `<context-menu>`.

```javascript
(async () => {
  await tableau.extensions.initializeAsync();
  document.getElementById('status').textContent = 'Ready!';
})();
```

## Read the active workbook

After init, use **`tableau.extensions.workspaceContent`**. The active workbook is a **property**, not a getter. There might not be one — that's normal.

```javascript
const workspaceContent = tableau.extensions.workspaceContent;

const updateWorkbookInfo = () => {
  const workbook = workspaceContent.workbook;
  const infoDiv = document.getElementById('workbook-info');

  if (workbook) {
    const sheet = workbook.activeSheet;
    const sheetLabel = sheet ? ` (${sheet.name})` : '';
    infoDiv.textContent = `Current workbook: ${workbook.name}${sheetLabel}`;
  } else {
    infoDiv.textContent = 'No workbook open';
  }
};

updateWorkbookInfo();
```

When a workbook is open, `workbook` exposes `name`, `sheets`, and `activeSheet`. Each sheet in `sheets` has a `name`, a `sheetType`, an optional `url`, and an optional stable `id`. `activeSheet` is a full sheet: a worksheet, a dashboard, or a story. Filters, parameters, and sheet events are on that object.

## Listen for workbook and sheet changes

The extension outlives any one workbook. Listen on `workspaceContent` so your UI stays in sync. Every running workspace extension receives these events.

One event covers workbook open, close, and switch: **`tableau.TableauEventType.WorkbookChanged`** (`"workbook-changed"`). `event.workbook` is missing when nothing is open. A second event, **`tableau.TableauEventType.ActiveSheetChanged`** (`"active-sheet-changed"`), fires when the active sheet in that workbook changes. Both events include the workbook. `event.sheetName` is the new active sheet's name. `workspaceContent.workbook` is already updated when your listener runs.

```javascript
workspaceContent.addEventListener(tableau.TableauEventType.WorkbookChanged, (event) => {
  console.log('Workbook changed:', event.workbook ? event.workbook.name : '(none)');
  updateWorkbookInfo();
});

workspaceContent.addEventListener(tableau.TableauEventType.ActiveSheetChanged, (event) => {
  console.log('Active sheet:', event.sheetName);
  updateWorkbookInfo();
  // Read workbook.activeSheet again and re-bind sheet listeners.
  // The previous Sheet is no longer the active one.
});
```

## Settings

Use the shared **`tableau.extensions.settings`** namespace (not `workspaceContent.settings`). Dashboard and viz settings are saved *with the workbook*. Workspace settings are scoped to the extension, so they survive opening a different workbook.

```javascript
tableau.extensions.settings.set('lastUsed', Date.now().toString());
await tableau.extensions.settings.saveAsync();
```

`tableau.extensions.environment` and `tableau.extensions.ui` are also available.
