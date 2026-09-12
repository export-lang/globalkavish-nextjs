import Link from "next/link";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { company } from "@/lib/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Terms of Service governing the use of the Kavish Global website, digital services and company-operated online tools.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container className="max-w-3xl">
        <SectionHeading as="h1" eyebrow="Legal" title="Privacy Policy" />
        <p className="mt-2 text-sm text-foreground/50">Effective Date: 12 September 2026</p>

        <div className="mt-16 space-y-12 text-sm leading-relaxed text-foreground/70">
          <p>
            Welcome to Kavish Global. These Terms of Service govern the use of our website, digital services, and
            company-operated online tools.
          </p>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">1. About Kavish Global</h2>
            <p>
              Kavish Global is engaged in the export and supply of ceramic and porcelain tiles, sanitaryware,
              bathroom products, and related building materials to international markets.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">2. Use of Our Website and Services</h2>
            <p>
              Our website and online services are provided for business information, product presentation,
              marketing, communication, and commercial enquiries. Users must not misuse the website, attempt
              unauthorized access, disrupt services, or use our content for unlawful purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">3. Product Information</h2>
            <p>
              We aim to keep product information, images, descriptions, sizes, finishes, specifications, and other
              details accurate and up to date. However, actual products may vary slightly in appearance, shade,
              texture, packaging, availability, or specifications. Final commercial terms are confirmed through
              quotations, proforma invoices, contracts, or other written agreements.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">4. YouTube and Third-Party API Services</h2>
            <p>
              Kavish Global uses YouTube API Services and other third-party platform APIs as part of internal
              business automation for publishing and managing company-owned marketing content.
            </p>
            <p className="mt-4">
              Our YouTube integration is used to upload and manage Kavish Global&apos;s own videos on our own
              YouTube channel. Access is authorized through Google OAuth 2.0 and is used only for the permissions
              required to operate the integration.
            </p>
            <p className="mt-4">
              Use of YouTube API Services is also subject to the{" "}
              <a
                href="https://www.youtube.com/t/terms"
                target="_blank"
                rel="noreferrer"
                className="text-gold-500 hover:underline"
              >
                YouTube Terms of Service
              </a>
              .
            </p>
            <p className="mt-4">
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-gold-500 hover:underline"
              >
                Google Privacy Policy
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">5. Social Media Integrations</h2>
            <p>
              Kavish Global may use APIs or integrations from platforms including YouTube, Pinterest, LinkedIn,
              Facebook, Instagram, X, and other services to publish and manage company-owned content. These
              integrations are primarily used internally and are not offered as a public software service to
              external users.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">6. Intellectual Property</h2>
            <p>
              Unless otherwise stated, the content on our website and company-operated channels, including product
              images, videos, graphics, logos, text, designs, and marketing materials, is owned by Kavish Global or
              used with appropriate authorization.
            </p>
            <p className="mt-4">
              Content may not be copied, reproduced, distributed, modified, or commercially reused without prior
              written permission where applicable.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">7. Third-Party Links and Services</h2>
            <p>
              Our website may contain links to third-party websites, platforms, or services. Kavish Global is not
              responsible for the content, availability, security, or privacy practices of third-party services.
              Their own terms and policies apply when users access those services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">8. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, Kavish Global is not liable for indirect, incidental, or
              consequential losses arising from the use of our website or third-party services. Nothing on the
              website should be treated as a final commercial commitment unless confirmed separately in writing by
              Kavish Global.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">9. Privacy</h2>
            <p>
              Our collection and handling of personal information is governed by our Privacy Policy, available at:{" "}
              <Link href="/privacy-policy" className="text-gold-500 hover:underline">
                https://www.globalkavish.com/privacy-policy
              </Link>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">10. Changes to These Terms</h2>
            <p>
              We may update these Terms of Service from time to time. Updated terms will be published on this page
              with a revised effective date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">11. Governing Law</h2>
            <p>
              These Terms are governed by the applicable laws of India. Any disputes relating to our business or
              use of our website will be subject to the jurisdiction applicable to Kavish Global&apos;s registered
              place of business, unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">12. Contact Us</h2>
            <p>
              {company.legalName}
              <br />
              {company.address.office}
              <br />
              Email:{" "}
              <a href={`mailto:${company.email}`} className="text-gold-500 hover:underline">
                {company.email}
              </a>
              <br />
              Website:{" "}
              <a href="https://www.globalkavish.com" className="text-gold-500 hover:underline">
                https://www.globalkavish.com
              </a>
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
