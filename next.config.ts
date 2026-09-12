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
    ];
  },
};

export default nextConfig;
