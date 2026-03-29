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
- **Atkinson Hyperlegible Next:** Migrated the main body font to **Atkinson Hyperlegible Next** (weights 200–800) for maximum readability, paired with **Outfit** for headers.
- **Micro-Aesthetics & Spaciousness:** Refined global typography with a larger **18px base font** and **1.85 line-height**. Increased paragraph and list margins to restore the "spacious, premium" feel lost during the theme detachment.
- **Table Merge Script (V2):** Re-engineered `tableMergeScript.njk` to handle complex multi-cell merges. Added a `data-to-remove` marker system to cleanly purge "ghost cells" from the DOM, and updated header styling to be centered and high-contrast.
- **Tokyo Night "Storm" Refinement:** Re-engineered the color palette to use the official Tokyo Night "Storm" specification, including signature #1a1b26 background and #ff9e64 vibrant orange accents.
- **Infrastructure:** Updated `.env`, `pageheader.njk`, and `custom-style.scss` to use the new local token system instead of a downloaded `.css` file.

## 9. Mermaid Visualization & Technical Fixes

Enhanced the GDD Wiki's ability to document complex systems using Mermaid.js and resolved infrastructure issues.

- **Minifier Protection:** Wrapped Mermaid blocks in `<code>` tags within `.eleventy.js` to ensure the HTML minifier preserves newlines, resolving the "Syntax error in text" on the live site.
- **Robust Initialization:** Reconfigured `mermaid.njk` to use explicit `mermaid.run()` targeting only `.mermaid` elements. This avoids version clashes and allows for a customized **Forest** theme that complements the Tokyo Night aesthetic.
- **Spec Synchronization:** Synchronized the corrected Mermaid syntax across both the Obsidian vault (`test/`) and the Garden source (`src/site/notes/`).

## 10. Dev Experience (DX) & Hot Reloading

Optimized the local development loop to support the new decentralized theme system and faster build times.

- **Hot Reloading:** Updated `.agent/workflows/dev.md` to ensure SCSS changes are automatically injected into the browser without full page refreshes.
- **Incremental Speed:** Configured `package.json` and `.eleventy.js` to use `--incremental` building, reducing dev rebuild times from 2s to <200ms for large notes.
- **Server Orchestration:** Migrated the "open browser" and watcher logic into `.eleventy.js` using `setServerOptions`. This prevents the "unknown flag" crashes seen during the v3 transition.

## 11. Unified Mermaid Styling 🎨

Linked the diagram aesthetics directly to the centralized design tokens for a cohesive cross-page experience.

- **Token Integration:** Added Mermaid-specific tokens to `_theme-control.scss` for node backgrounds, borders, and line colors.
- **Thematic Bridge:** Updated `mermaid.njk` to use the `base` theme and `themeVariables`. It now dynamically fetches current theme values via `getComputedStyle`, ensuring diagrams always match your Tokyo Night workspace.
- **Spacious Fonts:** Standardized diagram font family to **Atkinson Hyperlegible Next** to match the body text.

## 12. Vault Integration & YAML Flattening

Merged the local Obsidian test vault directly into the Digital Garden repository to create a strict single-source-of-truth environment.

- **Security & Organization:** Configured `.gitignore` to protect the Digital Garden plugin token and safely ignore 100MB+ of compiled `.obsidian` plugin binaries while preserving workspace settings.
- **Drafts System:** Established a local-only `src/site/notes/_drafts` strategy that is ignored by both Git and Eleventy.
- **Frontmatter Standardization:** Ran a bulk standardization script across all markdown files to parse and flatten legacy single-line `dg-note-properties` JSON blobs into native Obsidian YAML block frontmatter.
- **Technical Debt Removal:** Refactored `src/site/notes/notes.11tydata.js` to strip out all legacy proxy logic that previously handled the nested plugin properties, improving build simplicity.

### Documentation History

Updated by Antigravity on 2026-03-29 (Vault Integration & YAML Flattening).
Updated by Antigravity on 2026-03-26 (Unified Mermaid Styling via Design Tokens).
Updated by Antigravity on 2026-03-26 (Enhanced DX, Table Merging, and Spacing).
Updated by Antigravity on 2026-03-26 (Integrated Mermaid.js & Fixed Eleventy 3.x CLI).
Updated by Antigravity on 2026-03-26 (Refined Tokyo Night Storm & Font Migration).
Updated by Antigravity on 2026-03-26 (Enhanced Icon Robustness).
Updated by Antigravity on 2026-03-24 (Added QoL Section).
Created by Antigravity on 2026-03-24.
