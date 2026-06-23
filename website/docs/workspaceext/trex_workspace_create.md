---
title: Create a "Hello World" Workspace Extension
description: Build a simple workspace extension
---

This walkthrough shows the basic shape of a workspace extension: an HTML page that loads the Tableau Extensions API library, initializes as a workspace extension, and reads information about the active workbook.

## The web page

Like other Tableau extensions, a workspace extension is a web page that links to the Tableau Extensions API library.

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Tableau Extensions API library -->
  <script src="https://tableau.github.io/extensions-api/lib/tableau.extensions.1.latest.js"></script>
  <script src="workspace-extension.js"></script>
</head>
<body>
  <h1>Workspace Extension Example</h1>
  <div id="status">Initializing...</div>
  <div id="workbook-info"></div>
</body>
</html>
```

## Initialize the extension

A workspace extension initializes through the same `initializeAsync()` entry point used by other extensions, identifying itself as a workspace extension.

```javascript
(async () => {
  await tableau.extensions.initializeAsync({ context: 'workspace' });
  document.getElementById('status').textContent = 'Ready!';
})();
```

:::warning[TODO: REVIEW]
<mark>Confirm how a workspace extension is initialized, including the exact <code>initializeAsync()</code> argument (for example, <code>{'{'} context: 'workspace' {'}'}</code>) and whether any argument is required.</mark>

Flagged because: the source material shows initialization with a `context: 'workspace'` option, but it also notes this entry point is still being finalized. The exact call signature needs to be confirmed.
:::

## Access the active workbook

After initialization, a workspace extension can read information about the currently active workbook. Because a workspace extension is not tied to a single workbook, the current workbook can be `null` when no workbook is open.

```javascript
const workspace = tableau.extensions.workspace;

const updateWorkbookInfo = () => {
  const workbook = workspace.getWorkbook();
  const infoDiv = document.getElementById('workbook-info');

  if (workbook) {
    infoDiv.textContent = `Current workbook: ${workbook.name}`;
  } else {
    infoDiv.textContent = 'No workbook open';
  }
};

updateWorkbookInfo();
```

:::warning[TODO: REVIEW]
<mark>Confirm the workspace namespace name (for example, <code>tableau.extensions.workspace</code> versus <code>tableau.workspace</code>) and the members it exposes.</mark>

Flagged because: the source material is inconsistent about the namespace name and notes that the namespace may not be finalized. The canonical namespace and its API surface need to be confirmed.
:::

## Respond to workbook changes

A workspace extension can listen for changes to the active workbook so it can update as the user opens, closes, or switches workbooks.

```javascript
workspace.addEventListener('workbook-opened', (event) => {
  console.log('Opened:', event.workbook.name);
  updateWorkbookInfo();
});

workspace.addEventListener('workbook-closed', () => {
  console.log('Workbook closed');
  updateWorkbookInfo();
});

workspace.addEventListener('workbook-switched', (event) => {
  console.log('Switched to:', event.workbook.name);
  updateWorkbookInfo();
});
```

:::warning[TODO: REVIEW]
<mark>Confirm the workbook lifecycle event names and their event payloads.</mark>

Flagged because: the source material uses two different naming styles for these events (for example, <code>workbook-opened</code> versus <code>workbookOpened</code>). The canonical event names and payload shapes need to be confirmed.
:::
