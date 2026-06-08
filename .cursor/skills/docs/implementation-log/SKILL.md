---
name: implementation-log
description: Maintains living documentation for the Tableau extension — implementation log, schema notes, and architecture decisions. Use after milestones or when documenting what was built.
disable-model-invocation: true
paths:
  - "docs/**"
---

# Implementation Log

## Files to maintain

| File | Content |
|------|---------|
| `docs/implementation-log.md` | Dated build history and decisions |
| `docs/alpha-commands.md` | Command catalog (see alpha-commands skill) |
| `docs/workbook-metadata.md` | Discovered JSON node types |

## Log entry template

```markdown
## YYYY-MM-DD — [Milestone name]

### What was built
- ...

### Key decisions
- ...

### Modules
- `extension/src/tableau/TableauBridge.ts`

### Tableau version tested
- Desktop build: [version]

### Open questions
- ...
```

## Rules

- Append only — do not rewrite prior entries
- Link to code modules; never paste large code blocks
- Note Tableau Desktop build for schema-dependent features
- Flag risks and unresolved alpha API gaps

## When to write

- After each milestone (scaffold, first feature, etc.)
- When a new alpha command is discovered
- When workbook JSON schema differs from prior notes
