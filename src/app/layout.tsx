import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

import { AppProviders } from "@/components/providers/app-providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AmbientLight } from "@/components/motion/ambient-light";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { CookieBanner } from "@/components/shared/cookie-banner";
import { organizationJsonLd, siteUrl } from "@/lib/seo";
import { company } from "@/lib/data/company";

import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.legalName} — Premium Ceramic Tiles & Sanitaryware Exports`,
    template: `%s | ${company.brandName}`,
  },
  description:
    "Kavish Global exports premium ceramic tiles, GVT, large-format slabs and sanitaryware from Morbi, India to 52+ countries — engineered surfaces for architects, distributors and OEM partners.",
  keywords: [
    "ceramic tiles exporter",
    "porcelain tiles India",
    "GVT tiles manufacturer",
    "Morbi tiles export",
    "vitrified tiles supplier",
    "sanitaryware export",
    "Kavish Global",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${manrope.variable} h-full`}>
      <body className="grain flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <AppProviders>
          <AmbientLight />
          <Navbar />
          <main className="relative z-[1] flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </AppProviders>
      </body>
    </html>
  );
}
