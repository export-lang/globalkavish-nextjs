# MEDIA_AUDIT — complete inventory of the supplied Drive folder

Folder audited: `drive.google.com/drive/folders/1rYBO7YKdjoQ7TuxbJFrZhBu-fJA59S-y`
Method: full recursive listing via Drive API (all folders, all pages), file metadata
(type, size, MIME), sharing-permission checks, and content inspection where the API
could extract visual information. Date: 2026-07-11.

## Totals

| Metric | Count |
|---|---|
| Folders | 8 (root + 3 size folders + 5 design folders) |
| **Images** | **15** (all JPEG) |
| **Videos** | **0** |
| PDFs / catalogues | 0 |
| Other files | 0 |

**There are no video files anywhere in the supplied folder.** Consequently no video
sections are built (inventing them is prohibited). If videos exist elsewhere, share
that folder and they will be integrated.

## File-by-file inventory

All files are tile face/surface photography or design textures. Classification for
every file: **PRODUCT / TILE SURFACE**. All are publicly shared ("anyone with link" —
verified on sample files) and served via Google's direct object CDN
(`lh3.googleusercontent.com/d/{id}`), not Drive preview pages.

| # | File (Drive path) | Type | Size | Orientation | Est. quality | Subject | Best use | Page · Section | Role |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 600X600/GAIOS_600X600/GAIOS_600X600_R1.jpg | JPEG | 11.2 MB | Square | Very high (print-res) | Tile face, square format | Hero texture / large feature | Home · Hero tile + Media · Gallery | Hero + gallery |
| 2 | 600X1200/ARMANI RICH BIANCO/ARMANI RICH BIANCO_R1.jpg | JPEG | 1.7 MB | Portrait 1:2 | High | White marble-look tile face | 3D hero tile texture (portrait slab) | Home · Hero + Signature Designs | Hero + card |
| 3 | 600X1200/Adobe Emprador/HG_ADOBE EMPRADOR_R1.jpg | JPEG | 2.3 MB | Portrait 1:2 | High | Brown emperador marble-look, high gloss (metadata: licensed Shutterstock texture — see MEDIA_REVIEW_REQUIRED) | Feature card | Home + Media · Signature Designs | Card |
| 4 | 600X1200/HG_ROME BLACK/HG_ROME BLACK_R1.jpg | JPEG | 1.4 MB | Portrait 1:2 | High | Black marble-look, high gloss | Dark feature card | Home + Media · Signature Designs | Card |
| 5 | 600X1200/HG_ROME BLACK/HG_ROME BLACK_R2.jpg | JPEG | 1.4 MB | Portrait 1:2 | High | Second face of Rome Black | Variation display | Media · Gallery | Gallery |
| 6–15 | 800X800/ELECTRA ALMOND BEIGE/…R1–R10 | JPEG ×10 | ~1.1 MB each | Square | High | Ten production faces of one beige design — natural pattern variation set | Variation storytelling ("10 faces, one design") | Media · Gallery + Quality · Shade-variation visual | Gallery + supporting |

## Selection decisions

- **Selected for site (15/15)**: every image is genuine tile surface media and is used —
  hero texture (Armani Rich Bianco), Signature Designs (Gaios, Armani, Adobe Emprador,
  Rome Black, Electra), Media page floating gallery (all 15), Quality page
  shade-variation strip (Electra R6–R10, distinct from the Media page's R1–R5).
- **Rejected: none.** No file was unusable; no file contains a visible brand logo per
  available inspection (final visual confirmation on the live site recommended —
  see MEDIA_REVIEW_REQUIRED.md).
- **Not possible from this media set**: factory/production footage, container loading,
  packaging, warehouse, corporate, showroom or architectural media — none exists in
  the folder. Export/About pages therefore keep their designed (non-photographic)
  visual language rather than receiving off-topic tile images. Wanted assets are
  listed in CONTENT_REQUIRED.md.

## Ingestion approach (and its constraint)

The build environment's network policy blocks downloading from Google
(`drive.google.com` / `googleusercontent.com`), so binary copies cannot be pulled into
`/public` from here. The site therefore uses Google's **direct image CDN object URLs**
(not preview pages) with: stable ID-based references in one data module
(`src/lib/data/designs.ts`), lazy loading, a generated placeholder underneath while
loading, and automatic fallback if an asset is ever unshared. Google's CDN serves
these resized (`=w{width}`) and re-encoded (WebP where the browser supports it).
When you can run one command locally (or grant a network exception), the same module
supports swapping to `/public/media/kavish-global-*.webp` files — this is the
recommended final hardening step and is listed in CONTENT_REQUIRED.md.
