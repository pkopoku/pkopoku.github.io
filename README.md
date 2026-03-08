# pkopoku.github.io

Personal site — software engineering work and photography, under one roof.

**[pkopoku.github.io](https://pkopoku.github.io)**

---

## Sections

| Route | Purpose |
|---|---|
| `/` | Landing — links to both sections |
| `/swe` | Software engineering: projects, writing, résumé |
| `/swe/projects` | Project index and individual project pages |
| `/swe/writing` | Writing index and individual posts |
| `/swe/resume` | Résumé / CV |
| `/photos` | Photography collection index |
| `/photos/[collection]` | Individual collection (masonry grid + lightbox) |

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- GitHub Actions → GitHub Pages — CI/CD and hosting

## Local development

```sh
npm install
npm run dev        # dev server at localhost:4321
npm run build      # production build to ./dist
npm run preview    # preview the production build locally
```

## Adding content

### Projects

Create a markdown file in `src/content/projects/`:

```md
---
title: "Project Name"
description: "What it does."
tags: ["TypeScript", "React"]
year: 2024
url: "https://live-site.com"       # optional
repo: "https://github.com/..."     # optional
featured: true
order: 1
---

Write about the project here.
```

### Writing

Create a markdown file in `src/content/writing/`:

```md
---
title: "Post Title"
description: "Short description."
date: 2024-11-01
tags: ["engineering"]
draft: false
---

Post content here.
```

### Photo collections

Edit or add a JSON file in `src/content/collections/`:

```json
{
  "title": "Concerts",
  "slug": "concerts",
  "description": "One-line description.",
  "coverImage": "/photos/concerts/cover.jpg",
  "order": 1,
  "photos": [
    {
      "src": "/photos/concerts/01.jpg",
      "alt": "Descriptive alt text",
      "aspectRatio": "landscape",
      "caption": "Optional caption"
    }
  ]
}
```

Place image files in `public/photos/<collection>/`. Valid `aspectRatio` values: `landscape`, `portrait`, `square`.

## Design system

All design tokens are CSS custom properties in [`src/styles/global.css`](src/styles/global.css). To retheme the site, edit the `@theme` block:

```css
--color-ink:    #0e0e0e;   /* background */
--color-paper:  #f5f1eb;   /* text */
--color-gold:   #c9a84c;   /* accent */
```

Fonts are loaded from Google Fonts: **Playfair Display** (headings), **Inter** (body), **JetBrains Mono** (labels/code).

## Deploy

Push to `main`. GitHub Actions builds and deploys automatically.

Requires GitHub Pages to be configured with source set to **GitHub Actions** in repo Settings → Pages.
