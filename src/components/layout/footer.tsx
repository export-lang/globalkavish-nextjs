import Link from "next/link";

import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/shared/social-icons";

import { Container } from "@/components/shared/container";
import { company } from "@/lib/data/company";
import { categories } from "@/lib/data/categories";
import { buildHash } from "@/lib/build-info";

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-border-subtle bg-surface">
      <Container className="grid grid-cols-1 gap-12 py-20 md:grid-cols-2 lg:grid-cols-5 lg:py-28">
        <div className="lg:col-span-2">
          <span className="font-display text-2xl tracking-[0.15em]">KAVISH GLOBAL</span>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/60">
            {company.tagline} Sourced from {company.founded} and exported to international markets.
          </p>
          <div className="mt-8 flex gap-3">
            {[
              { icon: InstagramIcon, href: company.social.instagram, label: "Instagram" },
              { icon: FacebookIcon, href: company.social.facebook, label: "Facebook" },
              { icon: LinkedinIcon, href: company.social.linkedin, label: "LinkedIn" },
              { icon: YoutubeIcon, href: company.social.youtube, label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border-subtle transition-colors hover:border-gold-500 hover:text-gold-500"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/40">Collections</p>
          <ul className="mt-6 space-y-3 text-sm text-foreground/70">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/collections/${c.slug}`} className="transition-colors hover:text-gold-500">
                  {c.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/40">Company</p>
          <ul className="mt-6 space-y-3 text-sm text-foreground/70">
            {[
              { href: "/about", label: "About Us" },
              { href: "/export", label: "Export" },
              { href: "/quality", label: "Quality" },
              { href: "/media", label: "Media" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-gold-500">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/40">Get in touch</p>
          <ul className="mt-6 space-y-3 text-sm text-foreground/70">
            <li>{company.address.factory}</li>
            <li>
              <a href={`mailto:${company.email}`} className="transition-colors hover:text-gold-500">
                {company.email}
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`} className="transition-colors hover:text-gold-500">
                {company.phone} (WhatsApp)
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col items-center justify-between gap-4 border-t border-border-subtle py-8 text-xs text-foreground/40 md:flex-row">
        <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
        <p>
          Designed &amp; engineered for global export.
          {buildHash && <span className="ml-2 opacity-60">build {buildHash}</span>}
        </p>
      </Container>
    </footer>
  );
}
