---
dg-publish: true
permalink: /homepage/
hide: true
tags:
  - gardenEntry
icon: home
showTimestamps: true
showReadingTime: true
---


# Lucas Shiota GDD Wiki

Welcome to my Game Design Documentation Wiki, the behind-the-scenes for all of my projects that I'm proud to share and have put my soul into.

While my [main website portfolio](https://lucasshiota.com/) is my stylized promotional showcase of me and my work, this subdomain archives technical documentation of my projects.

## Projects List

```base
views:
  - type: cards
    name: Table
    filters:
      and:
        - file.hasTag("Project")
    order:
      - file.name
      - About
      - file.tags
    cardSize: 300
    imageAspectRatio: 1

```

## Credits

This wiki was made possible with:

- **[Obsidian](https://obsidian.md/)** - open source & format content editing platform
- **[Digital Garden](https://github.com/oleeskild/obsidian-digital-garden)** - plugin that converts files from Obsidian into a static site
- [**Mermaid.js**](https://mermaid.js.org/) - JavaScript library for diagrams and charts
- Lucide.js
