## NOTES.md — rr-electric

### Done
- Scaffolded Astro project (package.json, astro.config.mjs, .gitignore)
- Design system: global.css (charcoal + amber, Barlow Condensed/Inter)
- Layout.astro: SEO head, Electrician JSON-LD, skip link, no-JS-safe reveal CSS
- index.astro: header, hero, 8 services, service area grid (12 Shoals cities), why-us, process, emergency strip, FAQ, contact card, footer
- 404.astro, favicon.svg, robots.txt, llms.txt, README.md
- site.js: reveals (IO + safety net), reduced-motion guard, footer year

### In Progress
- npm install + build

### Blocked
- Cloudflare deploy if wrangler still unauthenticated (check `~/.wrangler/config/`)

### Next
- Build, then browser-verify (console, interactions, keyboard, mobile, no-JS)
