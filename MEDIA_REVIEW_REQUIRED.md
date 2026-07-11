# MEDIA_REVIEW_REQUIRED — items needing your confirmation

1. **Design → product-type mapping.** The five designs (Gaios 600×600, Armani Rich
   Bianco 600×1200, Adobe Emprador 600×1200 HG, Rome Black 600×1200 HG, Electra
   Almond Beige 800×800) are organised by size only. Confirm which product type each
   belongs to (GVT? Double Charge? Full Body?) so they can be attached to the right
   product detail pages. Until confirmed they are shown as designs, not linked to a
   specific product type.
2. **Adobe Emprador provenance.** The file's embedded metadata identifies it as a
   licensed Shutterstock texture ("natural marble texture background", ID 2697422107,
   purchase_order noted). Please confirm the licence covers website use for
   Kavish Global. It stays on the site meanwhile since it was supplied in your brand
   folder — say the word and it comes down.
3. **Logo check.** API-level inspection found no text/logo overlays in the images, but
   please visually confirm on the live site that no tile photo carries a LYCA or other
   third-party logo watermark.
4. **Catalogue-group provenance of the designs.** Confirm these five designs are
   Kavish-catalogue designs (not Lyca/no-logo edition artwork).
5. **Local media hardening.** Approve running the one-off ingestion step (documented
   in MEDIA_AUDIT.md) to store optimized WebP copies in the repo, removing the
   dependency on Google's CDN.
