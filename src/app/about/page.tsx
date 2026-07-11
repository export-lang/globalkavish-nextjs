import { DepthCard } from "@/components/motion/depth-card";
import { ScrollFloat } from "@/components/motion/scroll-float";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { company } from "@/lib/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Kavish Global is a leading Indian exporter and supply partner for premium ceramic tiles and sanitaryware, delivering world-class surfaces to 52+ countries.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="About Kavish Global"
          title="Indian ceramic excellence, exported worldwide."
          description={company.story.whoWeAre}
        />

        <FadeIn className="mt-12 max-w-3xl">
          <p className="text-lg leading-relaxed text-foreground/70">{company.story.experience}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {company.story.promise.map((item) => (
              <span key={item} className="rounded-full bg-gold-500/10 px-5 py-2.5 text-sm font-medium text-gold-600 dark:text-gold-400">
                {item}
              </span>
            ))}
          </div>
        </FadeIn>

        <div className="mt-24 grid grid-cols-2 gap-x-8 gap-y-12 border-y border-border-subtle py-14 sm:grid-cols-3">
          {company.allStats.map((stat) => (
            <FadeIn key={stat.label}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-foreground/60">{stat.label}</p>
            </FadeIn>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-2">
          <ScrollFloat depth={0.35}>
            <FadeIn>
              <DepthCard className="rounded-3xl border border-border-subtle bg-background/60 p-10 backdrop-blur-sm">
                <p className="font-display text-2xl">Our Mission</p>
                <p className="mt-4 leading-relaxed text-foreground/70">{company.story.mission}</p>
              </DepthCard>
            </FadeIn>
          </ScrollFloat>
          <ScrollFloat depth={-0.25} className="md:mt-10">
            <FadeIn delay={0.1}>
              <DepthCard driftDelay={0.8} className="rounded-3xl border border-border-subtle bg-background/60 p-10 backdrop-blur-sm">
                <p className="font-display text-2xl">Our Vision</p>
                <p className="mt-4 leading-relaxed text-foreground/70">{company.story.vision}</p>
              </DepthCard>
            </FadeIn>
          </ScrollFloat>
        </div>

        <div className="mt-32">
          <p className="mb-14 font-display text-3xl md:text-4xl">Core Values</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {company.story.values.map((value, i) => (
              <FadeIn key={value} delay={i * 0.06} className="border-t border-border-subtle pt-6">
                <p className="font-display text-sm text-gold-500">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-display text-2xl">{value}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <p className="mb-14 font-display text-3xl md:text-4xl">Our Production Network</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {company.manufacturing.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05} className="rounded-2xl border border-border-subtle p-8">
                <p className="font-display text-xl">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{item.detail}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
