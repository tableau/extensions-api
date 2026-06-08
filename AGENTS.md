# Extension Development Agent Team

Greenfield React Tableau extension using the **Authoring Extensions API (alpha)** — metadata JSON round-trip (`save-underlying-metadata` / `load-underlying-metadata`) and `executeCommandAsync` commands.

Talk to the **coordinator** (main chat) to scope work. Specialist subagents handle implementation.

## Team roster

| Agent | Role | Invoke when |
|-------|------|-------------|
| **coordinator** | Requirements, scope, task briefs, delegation | Starting features, unclear requirements |
| **ui-designer** | React components, hooks, Tableau UX | Screens, forms, interaction design |
| **tableau-bridge** | `.trex`, init, `TableauBridge`, API commands | API wiring, extension shell |
| **workbook-metadata** | JSON traverse/find/mutate (pure functions) | Tree logic, fixtures |
| **tester** | Jest, lint, build, smoke checklists | After implementation, adding tests |
| **documenter** | Implementation log, command catalog, schema notes | After milestones, API discoveries |

Subagents live in `.cursor/agents/`. Invoke via `@agent-name` or "use the X subagent".

## Project layout

```
extension/
  manifest.trex
  index.html
  package.json
  src/
    index.tsx
    app/App.tsx
    tableau/TableauBridge.ts
    tableau/ExtensionContext.tsx
    metadata/types.ts
    metadata/traverse.ts
    components/
    hooks/useWorkbookMetadata.ts
  fixtures/
  __tests__/
docs/
  implementation-log.md
  alpha-commands.md
  workbook-metadata.md
```

## Dev commands

From repo root (serves SDK samples + extension on port 8765):

```bash
npm install
npm start
```

From `extension/` (watch + test):

```bash
cd extension
npm install
npm run dev      # webpack watch
npm test
npm run lint
npm run build
```

**Tableau Desktop:** beta extensions must be enabled. Alpha metadata commands may require a beta Extensions API library — document the tested Desktop build in `docs/implementation-log.md`.

**Load extension:** add dashboard extension object → select `extension/manifest.trex`.

## Handoff workflow

1. **coordinator** — task brief with acceptance criteria
2. **documenter** — update command/schema docs if alpha surface is unknown
3. **workbook-metadata** — pure functions + fixture tests
4. **tableau-bridge** — API wrappers and shell changes
5. **ui-designer** — screens via `useWorkbookMetadata()`
6. **tester** — tests, lint, smoke checklist
7. **documenter** — append `docs/implementation-log.md`

## Layer rules

- UI never calls `tableau.extensions` directly
- All API access goes through `TableauBridge`
- Metadata utilities are pure (no API, no React)
- Destructive saves require refresh-before-edit and user confirmation

## Skills

| Skill | Path |
|-------|------|
| Feature scoping | `.cursor/skills/coordination/feature-scoping/` |
| React UI | `.cursor/skills/ui/tableau-react-ui/` |
| Extension shell | `.cursor/skills/implementation/extension-shell/` |
| Tableau bridge | `.cursor/skills/implementation/tableau-bridge/` |
| Workbook metadata | `.cursor/skills/implementation/workbook-metadata/` |
| Alpha commands | `.cursor/skills/implementation/alpha-commands/` |
| Testing | `.cursor/skills/quality/extension-testing/` |
| Implementation log | `.cursor/skills/docs/implementation-log/` |

## First milestone

Empty extension that loads and displays raw metadata JSON — proves Bridge + shell + UI wiring.

## References in this repo

- Command explorer: `Samples/Dashboard/BeFree/beFree.js`
- React + init pattern: `Samples-Typescript/Dashboard/PdfViewer/`
- UX guidelines: `docs/Interaction_Guidelines/`
