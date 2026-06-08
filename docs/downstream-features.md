# Downstream Features — Post-v1 Ideas

Living backlog of tools that build on the Omnisearch foundation (field index, usage map, dependency graph). These are **not scheduled milestones** — capture intent and technical notes so design sessions can promote items into briefs.

**Status:** Ideas only — no implementation started  
**Last updated:** 2026-06-09  
**Prerequisite:** v1 Omnisearch (M4) complete; most tools reuse `buildFieldIndex()` and worksheet traversal patterns from M1.

See also: post-v1 priorities in `docs/tableau-poweruser-scope.md` (field name cleanup, total formatter, sheet cleanup, unused sheets, dashboard formatter).

---

## Tool registry intent

Future tools ship as additional tabs or entries in a tool picker. Each tool should:

- Load metadata read-only by default; destructive writes follow **refresh-before-edit → preview → confirm** (see scope doc).
- Reuse `TableauBridge` and pure `metadata/` functions — no direct `tableau.extensions` calls from UI.
- Document new alpha commands in `docs/alpha-commands.md` before wrapping in production code.

---

## 1. Aggregation checker

### Problem

The same measure often appears on multiple worksheets with different aggregations (e.g. **Sum** on one sheet, **Avg** on another). Inconsistent aggregation is a common source of “the numbers don’t match” bugs and slows workbook review.

Today, authors must open each sheet and inspect pill aggregation manually. There is no workbook-wide consistency report.

### Goal

Scan every worksheet and report, per base field, **which aggregation is used on which sheets**. Flag fields where more than one aggregation appears across the workbook (or within a user-selected sheet group).

**Mode (proposed):** Read-only audit. Optional future phase: bulk-normalize aggregations with preview + confirm save.

### What counts as “aggregation”

Worksheet-level aggregation lives on `column-instance` nodes under each worksheet’s `datasource-dependencies`:

```json
{
  "type": "column-instance",
  "attrs": {
    "name": "[sum:Sales:qk]",
    "column": "[Sales]",
    "derivation": "Sum"
  }
}
```

| Source | Meaning | Use in checker |
|--------|---------|----------------|
| `column-instance.attrs.derivation` | Aggregation applied on that sheet (Sum, Avg, Min, CountD, None, Month, User, …) | **Primary signal** — one row per (field, sheet, shelf/context) |
| `column.attrs.visual-totals` | Column default aggregation (e.g. Profit per Order → `Avg`) | **Reference default** — compare sheet derivations against declared default |
| Implicit Tableau default | Absent `visual-totals` on measure columns | Treat as Tableau implicit (typically Sum for measures) — document in UI |

**Do not** conflate `visual-totals` with per-sheet `derivation`. The field index already indexes `defaultAggregation` from column attrs only (`docs/workbook-metadata.md`).

### Non-aggregation derivations

Some `derivation` values are date parts or attribute semantics, not numeric aggregation:

| Derivation | Typical role |
|------------|--------------|
| `None` | Dimension used as-is (no aggregate) |
| `Month`, `Quarter`, `Year`, `Day`, … | Date truncation |
| `User` | User-defined / non-standard instance |

**Policy (proposed):** Only flag inconsistency among **numeric aggregation** derivations (Sum, Avg, Min, Max, Count, CountD, Median, StdDev, Var, etc.). Date truncations and `None` on dimensions are reported separately or excluded from “inconsistent aggregation” warnings.

### Scope of scan

| Include | Exclude (initial) |
|---------|-------------------|
| Worksheets (23 in fixture) | Dashboards — no direct shelf pills; indirect via worksheets TBD |
| `rows`, `cols`, `encoding`, filters referencing `column-instance` | Table calc instances until parsing matures |
| Base column resolved via existing `column-instance` → `column` map | Physical `metadata-record` columns |

Reuse `buildWorksheetRefContext()` and `fieldReferences.ts` resolution from the usage indexer (`fieldUsage.ts`).

### Proposed data model

```ts
interface FieldAggregationUsage {
  fieldId: string;
  sheet: string;
  derivation: string;
  contexts: string[];  // e.g. "rows", "encoding:color", "filter"
}

interface AggregationReport {
  fieldId: string;
  fieldName: string;
  defaultAggregation: string | null;
  usages: FieldAggregationUsage[];
  distinctAggregations: string[];
  isInconsistent: boolean;
}
```

Pure functions in `metadata/`:

- `buildAggregationIndex(workbook)` → `Map<fieldId, FieldAggregationUsage[]>`
- `buildAggregationReport(index, aggIndex)` → `AggregationReport[]`
- `filterInconsistent(reports)` → subset where `distinctAggregations.length > 1` (after numeric-only filter)

### UI concept

| View | Behavior |
|------|----------|
| **Summary** | Count of inconsistent fields; link to detail |
| **Table** | Field name, default agg, distinct aggs, sheet count, severity |
| **Detail** | Per-field matrix: rows = sheets, columns = aggregation + contexts (shelf, encoding, filter) |
| **Filters** | Inconsistent only; field type (measure/calc); datasource; sheet name search |

Integrate with Omnisearch: selecting a field in Omnisearch could deep-link to its aggregation detail panel.

### Acceptance criteria (when briefed)

- [ ] Every worksheet `column-instance` with a resolvable base column contributes to the index
- [ ] Report lists all distinct numeric aggregations per field across worksheets
- [ ] Inconsistent fields are flagged when ≥2 distinct numeric aggregations exist
- [ ] Column `visual-totals` shown as reference default alongside sheet-level derivations
- [ ] Read-only — no `load-underlying-metadata` calls
- [ ] Golden tests against `workbook_export.json` for at least one known multi-aggregation field

### Open questions

- Should **calculated fields** that already embed aggregation (e.g. `SUM([Sales])`) be excluded from the report?
- How to handle **blended** or **duplicate datasource** instances of the same logical field?
- LOD and table calc pills often use internal instance names — inclusion policy TBD after fixture review
- Dashboard-level consistency: flag when two sheets on the same dashboard disagree?

### Dependencies on existing work

| Existing module | Reuse |
|-----------------|-------|
| `fieldCatalog.ts` | Field names, `defaultAggregation` |
| `fieldReferences.ts` | Resolve `[sum:Sales:qk]` → base field id |
| `fieldUsage.ts` | Worksheet walk patterns, `USAGE_NODE_TYPES` |
| `traverse.ts` | Tree walk for `column-instance` under worksheets |

---

## 2. (Placeholder) — Future tools

Add sections here as ideas mature. Candidates from product scope:

| Tool | One-line intent |
|------|-----------------|
| Field name cleanup | Rule-based rename with preview + confirm |
| Total formatter | Bulk edit totals formatting nodes |
| Sheet name cleanup | Bulk rename worksheets |
| Identify unused sheets | Read-only; sheets with zero field references |
| Dashboard formatter | Bulk layout attrs (borders, radius, background) |

---

## Promotion to milestone

When an item is ready to build:

1. Add a task brief under `docs/milestones/`
2. Update milestone table in `docs/tableau-poweruser-scope.md`
3. Follow agent handoff: documenter → workbook-metadata → tableau-bridge → ui-designer → tester → documenter
