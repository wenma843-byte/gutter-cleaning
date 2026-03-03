import Link from "next/link";
import { services } from "@/data/services";

// Replace with your Google Business review page URL (from Google Business Profile → Share review form)
const GOOGLE_REVIEW_URL =
  "https://g.page/r/Cavpt8wdrTT4EAE/review";

function GoogleStar() {
  return (
    <svg className="h-6 w-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function GoogleGLogo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero – MINT-style layout: Google rating, headline, sub-headline, CTA */}
      <section className="relative min-h-[60vh] px-4 py-20 sm:px-6 sm:py-28">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/50 to-black/20"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl">
          {/* Google review – clickable, links to your Google review page */}
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm transition hover:bg-white/20"
          >
            <span className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <GoogleStar key={i} />
              ))}
            </span>
            <span className="text-sm font-medium text-white drop-shadow-sm">
              5.0 stars on Google
            </span>
            <span className="ml-1 flex h-6 w-6 items-center justify-center">
              <GoogleGLogo className="h-6 w-6" />
            </span>
          </a>

          <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl xl:text-8xl">
            Clean gutters.
            <br />
            Protect your home.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/95 drop-shadow-md">
            Experience the Renew difference—professional exterior cleaning you can trust, all year round.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-10 py-5 text-xl font-bold text-white shadow-lg hover:bg-teal-600 sm:px-12 sm:py-6 sm:text-2xl"
            >
              Get a free quote
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services – image cards with overlay text */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 text-center">
          <p className="mx-auto inline-block px-4 py-1.5 text-lg font-medium text-white" style={{ backgroundColor: "rgb(113, 187, 178)" }}>
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight sm:text-4xl" style={{ color: "rgb(113, 187, 178)" }}>
            Our services
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex aspect-[4/3] overflow-hidden rounded-xl"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700"
                  aria-hidden
                />
                <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="block text-lg font-bold text-white">
                    {service.category === "residential" ? "Residential" : "Commercial"} – {service.title}
                  </span>
                </span>
              </Link>
            ))}
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

      {/* Plans – dirtymint-style */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Choose your plan
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-600">
            Save more with regular service. All plans include a thorough clean and downspout check.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-500 hover:shadow-md">
              <h3 className="text-lg font-semibold text-teal-700">Monthly</h3>
              <p className="mt-2 text-2xl font-bold text-zinc-900">25% off</p>
              <p className="mt-1 text-sm text-zinc-600">per cleaning</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2">
                  <span className="text-teal-500">✓</span> Best value
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-500">✓</span> Priority scheduling
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-500">✓</span> Consistent protection
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-6 block w-full rounded-full bg-teal-600 py-3 text-center text-sm font-medium text-white hover:bg-teal-700"
              >
                Get a quote
              </Link>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-500 hover:shadow-md">
              <h3 className="text-lg font-semibold text-teal-700">Quarterly</h3>
              <p className="mt-2 text-2xl font-bold text-zinc-900">15% off</p>
              <p className="mt-1 text-sm text-zinc-600">per cleaning</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2">
                  <span className="text-teal-500">✓</span> Great savings
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-500">✓</span> Seasonal coverage
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-500">✓</span> Flexible dates
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-6 block w-full rounded-full bg-teal-600 py-3 text-center text-sm font-medium text-white hover:bg-teal-700"
              >
                Get a quote
              </Link>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-500 hover:shadow-md">
              <h3 className="text-lg font-semibold text-teal-700">One-off</h3>
              <p className="mt-2 text-2xl font-bold text-zinc-900">Standard</p>
              <p className="mt-1 text-sm text-zinc-600">single visit</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2">
                  <span className="text-teal-500">✓</span> No commitment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-500">✓</span> Book when you need
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-500">✓</span> Same quality service
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-6 block w-full rounded-full bg-teal-600 py-3 text-center text-sm font-medium text-white hover:bg-teal-700"
              >
                Get a quote
              </Link>
            </div>
          </div>
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
          © {new Date().getFullYear()} Renew Exterior Cleaning. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
