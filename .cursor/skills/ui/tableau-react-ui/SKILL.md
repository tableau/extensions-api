---
name: tableau-react-ui
description: React component and hook conventions for the Tableau extension. Builds UI using ExtensionContext and useWorkbookMetadata without direct tableau.extensions calls. Use when editing extension React components, hooks, or app layout.
paths:
  - "extension/**/*.tsx"
  - "extension/src/hooks/**"
---

# Tableau React UI

## Architecture

```
components/ → hooks/useWorkbookMetadata → ExtensionContext → TableauBridge
```

Components never import `tableau` or call `executeCommandAsync`.

## useWorkbookMetadata contract

```typescript
interface WorkbookMetadataState {
  metadata: WorkbookNode | null;
  isLoading: boolean;
  isDirty: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  save: () => Promise<void>;
}
```

## Authoring vs viewing

Check mode via context (set by bridge at init):

- **Authoring + unconfigured:** show placeholder; optional auto-open configure dialog
- **Viewing + unconfigured:** render empty/minimal state
- **Desktop authoring:** lighter/italic placeholder text (PdfViewer pattern)

## Tableau UX compliance

- Follow `docs/Interaction_Guidelines/` for dialogs, buttons, selectors
- One primary action per view ("Apply to Tableau", "Refresh")
- Confirm destructive metadata saves
- Full-width layout; respect extension container bounds

## References

- `Samples-Typescript/Dashboard/PdfViewer/pdfViewerComponent.tsx`
- `Tutorial/Dashboard/ReactVersion/src/Main.js`

## Does NOT

- Implement tree walking — use `src/metadata/`
- Call Tableau API — use `src/tableau/TableauBridge` via context
