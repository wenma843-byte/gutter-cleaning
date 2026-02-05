/**
 * Shared services list for nav dropdown, About Us cards, and service detail pages.
 * slug is used in URLs: /services/[slug]
 */
export const services = [
  {
    slug: "residential",
    key: "residential",
    title: "Residential gutter cleaning",
    description:
      "We clean gutters on houses and townhouses—single and two-storey. We remove leaves, pine needles, and debris from all runs, flush the system, and clear downspouts so water drains properly. One-off or regular visits (e.g. after fall, before winter).",
  },
  {
    slug: "commercial",
    key: "commercial",
    title: "Commercial & multi-storey",
    description:
      "Gutter cleaning for offices, retail, and larger buildings. We work at height safely and can schedule around your opening hours. Includes box gutters, fascia-level gutters, and downspout clearing.",
  },
  {
    slug: "downspout",
    key: "downspout",
    title: "Downspout clearing & flow check",
    description:
      "Blocked downspouts cause overflow even when gutters are clean. We clear obstructions, check flow from roof to ground, and make sure water is directed away from foundations. Often included in a full gutter clean.",
  },
  {
    slug: "inspection",
    key: "inspection",
    title: "Gutter inspection & advice",
    description:
      "A visual check of your gutters and downspouts. We'll point out leaks, sagging, or damage and suggest simple fixes or when to call a roofer. No obligation—just clear, honest advice.",
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) ?? null;
}
