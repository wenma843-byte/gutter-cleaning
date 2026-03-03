"use client";

import Link from "next/link";
import { useServices } from "@/hooks/useServices";

function PlaceholderIcon({ type }) {
  const icons = {
    residential: (
      <svg className="h-12 w-12 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    commercial: (
      <svg className="h-12 w-12 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    downspout: (
      <svg className="h-12 w-12 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.402-4.125 1.125M12 20.25c1.472 0 2.882.402 4.125 1.125M3.75 6.75h16.5v10.5H3.75V6.75z" />
      </svg>
    ),
    inspection: (
      <svg className="h-12 w-12 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
      </svg>
    ),
  };
  return icons[type] ?? icons.residential;
}

export default function AboutUs() {
  const services = useServices();

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-center text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Our services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
          We offer gutter cleaning and related services for homes and businesses. Every job includes clearing debris, checking flow, and making sure downspouts are doing their job.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li
              key={service.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
            >
              <div className="relative flex aspect-[2/5] min-h-[280px] w-full shrink-0 items-center justify-center bg-gradient-to-br from-teal-500 to-teal-700">
                <PlaceholderIcon type={service.key} />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-teal-900/90 p-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  aria-hidden
                >
                  <p className="max-h-full overflow-auto text-center text-base leading-relaxed text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-teal-700">
                  {service.category === "residential" ? "Residential" : "Commercial"} – {service.title}
                </h2>
                <p className="mt-2 text-sm text-zinc-600 md:hidden">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
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
