---
name: alpha-commands
description: Catalogs undocumented alpha tabui/tabdoc commands for the Tableau authoring API. Use when discovering, documenting, or wrapping new executeCommandAsync commands.
paths:
  - "docs/alpha-commands.md"
---

# Alpha Commands Catalog

## Purpose

The alpha authoring API is undocumented in official docs. This catalog makes commands usable by the team.

## Entry format

```markdown
### tabdoc/get-sheet-list

- **Args:** `{ dashboard: string, "include-all-hidden": boolean }`
- **Response:** `{ sheetList: { sheetListItems: Array<{ name: string }> } }`
- **Source:** Samples/Dashboard/BeFree/beFree.js
- **Risk:** none
- **Wrapped by:** `TableauBridge.executeCommand`
```

## Namespaces

| Namespace | Typical use |
|-----------|-------------|
| `tabui` | UI state, metadata round-trip, presentation mode |
| `tabdoc` | Document structure, dashboards, zones, formatting |

## v1 primary commands (metadata round-trip)

| Command | Namespace | Purpose |
|---------|-----------|---------|
| `save-underlying-metadata` | tabui | Read workbook as JSON |
| `load-underlying-metadata` | tabui | Write workbook from JSON (destructive) |

## Workflow

1. Experiment in Tableau Desktop or via BeFree-style scratchpad
2. Document args/response in `docs/alpha-commands.md`
3. Bridge agent implements wrapper in `TableauBridge`
4. If response contains new JSON shapes, metadata agent documents in `workbook-metadata.md`

## Risk flags

- **destructive** — can corrupt workbook (metadata load)
- **requires-presentation-mode** — must check `get-is-presentation-mode` first
