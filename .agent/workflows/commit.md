---
description: Automate the finalization of a task (Check, Documentation, Commit)
---

# Commit Workflow - Portfolio Edition

This workflow ensures that every task is completed with proper automated checks, documentation updates, and a clean Git history.

## 1. Quality Check

Before proposing a commit:

- Review all changes to ensure they match the portfolio's premium aesthetic (minimalist, smooth transitions).
- Ensure all new icons are using the modern **Lucide SVG** system.
- Verify that performance is maintained (check for heavy filters or massive JS bundles).

## 2. Document the Changes

- Update `.doc/refinement_log.md`.
- Add a new entry detailing structural or aesthetic changes.
- Ensure the description is concise (e.g., "Implemented reading focus ruler with Alt+R toggle").

## 3. Conventional Commit

Propose or execute a commit following the **Conventional Commits** format:

`<type>(<scope>): <description>`

### Types

- `feat`: New frontend/backend features (e.g. `feat(garden): add search`).
- `fix`: Bug fixes (e.g. `fix(ui): correct z-index in sticky header`).
- `docs`: Documentation updates.
- `refactor`: Internal code reorganization.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `perf`: Performance optimizations.
- `test`: Unit tests or manual testing notes.
- `chore`: Tooling/dependency changes.

### Example

`feat(icon): migrate from font-awesome to lucide icons`
