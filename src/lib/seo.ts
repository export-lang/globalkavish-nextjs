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
  material: string;
  url: string;
  image: string;
}) {
  // Only one size string maps cleanly to a single width/height pair — for
  // multi-size products, the sizes stay in additionalProperty instead.
  const singleSize = params.sizes.length === 1 ? params.sizes[0] : undefined;
  const [widthMm, heightMm] = singleSize?.split("x").map(Number) ?? [];
  const hasDimensions = singleSize !== undefined && Number.isFinite(widthMm) && Number.isFinite(heightMm);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: params.name,
    description: params.description,
    url: params.url,
    image: params.image,
    brand: { "@type": "Brand", name: company.brandName },
    manufacturer: { "@type": "Organization", name: company.legalName },
    material: params.material,
    ...(hasDimensions && {
      width: { "@type": "QuantitativeValue", value: widthMm, unitCode: "MMT" },
      height: { "@type": "QuantitativeValue", value: heightMm, unitCode: "MMT" },
    }),
    additionalProperty: params.sizes.map((size) => ({
      "@type": "PropertyValue",
      name: "Size",
      value: size,
    })),
    // No public price exists for this B2B catalogue — availability plus a
    // quote-request URL is published instead of an invented price.
    offers: {
      "@type": "Offer",
      url: params.url,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      businessFunction: "http://purl.org/goodrelations/v1#Sell",
      seller: { "@type": "Organization", name: company.legalName },
    },
  };
}

export function collectionJsonLd(params: {
  name: string;
  description: string;
  url: string;
  products: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: params.name,
    description: params.description,
    url: params.url,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: params.products.length,
      itemListElement: params.products.map((p, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: p.url,
        name: p.name,
      })),
    },
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
