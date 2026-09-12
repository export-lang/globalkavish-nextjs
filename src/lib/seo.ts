import type { Metadata } from "next";

import { company } from "@/lib/data/company";

export const siteUrl = "https://www.globalkavish.com";

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  // Safety net: strip the brand if a page title includes it by habit, so it
  // is never appended twice regardless of how the title is written.
  const brand = company.brandName;
  const cleanTitle = title
    .replace(new RegExp(`^\\s*${brand}\\s*[—–|-]\\s*`, "i"), "")
    .replace(new RegExp(`\\s*[—–|-]\\s*${brand}\\s*$`, "i"), "")
    .trim();
  const fullTitle = cleanTitle === "" || cleanTitle === brand ? brand : `${cleanTitle} | ${brand}`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.brandName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${company.brandName} ceramic tiles and sanitaryware`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteUrl}/opengraph-image`],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: company.brandName,
    url: siteUrl,
    logo: `${siteUrl}/icon`,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.factory,
      addressCountry: "IN",
    },
    sameAs: Object.values(company.social),
  };
}

export function productJsonLd(params: {
  name: string;
  description: string;
  sizes: string[];
  url: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: params.name,
    description: params.description,
    url: params.url,
    image: params.image,
    brand: { "@type": "Brand", name: company.brandName },
    manufacturer: { "@type": "Organization", name: company.legalName },
    additionalProperty: params.sizes.map((size) => ({
      "@type": "PropertyValue",
      name: "Size",
      value: size,
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
