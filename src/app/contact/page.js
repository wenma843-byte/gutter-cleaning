"use client";

import { useState } from "react";
import { sendQuoteRequest } from "./actions";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await sendQuoteRequest(formData);
    setLoading(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(result.error || "Something went wrong.");
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Get a quote
        </h1>
        <p className="mt-4 text-zinc-600">
          Tell us about your property (e.g. house size, storeys, last clean) and we&apos;ll get back to you with a free quote.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-xl border border-teal-200 bg-teal-50 p-6">
            <p className="font-medium text-teal-800">
              Thanks! We&apos;ll be in touch soon with your quote.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-zinc-700">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
                Property details (e.g. house size, storeys, last gutter clean, residential/commercial)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-teal-600 py-3 text-sm font-medium text-white hover:bg-teal-700 disabled:opacity-70 sm:w-auto sm:px-8"
            >
              {loading ? "Sending…" : "Send request"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
