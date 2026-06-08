# Alpha Commands Catalog

Undocumented `executeCommandAsync` commands for the Tableau Authoring Extensions API (alpha). Official Extensions API docs do not cover these.

**API entry point:** `tableau.extensions.workbook.executeCommandAsync(namespace, commandId, args)`

---

## v1 primary — metadata round-trip

### tabui/save-underlying-metadata

- **Args:** `{}`
- **Response:** `{ text: string }` — workbook internals as JSON string
- **Source:** Power User extension pattern (external); v1 centerpiece for this project
- **Risk:** none (read-only)
- **Wrapped by:** `TableauBridge.getWorkbookMetadata()`

### tabui/load-underlying-metadata

- **Args:** `{ text: string }` — JSON string of full workbook metadata
- **Response:** _(typically empty on success)_
- **Source:** Power User extension pattern (external); v1 centerpiece for this project
- **Risk:** **destructive** — can corrupt workbook; no undo
- **Wrapped by:** `TableauBridge.setWorkbookMetadata()`

---

## tabui commands (from BeFree sample)

### tabui/get-is-presentation-mode

- **Args:** `{}`
- **Response:** `{ isPresentationMode: boolean }`
- **Source:** `Samples/Dashboard/BeFree/beFree.js`
- **Risk:** none
- **Wrapped by:** `TableauBridge.executeCommand`

---

## tabdoc commands (from BeFree sample)

### tabdoc/set-zone-is-hidden

- **Args:** `{ bool: boolean, "zone-ids": number[], dashboard: string }`
- **Response:** _(varies)_
- **Source:** `Samples/Dashboard/BeFree/beFree.js`
- **Risk:** modifies dashboard layout

### tabdoc/drop-on-dashboard

- **Args:** `{ "add-as-floating": boolean, dashboard: string, "zone-type": string, "drop-location": { x, y }, worksheet: string }`
- **Source:** `Samples/Dashboard/BeFree/beFree.js`

### tabdoc/set-sheet-formatting

- **Args:** `{ sheet: string, "pane-formattings": object, "sheet-formatting": string }`
- **Source:** `Samples/Dashboard/BeFree/beFree.js`

### tabdoc/get-animation-side-pane-pres-model

- **Args:** `{}`
- **Response:** `{ animationSidePane: { animationWorkbookStyleSettings: { animationOn: string } } }`
- **Source:** `Samples/Dashboard/BeFree/beFree.js`

### tabdoc/set-animation-on

- **Args:** `{ "animation-on": "ao-on" | "ao-off" }`
- **Source:** `Samples/Dashboard/BeFree/beFree.js`

### tabdoc/theme

- **Args:** `{ "style-theme": string }`
- **Source:** `Samples/Dashboard/BeFree/beFree.js`

### tabdoc/apply-theme

- **Args:** `{ "file-contents": string, "file-name": string, "should-clear": boolean }`
- **Source:** `Samples/Dashboard/BeFree/beFree.js`

### tabdoc/get-sheet-list

- **Args:** `{ "include-all-hidden": boolean, dashboard: string }`
- **Response:** `{ sheetList: { sheetListItems: Array<{ name: string }> } }`
- **Source:** `Samples/Dashboard/BeFree/beFree.js`

### tabdoc/get-dashboard-sizing

- **Args:** `{ dashboard: string }`
- **Response:** `{ dashboardSizePresModel: { w: number, h: number } }`
- **Source:** `Samples/Dashboard/BeFree/beFree.js`

### tabdoc/add-dashboard-object

- **Args:** `{ "add-as-floating": boolean, dashboard: string, "dashboard-object-identifer": string, "drop-location"?: { x, y } }`
- **Source:** `Samples/Dashboard/BeFree/beFree.js`

### tabdoc/toggle-distribute-child-zones-evenly

- **Args:** `{ dashboard: string, "zone-id": number }`
- **Source:** `Samples/Dashboard/BeFree/beFree.js`

### tabdoc/hide-zone

- **Args:** `{ "zone-id": number, dashboard: string }`
- **Source:** `Samples/Dashboard/BeFree/beFree.js`

---

## How to add entries

1. Run experiment in Tableau Desktop or BeFree scratchpad
2. Copy args and response shape
3. Flag risk level
4. Note which `TableauBridge` method wraps it
