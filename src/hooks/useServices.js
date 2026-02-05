"use client";

import { useMemo } from "react";
import { services } from "@/data/services";

/**
 * Returns the list of gutter cleaning services (slug, key, title, description).
 * Memoized so the array reference is stable.
 */
export function useServices() {
  return useMemo(() => services, []);
}
