---
description: How to run and use the Dev Mode with Hot Reload
---

# Dev Mode with Hot Reload

The project is now equipped with a robust dev mode that supports hot reloading for both Markdown/Nunjucks and SCSS changes.

## Commands

### 🚀 Standard Dev Mode

```bash
npm run dev
```

This will:

1. Fetch the latest theme data (`get-theme`)
2. Perform an initial Sass build
3. Start Eleventy with `--incremental` builds
4. Start Sass in watch mode
5. Launch the Dev Server with live-reloading and CSS injection

### 🔄 Alternative Startup

```bash
npm start
```

(Alias for `npm run dev`)

## Features

### ⚡ CSS Injection

When you edit an `.scss` file in `src/site/styles/`, Sass will recompile it to `dist/styles/`. The Dev Server is configured to watch `dist/styles/` and will automatically swap the stylesheet in your browser without a full page refresh.

### 🌐 Cross-Device Testing

The Dev Server now broadcasts to all local network hosts. You can see the URLs in the terminal (e.g., `http://192.168.1.x:8081/`) to test your site on mobile devices.

### 🧩 Incremental Rebuilds

Markdown and component changes will only trigger a rebuild for the affected files, keeping things extremely snappy.

## Configuration Details

- **Watch Targets**: Eleventy now explicitly watches `src/site/styles/` for changes.
- **Server Options**: Configured in `.eleventy.js` via `setServerOptions`.
- **Cache Busting**: Automatically disabled in `ELEVENTY_ENV=dev` to prevent unnecessary full-page reloads.
