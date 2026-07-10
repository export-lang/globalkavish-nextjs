import Link from "next/link";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="border-t border-border-subtle py-28 md:py-40">
      <Container className="text-center">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-500">Start an Export Enquiry</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance font-display text-4xl leading-[1.1] md:text-6xl">
            Let&apos;s build your next container of premium surfaces.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <Button asChild size="lg">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </MagneticButton>
            <Button asChild size="lg" variant="outline">
              <Link href="/media">Download Catalogue</Link>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
