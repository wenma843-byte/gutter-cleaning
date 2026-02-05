"use client";

import Link from "next/link";
import { services } from "@/data/services";

function ChevronDown({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/**
 * Nav item "Services" with down arrow; shows a styled dropdown with service links on hover.
 */
export default function NavServicesDropdown() {
  return (
    <li className="relative group">
      <button
        type="button"
        className="flex cursor-default items-center gap-1.5 text-xl font-semibold text-zinc-600 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
        aria-expanded="false"
        aria-haspopup="true"
        aria-controls="services-menu"
        id="services-trigger"
      >
        <span>Services</span>
        <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:rotate-180" />
      </button>
      {/* Invisible bridge so hover doesn't break between trigger and menu */}
      <div className="absolute left-0 right-0 top-full h-2" aria-hidden />
      <div
        id="services-menu"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="services-trigger"
        className="absolute left-0 top-full z-50 mt-2 hidden w-[280px] rounded-xl border border-zinc-200 bg-white py-2 shadow-xl ring-1 ring-zinc-900/5 group-hover:block"
      >
        {/* Arrow pointing up */}
        <div
          className="absolute -top-2 left-6 h-2 w-4 border-l border-t border-r border-transparent border-b-zinc-200 bg-transparent"
          aria-hidden
        />
        <div className="absolute -top-[1px] left-6 h-2 w-4 border-l border-t border-r border-transparent border-b-white bg-transparent" aria-hidden />
        <p className="border-b border-zinc-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Our services
        </p>
        <ul className="py-1" role="none">
          {services.map((service, index) => (
            <li key={service.slug} role="none">
              {index > 0 && (
                <div className="my-1 border-t border-zinc-100" aria-hidden />
              )}
              <Link
                href={`/services/${service.slug}`}
                role="menuitem"
                className="flex px-4 py-2.5 text-sm text-zinc-700 transition-colors hover:bg-teal-50 hover:text-teal-700 focus:bg-teal-50 focus:text-teal-700 focus:outline-none"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-t border-zinc-100 px-4 py-2">
          <Link
            href="/AboutUs"
            className="text-xs font-medium text-teal-600 hover:text-teal-700"
          >
            View all →
          </Link>
        </div>
      </div>
    </li>
  );
}
