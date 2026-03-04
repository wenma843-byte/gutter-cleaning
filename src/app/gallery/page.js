export const metadata = {
  title: "Gallery",
  description: "Before and after photos of our gutter cleaning work. See the difference we make.",
};

export default function GalleryPage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Before & after
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600">
          See the difference our gutter cleaning makes. Real results from real jobs.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder cards – replace with real images later */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50 text-zinc-400"
            >
              <span className="text-sm">Photo {i}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
