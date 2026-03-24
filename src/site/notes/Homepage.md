---
{"dg-publish":true,"permalink":"/homepage/","hide":true,"tags":["gardenEntry"],"dg-note-properties":{"tags":["gardenEntry"],"icon":"home","showTimestamps":true}}
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
    cardSize: 300
    imageAspectRatio: 1

```

## Credits

- **[Obsidian](https://obsidian.md/)**, a open source and open format content editing platform
- **[Digital Garden](https://github.com/oleeskild/obsidian-digital-garden)**, a plugin that converts files from Obsidian into a static site
