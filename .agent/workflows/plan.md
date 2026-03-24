---
description: High-efficiency execution designed to minimize quota and turn rates
---

# High-Efficiency Execution Plan (HEEP) - Portfolio Edition

Use this workflow to think through a complex feature or refactor *before* making any changes. This reduces error rates and unnecessary steps.

## Step 1: Research & Information Gathering

Understand the current state of the project:

- **Files**: Identify the relevant `.njk` (Nunjucks), `.js`, `.css`, or `.md` files.
- **Eleventy Config**: Check if changes require modifications to `.eleventy.js`.
- **Shortcodes & Filters**: Map out any new or existing shortcodes/filters needed.

## Step 2: Implementation Design (The Blueprint)

Before any file modifications, outline the design:

- **Structure**: Describe the component hierarchy or layout structure.
- **Logic**: Use pseudo-code for complex filters or data transformations.
- **Style**: Define new CSS variables or utility classes in `custom-style.scss` or similar.

## Step 3: Execution Order

Break the task into small, verifiable chunks:

1. **Skeleton**: Create the basic structure (layout/component).
2. **Logic**: Implement filters, shortcodes, or JS functionality.
3. **Refinement**: Fine-tune the styling and interactions.
4. **Verification**: Check local build (`npm start`) and responsive design.

## Step 4: Documentation & Finalization

Finalize the task with:

- `@[/commit]` to update the changelog and commit the changes.
- Ensure any new features are logged in `.doc/refinement_log.md`.
