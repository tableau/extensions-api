---
name: extension-testing
description: Jest testing, fixtures, lint, and smoke checklists for the Tableau extension. Use when adding tests, verifying builds, or validating implementation quality.
paths:
  - "extension/**/__tests__/**"
  - "extension/jest.config.js"
  - "extension/package.json"
---

# Extension Testing

## Test layers (priority order)

1. **Metadata pure functions** — fixture JSON, no mocks needed
2. **TableauBridge** — mock `executeCommandAsync`
3. **React components** — mock `ExtensionContext`
4. **Manual smoke** — Tableau Desktop checklist

## Mock pattern (from PdfViewer tests)

```typescript
const mockExecuteCommand = jest.fn();
(window as any).tableau = {
  extensions: {
    initializeAsync: jest.fn().mockResolvedValue(undefined),
    workbook: { executeCommandAsync: mockExecuteCommand },
    environment: { mode: 'authoring', context: 'desktop' },
  },
  ExtensionMode: { Authoring: 'authoring', Viewing: 'viewing' },
  ExtensionContext: { Desktop: 'desktop', Server: 'server' },
};
```

## Commands

```bash
cd extension
npm test
npm run lint
npm run build
```

## Fixtures

- Store in `extension/fixtures/`
- One minimal workbook slice per node type
- Never commit full production workbooks

## Smoke checklist

- Extension loads in Tableau Desktop (beta enabled)
- Metadata loads in UI
- Refresh before edit enforced
- Save confirmation for destructive writes
- Authoring/viewing modes behave correctly

## Safety

`load-underlying-metadata` has no undo — tests and UI must enforce safeguards.
