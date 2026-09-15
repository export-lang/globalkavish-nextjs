import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // Apex and www currently both serve the full site with a 200 — Google sees
  // two copies. Canonicals and the sitemap already point to www, so redirect
  // the apex host there permanently.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "globalkavish.com" }],
        destination: "https://www.globalkavish.com/:path*",
        permanent: true,
      },
      // Old site used /products/tiles/... and /products/sanitary-ware/...;
      // the new site uses /collections/.... Google still has the old URLs
      // indexed and they currently 404. These rules match /products exactly,
      // /products/tiles/* and /products/sanitary-ware/* only — never a broad
      // /products/:path*, which would 404 every real /products/[slug] page.
      { source: "/products/tiles/floor-tiles", destination: "/collections/ceramic-floor-tiles", permanent: true },
      { source: "/products/tiles/wall-tiles", destination: "/collections/ceramic-wall-tiles", permanent: true },
      { source: "/products/tiles/double-charge", destination: "/collections/double-loading-floor-tiles", permanent: true },
      { source: "/products/tiles/out-door-tiles", destination: "/collections/outdoor-porcelain-floor-tiles", permanent: true },
      { source: "/products/tiles/:path*", destination: "/collections", permanent: true },
      { source: "/products/tiles", destination: "/collections", permanent: true },
      { source: "/products/sanitary-ware/:path*", destination: "/collections", permanent: true },
      { source: "/products/sanitary-ware", destination: "/collections", permanent: true },
      { source: "/products", destination: "/collections", permanent: true },
    ];
  },
};

export default nextConfig;
