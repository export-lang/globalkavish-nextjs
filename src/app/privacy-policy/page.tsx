import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { company } from "@/lib/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Kavish Global collects, uses and protects personal information submitted through our website and internal business systems.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container className="max-w-3xl">
        <SectionHeading as="h1" eyebrow="Legal" title="Privacy Policy" />
        <p className="mt-2 text-sm text-foreground/50">Effective Date: 12 September 2026</p>

        <div className="mt-16 space-y-12 text-sm leading-relaxed text-foreground/70">
          <p>
            Kavish Global respects your privacy and is committed to protecting personal information and data
            processed through our website and internal business systems.
          </p>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">1. About Us</h2>
            <p>
              Kavish Global is engaged in the export and supply of ceramic and porcelain tiles, sanitaryware,
              bathroom products, and related building materials to international markets.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">2. Information We Collect</h2>
            <p>
              Our website may collect information voluntarily provided by visitors, such as name, email address,
              phone number, company name, enquiry details, and other information submitted through contact forms
              or business communications.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">3. How We Use Information</h2>
            <p>
              We may use information to respond to enquiries, provide product or business information, communicate
              with customers and business partners, improve our website and services, and conduct legitimate
              business operations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">4. YouTube API Services</h2>
            <p>
              Kavish Global uses YouTube API Services as part of an internal content-publishing automation. The
              integration is used to upload and manage Kavish Global&apos;s own videos on our own YouTube channel.
            </p>
            <p className="mt-4">
              Our YouTube API integration uses Google OAuth 2.0 authorization. We may access only the permissions
              expressly authorized by the Google account used with the integration.
            </p>
            <p className="mt-4">
              We do not sell, rent, or share YouTube user data with third parties for advertising or unrelated
              purposes.
            </p>
            <p className="mt-4">
              Use of information received from Google APIs will comply with the Google API Services User Data
              Policy, including the Limited Use requirements.
            </p>
            <p className="mt-4">
              Google Privacy Policy is available at:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-gold-500 hover:underline"
              >
                https://policies.google.com/privacy
              </a>
            </p>
            <p className="mt-4">
              YouTube Terms of Service are available at:{" "}
              <a
                href="https://www.youtube.com/t/terms"
                target="_blank"
                rel="noreferrer"
                className="text-gold-500 hover:underline"
              >
                https://www.youtube.com/t/terms
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">5. Revoking Google / YouTube Access</h2>
            <p>
              Users can revoke Kavish Global&apos;s access to their Google account at any time through Google
              Account permissions:{" "}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noreferrer"
                className="text-gold-500 hover:underline"
              >
                https://myaccount.google.com/permissions
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">6. Data Retention and Deletion</h2>
            <p>
              Our YouTube API integration is used only for internal publishing to company-controlled accounts. We
              do not intentionally retain YouTube user data beyond what is necessary to operate the integration.
            </p>
            <p className="mt-4">
              If you wish to request deletion of personal information held by Kavish Global, contact us using the
              contact details below.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">7. Data Security</h2>
            <p>
              We take reasonable administrative and technical measures to protect information from unauthorized
              access, disclosure, alteration, or loss.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">8. Third-Party Services</h2>
            <p>
              Our website and internal systems may use third-party services including Google and YouTube. Those
              services are governed by their respective privacy policies and terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated effective date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-foreground">10. Contact Us</h2>
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
