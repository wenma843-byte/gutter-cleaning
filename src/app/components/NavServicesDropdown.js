"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { serviceCategories } from "@/data/services";

function ChevronDown({ className, open }) {
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
 * Nav item "Services" with dropdown:
 * - Residential → Gutter cleaning, Window cleaning
 * - Commercial → Gutter cleaning, Window cleaning
 * Works with both hover and click (click for touch / reliability).
 */
export default function NavServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const show = open;

  return (
    <li ref={ref} className="relative group">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex cursor-pointer items-center gap-1.5 text-lg font-medium text-zinc-600 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded whitespace-nowrap"
        aria-expanded={show}
        aria-haspopup="true"
      >
        <span>Services</span>
        <ChevronDown
          open={show}
          className={`h-5 w-5 shrink-0 transition-transform duration-200 ${show ? "rotate-180" : "group-hover:rotate-180"}`}
        />
      </button>
      {/* Invisible bridge so hover doesn't break between button and menu */}
      <div
        className="absolute left-0 top-full z-40 h-4 w-full min-w-[120%]"
        aria-hidden
      />
      <div
        className={`absolute left-0 top-full z-50 mt-1 w-[280px] rounded-xl border border-zinc-200 bg-white py-2 shadow-xl ring-1 ring-zinc-900/5 ${
          show ? "block" : "hidden group-hover:block"
        }`}
      >
        {serviceCategories.map((cat, catIndex) => (
          <div key={cat.key}>
            {catIndex > 0 && <div className="my-1 border-t border-zinc-100" />}
            <p className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {cat.label}
            </p>
            <ul>
              {cat.services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="block px-4 py-2 text-sm text-zinc-700 hover:bg-teal-50 hover:text-teal-700"
                    onClick={() => setOpen(false)}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="mt-1 border-t border-zinc-100 px-4 py-2">
          <Link
            href="/AboutUs"
            className="text-xs font-medium text-teal-600 hover:text-teal-700"
            onClick={() => setOpen(false)}
          >
            View all services →
          </Link>
        </div>
      </div>
    </li>
  );
}
