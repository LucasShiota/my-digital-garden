---
description: Run automated and manual accessibility (A11y) checks
---

# Accessibility Workflow - Portfolio Edition

This workflow ensures that the digital garden portfolio remains inclusive and navigable for all users, including those with screen readers or limited mobility.

## Step 1: Automated Audit

When implementing new UI components or layouts:

- **Check Contrast**: Ensure text contrast meets WCAG AA (at least 4.5:1).
- **Alt Text**: Verify all new images have descriptive `alt` attributes.
- **Labels**: Ensure all interactive elements have proper `aria-label` or visible labels.

## Step 2: Keyboard Navigation

Manually verify (via browser/CLI if possible) that:

- **Focus States**: All interactive elements have clear, visible focus states (no `outline: none` without a replacement).
- **Tab Order**: Navigation follows a logical, sequential order.
- **Skip Links**: Verify the "Skip to Main Content" link works as expected.

## Step 3: Screen Reader Support

Ensure that:

- **Icon Descriptions**: Use `aria-hidden="true"` for decorative icons. For standalone icon buttons, provide a hidden text label.
- **Semantic HTML**: Use correct tags (`<button>`, `<nav>`, `<main>`, `<article>`, `<header>`). avoid excessive `<div>` nesting.

## Step 4: Verification

Before proposing a commit:

- Run a local `npm start` and use a Chrome Lighthouse/Axe audit if possible.
- Check responsive behavior for zoomed text (up to 200%).
