# Global Kavish — Premium Ceramic Tiles & Sanitaryware Export Website

A cinematic, Awwwards-grade marketing site for Global Kavish, a ceramic tile and
sanitaryware export house based in Morbi, Gujarat. Built with Next.js 15 (App Router),
React Three Fiber, Framer Motion, GSAP and Lenis smooth scroll.

## Stack

- **Framework:** Next.js 15, React 19, TypeScript, TailwindCSS v4
- **3D / Animation:** Three.js + React Three Fiber + drei, Framer Motion, GSAP, Lenis
- **UI primitives:** Radix UI (Dialog, Select, Tabs, Accordion, Tooltip, Switch), shadcn-style components
- **SEO:** File-based metadata, `sitemap.ts`, `robots.ts`, JSON-LD (Organization, Product, Breadcrumb), dynamic OG images via `next/og`

## Project structure

```
src/
  app/                     Route segments (App Router)
    collections/           Full catalogue + per-category pages, live filters
    products/[slug]/       Product detail pages (gallery, specs, downloads, enquiry)
    about/ export/ quality/ media/ contact/
    wishlist/ compare/
    sitemap.ts robots.ts opengraph-image.tsx icon.tsx
  components/
    home/                  Hero (R3F scene), factory timeline, collections teaser, why-us
    collections/           Mega-filter product explorer
    product/               Gallery, spec table, downloads, enquiry form
    layout/                Navbar (mega menu, search, theme/lang/currency), footer
    providers/             Theme (next-themes), Lenis smooth scroll, app providers
    shared/                Reusable primitives (Container, Button, RevealText, WorldMap, ProductCard…)
  lib/
    data/                  Company info, categories, products (seeded from the real product register)
    types.ts seo.ts store.tsx utils.ts
```

## Data sourcing

- **Product catalogue** (`lib/data/products.ts`, `categories.ts`): seeded from the company's
  authoritative "All Catalogue Link" Google Sheet — names, categories, sizes and catalogue
  codes are real. Finish tags appear only where the sheet states them; colour data and
  datasheets are pending (see TODO.md).
- **Company data** (`lib/data/company.ts`): story, mission/vision/values, statistics,
  certifications, contact details and export markets supplied directly by Global Kavish.
- **Product imagery** (`lib/data/designs.ts`): five real designs load from the company's
  publicly shared Google Drive (Gaios, Armani Rich Bianco, Adobe Emprador, Rome Black,
  Electra Almond Beige). All other collections show a generated `ProductSwatch` placeholder
  until per-collection photography is supplied — tracked in TODO.md.

## Headless CMS migration path

Product/category/company data is isolated in `src/lib/data/*.ts` behind small accessor
functions (`getProduct`, `getProductsByCategory`, etc.) so it can be swapped for a
Sanity/Payload/Strapi data layer later without touching page or component code — replace the
static arrays with fetch calls returning the same shapes defined in `src/lib/types.ts`.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```
