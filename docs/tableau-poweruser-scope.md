# Tableau Poweruser — Product Scope

Living requirements document for the **Tableau Poweruser** extension. Captures scoping decisions from planning sessions. Expect additions and changes before implementation begins.

**Status:** M1.2 complete — M2 next (search bar + polish)  
**Last updated:** 2026-06-09

---

## Vision

**Working title:** Tableau Poweruser

Enable Tableau developers to work more efficiently by surfacing features and workbook information prominently — faster and more reliable authoring.

**Architecture intent:** Modular extension. Additional tools ship over time as new tabs or a tool picker (navigation pattern TBD). Internally, prefer a **tool registry** so tools can be added without rewriting the shell.

**Target environment:** Custom Tableau Desktop build (not publicly accessible). Schema and behavior are validated against that build only.

---

## v1 scope (locked)

**v1 ships Omnisearch only.** All other tools are post-v1.

| In v1 | Post-v1 |
|-------|---------|
| Omnisearch (read-only) | Field name cleanup |
| | Total formatter |
| | Sheet name cleanup |
| | Identify unused sheets |
| | Dashboard formatter |

---

## v1 feature: Omnisearch

### Goal

Search-as-you-type across all workbook fields; show usage locations and a 2-level dependency graph in table and interactive DAG views.

### Mode

**Read-only.** No saves, renames, or navigation into Desktop from search results.

### Field universe

All field-like objects:

- Dimensions and measures (datasource columns)
- Calculated fields
- Parameters
- Sets
- Groups

### Search / filter attributes (initial)

- Name
- Datatype
- Description (where present — often `caption`)
- Formula (where applicable — child `calculation` node)
- Visibility (`hidden` attr)
- Additional attributes TBD after schema review

### Results presentation

| View | Behavior |
|------|----------|
| **Table** | Filterable list; usage locations; summary of 1–2 hop dependencies |
| **DAG** | Interactive graph (pan/zoom) for **selected** field — 2 levels upstream, 2 levels downstream |

### Dependency semantics (proposed)

- **Upstream:** fields referenced by this field’s formula or set/group definition
- **Downstream:** fields that reference this field in their formula/definition
- **Depth:** exactly 2 hops from the selected node; truncate with indicator if branch continues
- **Scope:** field-centric subgraph only (not whole-workbook graph)

### Explicitly out of v1

- Edit/rename from search
- Navigate/focus field in Desktop (unless alpha API surfaces later)
- Full-workbook dependency graph
- Any `load-underlying-metadata` / destructive writes

### Acceptance criteria

- [ ] Index includes dimensions, measures, calcs, parameters, sets, groups (or documented exclusions)
- [ ] Search filters on indexed data: name, datatype, visibility, formula, description
- [ ] Row selection shows usage locations (per schema)
- [ ] DAG shows 2 hops upstream and downstream; interactive pan/zoom
- [ ] No destructive save calls anywhere in v1
- [ ] Schema notes tagged with Desktop build id

---

## Post-v1 features (deferred, intent preserved)

### Field name cleanup (priority after Omnisearch)

- Toggleable **formatting rules** (not free-form regex in v1 of this tool)
- Live preview: before → after per affected field
- Preview + confirm → destructive save
- Rule catalog and conflict resolution TBD in design session

### Total formatter (second post-v1 priority)

- Easier access to Tableau totals formatting options
- Schema location for totals nodes TBD
- May require metadata edit and/or `tabdoc` commands

### Sheet name cleanup

- Bulk replace / bulk edit with preview

### Identify unused sheets

- Read-only; shares usage index with Omnisearch

### Dashboard formatter

- Bulk edit layout options (borders, corner radius, background colour, etc.)
- Zone selection UX: **multi-select by name** (when built)

---

## Cross-cutting requirements (all future write tools)

1. **Refresh-before-edit** — reload metadata before mutations; detect stale state
2. **Preview + confirm** — list affected objects before save
3. **Undo awareness** — `load-underlying-metadata` is destructive with no undo
4. **Schema drift tolerance** — unknown node types skipped gracefully
5. **Performance** — index once in memory; lazy DAG rendering for selected subgraph

---

## Milestone plan

| # | Milestone | Deliverable | Status |
|---|-----------|-------------|--------|
| **M0** | Smoke test | Extension loads on custom Desktop; raw metadata visible | Export captured; Desktop smoke pending |
| **M1** | Schema + index + field table | Field index, usage/graph backend, table listing all fields (no search bar) | **Done** — see implementation log |
| **M1.1** | Catalog + `used` | Exclude action auto-columns; `used` boolean per field (incl. parameter `source-field`) | **Done** — see implementation log |
| **M1.2** | Field display attrs | Parameter `source-field` on record + table; column `default-format` + `visual-totals`; null → **default** in table | **Done** — see implementation log |
| **M2** | Search + polish | Search-as-you-type bar, facet filters, usage column, selected-row detail | Not started — see `docs/milestones/M2-search-and-polish.md` |
| **M3** | Interactive DAG | 2-up / 2-down graph for selected field | Not started — see `docs/milestones/M3-interactive-dag.md` |
| **M4** | **v1 ship** | Omnisearch complete, read-only | Not started |

Post-v1 milestones (field cleanup, total formatter, etc.) will be briefed separately.

---

## Fixtures

| File | Purpose |
|------|---------|
| `extension/fixtures/workbook_export.json` | Primary reference export from live workbook (Superstore-based) |
| `extension/fixtures/workbook_export_schema.json` | Auto-generated shallow JSON Schema — structural hint only |

**Removed:** `extension/fixtures/minimal-workbook.json` — did not match real export shape.

See `docs/workbook-metadata.md` for node-level schema notes derived from the export.

---

## Open items before coding

- Desktop smoke test (M0)
- Omnisearch field classification heuristics — validate against export during M1
- Usage-location reference patterns in worksheet/dashboard nodes
- Formula reference parsing rules for 2-hop graph (calcs vs sets vs groups)
- Field cleanup rule catalog (post-v1)
- Totals node location in metadata (post-v1)
- Navigation shell: tabs vs tool picker (can defer until second tool ships)

---

## Agent handoff order (when implementation starts)

```
documenter → workbook-metadata → tableau-bridge → ui-designer → tester → documenter
```

Layer rules unchanged — see `AGENTS.md`.
