"use client";

import Link from "next/link";

import { Container } from "@/components/shared/container";
import { ProductCard } from "@/components/shared/product-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data/products";
import { useCollections } from "@/lib/store";

export default function WishlistPage() {
  const { wishlist } = useCollections();
  const items = products.filter((p) => wishlist.includes(p.slug));

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading eyebrow="Saved" title="Your Wishlist" description="Collections you've saved for later." />
        <div className="mt-16">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border-subtle py-24 text-center text-foreground/50">
              <p>No collections saved yet.</p>
              <Button asChild className="mt-6">
                <Link href="/collections">Browse Collections</Link>
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
