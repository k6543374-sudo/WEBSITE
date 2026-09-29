# Viron Technologies Website

Official website of Viron Technologies, creator of Zee AI.

Live site: https://virontechnologiesx.vercel.app/

## Stack

React 19, TypeScript, Vite, Tailwind CSS 4, React Router 7, Three.js.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build also prerenders every route with `scripts/prerender.mjs`, so each
page ships as full HTML (title, meta description, canonical and page content
included) instead of an empty shell that needs JavaScript first. This is what
lets search engines index the site properly.
