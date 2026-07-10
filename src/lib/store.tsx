"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface CollectionsState {
  wishlist: string[];
  compare: string[];
  recentlyViewed: string[];
  toggleWishlist: (slug: string) => void;
  toggleCompare: (slug: string) => void;
  pushRecentlyViewed: (slug: string) => void;
  isWishlisted: (slug: string) => boolean;
  isCompared: (slug: string) => boolean;
}

const CollectionsContext = createContext<CollectionsState | null>(null);

function readStorage(key: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function CollectionsProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [compare, setCompare] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);

  useEffect(() => {
    setWishlist(readStorage("gk-wishlist"));
    setCompare(readStorage("gk-compare"));
    setRecentlyViewed(readStorage("gk-recent"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("gk-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  useEffect(() => {
    window.localStorage.setItem("gk-compare", JSON.stringify(compare));
  }, [compare]);
  useEffect(() => {
    window.localStorage.setItem("gk-recent", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const value = useMemo<CollectionsState>(
    () => ({
      wishlist,
      compare,
      recentlyViewed,
      toggleWishlist: (slug) =>
        setWishlist((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug])),
      toggleCompare: (slug) =>
        setCompare((prev) =>
          prev.includes(slug) ? prev.filter((s) => s !== slug) : prev.length < 4 ? [...prev, slug] : prev
        ),
      pushRecentlyViewed: (slug) =>
        setRecentlyViewed((prev) => [slug, ...prev.filter((s) => s !== slug)].slice(0, 8)),
      isWishlisted: (slug) => wishlist.includes(slug),
      isCompared: (slug) => compare.includes(slug),
    }),
    [wishlist, compare, recentlyViewed]
  );

  return <CollectionsContext.Provider value={value}>{children}</CollectionsContext.Provider>;
}

export function useCollections() {
  const ctx = useContext(CollectionsContext);
  if (!ctx) throw new Error("useCollections must be used within CollectionsProvider");
  return ctx;
}
