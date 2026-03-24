---
description: Scaffold a new Eleventy component or digital garden feature
---

# New Feature/Component Workflow - Portfolio Edition

Use this workflow to quickly and consistently scaffold new parts of the portfolio or digital garden.

## 1. Scaffold a Component

When creating a new Nunjucks component (static or dynamic):

- **Location**: `src/site/_includes/components/`.
- **Naming**: Use camelCase for `.njk` files (e.g. `readingProgressBar.njk`).
- **Styles**: Create a corresponding entry in `custom-style.scss` or a new SCSS file if complex.
- **Shortcodes**: If the component is meant to be used within markdown, register it as a shortcode in `.eleventy.js`.

## 2. Scaffold a Feature

When adding a full site feature (e.g. search, tags, or a new layout):

- **Layouts**: Put new base layouts in `src/site/_includes/layouts/`.
- **Filters**: Add new data-processing filters to the `eleventyConfig` block in `.eleventy.js`.
- **Assets**: High-res images should go into `src/site/assets/images/`.

## 3. Scaffolding Pattern (Nunjucks)

New components should follow this boilerplate where possible:

```njk
{# --- COMPONENT DESCRIPTION --- #}
<div class="component-root {{ class }}" id="{{ id }}">
  {% if title %}
    <h3 class="component-title">{{ title }}</h3>
  {% endif %}
  {{ content | safe }}
</div>

<style>
  /* Local component overrides if not using global SCSS */
</style>
```

## 4. Verification

Before finishing the scaffolding task:

- **Usage**: Test the component in a sample `.md` note or on the `index.njk` homepage.
- **Responsive**: Ensure the new component doesn't break the layout on mobile.
- **Console**: Check for browser console errors (ESLint or browser JS).
