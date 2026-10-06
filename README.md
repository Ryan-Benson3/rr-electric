# R&R Electric

## 👉 [CLICK HERE TO VIEW THE WEBSITE](https://rr-electric.pages.dev) 👈

That link is the live site. Below is source-code stuff.

---

Licensed electrician serving the Shoals, Alabama — Florence, Muscle Shoals, Sheffield, Tuscumbia, and surrounding communities. Built with **Astro 7**.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static build to dist/
npm run preview
```

## Deploy

```bash
npm run build
npx wrangler pages deploy dist --project-name=rr-electric --branch=main
```

## Design system

Charcoal `#14181d`, electric amber `#f6a51d`, warm paper `#faf9f7`. Barlow Condensed headings, Inter body. Tokens in `src/styles/global.css`.

## Interactions (vanilla, reduced-motion safe, no-JS safe)

- Scroll reveals (IntersectionObserver + 2.5s safety net; content visible if JS is blocked)

## SEO

Sitemap, canonical, Open Graph, JSON-LD (`Electrician` with Shoals cities + geo), robots.txt, llms.txt, semantic HTML, custom 404.

## Before launch (placeholders marked with TODO in source)

- Replace placeholder phone `(256) 555-0142` (header, hero, emergency strip, contact, footer, 404, Layout JSON-LD, llms.txt)
- Replace placeholder email `hello@rr-electric.com` (contact card, Layout, llms.txt)
- Add real AL electrical license number in the footer
- Point the real domain at the Pages project and update `site` in `astro.config.mjs` + `Layout.astro` + `robots.txt`
