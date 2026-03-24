---
description: How to maintain project standards (Comments, Commits, Branding)
---

# Standards Workflow - Portfolio Edition

This workflow ensures that all AI-generated code and commits adhere to the project's digital garden standards for a premium, fast, and accessible developer portfolio.

## 1. Aesthetic Integrity (Branding)

When creating or refactoring frontend elements:

- **Consistency**: Use existing CSS variables for colors, shadows, and radii (e.g. `12px` for grid cards).
- **Icons**: Always use `lucideIcons.njk` or the `iconify` filter. No external font libraries.
- **Animations**: Prefer CSS transitions over heavy JS animations. Ensure "Reduce Motion" context is respected.
- **Typography**: Adhere to the established font system (defined in `custom-style.scss`).

## 2. Technical Standards (Eleventy)

When tasking a change:

- **Shortcodes & Filters**: Only create new ones if a reusable existing one is not available.
- **Markdown Templating**: Keep `markdownTemplateEngine` at `false` as per the current configuration for speed.
- **Data Layers**: Use computed data layers correctly for Hyphenated keys in Nunjucks.

## 3. Commit & Documentation

At the end of a significant task:

- **Check** if `.doc/refinement_log.md` exists and update it.
- **MUST** use the Conventional Commits format: `<type>(<scope>): <message>`.
- **Allowed Types**: `feat`, `fix`, `docs`, `refactor`, `style`, `perf`, `test`, `chore`.
- **Scope Examples**: `garden`, `homepage`, `ui`, `cms`, `build`, `assets`, `seo`.

## 4. Verification

Before finishing a request:

- **Check** responsive behavior (mobile, tablet, desktop).
- **Ensure** accessibility (A11y) standards are not regressed (contrast, labels).
- **Verify** fast build times (`npm run build`).
