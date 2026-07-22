import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { WorldMap } from "@/components/shared/world-map";
import { company, exportCountries } from "@/lib/data/company";

const capabilities = ["Product Selection", "Quality Coordination", "Export Packaging", "Documentation Support"];

export function WhyUs() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Kavish Global"
          title="Product choice, quality coordination and export support."
          description="Kavish Global supports international buyers with ceramic product selection, production coordination, pre-shipment inspection, export packaging and documentation support through a qualified manufacturing network in Morbi, India."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 border-y border-border-subtle py-12 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((title, i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <p className="font-display text-2xl">{title}</p>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {company.whyChooseUs.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border-subtle px-4 py-2 text-sm text-foreground/70"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <WorldMap countries={exportCountries} />
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/40">
              Key Export Markets
            </p>
            <ul className="mt-6 space-y-5">
              {company.exportMarkets.map((market) => (
                <li key={market} className="flex items-center gap-3 border-b border-border-subtle pb-4">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  <span className="font-display text-lg">{market}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
