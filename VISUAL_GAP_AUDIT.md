# VISUAL_GAP_AUDIT — floating-world requirement

Judged on the **rendered result** (Playwright screenshots at 1440×900 and 390×844),
not on "a component exists in code". Honest baseline → fix applied → verdict now.

> Verification caveat: the real tile textures (hero slab + ambient ceramic slabs)
> load from Google's image CDN, which this build sandbox cannot reach. I verified
> geometry, motion, DOM, layout and fallbacks here; the **photographic** layer must
> be eyeballed on the live site. Everything structural below is screenshot-verified.

| # | Question | Baseline verdict | Fix applied | Now |
|---|---|---|---|---|
| 1 | Homepage feels floating before interaction? | **WEAK** — tile was faint (0.25 opacity) at load; particles drifted but the "ceramic world" wasn't obvious in 3s | Hero slab now present at 0.6+ opacity and 0.78 scale from first paint, floating with contact shadow + drifting minerals; site-wide ambient ceramic slabs behind everything | **PASS** |
| 2 | Visible continuous ambient motion? | **WEAK** — only the two light-glows moved off the hero | Added `AmbientTileField`: 2–3 large real tile slabs drift continuously site-wide (34/44/52s cycles) behind all pages, plus the glows and hero | **PASS** (photographic layer pending live check) |
| 3 | Hero tile clearly floats in 3D? | **WEAK** — faint, easy to miss | Solid ceramic slab, glazed face + matte clay edges, slow float, micro-rotation, pointer parallax, soft contact shadow | **PASS** (screenshot-verified) |
| 4 | Sections overlap through depth? | **FAIL** — flat `border-t` stacking | Alternating rhythm: raised translucent/dark panels (`-mt-16`, rounded tops, top shadow, backdrop-blur) lift over transparent "background planes" that reveal the ambient field | **PASS** (screenshot-verified) |
| 5 | Tiles escape rectangular card boundaries? | **FAIL** — everything boxed | Signature/collection tiles float on staggered depth planes (ScrollFloat offsets + DepthCard lift) so they read as suspended surfaces, not a boxed grid | **WEAK→PASS-ish** — improved to staggered floating planes; true edge-bleed crops are a further step (kept restrained for readability) |
| 6 | Scroll feels like travelling through layered surfaces? | **FAIL** off the hero | Section depth-overlap + continuous ambient slabs + per-section parallax give a layered descent; the hero's mineral→slab formation still leads in | **PASS** on home, **WEAK→OK** on inner pages |
| 7 | Floating language continues across all pages? | **WEAK** — parallax sprinkled | The ambient ceramic field is now **site-wide** (every route), unifying Collections, Product, Media, About, Export, Quality under one floating layer, each with page-specific depth | **PASS** (structural), photographic layer pending live check |
| 8 | Or still normal layouts + FloatIn? | **Honest: YES, that was true** | The site-wide ambient field + section overlap + present-on-load hero move it decisively past "normal layout with parallax" | **Addressed** |

## What changed (files)
- `components/motion/ambient-tile-field.tsx` (new) + `globals.css` slab keyframes — site-wide floating ceramic layer.
- `components/home/hero-scene.tsx` — slab present & floating on load.
- `components/home/{signature-designs,collections-teaser,factory-teaser,why-us,cta}.tsx` — depth-overlap panel rhythm.
- `app/layout.tsx` — mounts the ambient field behind content.
- Reduced-motion hardened in CSS (`prefers-reduced-motion` disables all ambient/slab drift with `!important`).

## Honest remaining gaps (not yet "maximal")
- **Edge-bleed cropped slabs** inside content (tiles literally clipped by the viewport edge mid-page) are only partially done — I prioritised readability and performance. Can push further on your word.
- The **photographic** richness of the ambient field depends on the Drive CDN; hardening to local `/public` WebP (see CONTENT_REQUIRED.md) will make it bullet-proof and faster.
- Real **video** would elevate hero/Media dramatically — see MEDIA_NEEDED.md.
