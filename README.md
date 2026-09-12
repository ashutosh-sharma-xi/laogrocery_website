# LAO Delivery — Marketing Website

A static, SEO/LLM-friendly marketing site for **LAO**, a discounted grocery delivery-and-pickup app for Tier 3 Indian cities (launching in Mandideep, Madhya Pradesh). Built from the Figma prototypes for the mobile and web experiences, with the web nav/layout patterns back-ported into the mobile view so small screens aren't missing navigation or the cities/map content.

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
  images/hero-collage.webp        Hero product collage photo
  images/service-*.webp           Category photos for 5 of 6 service cards
  favicon.svg, favicon-32.png, favicon-64.png, apple-touch-icon.png
  og-image.png / og-image.svg   Social share preview image
  robots.txt, llms.txt     Crawler + AI-agent guidance
  sitemap-index.xml (generated on build)
```

## Content

All copy, nav links, service categories, FAQ, and the nearby-cities list live in **`src/data/site.ts`**. Update the site name, Play Store URL, support email/phone, or social links there as well.

## Design notes

- Faithfully follows both Figma prototypes (mobile: `node-id=127-102`, web: `node-id=116-150`). The mobile prototype in Figma had no header navigation; this build adds the same nav (as a slide-down drawer) to mobile so the experience is consistent across breakpoints, per the brief.
- The Madhya Pradesh "This Is Where LAO Begins" map is a real illustrated map graphic (`public/images/mp-map.webp`), background-removed from a supplied asset — not a hand-drawn placeholder.
- The hero product collage and 5 of the 6 "Our Services" category photos (Fresh Product, Dairy, Household Goods, Beauty, Baby Care) are real photography, optimised to WebP and stored in `public/images/`. **Snacks** still has no source photo, so it falls back to the original icon tile — drop a `service-snacks.webp` into `public/images/` and set `image: "/images/service-snacks.webp"` on that entry in `src/data/site.ts` once one's available (`Services.astro` already prefers `service.image` over the icon when present).
- The phone "Log In" screen in the "Built for Your City" section and the footer's photographic aisle backdrop are still coded HTML/CSS or a colour treatment rather than real screenshots/photography — swap them in via `public/` + `<img>`/`background-image` whenever those assets are available.
- Delivery vs. pickup and the "discounted home delivery" positioning are called out in the hero, the trust badges, the "Best Prices" point, an FAQ entry, and the footer's Store Locations column — see `whyLaoPoints`, `trustBadges`, `faqs`, and `storeLocations` in `src/data/site.ts`.
- **`storeLocations`** in `src/data/site.ts` (rendered in the footer) are placeholder addresses in Mandideep — replace with real pickup-store addresses before launch.

## SEO / LLM-friendliness

- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`), a single `<h1>`, and a logical heading hierarchy throughout.
- `Seo.astro` centralises `<title>`, meta description, canonical URL, Open Graph/Twitter tags, and JSON-LD (`GroceryStore` + `FAQPage` schema).
- `public/robots.txt` explicitly allows common AI crawlers (GPTBot, ClaudeBot, Google-Extended) in addition to standard search bots.
- `public/llms.txt` gives AI assistants/agents a plain-language summary of the site, services, and key pages (an emerging convention for LLM-readable sites).
- FAQ content is real markup (`<details>/<summary>`, no JS) so it's crawlable and matches the FAQPage structured data.
- `site.url` in `astro.config.mjs` and `src/data/site.ts` reads Render's auto-injected `RENDER_EXTERNAL_URL` at build time (falling back to a placeholder domain locally), so canonical URLs, the sitemap, and OG tags are correct against whatever `onrender.com` URL Render assigns — no manual edit needed until a custom domain replaces it.

## Deploying to Render

This repo is set up as a Render **Static Site**:

| Setting | Value |
|---|---|
| Root Directory | _(leave blank — repo root)_ |
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |
| Environment variable | `NODE_VERSION=22` (the app requires Node 22+) |

Once a custom domain is attached in Render, either rely on Render's domain config as-is, or hardcode the final domain into `site.url` in both files above and remove the `RENDER_EXTERNAL_URL` fallback if you want it fixed regardless of environment.

## Before going live

- [ ] Add a real Snacks category photo (see Design notes above) and drop in a phone-login screenshot / footer aisle photo / accurate MP map if those become available.
- [ ] Update `playStoreUrl`, `supportEmail`, `supportPhones`, and social links in `src/data/site.ts` with real values.
- [ ] Replace the placeholder `storeLocations` addresses in `src/data/site.ts` with real pickup-store addresses.
- [ ] Re-run `npm run build` and spot check `dist/` before deploying (any static host — Render, Netlify, Vercel, Cloudflare Pages, GitHub Pages — works as-is).
