"use client";

import { useEffect } from "react";

import { useCollections } from "@/lib/store";

export function TrackRecentlyViewed({ slug }: { slug: string }) {
  const { pushRecentlyViewed } = useCollections();

  useEffect(() => {
    pushRecentlyViewed(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return null;
}
