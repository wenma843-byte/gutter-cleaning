/**
 * Services structure: Residential and Commercial each have Gutter cleaning and Window cleaning.
 * slug is used in URLs: /services/[slug]
 */
export const serviceCategories = [
  {
    key: "residential",
    label: "Residential",
    services: [
      {
        slug: "residential-gutter-cleaning",
        title: "Gutter cleaning",
        description:
          "We clean gutters on houses and townhouses—single and two-storey. We remove leaves, pine needles, and debris from all runs, flush the system, and clear downspouts so water drains properly. One-off or regular visits.",
      },
      {
        slug: "residential-window-cleaning",
        title: "Window cleaning",
        description:
          "Professional window cleaning for homes. We use water-fed poles and streak-free methods to leave your windows crystal clear. Interior and exterior available.",
      },
    ],
  },
  {
    key: "commercial",
    label: "Commercial",
    services: [
      {
        slug: "commercial-gutter-cleaning",
        title: "Gutter cleaning",
        description:
          "Gutter cleaning for offices, retail, and larger buildings. We work at height safely and can schedule around your opening hours. Includes box gutters, fascia-level gutters, and downspout clearing.",
      },
      {
        slug: "commercial-window-cleaning",
        title: "Window cleaning",
        description:
          "Professional window cleaning for commercial properties. We handle multi-storey buildings, shopfronts, and office blocks with safe, efficient methods.",
      },
    ],
  },
];

/** Flattened list for sitemap, About Us, etc. */
export const services = serviceCategories.flatMap((cat) =>
  cat.services.map((s) => ({ ...s, category: cat.key, key: cat.key }))
);

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) ?? null;
}
