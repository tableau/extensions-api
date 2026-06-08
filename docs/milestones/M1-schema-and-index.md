# M1 Task Brief — Schema + Field Index + Field Table

**Feature:** Tableau Poweruser — Omnisearch (foundation + first UI)  
**Milestone:** M1 — Schema, index, field table  
**Status:** Ready for implementation  
**Prerequisite:** `extension/fixtures/workbook_export.json` (captured; build `main.26.0531.2046`)  
**Blocks:** M2 (search bar, facets, usage column, row detail), M3 (interactive DAG)

---

## Goal

Build the metadata **field index** (catalog, usage map, 2-hop dependency graph, search function for later) **and** a minimal UI that lists **all** indexed fields in a simple attribute table — replacing the raw JSON viewer. No search bar in M1.

---

## Scope

### In M1

| Area | Deliverable |
|------|-------------|
| **Normalize** | Unwrap live export root (`_comment` + `children[0]`) to workbook node |
| **Field catalog** | Deduped `FieldRecord[]` from workbook-level `datasources` |
| **Classification** | column, calculated, parameter, set, group (per `docs/workbook-metadata.md`) |
| **Reference parsing** | Formula + shelf/filter/encoding/groupfilter refs |
| **Dependency graph** | Directed edges; `getDependencySubgraph(id, depth: 2)` — backend only in M1 |
| **Usage map** | Field ID → worksheet/dashboard usage locations — backend only in M1 |
| **Search function** | `searchFields(index, query, filters)` — **unit-tested only**; wired to UI in M2 |
| **Types** | Shared types in `metadata/types.ts` |
| **Tests** | Jest golden tests on fixture; fix broken `traverse.test.ts` |
| **Docs** | Usage-node patterns documented in `workbook-metadata.md` |
| **Bridge** | Normalize metadata once at load boundary |
| **UI — field table** | Scrollable table of **all** field attributes from index |
| **UI — shell** | Replace `MetadataViewer` in `App`; read-only (Refresh only, no Save) |

### Out of M1

- **Search bar / search-as-you-type UI** — M2
- Facet filter controls (kind, role, datatype, hidden) — M2
- Usage column in table / usage detail panel — M2
- Row selection detail panel — M2
- Interactive DAG / React Flow — M3
- Save / `load-underlying-metadata` in Omnisearch view
- Web Workers
- Dashboard-via-worksheet indirect usage refinement (document as limitation if needed)

---

## Architecture

```
workbook_export.json / live metadata
        │
        ▼
 normalizeWorkbookRoot()          ← metadata/normalize.ts
        │
        ▼
 buildFieldIndex(root)            ← metadata/fieldIndex.ts
   ├── buildFieldCatalog()
   ├── buildDependencyGraph()
   ├── buildUsageMap()
   └── returns FieldIndex
        │
        ▼
 searchFields(index, query)       ← metadata/omnisearch.ts (tests only in M1)
        │
        ▼
 useFieldIndex                     ← hooks/useFieldIndex.ts
        │
        ▼
 OmnisearchPanel                   ← components/omnisearch/
   └── FieldTable                  ← all fields, sorted
```

**Field ID scheme (locked for M1):**

```
{datasourceName}::{fieldName}
```

Examples: `Parameters::[Parameter 1]`, `federated.10nnk…::[Sales]`, `federated.10nnk…::[Segment Set]`

**Exclude from catalog:** `metadata-record` nodes (physical connection columns).

---

## UI spec (M1 — field table only)

### Layout

```
┌──────────────────────────────────────────────────┐
│ Tableau Poweruser                                │
├──────────────────────────────────────────────────┤
│ [Refresh]  Loaded · N fields                     │
├──────────────────────────────────────────────────┤
│ Caption    │ Kind   │ Role │ Type │ Hidden │ …   │
│ Sales      │ column │ meas │ real │        │     │
│ …          │        │      │      │        │     │
└──────────────────────────────────────────────────┘
```

### Field list

- Display **every** field in the index (no filtering)
- Sort by caption (fallback to name), A→Z
- Status line shows total count: e.g. `318 fields`

### Table columns (M1)

