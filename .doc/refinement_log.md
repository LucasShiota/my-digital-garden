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

## 6. Quality of Life (QoL) Enhancements

Added a suite of premium features focusing on micro-interactions and performance feedback.

- **Reading Progress Bar:** Implemented a sleek, animated scroll tracker at the top of the viewport.
  - **Dynamics:** Automatically included via `dynamics.common.beforeContent`.
  - **Visuals:** Features a subtle accent-color glow and linear transitions for a high-performance, native feel.
- **Reading Time Estimator:** Added a dynamic calculation filter to provide a "X min read" insight for all notes.
  - **Filter:** Custom `readingTime` Eleventy filter (strips HTML and estimates based on 225 wpm).
  - **Dynamics:** Displayed via `dynamics.notes.header` with a Lucide clock icon.
  - **Per-note Toggle:** Set `showReadingTime: false` in frontmatter to hide on a specific note.
- **Smart Copy Code Button:** Added a global, hover-based copy button to every `<pre>` block in the garden.
  - **Dynamics:** Managed through `dynamics.common.footer`.
  - **Visuals:** Uses sleek **Lucide copy/check icons** with a custom green feedback state and smooth transitions.
- **Human-Friendly Timestamps:** Switched from static ISO dates to relative time ("3 days ago").
  - **Implementation:** Updated `timestamps.njk` to use Luxon's `.toRelative()` method.
  - **QoL:** Added a native **tooltip** (title attribute) so the exact date appears when hovering over the timestamp.
  - **Per-note Toggle:** Set `showTimestamps: true` to force-show (even if global env is off), or `false` to force-hide.
- **Reading Focus Ruler (Line Focus):** A niche navigation tool that highlights a single "window" around the cursor.
  - **Dynamics:** Managed through `dynamics.common.footer`.
  - **Toggle:** Instant toggle using **Alt + R**.
  - **Visuals:** Dims the rest of the viewport with a soft blur and accent-color boundaries to guide the eye.

## 7. Icon Shortcode Robustness

Updated the `iconify` filter to bridge the gap between Obsidian plugins and official Lucide naming conventions.

- **Case Insensitivity:** The `Li` prefix is now case-insensitive (matching `:li:`, `:LI:`, or `:Li:`).
- **Suffix Cleansing:** Added logic to automatically strip the `-mark` suffix (e.g., `MessageCircleQuestionMark` $\rightarrow$ `message-circle-question`). This ensures compatibility with Obsidian plugins that use extended descriptive names while the site's Lucide script expects the official ID.
- **Improved Pattern Handling:** Enhanced the normalization logic to handle CamelCase more reliably across different platforms.

## 8. Theme Control Station & Local Design Tokens

We detached the external theme dependency and implemented a centralized, localized design system.

- **Theme Control Station:** Created `src/site/styles/_theme-control.scss` as a "hidden" dashboard for all design variables (typography, colors, and layout).
- **Design Tokens:** Moved away from external theme URLs to local Sass variables (`$accent-primary`, `$bg-main`, etc.), providing faster load times and total creative control.
- **High-Contrast Text Highlights:** Implemented explicit `::selection` and `mark` styling to ensure text remains perfectly readable regardless of the background theme colors.
- **Infrastructure:** Updated `.env` and `custom-style.scss` to use the new local token system instead of a downloaded `.css` file.

### Documentation History

Updated by Antigravity on 2026-03-26 (Implemented Theme Control Station).
Updated by Antigravity on 2026-03-25 (Enhanced Icon Robustness).
Updated by Antigravity on 2026-03-24 (Added QoL Section).
Created by Antigravity on 2026-03-24.
