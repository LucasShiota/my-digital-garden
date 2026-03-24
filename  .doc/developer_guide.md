# Digital Garden Developer Guide - Key Lessons

This document archives the specific architectural patterns and "gotchas" discovered while customizing this Obsidian-to-Eleventy Digital Garden. Refer to this before making structural or aesthetic changes.

---

## 1. The Tri-Navbar Architecture 🚢
The site does **not** have one single navbar. Depending on the user's view (Mobile, Note with Filetree, or Homepage), it switches between three different templates.

- **`navbar.njk`**: The classic top-bar (mostly used on Homepages or when Filetree is disabled).
- **`filetreeNavbar.njk`**: The horizontal bar shown at the top of **Mobile** devices when the Filetree is active.
- **`filetree.njk`**: The vertical **Desktop Sidebar** containing the navigation list and site title.

> [!IMPORTANT]
> Any new global navigation element (like a search button or a11y toggle) **must be manually added to all three** to avoid "vanishing" UI elements across different devices.

---

## 2. The Dynamics System 🧩
The site uses a powerful but sensitive "Dynamics" system (`src/site/_data/dynamics.js`) to automatically inject user-created components into specific "slots".

- **Slot Strategy**: To add a new UI feature (like our Reading Time or Progress Bar), create a `.njk` file in `src/site/_includes/components/user/[namespace]/[slot]/`.
- **Registering Slots**: If you need a new slot (e.g., `navbarActions`), you must add it to the `SLOTS` array in `dynamics.js` for the system to "scan" that folder.
- **Refresh Required**: Because `dynamics.js` is a data file, you often need to **restart the Eleventy server** to pick up new directories or slots.

---

## 3. Icon Collision Avoidance 🛡️
This garden uses two competing ways to render Lucide icons:
1. **Server-side Transforms** (`.eleventy.js`): Injects SVG tags into blockquotes at build time for performance.
2. **Client-side Scripts** (`calloutScript.njk`): Injects icons into callouts after the page loads.

> [!CAUTION]
> If both run on the same element, you will get "Double Icons". Always ensure your client-side scripts check for an existing `.callout-icon` (or similar) before prepending a new one.

---

## 4. Homepage Logic & Styling 🏠
The homepage (usually `Homepage.md`) is special. It is detected via `dg-home: true` or `gardenEntry` tags.
- **Header Removal**: The template automatically hides the `header h1` inside the main content of the homepage to prevent double-branding.
- **Layout Switch**: It usually switches between `index.njk` (Homepage) and `note.njk` (Standard Notes). Ensure custom global components are included in **both** layouts if they are meant to be site-wide.

---

## 5. CSS Patterns
- **Functional Scoping**: Use `.theme-dark` or `.theme-light` classes on the body to handle theme-specific colors.
- **Component Styling**: Keep custom QoL feature styles in `src/site/styles/custom-style.scss` to maintain a single source of truth for the "Immune Defence" aesthetic.

---

### Archive Information
- **Created by:** Antigravity (AI Architect)
- **Last Deep Audit:** 2026-03-24
- **Project Name:** GDD-Wiki-Immune-Defence
