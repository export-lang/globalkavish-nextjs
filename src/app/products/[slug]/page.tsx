import Link from "next/link";
import { notFound } from "next/navigation";

import { DepthCard } from "@/components/motion/depth-card";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { ProductCard } from "@/components/shared/product-card";
import { Gallery } from "@/components/product/gallery";
import { SpecTable } from "@/components/product/spec-table";
import { Downloads } from "@/components/product/downloads";
import { EnquiryForm } from "@/components/product/enquiry-form";
import { TrackRecentlyViewed } from "@/components/product/track-recently-viewed";
import { Button } from "@/components/ui/button";
import { getCategory } from "@/lib/data/categories";
import { company } from "@/lib/data/company";
import { getProduct, getRelatedProducts, products } from "@/lib/data/products";
import { breadcrumbJsonLd, buildMetadata, productJsonLd, siteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return buildMetadata({ title: "Collection", description: "Collection not found." });
  return buildMetadata({
    title: product.name,
    description: `${product.description} Request an export quote from Kavish Global.`,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const primaryCategory = getCategory(product.categorySlugs[0]);
  const whatsappHref = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hello Kavish, I'm interested in ${product.name} (${product.sizes.join(", ")}). Could you share pricing and MOQ?`
  )}`;

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            productJsonLd({
              name: product.name,
              description: product.description,
              sizes: product.sizes,
              url: `${siteUrl}/products/${product.slug}`,
              image: `${siteUrl}/opengraph-image`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Collections", url: `${siteUrl}/collections` },
              ...(primaryCategory
                ? [{ name: primaryCategory.name, url: `${siteUrl}/collections/${primaryCategory.slug}` }]
                : []),
              { name: product.name, url: `${siteUrl}/products/${product.slug}` },
            ])
          ),
        }}
      />
      <TrackRecentlyViewed slug={product.slug} />

      <Container>
        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-foreground/50">
          <Link href="/collections" className="hover:text-foreground">
            Collections
          </Link>
          {primaryCategory && (
            <>
              <span>/</span>
              <Link href={`/collections/${primaryCategory.slug}`} className="hover:text-foreground">
                {primaryCategory.name}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <FadeIn>
            <DepthCard>
              <Gallery slug={product.slug} name={product.name} />
            </DepthCard>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-500">
              {product.categorySlugs.map((c) => getCategory(c)?.shortName).join(" · ")}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-6xl">{product.name}</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/70">{product.description}</p>

            {product.sizes.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span key={size} className="rounded-full border border-border-subtle px-4 py-2 text-sm">
                    {size} mm
                  </span>
                ))}
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={`mailto:${company.email}?subject=${encodeURIComponent(`Quote request — ${product.name}`)}`}>
                  Request a Quote
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp Enquiry
                </a>
              </Button>
            </div>

            <div className="mt-12 rounded-2xl border border-border-subtle bg-background/60 p-6 shadow-xl shadow-black/5 backdrop-blur-sm md:p-8">
              <p className="mb-4 font-display text-xl">Technical Specifications</p>
              <SpecTable product={product} />
            </div>

            <div className="mt-10">
              <p className="mb-4 font-display text-xl">Downloads</p>
              <Downloads product={product} />
            </div>
          </FadeIn>
        </div>

        {related.length > 0 && (
          <div className="mt-32">
            <p className="mb-10 font-display text-3xl">You may also like</p>
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} driftDelay={i * 0.6} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-32 rounded-3xl border border-border-subtle p-8 md:p-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-gold-500">Export Enquiry</p>
          <h2 className="mb-8 font-display text-3xl">Get pricing for {product.name}</h2>
          <EnquiryForm productName={product.name} />
        </div>
      </Container>
    </div>
  );
}
