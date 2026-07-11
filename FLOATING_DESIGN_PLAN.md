# FLOATING_DESIGN_PLAN — one motion language for the whole site

Goal: the entire site reads as one continuous, layered ceramic world — slow, premium,
architectural. One WebGL scene (the hero) carries true 3D; everywhere else uses a
shared set of cheap, GPU-friendly transform primitives.

## Shared motion system (new `src/components/motion/`)

| Primitive | What it does | Tech | Used on |
|---|---|---|---|
| `useReducedMotion` guard | disables all non-essential motion | media query | everywhere |
| `ScrollFloat` | element drifts vertically at a depth-dependent speed while in view (scroll parallax) | Framer Motion `useScroll`+`useTransform` | all pages |
| `DepthCard` | layered card: content lifts, shadow deepens, gentle perspective on hover; subtle idle drift | Framer Motion springs + CSS transform | product cards, panels |
| `AmbientLight` | fixed background layer with two very slow moving light glows that evolve as you scroll through sections | CSS keyframes (60s+), `mix-blend` | site-wide (layout) |
| `FloatIn` | replaces static section reveals: elements enter from slightly different depths (y + scale + blur) | Framer Motion | section content |

## Page-by-page

| Page | Current static problem | Floating solution | Tech | Media | Perf risk |
|---|---|---|---|---|---|
| Home / Hero | Tile is untextured, no pointer response, flat edges | Real Kavish tile (Armani Rich Bianco 600×1200 texture) as a thin ceramic slab: glazed face (clearcoat), matte clay body/edges, slow float + micro-rotation, pointer-parallax, scroll-driven formation kept; soft contact shadow | R3F (existing canvas, only WebGL on site) | Armani texture (CORS-safe CDN, colour fallback) | Medium — capped DPR, one canvas |
| Home / sections | Stacked slides feel | `ScrollFloat` depths on Signature Designs (alternating parallax speeds), stats drift, section backgrounds share `AmbientLight` continuity | FM + CSS | existing 5 designs | Low |
| Collections | Flat grid | Cards become `DepthCard`s with alternating `ScrollFloat` offsets → drifting surface gallery; filters unchanged (usability) | FM | swatches/designs | Low |
| Product detail | Flat single image | Visual sits in a `DepthCard` studio panel with pointer-tilt (small, ≤4°); floating layered spec panel (glass) | FM only (no extra WebGL) | swatch (photos pending mapping) | Low |
| Media | Normal grid | Floating editorial media wall: asymmetric two-speed parallax columns, hover lift, full lightbox (keyboard + swipe-friendly), Electra 10-face story row | FM | all 15 images | Low-med (lazy) |
| About | Corporate rows | Large-type editorial with `ScrollFloat` layered pull-quotes and drifting value cards | FM | none suitable (no corporate media exists) | Low |
| Export | Static lists | Map dots already animate; add layered drift to process steps + container animation panel floats | FM | none exists (container/packaging media wanted) | Low |
| Quality | Static cards | Precision panels on glass depth layers + Electra shade-variation strip (R6–R10) drifting at two speeds | FM | Electra R6–R10 | Low |
| Contact | Static form | Form on a raised depth panel; ambient light only behind (no motion behind fields) | CSS | none | Low |
| Nav | Standard bar | Suspended glass capsule: floats in on load, compacts + deepens shadow on scroll | FM + CSS | — | Low |

## Guardrails

- One WebGL canvas total (hero); everything else CSS/Framer transforms.
- All idle drift ≤ 8px amplitude, ≥ 6s period; hover tilt ≤ 4°; no scroll-jacking.
- `prefers-reduced-motion`: ambient/idle motion off, reveals become fades, hero
  renders static-lit scene.
- Mobile: pointer-parallax off, particle count reduced, parallax amplitudes halved.
- Offscreen: hero canvas stops rendering when out of view (frameloop demand via
  visibility check); media lazy-loads.
