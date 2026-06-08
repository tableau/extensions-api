---
name: tableau-bridge
description: Implements TableauBridge service wrapping executeCommandAsync for alpha metadata round-trip and tabdoc/tabui commands. Use when editing extension/src/tableau/ or wiring Tableau API access.
paths:
  - "extension/src/tableau/**"
---

# Tableau Bridge

## TableauBridge interface

```typescript
export interface TableauBridge {
  getWorkbookMetadata(): Promise<WorkbookNode>;
  setWorkbookMetadata(meta: WorkbookNode): Promise<void>;
  executeCommand<T>(ns: string, cmd: string, args: object): Promise<T>;
}
```

## Metadata round-trip (v1 primary)

```typescript
async getWorkbookMetadata(): Promise<WorkbookNode> {
  const result = await tableau.extensions.workbook.executeCommandAsync(
    'tabui', 'save-underlying-metadata', {}
  );
  const text = typeof result.text === 'string' ? result.text : JSON.stringify(result.text);
  return JSON.parse(text);
}

async setWorkbookMetadata(meta: WorkbookNode): Promise<void> {
  await tableau.extensions.workbook.executeCommandAsync(
    'tabui', 'load-underlying-metadata', { text: JSON.stringify(meta) }
  );
}
```

## Error normalization

Map opaque alpha errors to user-actionable messages. Include namespace, command ID, and original message.

## ExtensionContext

Provide bridge instance via React context so UI/metadata agents never touch `tableau` global.

## Command exploration reference

See `docs/alpha-commands.md` and `Samples/Dashboard/BeFree/beFree.js` for `tabdoc`/`tabui` commands.

## Beta requirements

- Tableau Desktop with beta extensions enabled
- May require `tableau.extensions.*.beta.js` — document exact version in implementation log

## Does NOT

- Traverse or mutate JSON trees — delegate to `src/metadata/`
