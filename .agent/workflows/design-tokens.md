---
description: How to maintain project design tokens (Colors, Spacing, Typography)
---

# Design Tokens Workflow - Portfolio Edition

This workflow ensures consistent UI and aesthetic tokens (Colors, Spacing, Fonts) across the digital garden portfolio.

## 1. Primary Tokens (CSS Variables)

The portfolio uses CSS variables to manage design tokens for visibility, high performance, and rapid theme toggling.

- **Location**: `src/site/_includes/components/custom-style.scss`.
- **Primary Colors**: (e.g. `--brand-primary`, `--accent-color`).
- **Surface Colors**: (e.g. `--surface-panel`, `--surface-card`).
- **Typography Tokens**: (`--font-family-sans`, `--font-size-base`).

## 2. Branding Aesthetics

- **Minimalist Premium**: High white-space, subtle 1px borders, smooth 12px radii.
- **Micro-Interactions**: Hover-based lifts (trans-y: -4px) and soft glows.
- **Glassmorphism**: Use backdrop-filters (blur: 10px) sparingly for sticky headers and overlays.

## 3. Dark Mode & Clarity Mode

- **Theme Consistency**: Ensure all new tokens are mirrored in the dark theme block or Clarity Mode override.
- **Color Mix**: Use the `--brand-mix-amount` system for unified color shading and tinting.

## 4. Icons

- **Lucide Registry**: Keep `lucideIcons.njk` updated if new icons are needed.
- **Consistent Stroke**: Use a default `stroke-width: 1.75` for all icons.

## 5. Verification

- **Contrast**: Check color contrast for both light and dark modes.
- **Toggle Test**: Run the site and toggle between themes to ensure no "flash" or unstyled content.