| Column | Source |
|--------|--------|
| **Caption** | `FieldRecord.caption` or fallback to stripped `name` |
| **Name** | Internal `FieldRecord.name` (e.g. `[Sales]`) |
| **Kind** | column / calculated / parameter / set / group |
| **Datasource** | `datasourceCaption` or short datasource name |
| **Role** | dimension / measure / — |
| **Datatype** | `datatype` |
| **Hidden** | yes / no |
| **Formula** | truncated single line if present; empty for plain columns |

- Scrollable body; sticky header row
- Monospace optional for Name and Formula columns only
- No row selection behavior required in M1 (M2)

### States

| State | UI |
|-------|-----|
| Loading | “Loading workbook…” |
| Error | Show error message from context |
| Empty index | “No fields found in workbook metadata.” |

### Shell changes

- `App.tsx`: header **Tableau Poweruser**; render `OmnisearchPanel` instead of `MetadataViewer`
- **Remove Save / Apply to Tableau** from this view (read-only Omnisearch)
- Keep **Refresh** to reload metadata from Tableau

---

## Data types (proposed)

Add to `extension/src/metadata/types.ts`:

```typescript
type FieldKind = 'column' | 'calculated' | 'parameter' | 'set' | 'group';

interface FieldRecord {
  id: string;
  kind: FieldKind;
  name: string;
  caption: string | null;
  datasource: string;
  datasourceCaption: string | null;
  role: 'dimension' | 'measure' | null;
  datatype: string | null;
  formula: string | null;
  hidden: boolean;
  searchText: string;  // precomputed for M2 search
}

interface FieldUsage {
  sheet: string;
  sheetType: 'worksheet' | 'dashboard';
  context: string;
}

interface FieldIndex {
  fields: Map<string, FieldRecord>;
  usages: Map<string, FieldUsage[]>;
  upstream: Map<string, string[]>;
  downstream: Map<string, string[]>;
}

interface OmnisearchFilters {
  kinds?: FieldKind[];
  roles?: ('dimension' | 'measure')[];
  datatypes?: string[];
  hidden?: 'all' | 'visible' | 'hidden';
}
```

---

## Reference parsing (M1 minimum)

Support resolving these patterns from the fixture:

| Source | Location | Example |
|--------|----------|---------|
| Calc formula | `column > calculation.attrs.formula` | `[Sales]`, `[Parameters].[Parameter 1]` |
| Set/group levels | `groupfilter.attrs.level` | `"[Segment]"` |
| Filter | `filter.attrs.column` | `[federated…].[none:Category:nk]` |
| Encoding | `encoding.attrs.field` | `[Calculation_992…]` |
| Column instance | `column-instance.attrs.column` | `"[Category]"` → base column |
| Shelf content | `rows`/`cols`.content | Bracket tokens inside string (best-effort) |

**Golden test cases (required):**

1. **Sales Forecast** — upstream includes `[Sales]`, `[Parameters].[Parameter 1]`, `[Parameters].[Parameter 2]`
2. **Segment Set** — upstream includes `[Segment]`; kind = `set`
3. **Parameters** — all params under `Parameters` datasource classified as `parameter`
4. **Hidden column** — e.g. `[Product ID]` has `hidden: true`
5. **2-hop subgraph** — depth limit enforced (unit test only; not shown in UI yet)
6. **searchFields('forecast')** — matches Sales Forecast caption/formula (test only)

---

## Usage scanning (M1 minimum)

Build usage map in index (not displayed in UI until M2). Same requirements as before:

- `[Profit]` and `[Sales Forecast]` each have ≥1 worksheet usage in fixture tests

---

## Acceptance criteria

### Metadata layer

- [ ] `normalizeWorkbookRoot()` handles `workbook_export.json` wrapper
- [ ] `buildFieldIndex()` runs on fixture without error in <2s
- [ ] Catalog includes columns, calcs, parameters, sets, groups; excludes `metadata-record`
- [ ] `[Segment Set]` → `set`; Parameters → `parameter`; hidden fields flagged
- [ ] `getDependencySubgraph(id, 2)` works in unit tests
- [ ] Golden dependency + search tests pass
- [ ] Usage map populated for Profit, Sales, Sales Forecast (tests only)
- [ ] `traverse.test.ts` updated for `workbook_export.json`

