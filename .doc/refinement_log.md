# Digital Garden Refinement Log - Lucas Shiota

This document archives all major structural and aesthetic changes made to the Digital Garden repository.

## 1. Icon System Migration (Lucide SVG)

We transitioned from Font Awesome unicode characters to a modern **Lucide SVG** system.

- **Implementation:** Added `lucideIcons.njk` to ensure icons render instantly on page load.
- **Shortcuts:** Added the `::icon-name::` syntax (handled by the `iconify` filter) and the `{% icon "name" %}` Nunjucks shortcode.
- **Compatibility:** Added support for `:LiIconName:` to match common Obsidian plugins.
- **Styling:** Controlled via `custom-style.scss` with a consistent `stroke-width: 1.75` for a thin, premium aesthetic.

## 2. Homepage & Branding Logic

Standardized how the homepage is detected and displayed.

- **Discovery:** System now checks for `tags: [gardenEntry]`, `dg-home: true`, or the root URL (`/`).
- **Header Cleanup:** Implemented a `.is-homepage` body class and CSS rule to hide the redundant "ghost" header on the homepage.
- **Dynamic Header Icon:** Added an automated `prependIcon` filter that slots the correct house/project icon directly into your first content header on the homepage.

## 3. Project Grid (Bases Engine)

Enhanced the "Bases" card system to act as a professional portfolio grid.

- **Flexible Heights (No Clipping):** Updated the CSS to allow cards to grow naturally to fit descriptions, preventing text bleed.
- **About/Summary Field:** Updated `views.js` to recognize fields named "About" or "Description." These are now rendered as elegant, label-less summaries at the bottom of the card.
- **Premium Styling:** Added sophisticated hover effects (lift + zoom), smooth border-radii (12px), and better grid spacing.

## 4. Callout Symbols & Formatting

Fixed the issue where callouts (like `[!QUOTE]`) were missing their characteristic symbols.

- **SVG Injection:** Updated the `transformCalloutBlockquotes` function in `.eleventy.js` to automatically inject the correct Lucide SVG into the title bar of all standard Obsidian callout types.

## 5. Technical Improvements

- **Performance:** Reverted `markdownTemplateEngine` to `false` and moved icon processing to lightweight Eleventy filters (`iconify`, `prependIcon`) to keep the build speed fast.
- **Nunjucks Fix:** Solved the issue where hyphenated keys like `dg-note-properties` were inaccessible in templates using a computed data layer.

### Documentation History

Created by Antigravity on 2026-03-24.
