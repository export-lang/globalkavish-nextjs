import { Download } from "lucide-react";

import { MediaWall } from "@/components/media/media-wall";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { categories } from "@/lib/data/categories";
import { company } from "@/lib/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Media & Downloads",
  description: "Real production tile photography and Kavish catalogue requests from Kavish Global.",
  path: "/media",
});

export default function MediaPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Media"
          title="Surfaces, photographed in production."
          description="Every image below is a real tile face from our current Kavish designs — no renders, no stock walls."
        />

        <div className="mt-20">
          <MediaWall />
        </div>

        <div className="mt-28">
          <p className="mb-8 font-display text-2xl">Kavish Catalogue Requests</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const subject = encodeURIComponent(`Kavish catalogue request — ${cat.name}`);
              const body = encodeURIComponent(
                `Hello Kavish Global team,\n\nPlease share the latest Kavish ${cat.name} catalogue PDF.\n\nThank you.`
              );
              return (
                <a
                  key={cat.slug}
                  href={`mailto:${company.email}?subject=${subject}&body=${body}`}
                  className="flex items-center justify-between rounded-2xl border border-border-subtle px-6 py-5 text-sm transition-colors hover:border-gold-500 hover:text-gold-500"
                >
                  {cat.name}
                  <Download className="h-4 w-4 shrink-0" />
                </a>
              );
            })}
          </div>
          <p className="mt-6 text-xs text-foreground/40">
            Catalogues are shared directly by our export team on request to keep pricing and specifications current.
          </p>
        </div>
      </Container>
    </div>
  );
}
