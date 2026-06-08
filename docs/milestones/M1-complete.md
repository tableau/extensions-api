# M1 Complete — Implementation Summary

**Product:** Tableau Poweruser — Omnisearch foundation  
**Status:** Complete — M2 next (search bar + polish)  
**Shipped:** 2026-06-08 – 2026-06-09  
**Tableau build (fixture):** `main.26.0531.2046`

This document consolidates everything implemented in M1, including key decisions made during planning and implementation. Day-to-day build history remains in `docs/implementation-log.md`.

---

## What M1 delivers

M1 establishes the **read-only Omnisearch foundation**: a metadata field index built from live workbook JSON, plus a UI that lists every indexed field in a scrollable attribute table.

**In scope (shipped):**

- Field index pipeline — catalog, dependency graph, usage map, `used` flag, display attributes
- Reference parsing from formulas, filters, encodings, shelves, groupfilters, and parameter `source-field`
- `searchFields()` with precomputed `searchText` — unit-tested; UI wiring deferred to M2
- `getDependencySubgraph(id, depth: 2)` — backend only; interactive DAG deferred to M3
- Omnisearch field table replacing the raw JSON viewer
- Jest golden tests against `workbook_export.json`

**Out of scope (deferred):**

- Search bar, facet filters, usage column, row selection detail (M2)
- Interactive DAG / React Flow (M3)
- Save / `load-underlying-metadata` in Omnisearch view
- Web Workers
- Dashboard-via-worksheet indirect usage refinement

---

## Prerequisite context

Before M1 coding began, the project captured a live metadata export and documented the product scope.

### Fixtures and schema baseline

| Asset | Purpose |
|-------|---------|
| `extension/fixtures/workbook_export.json` | Canonical Superstore-based export (~39k lines, 23 worksheets, 6 dashboards) |
| `extension/fixtures/workbook_export_schema.json` | Auto-generated shallow JSON Schema — structural hint only |
| `docs/workbook-metadata.md` | Curated node-type and classification notes |
| `docs/tableau-poweruser-scope.md` | Product vision, v1 scope, milestone plan |

**Removed:** `minimal-workbook.json` — synthetic shape did not match live exports.

### Export root shape (locked)

Live `save-underlying-metadata` responses wrap the workbook:

```json
{
  "_comment": "build main.26.0531.2046 …",
  "children": [{ "type": "workbook", "attrs": { … }, "children": [ … ] }]
}
```

Indexing entry point: inner `workbook` node (`children[0]` where `type === "workbook"`).

### Extension scaffold (pre-M1)

- Greenfield `extension/` with `TableauBridge`, `ExtensionContext`, raw JSON viewer
- 6-agent Cursor team, skills, and `AGENTS.md` orchestration
- UI accesses Tableau only via `TableauBridge` through React context
- v1 primary API: `tabui/save-underlying-metadata` and `tabui/load-underlying-metadata`

---

## Architecture

```
workbook_export.json / live metadata
        │
        ▼
 normalizeWorkbookRoot()          ← metadata/normalize.ts
        │                          ← also at TableauBridge load boundary
        ▼
 buildFieldIndex(root)            ← metadata/fieldIndex.ts
   ├── buildFieldCatalog()        ← columns, calcs, params, sets, groups
   ├── buildFieldLookup()         ← caption/name indexes
   ├── buildDependencyEdges()     ← formula + set/group refs
   ├── addGroupDependencies()     ← groupfilter level/member refs
   ├── buildUsageMap()            ← worksheet/dashboard scan
   └── computeUsedFields()        ← downstream + usage + actions + source-field
        │
        ▼
 searchFields(index, query)       ← metadata/omnisearch.ts (unit-tested; UI in M2)
        │
        ▼
 useFieldIndex                     ← hooks/useFieldIndex.ts
        │
        ▼
 OmnisearchPanel                   ← components/omnisearch/
   └── FieldTable                  ← all fields, sorted A→Z
```

### Layer rules

| Layer | Rule |
|-------|------|
| **Metadata** | Pure functions — no API, no React |
| **Bridge** | All `executeCommandAsync` through `TableauBridge` |
| **UI** | Reads index via hooks; no direct `tableau.extensions` calls |

---

## What was built

### Metadata pipeline

