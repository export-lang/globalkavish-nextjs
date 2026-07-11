import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { WorldMap } from "@/components/shared/world-map";
import { company, exportCountries } from "@/lib/data/company";

export function WhyUs() {
  return (
    <section className="border-t border-border-subtle py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Global Kavish"
          title="Manufacturing scale, export discipline."
          description={company.story.whoWeAre}
        />

        <div className="mt-16 grid grid-cols-2 gap-8 border-y border-border-subtle py-12 md:grid-cols-4">
          {company.stats.map((stat) => (
            <FadeIn key={stat.label}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-foreground/60">{stat.label}</p>
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
              Certifications &amp; Compliance
            </p>
            <ul className="mt-6 space-y-5">
              {company.certifications.map((cert) => (
                <li key={cert.name} className="flex items-start justify-between border-b border-border-subtle pb-4">
                  <span className="font-display text-lg">{cert.name}</span>
                  <span className="max-w-[55%] text-right text-sm text-foreground/60">{cert.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
