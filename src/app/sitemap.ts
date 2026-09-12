import type { MetadataRoute } from "next";

import { categories } from "@/lib/data/categories";
import { products } from "@/lib/data/products";
import { siteUrl } from "@/lib/seo";

// No per-route last-modified date is tracked in the data yet, so lastModified
// is omitted rather than stamped with one identical, fake date across every
// URL. changeFrequency and priority are dropped too — Google ignores both.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/collections",
    "/export",
    "/quality",
    "/media",
    "/contact",
    "/terms-of-service",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${siteUrl}/collections/${c.slug}`,
  }));

  const productRoutes = products.map((p) => ({
    url: `${siteUrl}/products/${p.slug}`,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