- `normalizeWorkbookRoot()` — unwraps export wrapper to workbook node
- `buildFieldCatalog()` — deduped `FieldRecord[]` from datasource `column` and `group` nodes; extracts `default-format`, `visual-totals`, and parameter `source-field`
- `fieldReferences.ts` — resolves bracket tokens from formulas, filters, encodings, shelves, groupfilters
- `dependencyGraph.ts` — directed upstream/downstream adjacency; `getDependencySubgraph(id, depth: 2)`
- `fieldUsage.ts` — usage map, dashboard action refs, parameter source refs, `computeUsedFields`
- `fieldLookup.ts` — caption/name lookup indexes; `fieldDisplayLabel()` helper
- `nodeUtils.ts` — shared attr parsing helpers (`attrString`, `PARAMETERS_DATASOURCE`)
- `omnisearch.ts` — `searchFields(index, query, filters)` with precomputed `searchText`
- Jest golden tests against `workbook_export.json`

### Bridge

- `TableauBridge.getWorkbookMetadata()` normalizes export wrapper at load boundary

### UI

- `OmnisearchPanel` + `FieldTable` replace raw JSON viewer in `App.tsx`
- Read-only shell: **Refresh** only — no Save / Apply to Tableau
- Scrollable table of **all** indexed fields, sorted by display label (caption fallback to name)
- Loading, error, and empty-index states
- Build version label in toolbar (`__BUILD_VERSION__` via webpack DefinePlugin)

---

## Key decisions

### Field identity and catalog

| Decision | Rationale |
|----------|-----------|
| **Field ID scheme:** `{datasource}::{fieldName}` | Stable key across catalog, graph, and usage maps. Example: `Parameters::[Parameter 1]`, `federated.10nnk…::[Sales]` |
| **Exclude `metadata-record`** | Physical connection columns — not author-facing logical fields |
| **Exclude action auto-columns** | `group` nodes with `user:auto-column: "sheet_link"` are dashboard action artifacts, not author-facing fields (~32 removed in fixture) |
| **No `type: "set"` in export** | Sets are `group` nodes with `user:ui-builder: "filter-group"` |
| **Classification heuristics** | Parameter → column under `Parameters` datasource; calculated → column with non-literal `calculation` child; set → filter-group; group → other groups |
| **Naming:** `fieldType`, `fieldId`, `fieldName`, `value` | Clearer disambiguation from datasource name (brief originally used `kind`, `name`, `caption`, `formula`) |

### Reference parsing and dependencies

| Decision | Rationale |
|----------|-----------|
| **Reference sources** | Formulas, set/group levels, filters, encodings, column-instances, shelf content (best-effort) |
| **Usage scan includes groupfilter** | `member` and `level` attrs with quote stripping |
| **`source-field` separate from formula parsing** | Parameter domain binding uses dedicated attr, not `calculation.formula`; does not create a dependency edge from source field → parameter |
| **Upstream walk uses `upstream` adjacency** | Fixed bug where subgraph was incorrectly walking downstream for upstream hops |

### `used` flag

`used === true` when the field is referenced in **any** of:

| Signal | Source |
|--------|--------|
| Downstream dependency | Calc / set / group formula or definition |
| Sheet usage | Worksheet or dashboard shelf, filter, encoding |
| Action reference | Workbook `<actions>` nodes (`field-captions`, link `expression`, etc.) |
| Parameter source field | `source-field` attr on Parameters `column` |

`used` is a boolean summary for now; may evolve to a location list in M2+.

**Fixture examples:** `[Segment]` → `used: true` (via source-field, set definition, sheet usage). Segment Parameter → `used: false` (not referenced in any calc or sheet).

### Display attributes

| Decision | Rationale |
|----------|-----------|
| **Aggregation from `visual-totals` on column only** | Do not infer from worksheet `column-instance`, shelves, or embedded `datasource-dependencies` |
| **`FieldRecord` stores `null` for absent attrs** | UI maps `null` → **`default`** for Format and Aggregation — matches Tableau implicit defaults |
| **No human-readable format translation** | Show raw Tableau format string when set (e.g. `p0.00%`) |
| **Include format in `searchText`** | Enables `searchFields(index, 'p0.00%')` to find Profit per Order |

**Column attribute sources (column definition only):**

| `FieldRecord` field | Column attr | UI when null |
|---------------------|-------------|--------------|
| `numberFormat` | `default-format` | **`default`** |
| `defaultAggregation` | `visual-totals` | **`default`** |
| `sourceFieldId` / `sourceFieldName` | `source-field` (parameters only) | **`—`** |

**Fixture examples:**

| Field | `default-format` | `visual-totals` | Table display |
|-------|------------------|-----------------|---------------|
| Profit per Order | `p0.00%` | `Avg` | raw format + `Avg` |
| Sales | `c"$"#,##0;("$"#,##0)` | *(absent)* | raw format + **`default`** |
| Segment | *(absent)* | *(absent)* | **`default`** / **`default`** |
| Segment Parameter | — | — | Source field: **Segment** |

