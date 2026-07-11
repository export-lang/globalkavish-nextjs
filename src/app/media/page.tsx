import { Download } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { VideoPlaceholder } from "@/components/media/video-placeholder";
import { categories } from "@/lib/data/categories";
import { company } from "@/lib/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Media & Downloads",
  description: "Factory footage, installation videos and downloadable catalogues from Global Kavish.",
  path: "/media",
});

const factoryVideos = [
  { seed: "media-factory-1", title: "Inside the Factory", duration: "3:12" },
  { seed: "media-factory-2", title: "Digital Glazing Line", duration: "2:04" },
  { seed: "media-factory-3", title: "Container Loading Day", duration: "1:48" },
];

const installVideos = [
  { seed: "media-install-1", title: "Large-Format Slab Install", duration: "4:20" },
  { seed: "media-install-2", title: "Outdoor Terrace Laying", duration: "2:55" },
  { seed: "media-install-3", title: "Bathroom Renovation", duration: "3:33" },
];

export default function MediaPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Media"
          title="See it before it ships."
          description="Factory footage, installation references and downloadable catalogues for every collection."
        />

        <div className="mt-20">
          <p className="mb-8 font-display text-2xl">Factory Footage</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {factoryVideos.map((v) => (
              <VideoPlaceholder key={v.seed} {...v} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <p className="mb-8 font-display text-2xl">Installation References</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {installVideos.map((v) => (
              <VideoPlaceholder key={v.seed} {...v} />
            ))}
          </div>
        </div>

        <div className="mt-24">
          <p className="mb-8 font-display text-2xl">Catalogue Downloads</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const subject = encodeURIComponent(`Catalogue request — ${cat.name}`);
              const body = encodeURIComponent(`Hello Kavish team,\n\nPlease share the latest ${cat.name} catalogue PDF.\n\nThank you.`);
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
