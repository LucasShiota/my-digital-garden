---
description: Check project dependency health (npm, Eleventy, Build)
---

# Project Health Check - Portfolio Edition

Use this workflow to ensure the repository remains secure, fast, and maintained.

## Step 1: Dependencies

- **Audit**: Run `npm audit` to check for known security vulnerabilities.
- **Outdated Packages**: Run `npm outdated` to identify critical library updates.
- **Major Updates**: Before updating Eleventy, check `.eleventy.js` for breaking changes in filters or custom engines.

## Step 2: Build Integrity

- **Build Check**: Run `npm run build` or `npx @11ty/eleventy` and ensure it completes without errors.
- **Tests**: Run `npm test` to execute Vitest unit tests.
- **Size**: Check the size of the generated `_site` folder to detect unexpected asset bloating.
- **Linting**: Run any project-specific linters for CSS/JS if applicable.

## Step 3: Deployment Verification

- **Netlify/Vercel**: Check for configuration errors in `netlify.toml` or `vercel.json`.
- **Environment Variables**: Ensure all necessary tokens are present in `.env` (but don't commit them!).

## Step 4: Verification

Before proposing a "chore" change:

- Check all internal links for 404s if a tool is available.
- Ensure the production build is mirrored correctly by the local dev server.
