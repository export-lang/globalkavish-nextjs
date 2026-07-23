"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, Moon, Scale, Search, Sun, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/shared/brand-mark";
import { Container } from "@/components/shared/container";
import { categories } from "@/lib/data/categories";
import { products } from "@/lib/data/products";
import { useCollections } from "@/lib/store";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Export", href: "/export" },
  { label: "Quality", href: "/quality" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { wishlist, compare } = useCollections();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setCollectionsOpen(false);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const results =
    query.trim().length > 0
      ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
      : [];

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={cn("fixed inset-x-0 z-50 transition-all duration-500", scrolled ? "top-2 md:top-3" : "top-4 md:top-6")}
      >
        <div
          className={cn(
            "mx-auto max-w-[1680px] rounded-full border transition-all duration-500 px-2",
            "supports-[backdrop-filter]:backdrop-blur-xl",
            scrolled
              ? "mx-3 border-border-subtle bg-background/75 shadow-xl shadow-black/10 md:mx-6"
              : "mx-4 border-transparent bg-background/30 md:mx-10"
          )}
        >
        <Container className={cn("flex items-center justify-between transition-all duration-500", scrolled ? "h-14 md:h-16" : "h-16 md:h-20")}>
          <BrandMark textClassName="text-xl md:text-2xl" />

          <nav className="hidden items-center gap-10 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setCollectionsOpen(true)}
              onMouseLeave={() => setCollectionsOpen(false)}
            >
              <Link
                href="/collections"
                className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              >
                Collections
              </Link>
              <AnimatePresence>
                {collectionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-6"
                  >
                    <div className="grid grid-cols-2 gap-x-10 gap-y-3 rounded-2xl border border-border-subtle bg-background/95 p-8 shadow-2xl backdrop-blur-xl">
                      {categories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/collections/${cat.slug}`}
                          className="group flex flex-col gap-1 rounded-lg px-3 py-2 transition-colors hover:bg-surface"
                        >
                          <span className="text-sm font-medium">{cat.name}</span>
                          <span className="text-xs text-foreground/50">{cat.heroNote}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-2">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-surface"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-surface"
            >
              <Heart className="h-[18px] w-[18px]" />
              {wishlist.length > 0 && (
                <span className="absolute right-1 top-1 grid h-4 w-4 place-items-center rounded-full bg-gold-500 text-[10px] text-black">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              href="/compare"
              aria-label="Compare"
              className="relative hidden h-10 w-10 place-items-center rounded-full transition-colors hover:bg-surface md:grid"
            >
              <Scale className="h-[18px] w-[18px]" />
              {compare.length > 0 && (
                <span className="absolute right-1 top-1 grid h-4 w-4 place-items-center rounded-full bg-gold-500 text-[10px] text-black">
                  {compare.length}
                </span>
              )}
            </Link>
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-surface"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-[18px] w-[18px]" />
              ) : mounted ? (
                <Moon className="h-[18px] w-[18px]" />
              ) : (
                <span className="h-[18px] w-[18px]" />
              )}
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="ml-1 grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-surface lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </Container>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background lg:hidden"
          >
            <Container className="flex h-20 items-center justify-between">
              <BrandMark link={false} textClassName="text-xl" />
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full hover:bg-surface"
              >
                <X className="h-5 w-5" />
              </button>
            </Container>
            <Container className="mt-8 flex flex-col gap-6">
              <Link href="/collections" onClick={() => setMenuOpen(false)} className="font-display text-3xl">
                Collections
              </Link>
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="font-display text-3xl">
                  {l.label}
                </Link>
              ))}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog.Root open={searchOpen} onOpenChange={setSearchOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-32 z-[80] w-[92%] max-w-2xl -translate-x-1/2 rounded-2xl border border-border-subtle bg-background p-2 shadow-2xl">
            <Dialog.Title className="sr-only">Search products</Dialog.Title>
            <div className="flex items-center gap-3 border-b border-border-subtle px-4 py-4">
              <Search className="h-5 w-5 text-foreground/40" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search collections — try “marble”, “outdoor”, “GVT”…"
                className="w-full bg-transparent text-base outline-none placeholder:text-foreground/40"
              />
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {results.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  onClick={() => setSearchOpen(false)}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-sm hover:bg-surface"
                >
                  <span>{p.name}</span>
                  <span className="text-foreground/40">{p.sizes[0]}</span>
                </Link>
              ))}
              {query && results.length === 0 && (
                <p className="px-4 py-6 text-center text-sm text-foreground/50">No collections match “{query}”.</p>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
