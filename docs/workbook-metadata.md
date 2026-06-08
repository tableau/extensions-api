# Workbook Metadata Schema Notes

Discovered incrementally from `save-underlying-metadata` captures. Version notes per Tableau Desktop build.

**Primary fixture:** `extension/fixtures/workbook_export.json`  
**Tableau build:** `main.26.0531.2046` (`source-build`: `0.0.0 (0000.26.0531.2046)`)  
**Workbook:** Superstore-based sample (repository id `Superstore_us`)

---

## Export root shape

Live exports are **not** a bare `workbook` node. The parsed JSON root looks like:

```json
{
  "_comment": "build main.26.0531.2046 ...",
  "children": [
    {
      "type": "workbook",
      "attrs": { "version", "source-build", "source-platform", ... },
      "children": [ ... ]
    }
  ]
}
```

**Implementation note:** Indexing and traversal should normalize this wrapper — e.g. use `children[0]` where `type === "workbook"`, or unwrap on load in `TableauBridge` / metadata utilities.

The `_comment` field carries the Desktop build string.

---

## Tree shape (confirmed)

```typescript
interface WorkbookNode {
  type: string;
  attrs: Record<string, unknown>;
  children?: WorkbookNode[];
}
```

Most nodes follow this shape. Some manifest nodes (under `document-format-change-manifest`) have `type` only with no `attrs`.

---

## Fixture inventory

| File | Notes |
|------|-------|
| `extension/fixtures/workbook_export.json` | Full live capture (~39k lines). Includes calcs, parameters, hidden columns, sets, groups, 23 worksheets, 6 dashboards. |
| `extension/fixtures/workbook_export_schema.json` | Auto-generated JSON Schema; documents only top-level nesting. **Not** sufficient for field-level attrs — use curated notes below. |

**Removed:** `minimal-workbook.json` — synthetic shape did not match live exports.

---

## Omnisearch field classification (proposed)

Tableau does not use a single `type` for all user-facing “fields.” Classification for the field index:

| User-facing kind | Detection heuristic |
|------------------|---------------------|
| **Parameter** | `type: "column"` under datasource with `attrs.name === "Parameters"`; often has `param-domain-type` |
| **Calculated field** | `type: "column"` with child `type: "calculation"` (non-literal formula) |
| **Column** | Other `type: "column"` nodes (dims/measures) |
| **Set** | `type: "group"` with `attrs["user:ui-builder"] === "filter-group"` |
| **Group** | Other `type: "group"` nodes (e.g. `user:auto-column: "sheet_link"` action groups) |

**Important:** There is no `type: "set"` in the current export. Sets appear as `group` nodes.

---

## Known node types (Omnisearch-relevant)

### workbook

- **attrs:** `version`, `xmlns:user`, `source-build`, `source-platform`
- **children:** `document-format-change-manifest`, `repository-location`, `preferences`, `datasources`, `worksheets`, `dashboards`, etc.
- **Fixture:** `extension/fixtures/workbook_export.json`
- **Build:** `main.26.0531.2046`

### datasource

- **attrs:** `name`, `caption`, `inline`, …
- **children:** `connection`, `column`, `group`, `aliases`, …
- **Notes:** Special datasource named `"Parameters"` holds parameter columns.

### column

Primary representation for dimensions, measures, calculated fields, and parameters.

- **attrs (common):** `name`, `caption`, `role` (`dimension` | `measure`), `datatype`, `type` (`nominal` | `ordinal` | `quantitative`), `hidden` (`"true"` when hidden)
- **attrs (parameters):** `param-domain-type` (`range` | `list`), `value`
- **attrs (field-fed list parameter):** `source-field` — qualified `[datasource].[field]`; parameter domain values come from that column (not from `calculation.formula`). Example in fixture: **Segment Parameter** → `source-field: "[federated.10nnk8d1vgmw8q17yu76u06pnbcj].[Segment]"`; child `calculation` holds only the default value (`"Consumer"`).
- **children:** `calculation` (formula), `range`, `members`, `aliases`, …
- **Formula location:** child node `type: "calculation"` → `attrs.formula`, `attrs.class` (e.g. `"tableau"`)
- **Hidden example:** `[Product ID]` with `"hidden": "true"`

### calculation

