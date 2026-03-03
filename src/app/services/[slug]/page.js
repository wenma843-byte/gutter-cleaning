import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";

export async function generateMetadata({ params }) {
  const slug = typeof params?.slug === "string" ? params.slug : (await params)?.slug;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | Gutter Cleaning" };
  const category = service.category === "residential" ? "Residential" : "Commercial";
  return {
    title: `${service.title} | ${category}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolved = await params;
  const slug = resolved?.slug;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <Link
          href="/AboutUs"
          className="mb-6 inline-block text-sm font-medium text-teal-600 hover:text-teal-700"
        >
          ← Back to About us
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          {service.category === "residential" ? "Residential" : "Commercial"} – {service.title}
        </h1>
        <p className="mt-6 leading-relaxed text-zinc-600">{service.description}</p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-teal-600 px-6 py-3 text-sm font-medium text-white hover:bg-teal-700"
          >
            Get a quote
          </Link>
        </div>
      </section>
    </div>
  );
}