### UI and performance

| Decision | Rationale |
|----------|-----------|
| **Search bar deferred to M2** | `searchFields()` implemented and unit-tested only |
| **Usage map backend-only** | Populated in index; not shown in UI until M2 |
| **Dependency subgraph backend-only** | Tested; interactive DAG is M3 |
| **No virtualization** | ~300 rows acceptable with simple table |
| **Index build in `useMemo`** | Show loading until index ready |

---

## Reference parsing sources

| Source | Location | Example |
|--------|----------|---------|
| Calc formula | `column > calculation.attrs.formula` | `[Sales]`, `[Parameters].[Parameter 1]` |
| Set/group levels | `groupfilter.attrs.level` | `"[Segment]"` |
| Filter | `filter.attrs.column` | `[federated…].[none:Category:nk]` |
| Encoding | `encoding.attrs.field` | `[Calculation_992…]` |
| Column instance | `column-instance.attrs.column` | `"[Category]"` → base column |
| Shelf content | `rows`/`cols`.content | Bracket tokens inside string (best-effort) |
| Parameter source | `column.attrs.source-field` | `[federated…].[Segment]` |

### Parameter `source-field` schema

List parameters fed by a datasource column declare their domain via `source-field` on the parameter `column` node — not in `calculation.formula`.

| Attr | Parent | Format | Example |
|------|--------|--------|---------|
| `source-field` | Parameters `column` (`param-domain-type: list`) | Qualified `[datasource].[field]` | `[federated.10nnk8d1vgmw8q17yu76u06pnbcj].[Segment]` |

The parameter's `calculation` child holds only the default value (`"Consumer"`), not a field reference.

---

## Golden test cases (fixture)

1. **Sales Forecast** — upstream includes `[Sales]`, `[Parameters].[Parameter 1]`, `[Parameters].[Parameter 2]`
2. **Segment Set** — upstream includes `[Segment]`; `fieldType = set`
3. **Parameters** — all params under `Parameters` datasource classified as `parameter`
4. **Hidden column** — e.g. `[Product ID]` has `hidden: true`
5. **Action group absent** — `[Action (Customer Segment)]` not in index; `[Segment Set]` retained
6. **`[Segment]` used** — via source-field, set definition, and sheet usage
7. **Segment Parameter unused** — `used: false`; source field caption **Segment**
8. **Profit per Order** — `numberFormat: "p0.00%"`, `defaultAggregation: "Avg"`
9. **2-hop subgraph** — depth limit enforced
10. **`searchFields('forecast')`** — matches Sales Forecast caption/formula

---

## `FieldRecord` schema

```typescript
type FieldType = 'column' | 'calculated' | 'parameter' | 'set' | 'group';

interface FieldRecord {
  id: string;                          // {datasource}::{fieldId}
  fieldType: FieldType;
  fieldId: string;                     // internal name, e.g. [Sales]
  fieldName: string | null;            // caption
  datasource: string;
  datasourceCaption: string | null;
  role: 'dimension' | 'measure' | null;
  datatype: string | null;
  value: string | null;                // formula / calculation text
  hidden: boolean;
  used: boolean;
  sourceFieldId: string | null;        // parameters only
  sourceFieldName: string | null;
  numberFormat: string | null;         // raw default-format; null = Tableau default
  defaultAggregation: string | null;   // raw visual-totals; null = Tableau default
  searchText: string;                  // precomputed for M2 search
}

interface FieldIndex {
  fields: Map<string, FieldRecord>;
  lookup: FieldLookup;
  usages: Map<string, FieldUsage[]>;
  upstream: Map<string, string[]>;
  downstream: Map<string, string[]>;
}
```

---

## UI spec

### Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│ [Refresh]  Loaded · N fields                          v2026-06-09… │
├──────────────────────────────────────────────────────────────────────┤
│ Field Name │ Field ID │ Type │ Datasource │ Role │ … │ Value       │
│ Sales      │ [Sales]  │ col  │ Superstore │ meas │ … │             │
│ …          │          │      │            │      │   │             │
└──────────────────────────────────────────────────────────────────────┘
```

### Table columns

| Column | Source |
|--------|--------|
| **Field Name** | `fieldName` or fallback to stripped `fieldId` |
| **Field ID** | Internal `fieldId` (monospace) |
| **Field Type** | column / calculated / parameter / set / group |
| **Datasource** | `datasourceCaption` or short datasource name |
| **Role** | dimension / measure / — |
| **Datatype** | `datatype` |
| **Hidden** | yes / no |
| **Used** | yes / no |
| **Source field** | Parameter source caption; else — |
| **Format** | `numberFormat` or **`default`** |
| **Aggregation** | `defaultAggregation` or **`default`** |
| **Value** | Truncated formula; empty for plain columns (monospace, ellipsis) |

### Shell behavior

- Header: **Tableau Poweruser**
- **Refresh** reloads metadata from Tableau and rebuilds index + table
- No Save / destructive write controls
- No search input (M2)
- No row selection behavior (M2)

### Dev server note

Custom Tableau Desktop (authoring build) binds `localhost:8765`. Workspace extension manifest uses `http://localhost:8766/extension/index.html`. Run `npm run serve` from `extension/` alongside `npm run dev`.

---

## Module inventory

### Metadata

| Module | Role |
|--------|------|
| `normalize.ts` | Unwrap export root |
| `fieldCatalog.ts` | Build catalog, classify fields, extract attrs |
| `fieldReferences.ts` | Resolve bracket reference strings |
| `dependencyGraph.ts` | Edges, subgraph (2-hop) |
| `fieldUsage.ts` | Usage map, action refs, parameter source refs, `computeUsedFields` |
| `fieldIndex.ts` | Pipeline orchestration, `listAllFields` |
| `fieldLookup.ts` | Caption/name lookup indexes |
| `nodeUtils.ts` | Shared attr parsing helpers |
| `omnisearch.ts` | `searchFields()`, sort helpers |
| `traverse.ts` | Tree walk utilities |
| `types.ts` | Shared types |

### Bridge + hooks + UI

| Module | Role |
|--------|------|
| `tableau/TableauBridge.ts` | API + normalize at load |
| `hooks/useFieldIndex.ts` | Memoized index from metadata |
| `hooks/useWorkbookMetadata.ts` | Metadata context |
| `components/omnisearch/OmnisearchPanel.tsx` | Toolbar, status, build label |
| `components/omnisearch/FieldTable.tsx` | Attribute table |
| `app/App.tsx` | Shell — OmnisearchPanel as main view |
| `buildInfo.ts` | Webpack build timestamp label |

### Tests

| Test file | Coverage |
|-----------|----------|
| `normalize.test.ts` | Export wrapper unwrap |
| `fieldIndex.test.ts` | Catalog, used, attrs, golden cases |
| `fieldReferences.test.ts` | Reference resolution |
| `omnisearch.test.ts` | Search function |
| `traverse.test.ts` | Tree traversal on fixture |
| `TableauBridge.test.ts` | Bridge unit tests |

---

## Known limitations (carried forward to M2+)

| Limitation | Notes |
|------------|-------|
| **No search UI** | `searchFields()` ready; wiring deferred to M2 |
| **No usage column / detail** | Usage map populated but not displayed |
| **No dependency visualization** | Subgraph API ready; React Flow DAG is M3 |
| **Incomplete reference parsing** | Blends, LODs, table calcs may produce incomplete edges |
| **Dashboard-indirect usage** | Title `run` content and indirect dashboard refs not fully indexed |
| **Worksheet-level overrides** | `column-instance` derivations and shelf overrides not reflected in display attrs |
| **Action groups remain in workbook** | Read-only extension — excluded from catalog only |
| **Desktop smoke test pending** | Fixture-validated; manual Tableau load not yet logged |
| **Beta Extensions API version** | Exact library version for metadata commands TBD |

---

## Deferred work (next milestones)

| Milestone | Deliverable |
|-----------|-------------|
| **M2** | Search-as-you-type bar, facet filters, usage column, selected-row detail |
| **M3** | Interactive 2-up / 2-down dependency DAG for selected field |
| **M4** | v1 ship — Omnisearch complete, read-only |

See `docs/milestones/M2-search-and-polish.md` and `docs/milestones/M3-interactive-dag.md` for upcoming scope.

---

## References

| Document | Content |
|----------|---------|
| `docs/tableau-poweruser-scope.md` | Product vision, v1 scope, milestone plan |
| `docs/workbook-metadata.md` | Node types, classification, usage patterns, attrs |
| `docs/implementation-log.md` | Dated build history |
| `docs/alpha-commands.md` | Alpha command catalog |
| `extension/fixtures/workbook_export.json` | Primary test fixture |
| `AGENTS.md` | Agent team, layer rules, dev commands |
