---
name: workbook-metadata
description: Pure workbook JSON tree utilities — walk, find, flatten, mutate. Use when editing extension/src/metadata/ or extension/fixtures/.
paths:
  - "extension/src/metadata/**"
  - "extension/fixtures/**"
---

# Workbook Metadata

## Node shape

```typescript
export interface WorkbookNode {
  type: string;
  attrs: Record<string, unknown>;
  children?: WorkbookNode[];
}
```

## Required utilities

| Function | Purpose |
|----------|---------|
| `walkTree(node, visitor)` | Depth-first traversal |
| `findByType(node, type)` | Collect all nodes of a type |
| `findWorksheetByName(node, name)` | Single worksheet lookup |
| `flattenWorkbook(node)` | Flat list with path context |

## Rules

- No imports from `tableau`, React, or `src/tableau/`
- Prefer pure functions returning new trees; document any in-place mutation
- Add fixture slices in `extension/fixtures/` for each new node type discovered
- Update `docs/workbook-metadata.md` when documenting new `type` values

## Testing

Every utility gets a Jest test against fixtures — no Tableau session required.

```typescript
import sample from '../../fixtures/minimal-workbook.json';
expect(findByType(sample, 'worksheet')).toHaveLength(1);
```

## Offline development

Use curated fixture slices extracted from live `save-underlying-metadata` captures until Desktop is available.
