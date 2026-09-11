# LAO Delivery — Marketing Website

A static, SEO/LLM-friendly marketing site for **LAO**, a grocery delivery app for Tier 3 Indian cities (launching in Mundideep, Madhya Pradesh). Built from the Figma prototypes for the mobile and web experiences, with the web nav/layout patterns back-ported into the mobile view so small screens aren't missing navigation or the cities/map content.

## Stack

- **[Astro](https://astro.build)** — ships zero JS by default, outputs plain static HTML/CSS. Ideal for a marketing site that needs to be fast and easy for search engines and LLM crawlers to parse.
- **[Tailwind CSS v4](https://tailwindcss.com)** — utility-first styling via `@tailwindcss/vite`, no separate config file needed (theme tokens live in `src/styles/global.css`).
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — auto-generates `sitemap-index.xml` on build.
- No component/UI kit dependency — a small hand-rolled `Icon.astro` (inline SVGs) keeps the bundle dependency-free.

Everything renders to static HTML; the only client-side JavaScript is the ~30-line mobile menu toggle in `Header.astro`. There's no build-time data fetching, database, or backend.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

Requires Node 22+.

## Project structure

```
src/
  components/     One component per section (Header, Hero, TrustBar, Services,
                   CityFit, CitiesMap, Faq, Cta, Footer, Logo, Icon, Seo)
  data/site.ts     Single source of truth for nav links, services, footer links,
                   FAQ copy, city list — edit copy here, not inside components
  layouts/Layout.astro
  pages/index.astro   Assembles the sections in order
  styles/global.css   Tailwind import + brand color/font tokens (@theme block)
public/
  logo.png                 Primary wordmark (light backgrounds / header)
  logo-mark-white.png      White silhouette of the basket mark (dark backgrounds / footer)
  favicon.svg, favicon-32.png, favicon-64.png, apple-touch-icon.png
  og-image.png / og-image.svg   Social share preview image
  robots.txt, llms.txt     Crawler + AI-agent guidance
  sitemap-index.xml (generated on build)
```

## Content

All copy, nav links, service categories, FAQ, and the nearby-cities list live in **`src/data/site.ts`**. Update the site name, Play Store URL, support email/phone, or social links there as well.

## Design notes

- Faithfully follows both Figma prototypes (mobile: `node-id=127-102`, web: `node-id=116-150`). The mobile prototype in Figma had no header navigation; this build adds the same nav (as a slide-down drawer) to mobile so the experience is consistent across breakpoints, per the brief.
- The Madhya Pradesh "This Is Where LAO Begins" map is a stylised illustrative shape with labelled pins — **not** a geographically accurate state boundary. Swap `src/components/CitiesMap.astro`'s SVG path for a real MP boundary/GeoJSON trace if geographic accuracy is needed later.
- Product photography from the Figma designs (grocery collage, phone screen, footer aisle backdrop) could not be exported from the proto view, so those areas use icon tiles / a coded phone mockup / a color treatment instead. Swap in real photography via `public/` + `<img>` tags whenever assets are available — the layouts are already sized for it.
- The phone "Log In" screen in the "Built for Your City" section is coded HTML/CSS, not a screenshot — update the fields directly in `CityFit.astro` if the real login flow changes.

## SEO / LLM-friendliness

- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`), a single `<h1>`, and a logical heading hierarchy throughout.
- `Seo.astro` centralises `<title>`, meta description, canonical URL, Open Graph/Twitter tags, and JSON-LD (`GroceryStore` + `FAQPage` schema).
- `public/robots.txt` explicitly allows common AI crawlers (GPTBot, ClaudeBot, Google-Extended) in addition to standard search bots.
- `public/llms.txt` gives AI assistants/agents a plain-language summary of the site, services, and key pages (an emerging convention for LLM-readable sites).
- FAQ content is real markup (`<details>/<summary>`, no JS) so it's crawlable and matches the FAQPage structured data.
- Update `site.url` in `astro.config.mjs` and `src/data/site.ts` once a production domain is confirmed — canonical URLs, sitemap, and OG tags all derive from it.

## Before going live

- [ ] Replace the icon-tile hero collage / stylised map / coded phone mockup with real photography or Figma exports if available.
- [ ] Confirm the production domain and update `site.url` in `astro.config.mjs` and `src/data/site.ts`.
- [ ] Update `playStoreUrl`, `supportEmail`, `supportPhone`, and social links in `src/data/site.ts` with real values.
- [ ] Re-run `npm run build` and spot check `dist/` before deploying (any static host — Netlify, Vercel, Cloudflare Pages, GitHub Pages — works as-is).