- **attrs:** `formula` (string), `class`
- **parent:** `column`
- **Notes:** Used for calculated fields and parameter default values. Cross-references use Tableau syntax, e.g. `[Sales]`, `[Parameters].[Parameter 1]`.

### group

Used for action/hierarchy groups **and** sets.

- **attrs (common):** `name`, `caption`, `name-style`, `hidden`
- **attrs (set):** `user:ui-builder: "filter-group"` — e.g. `[Segment Set]`
- **attrs (action group):** `user:auto-column: "sheet_link"`, often `hidden: "true"`
- **children:** `groupfilter` (nested filters, `level`, `member`, `function`)

### groupfilter

- **attrs:** `function` (`union`, `member`, `level-members`, `crossjoin`, …), `level`, `member`, `user:ui-enumeration`, …
- **Notes:** Set membership and group levels reference fields by name in `level` / `member` attrs — relevant for set dependency edges.

### worksheet

- **Count in fixture:** 23
- **children:** shelves, encodings, filters, panes, etc. (usage-index targets — TBD in M1)

### dashboard

- **Count in fixture:** 6

### metadata-record

- **context:** Physical connection columns under `relation` → `columns`
- **Notes:** Distinct from workbook logical `column` nodes. Index policy TBD — likely exclude from Omnisearch “fields” or tag as `physical` vs `logical`.

---

## Approximate counts (workbook_export.json)

| Node / pattern | Count |
|----------------|-------|
| `worksheet` | 23 |
| `dashboard` | 6 |
| `datasource` | 38 |
| `column` | 100 |
| `group` | 33 |
| Set (`user:ui-builder: filter-group`) | 1 (`Segment Set`) |
| `hidden: true` | 55 (columns and groups) |

---

## Dependency graph notes (for Omnisearch DAG)

**Calculated fields:** Parse `calculation.attrs.formula` for bracket references (`[Field Name]`, `[Parameters].[Param Name]`).

**Sets:** Traverse `groupfilter` children; `level` and `member` attrs reference fields.

**Depth:** v1 shows 2 hops upstream and 2 hops downstream from selected field.

**Limits (expected):** Blends, LODs, and table calcs may produce incomplete edges until parsing matures. Document gaps in UI when detected.

---

## Usage locations (M1)

Field usage is indexed by scanning worksheets and dashboards for reference-bearing nodes. Implemented in `extension/src/metadata/fieldUsage.ts`.

| Node type | Attribute / content | Notes |
|-----------|---------------------|-------|
| `rows`, `cols` | `content` string | Bracket tokens extracted (best-effort) |
| `encoding` | `attrs.field` | Direct or internal calc name |
| `filter`, `manual-sort`, `shelf-sort` | `attrs.column` | Often qualified `[datasource].[instance]` |
| `groupfilter` | `attrs.member`, `attrs.level` | Quoted member strings stripped before resolve |

**Resolution:** Worksheet `datasource-dependencies` → `column-instance` maps instance names (e.g. `[sum:Calculation_…:qk]`) to base columns (e.g. `[Calculation_…]`). Qualified refs resolved via `extension/src/metadata/fieldReferences.ts`.

**Limitations:** Title `run` content and dashboard-indirect usage not fully indexed in M1.

---

## Parameter source fields (M1.1)

Field-fed list parameters declare their domain source via `source-field` on the parameter `column` node in the `Parameters` datasource.

| Attr | Resolves to | `used` impact |
|------|-------------|---------------|
| `source-field` | Base column in named datasource (e.g. `[Segment]`) | Source field → `used: true` |

**Not covered by formula parsing:** the parameter's `calculation` child typically contains only the default member string, not a `[Field]` reference. Index `source-field` separately in `buildParameterSourceRefs()` (see M1.1 brief).

**Fixture:** `Segment Parameter` (`[Parameter 0837838388154369]`) → `source-field` → `[Segment]`. Segment Parameter is not yet referenced in any calc or sheet in the fixture.

---

## How to document a new type

```markdown
### [type]

- **attrs:** ...
- **children:** ...
- **Tableau build:** ...
- **Fixture:** `extension/fixtures/...`
```

---

## Schema drift

Workbook JSON shape may change between Tableau beta builds. When attrs differ:

1. Note the Desktop build in this file
2. Update `extension/fixtures/workbook_export.json` or add a new capture
3. Log in `docs/implementation-log.md`
