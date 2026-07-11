# Production Audit Report — Kavish Global Website

Date: 2026-07-11 · Audited against: repository `main`/`claude/globalkavish-luxury-redesign-0tm31u`,
the "All Catalogue Link" Google Sheet, and the shared product-image Drive folder.

## 1. Brand name

- **41 occurrences of "Global Kavish" / "GLOBAL KAVISH"** found across UI (navbar logo, footer,
  hero, mobile menu), page copy, SEO metadata (titles, descriptions, OG image, JSON-LD
  Organization name/brand, product schema), catalogue download labels, and data files
  (`company.ts` legalName/brandName).
- Correct display brand is **KAVISH GLOBAL**. Domain (`globalkavish.com`) and email
  (`export@globalkavish.com`) are correct and untouched.

## 2. Factory names exposed publicly — CRITICAL

The Google Sheet columns are: `Product | Type | Factory | Size | Lyca | Kavish | Without logo`.
All 42 public product/collection records used the **Factory column as the public collection
name, slug, SEO title, breadcrumb, alt text and search keyword**:

> Simora, Cadillac, Active, Iyota, Orinda, Million, Vizoli, Stoviz, Octiva, Sunray,
> Kremen Vitrified (incl. "Fiorenza Granito" in a description), Motto Stone, Aajveto, Rollza,
> Lemel, Sparron, Kripton, Conor, Metro Star, Lepono, Lycos, Kiyaan, Itoli, Pengvin, Embito,
> Itcos, Marbilano Tiles, Letina, Portocer, Segam Tiles, Harisun, Mozilla, Lioli, Veto,
> Titanium, Neelson, Simola, Lunar Ceramics, Marfil, Alinta, Poco Loco*, Ospana

(*Poco Loco came from a catalogue PDF filename; Ospana is the sanitaryware factory name.)

**Fix applied:** the public product model is rebuilt with neutral, verified naming —
`{Product Type} — {Size} mm` (e.g. "600×1200 mm GVT") aggregated by type + size. Factory
names retained only in an internal, non-exported import structure for the export team's
catalogue-code mapping. No factory name appears in any name, slug, URL, title, alt text,
breadcrumb, filter, or search keyword.

## 3. Catalogue group filtering (Lyca / Kavish / Without-logo)

- Previous data stored and displayed **all three catalogue editions** — every product page
  showed "Lyca Catalogue" and "White Label Catalogue" request buttons, and the spec table
  listed "Catalogue Editions: Lyca · Global Kavish · White Label".
- **42 Lyca catalogue references and 42 without-logo references removed** from public data
  and UI. Only the sheet's **Kavish column** is now ingested, via a normalizing filter
  (trim + case-insensitive brand match) that future imports must pass through.
- Data oddities recorded for owner review (in CONTENT_REQUIRED.md):
  - Vizoli 300×450 "LIVE CATALOGUE" row: the Kavish column contains a 5-prefixed
    (Lyca-pattern) code `52226120_300x450`.
  - Sparron 600×1200: Kavish column value `716142214_600X1200` duplicates the Pengvin row.
  - Kremen nano 600×600 and Octiva outdoor 500×500: no distinct verified Kavish code —
    included without a code rather than guessing.

## 4. Fake / unconnected media

- **Media page:** 6 video cards ("Inside the Factory 3:12", "Digital Glazing Line 2:04",
  "Container Loading Day 1:48", "Large-Format Slab Install 4:20", "Outdoor Terrace Laying
  2:55", "Bathroom Renovation 3:33") had **invented titles and durations with no video
  files**. Removed entirely; replaced with the real product photography that exists (5
  designs from the shared Drive folder) and an honest catalogue-request section.
- **Product gallery:** fake "360° Preview" spin control, "Room visualiser — coming soon"
  badge, and 4 fake "angle" thumbnails (all generated placeholders implying photos) removed.
  Gallery now shows one clearly-labelled representative visual + working zoom.
- **Placeholder swatches:** generated gradient swatches remain for products without
  photography, now explicitly captioned as representative placeholders.
- **Real media verified:** the 5 Drive design photos (Gaios, Armani Rich Bianco, Adobe
  Emprador, Rome Black, Electra Almond Beige) are confirmed publicly shared
  (`anyone with link` permission checked via Drive API). They render with a placeholder
  underneath and graceful fallback. NOTE: could not be fetch-verified from this sandbox
  (Google CDN blocked by the build environment's egress policy) — needs a one-time visual
  check on the live site.
- **No Drive *preview page* URLs are used as media sources** — images use the direct
  `lh3.googleusercontent.com/d/{id}` object URL.
- **Catalogue "downloads":** no public PDF files exist yet, so buttons are honest
  pre-filled email requests (labelled as requests), Kavish catalogue only.

## 5. Non-functional / fake controls

- **Language selector (EN/AR/FR/ES)** — decorative, no i18n behind it → removed.
- **Currency selector (USD/EUR/AED/INR)** — decorative, nothing priced → removed.
- **"AI search — coming soon" badge** in the search dialog → removed (search itself works).
- Working features verified and kept: live search, category/size/application/finish filters,
  wishlist, compare, recently-viewed tracking, theme toggle, mega menu, mobile menu,
  WhatsApp/mailto links, enquiry form (mailto handoff), cookie banner, zoom lightbox.

## 6. Statistics & claims

- **"0+" rendering bug:** animated counters initialise at 0 and only animate when scrolled
  into view; with `-10%` viewport margins some environments never fired → counters now
  settle to the true value regardless, and respect reduced-motion.
- Statistic values (52+ countries, 100+ containers/month, 350,000 sqm annual production,
  1200+ customers, 15+ years, 1000+ collections, 10,000+ designs, 500+ dealers, 100,000 sqm
  factory area) were **supplied directly by the owner** (2026-07-11 brief) and are kept, but
  are listed in CONTENT_REQUIRED.md for standing confirmation.
- Certifications (ISO 9001, ISO 14001, CE, BIS, SGS, Intertek, Green Product) were also
  **owner-supplied**; kept, with certificate copies/numbers requested in CONTENT_REQUIRED.md.
- **Invented editorial content removed:** the 8-step manufacturing timeline (ball-milling,
  5,000-tonne presses, 1200°C firing details) and the 8-item quality-checks list were not
  owner-supplied → replaced with the owner's six verified manufacturing points. Hero line
  "Pressed at 5,000 tonnes" already replaced earlier with owner-supplied wording.
- Response-time promises ("within 24 hours", "one business day") were unverified → softened.
- Category descriptions rewritten to neutral, generic product-type descriptions (no
  company-specific claims).

## 7. Site-wide QA notes

- Production build: passes (70 static routes).
- No console errors or hydration warnings in browser smoke tests (Chromium, 1440×900);
  hero scroll animation stages verified at multiple scroll positions.
- Known environmental limitation: Drive-hosted images could not be loaded inside the audit
  sandbox (egress-blocked); on-page fallbacks confirmed working.
- Old product URLs (e.g. `/products/simora`) are removed with the factory-named model;
  since these URLs exposed factory names they intentionally 404 now. Wishlist/compare
  localStorage entries pointing at old slugs are silently ignored by design.
