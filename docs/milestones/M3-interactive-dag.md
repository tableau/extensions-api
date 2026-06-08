# M3 Task Brief — Interactive DAG

**Status:** Not started  
**Milestone:** M3 — between M2 (search + polish) and M4 (v1 ship)  
**Last updated:** 2026-06-09  
**Prerequisite:** M2 Omnisearch UI with row selection; `getDependencySubgraph()` backend

---

## Goal

Add an interactive dependency graph view for the **selected** field: 2 hops upstream, 2 hops downstream, pan/zoom, truncation indicators when branches continue beyond depth limit.

---

## In scope

| Item | Description |
|------|-------------|
| **DAG panel** | Renders subgraph for selected `FieldRecord` only |
| **Depth** | Exactly 2 hops upstream + 2 downstream (`getDependencySubgraph(id, 2)`) |
| **Interaction** | Pan and zoom on the graph canvas |
| **Truncation** | Visual indicator when `truncatedUpstream` or `truncatedDownstream` is true |
| **Edge semantics** | `formula` vs `set-definition` / `group-definition` (from existing `FieldEdge.via`) |
| **Tests** | Subgraph node/edge assertions on fixture; UI smoke for selection → graph update |
| **Docs** | `implementation-log.md`, note Desktop build tested |

---

## Out of scope

- Full-workbook graph
- Edit/rename from graph nodes
- Navigate/focus field in Tableau Desktop
- Layout algorithm research beyond a simple layered/tree layout (keep v1 pragmatic)

---

## Backend readiness

| Item | Status |
|------|--------|
| `getDependencySubgraph(fields, upstream, downstream, fieldId, maxDepth)` | Ready |
| Upstream walk uses `upstream` adjacency | **Fixed** in M1.x cleanup (was incorrectly walking downstream) |
| Golden test: Sales Forecast depth-1 upstream | Includes Sales + Parameter 1 + Parameter 2 |

---

## Architecture (M3 delta)

```
OmnisearchPanel
  ├── … M2 search + table …
  ├── FieldDetail (selected row)
  └── DependencyGraph
        └── getDependencySubgraph(index, selectedId, 2)
              ├── nodes: FieldRecord[]
              ├── edges: FieldEdge[]
              └── truncatedUpstream / truncatedDownstream
```

**Performance:** Index once in memory; render subgraph lazily when selection changes (scope doc requirement).

---

## Refactor notes (from M1 review — address during M3)

These are **not blockers** for the DAG feature; pick up when touching the relevant files.

### P3 — Module boundaries / clarity

| Note | Location | Suggestion |
|------|----------|------------|
| **Split usage vs scanners** | `fieldUsage.ts` | Extract action-ref and `computeUsedFields` logic into `fieldScanners.ts` (or merge with reference scanners); keep `fieldUsage.ts` for sheet usage locations only |
| **Shared datasource walk** | `fieldCatalog.ts`, `dependencyGraph.ts` | Introduce `forEachDatasourceColumn(workbook, fn)` or a small `WorkbookContext` built once in `buildFieldIndexFromWorkbook` to avoid repeated datasources subtree walks |
| **Field ID naming** | `types.ts` `FieldRecord` | Consider renaming `id` → `qualifiedId` and documenting `fieldId` as bracket name — reduces confusion when wiring graph node labels |
| **Remove dead M0 UI** | `MetadataViewer.tsx` | Delete if still unused, or gate behind dev flag |

### P2 — Performance (if graph feels slow on large subgraphs)

| Note | Location | Suggestion |
|------|----------|------------|
| **Memoize subgraph** | `useDependencySubgraph` hook (new) | `useMemo(() => getDependencySubgraph(...), [index, selectedId])` |
| **Dedup edge building** | `dependencyGraph.ts` | Set-based downstream build (same note as M2) |

### DAG-specific

| Note | Suggestion |
|------|------------|
| **Do not recompute inverted adjacency** | `getDependencySubgraph` uses `upstream` and `downstream` directly — keep it that way |
| **Node label helper** | Reuse `fieldDisplayLabel` from `fieldLookup.ts` for graph node captions |
| **Selection sync** | Table row selection drives graph center node; graph node click optional for v1 |

### Already done (M1.x cleanup — do not re-do)

- `FieldLookup` on `FieldIndex` for O(1) caption/bracket resolution
- `nodeUtils.ts` shared attr helpers
- Parameter source `used` from `sourceFieldId` on catalog records

---

## Acceptance criteria

- [ ] Selecting a field updates DAG to 2-up / 2-down subgraph centered on that field
- [ ] Upstream nodes are dependencies (fields this field references)
- [ ] Downstream nodes are dependents (fields that reference this field)
- [ ] Truncation indicators visible when depth limit cuts off further hops
- [ ] Pan/zoom works on graph viewport
- [ ] No destructive save calls
- [ ] Subgraph tests pass on `workbook_export.json`

---

## Test plan (fixture)

| Assertion | Example |
|-----------|---------|
| From Sales Forecast depth-1 upstream | Nodes include Sales, Parameter 1, Parameter 2 |
| From Sales depth-2 downstream | Includes Sales Forecast (and related calcs) |
| Truncation flag | Set when a branch has neighbors beyond max depth |
| Edge `via` | Sales Forecast → Sales edge is `formula` |

---

## Handoff order

1. **documenter** — this brief + graph semantics in `workbook-metadata.md` if needed
2. **workbook-metadata** — subgraph edge cases, P3 refactors if touching index pipeline
3. **ui-designer** — DependencyGraph component, layout, pan/zoom, truncation UI
4. **tester** — subgraph tests, lint, build, Desktop smoke with selection → graph
5. **documenter** — `implementation-log.md`

---

## Files (expected touch)

```
extension/src/components/omnisearch/DependencyGraph.tsx   (new)
extension/src/hooks/useDependencySubgraph.ts            (new)
extension/src/metadata/dependencyGraph.ts
extension/src/__tests__/fieldIndex.test.ts
docs/implementation-log.md
docs/workbook-metadata.md                                 (optional: graph semantics)
```