### UI layer

- [ ] Extension shows **OmnisearchPanel** (not raw JSON) on load
- [ ] Table displays **all** indexed fields with M1 columns
- [ ] Field count shown in status line
- [ ] Loading and error states handled
- [ ] No search input in M1
- [ ] No Save / destructive write controls in Omnisearch view
- [ ] Refresh reloads metadata and rebuilds index + table

### Quality

- [ ] `npm test`, `npm run lint`, `npm run build` pass in `extension/`
- [ ] `docs/workbook-metadata.md` updated with usage-node patterns
- [ ] `docs/implementation-log.md` appended with M1 entry

---

## Agent assignments

| Agent | Deliverables |
|-------|--------------|
| **documenter** | Update `workbook-metadata.md`; append M1 entry to `implementation-log.md` |
| **workbook-metadata** | Index pipeline modules + `searchFields()` + unit tests |
| **tableau-bridge** | `normalizeWorkbookRoot` at metadata load |
| **ui-designer** | `OmnisearchPanel`, `FieldTable`; `useFieldIndex`; wire into `App.tsx`; remove save UI from Omnisearch view |
| **tester** | Metadata tests + smoke checklist (extension loads, table lists fields); lint/build |

### Handoff sequence

```
1. documenter        — schema baseline confirmed
2. workbook-metadata — index + searchFields + tests (UI can start once API is stable)
3. tableau-bridge    — normalize at load
4. ui-designer       — OmnisearchPanel + FieldTable + App shell
5. tester            — full verification
6. documenter        — completion log
```

**Parallel OK:** ui-designer can stub `buildFieldIndex` against fixture while workbook-metadata finishes, then swap to real API.

---

## Files to touch

### New — metadata

```
extension/src/metadata/normalize.ts
extension/src/metadata/fieldCatalog.ts
extension/src/metadata/fieldReferences.ts
extension/src/metadata/dependencyGraph.ts
extension/src/metadata/fieldUsage.ts
extension/src/metadata/fieldIndex.ts
extension/src/metadata/omnisearch.ts
extension/src/__tests__/normalize.test.ts
extension/src/__tests__/fieldIndex.test.ts
extension/src/__tests__/fieldReferences.test.ts
extension/src/__tests__/omnisearch.test.ts
```

### New — UI

```
extension/src/hooks/useFieldIndex.ts
extension/src/components/omnisearch/OmnisearchPanel.tsx
extension/src/components/omnisearch/FieldTable.tsx
```

### Modify

```
extension/src/metadata/types.ts
extension/src/tableau/TableauBridge.ts
extension/src/app/App.tsx
extension/src/__tests__/traverse.test.ts
docs/workbook-metadata.md
docs/implementation-log.md
docs/tableau-poweruser-scope.md
```

### Deprecate (do not delete unless unused)

```
extension/src/components/MetadataViewer.tsx   — replace with OmnisearchPanel; keep file only if dev toggle wanted later
```

---

## Risks

| Risk | Mitigation |
|------|------------|
| Reference resolution incomplete | Golden tests; document gaps |
| Large field count UI perf | Virtualization deferred; ~300 rows OK with simple table in M1 |
| Index build blocks first paint | Build in `useMemo`; show loading until ready |
| Formula column width | Truncate with CSS ellipsis; full text in title tooltip |

---

## Definition of done

M1 is complete when:

1. Extension loads in Tableau (or dev server) showing a table of all indexed fields  
2. All metadata unit tests pass on `workbook_export.json`  
3. Docs updated  

**Next milestone:** M2 — search-as-you-type bar, facet filters, usage column, selected-row detail _(brief TBD)_.

---

## References

- Product scope: `docs/tableau-poweruser-scope.md`
- Schema notes: `docs/workbook-metadata.md`
- Fixture: `extension/fixtures/workbook_export.json`
- UI conventions: `.cursor/skills/ui/tableau-react-ui/SKILL.md`
- Layer rules: `AGENTS.md`
