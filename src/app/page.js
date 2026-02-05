import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Clean gutters. Protect your home.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600">
          Professional gutter cleaning and downspout clearing. We remove leaves, debris, and blockages so water flows safely away—before it causes damage.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-teal-600 px-6 py-3 text-sm font-medium text-white hover:bg-teal-700"
          >
            Get a free quote
          </Link>
          <Link
            href="/AboutUs"
            className="rounded-full border border-teal-600 px-6 py-3 text-sm font-medium text-teal-600 hover:bg-teal-50"
          >
            Our services
          </Link>
        </div>
      </section>

      {/* Why gutters matter - soft teal strip */}
      <section className="border-t border-zinc-200 bg-teal-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Why clean gutters matter
          </h2>
          <p className="mt-4 max-w-3xl text-zinc-600">
            Clogged gutters can&apos;t direct rainwater away from your roof and foundation. That leads to overflow, leaks, basement moisture, and even damage to fascia and landscaping. A regular clean keeps water moving where it should—and saves you from costly repairs later.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <li className="flex gap-3 text-sm text-zinc-600">
              <span className="text-teal-500">—</span>
              Reduces risk of roof and fascia damage
            </li>
            <li className="flex gap-3 text-sm text-zinc-600">
              <span className="text-teal-500">—</span>
              Helps prevent basement and foundation water issues
            </li>
            <li className="flex gap-3 text-sm text-zinc-600">
              <span className="text-teal-500">—</span>
              Stops pests and mould from nesting in debris
            </li>
            <li className="flex gap-3 text-sm text-zinc-600">
              <span className="text-teal-500">—</span>
              Extends the life of your gutters and downspouts
            </li>
          </ul>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold text-zinc-900">
            What we do
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600">
            We clear gutters and downspouts by hand and with safe, effective methods. We can also do a quick visual check and point out any minor issues—so you know your system is in good shape.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            <li className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="font-medium text-teal-700">Full gutter clean</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Remove leaves, twigs, and debris from all runs. Flush and check flow.
              </p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="font-medium text-teal-700">Downspout clearing</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Unblock downspouts and ensure water drains away from the property.
              </p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="font-medium text-teal-700">Inspection & advice</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Quick look-over and honest advice on repairs or upgrades if needed.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* When to clean - light strip */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold text-zinc-900">
            When to get your gutters cleaned
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600">
            Most homes benefit from at least one or two cleans a year—especially after autumn leaves drop and before heavy winter rain or snow. If you have overhanging trees, you may need more frequent service.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <span className="rounded-full bg-teal-100 px-4 py-2 text-teal-800">After fall</span>
            <span className="rounded-full bg-teal-100 px-4 py-2 text-teal-800">Before winter</span>
            <span className="rounded-full bg-teal-100 px-4 py-2 text-teal-800">Spring check</span>
            <span className="rounded-full bg-teal-100 px-4 py-2 text-teal-800">Regular schedule</span>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Why choose us
          </h2>
          <ul className="mt-8 grid gap-8 sm:grid-cols-3">
            <li>
              <h3 className="font-medium text-teal-700">Trained & insured</h3>
              <p className="mt-1 text-sm text-zinc-600">
                Our team is trained and fully insured so you can book with confidence.
              </p>
            </li>
            <li>
              <h3 className="font-medium text-teal-700">Residential & commercial</h3>
              <p className="mt-1 text-sm text-zinc-600">
                From single homes to multi-storey buildings—we work at height safely.
              </p>
            </li>
            <li>
              <h3 className="font-medium text-teal-700">Flexible scheduling</h3>
              <p className="mt-1 text-sm text-zinc-600">
                One-off cleans or a regular schedule that suits your property.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA - teal block */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl bg-teal-600 px-6 py-12 text-center">
          <h2 className="text-2xl font-semibold text-white">
            Ready for clean, flowing gutters?
          </h2>
          <p className="mt-2 text-teal-100">
            Get a free, no-obligation quote. We&apos;ll get back to you quickly.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-teal-700 hover:bg-teal-50"
          >
            Get a quote
          </Link>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white py-8">
        <div className="mx-auto max-w-5xl px-4 text-center text-sm text-zinc-500 sm:px-6">
          © {new Date().getFullYear()} Gutter Clean. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
