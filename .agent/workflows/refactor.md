---
description: Clean up and optimize existing code or assets without adding new features
---

# Code Refactor Workflow - Portfolio Edition

Use this workflow to perform architectural clean-ups, CSS optimizations, or style guide alignment.

## Step 1: Identification & Impact

Identify the code or asset to be refactored:

- **Impact**: Map out which templates or notes call this filter, shortcode, or component.
- **Goal**: Define what the refactor is trying to achieve (e.g. build speed, cleaner CSS, or better Nunjucks logic).

## Step 2: Implementation (The Shift)

Perform the refactor in small, safe steps:

- **Renaming**: Update filenames and update all references in `.njk` and `.eleventy.js`.
- **Modularity**: Try to extract complex logic from the main `.eleventy.js` into separate filters or components.
- **Style Guide**: Ensure the new code follows the [Portfolio Standards](file:///c:/Users/lshio/Desktop/Lucas%20Shiota/GitHub%20Repo/my-digital-garden/.agent/workflows/standards.md).

## Step 3: Verification (The Test)

Ensure no functionality was lost:

- **Build**: Run a full production build (`npm run build`) and ensure no errors.
- **Visuals**: Check for layout shifts or CSS regressions in different screen sizes.
- **Aesthetic Check**: Verify that the premium look of the garden is maintained.

## Step 4: Finalization

- Update `.doc/refinement_log.md`.
- Commit with `refactor(scope): <description>`.
