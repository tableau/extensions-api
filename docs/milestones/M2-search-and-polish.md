# M2 Task Brief — Search + polish

**Status:** Not started  
**Milestone:** M2 — between M1.2 (done) and M3  
**Last updated:** 2026-06-09  
**Prerequisite:** M1.2 field index, `searchFields()`, usage map, dependency subgraph backend

---

## Goal

Wire Omnisearch search-as-you-type and facet filters to the existing field index; add usage detail for the selected row; polish the field table UX for day-to-day authoring review.

---

## In scope

| Item | Description |
|------|-------------|
| **Search bar** | Search-as-you-type via existing `searchFields(index, query, filters)` |
| **Facet filters** | Field type, role, datatype, hidden (`OmnisearchFilters` in `types.ts`) |
| **Usage column / detail** | Show usage locations for selected row via `getUsages(index, fieldId)` |
| **Selected-row detail** | Summary panel: formula, upstream/downstream counts, usage list |
| **Build version label** | Show compile timestamp on output screen (see below) — **done early** |
| **Tests** | Search + filter integration tests; selected-row detail smoke |
| **Docs** | `implementation-log.md` after ship |

---

## Out of scope

- Interactive DAG (M3)
- Destructive metadata edits
- Human-readable format translation
- Full-workbook dependency graph

---

## Build version label (implemented early)

**Purpose:** When testing in Tableau Desktop, confirm which webpack build is loaded after `npm run dev` rebuilds.

| Item | Detail |
|------|--------|
| **Injection** | Webpack `DefinePlugin` sets `__BUILD_VERSION__` to ISO timestamp on **every compile** (including watch) |
| **Display** | Toolbar right edge of `OmnisearchPanel`: `v{formatted datetime}` |
| **Files** | `extension/webpack.config.js`, `extension/src/buildInfo.ts`, `OmnisearchPanel.tsx` |

Each save that triggers webpack watch produces a new label — no manual bump required.

---

## Architecture (M2 delta)

```
OmnisearchPanel
  ├── SearchBar (query state)
  ├── FacetFilters (OmnisearchFilters state)
  ├── searchFields(index, query, filters)  ← already implemented
  ├── FieldTable (filtered results)
  └── FieldDetail (selected row + getUsages)
```

---

## Refactor notes (from M1 review — address during M2)

These are **not blockers** for M2 features; pick up when touching the relevant files.

### P2 — Performance / small clarity wins

| Note | Location | Suggestion |
|------|----------|------------|
| **Avoid throwaway Map in search sort** | `omnisearch.ts` | Add `sortFieldsByLabel(fields: FieldRecord[])` (or accept `Iterable`) instead of `listFieldsSorted(new Map(...))` after filtering |
| **Memoize field list in panel** | `OmnisearchPanel.tsx` | Wrap `listAllFields(index)` / `searchFields(...)` in `useMemo` keyed on `[index, query, filters]` |
| **Dedup usage inserts** | `fieldUsage.ts` `addUsage` | Use a `Set<string>` of `usageKey` per field during scan; convert to arrays once at end (avoids spread + `.some()` on every insert) |
| **Dedup dependency edges** | `dependencyGraph.ts` | Same Set-during-build pattern for downstream adjacency lists |

### Cleanup (optional in M2)

| Note | Location | Suggestion |
|------|----------|------------|
| **Dead M0 component** | `MetadataViewer.tsx` | Remove or hide behind dev-only route — `App.tsx` no longer uses it |
| **Fixture drift** | `fieldIndex.test.ts`, `traverse.test.ts` | Re-baseline when export changes (e.g. Segment Set removed from current fixture); add set-classification unit test with inline node if needed |

### Already done (M1.x cleanup — do not re-do)

- Shared `attrString` / `PARAMETERS_DATASOURCE` → `nodeUtils.ts`
- Field lookup indexes → `fieldLookup.ts` on `FieldIndex`
- Parameter `source-field` `used` signal derived from `sourceFieldId` (no duplicate scan)
- `getDependencySubgraph` upstream walk fixed (walks `upstream`, not inverted adjacency)

---

## Acceptance criteria

- [ ] Search bar filters table as user types (name, formula, format, etc. via `searchText`)
- [ ] Facet filters compose with search query
- [ ] Selecting a row shows usage locations
- [ ] Build version visible on output screen and updates after webpack rebuild
- [ ] No direct `tableau.extensions` calls in UI components
- [ ] Tests cover search + at least one facet filter combination

---

## Test plan

| Scenario | Expected |
|----------|----------|
| Empty query | All indexed fields (minus facet filters) |
| `forecast` | Includes Sales Forecast |
| Hidden facet | Only `hidden: true` fields |
| Select Profit | Usage list non-empty |
| Rebuild extension | Build label timestamp changes |

---

## Handoff order

1. **documenter** — this brief + scope cross-links
2. **ui-designer** — SearchBar, FacetFilters, FieldDetail, wire `searchFields`
3. **workbook-metadata** — P2 refactors if touching search/usage modules
4. **tester** — integration tests, lint, build, Desktop smoke
5. **documenter** — `implementation-log.md`

---

## Files (expected touch)

```
extension/src/components/omnisearch/OmnisearchPanel.tsx
extension/src/components/omnisearch/SearchBar.tsx          (new)
extension/src/components/omnisearch/FacetFilters.tsx       (new)
extension/src/components/omnisearch/FieldDetail.tsx        (new)
extension/src/metadata/omnisearch.ts
extension/src/__tests__/omnisearch.test.ts
docs/implementation-log.md
```

Build version (already landed):

```
extension/webpack.config.js
extension/src/buildInfo.ts
```
