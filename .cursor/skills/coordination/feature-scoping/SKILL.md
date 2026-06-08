---
name: feature-scoping
description: Scopes Tableau extension features, writes task briefs, and sequences multi-agent handoffs. Use when starting a new feature, clarifying requirements, or planning delegation across coordinator, bridge, metadata, UI, tester, and documenter agents.
disable-model-invocation: true
---

# Feature Scoping

## When to use

- User describes a new feature or ambiguous requirement
- Work spans multiple agents or modules
- Before any multi-file implementation begins

## Workflow

1. Ask 1–2 clarifying questions if requirements are ambiguous.
2. Identify which alpha API surface is needed (metadata round-trip vs specific `tabdoc` command).
3. Write a task brief (see coordinator agent format in `.cursor/agents/coordinator.md`).
4. Sequence agent handoffs:

```
documenter → workbook-metadata → tableau-bridge → ui-designer → tester → documenter
```

5. Define acceptance criteria before delegating.

## Task brief checklist

- [ ] Goal stated in one sentence
- [ ] Acceptance criteria are testable
- [ ] Each agent has specific deliverables
- [ ] Files to touch are listed
- [ ] Risks noted (destructive writes, schema unknown, beta lib)

## First milestone reference

Empty extension that loads and displays raw metadata JSON:
- Bridge: `getWorkbookMetadata()` works
- UI: read-only JSON viewer
- Tester: mock bridge unit test passes
- Documenter: log scaffold + command catalog

See `AGENTS.md` for full team roster and layout.
