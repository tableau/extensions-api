# Implementation Log

Living record of what was built, key decisions, and Tableau versions tested.

---

## 2026-06-08 — Agent team + extension scaffold

### What was built

- 6-agent Cursor team (coordinator, ui-designer, tableau-bridge, workbook-metadata, tester, documenter)
- Project skills, rules, and `AGENTS.md` orchestration
- Greenfield `extension/` scaffold with `TableauBridge`, `ExtensionContext`, raw JSON viewer
- Seeded `docs/alpha-commands.md` from BeFree sample

### Key decisions

- Extension lives in `extension/` (not `Samples-Typescript/`) for clean product separation
- Coding split: Bridge (API/shell) + Metadata (pure JSON domain)
- v1 primary API: `tabui/save-underlying-metadata` and `tabui/load-underlying-metadata`
- UI accesses Tableau only via `TableauBridge` through React context

### Modules

- `extension/src/tableau/TableauBridge.ts`
- `extension/src/tableau/ExtensionContext.tsx`
- `extension/src/hooks/useWorkbookMetadata.ts`
- `extension/src/components/MetadataViewer.tsx`
- `.cursor/agents/`, `.cursor/skills/`, `.cursor/rules/`

### Tableau version tested

- Desktop build: _pending first manual smoke test_

### Open questions

- Exact beta Extensions API library version required for metadata commands
- Workbook JSON schema — capture first live `save-underlying-metadata` response

---

## 2026-06-08 — Tableau Poweruser scoping + live metadata fixture

### What was captured

- Product requirements and v1 scope documented in `docs/tableau-poweruser-scope.md`
- Workbook metadata schema notes from live export in `docs/workbook-metadata.md`
- Live fixture: `extension/fixtures/workbook_export.json` (Superstore-based workbook)
- Shallow auto-schema: `extension/fixtures/workbook_export_schema.json`
- Removed synthetic `minimal-workbook.json` (did not match live export shape)

### Key decisions

- **Product name:** Tableau Poweruser — modular developer utility extension
- **v1 scope:** Omnisearch only (read-only); all other tools post-v1
- **Post-v1 priorities:** field name cleanup (toggleable rules), then total formatter
- **Omnisearch field universe:** all columns, calcs, parameters, sets, groups
- **Dependency graph:** 2 hops upstream/downstream; interactive DAG for selected field
- **Sets in metadata:** no `type: "set"` — sets are `group` nodes with `user:ui-builder: "filter-group"`
- **Export root:** wrapped in `_comment` + `children[]`; inner `workbook` node is indexing entry point
- **Fixtures:** single canonical export at `extension/fixtures/workbook_export.json`

### Modules

- `docs/tableau-poweruser-scope.md` — product scope, milestones, acceptance criteria
- `docs/workbook-metadata.md` — node types, classification heuristics, fixture notes
- `extension/fixtures/workbook_export.json`
- `extension/fixtures/workbook_export_schema.json`

### Tableau version tested

- Desktop build: `main.26.0531.2046` (from fixture `_comment` / `source-build`)
- Extension Desktop smoke test: _pending_

### Open questions

- Exact beta Extensions API library version required for metadata commands
- Usage-location reference patterns in worksheet/dashboard nodes (M1)
- Formula/set reference parsing edge cases (blends, LODs, table calcs)
- Field cleanup rule catalog (post-v1)
- Totals formatting node location in metadata (post-v1)
- `traverse.test.ts` still imports removed `minimal-workbook.json` — update when M1 starts

---

## 2026-06-08 — M1: Field index + Omnisearch field table

### What was built

- Metadata field index pipeline: normalize, catalog, references, dependency graph, usage map, search function
- Omnisearch UI: `OmnisearchPanel` + `FieldTable` listing all indexed fields (read-only, Refresh only)
- Jest golden tests against `workbook_export.json`
- `TableauBridge.getWorkbookMetadata()` normalizes export wrapper to workbook root

### Key decisions

- Field ID: `{datasource}::{fieldName}` (e.g. `Parameters::[Parameter 1]`)
- Exclude `metadata-record` from catalog
- Usage scanning includes `groupfilter` member/level attrs with quote stripping
- Search bar deferred to M2; `searchFields()` implemented and tested only
- Replaced raw JSON viewer in `App.tsx` with field table

### Modules

- `extension/src/metadata/normalize.ts`
- `extension/src/metadata/fieldCatalog.ts`
- `extension/src/metadata/fieldReferences.ts`
- `extension/src/metadata/dependencyGraph.ts`
- `extension/src/metadata/fieldUsage.ts`
- `extension/src/metadata/fieldIndex.ts`
- `extension/src/metadata/omnisearch.ts`
- `extension/src/hooks/useFieldIndex.ts`
- `extension/src/components/omnisearch/OmnisearchPanel.tsx`
- `extension/src/components/omnisearch/FieldTable.tsx`

### Tableau version tested

- Fixture build: `main.26.0531.2046`
- Extension Desktop smoke test: _pending_

### Open questions

- Exact beta Extensions API library version required for metadata commands
- Formula/set reference parsing edge cases (blends, LODs, table calcs) — partial coverage
- Field cleanup rule catalog (post-v1)
- Totals formatting node location in metadata (post-v1)
