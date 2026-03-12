import Image from "next/image";
import img1 from "./gallery_photos/1.png";
import img2 from "./gallery_photos/2.png";
import img3 from "./gallery_photos/3.png";
import img4 from "./gallery_photos/4.png";
import img5 from "./gallery_photos/5.png";
import img6 from "./gallery_photos/6.png";
import img7 from "./gallery_photos/7.png";
import img8 from "./gallery_photos/8.png";

const galleryPhotos = [img1, img2, img3, img4, img5, img6, img7, img8];

/** 4 rows × 2 columns */

export const metadata = {
  title: "Gallery",
  description: "Before and after photos of our gutter cleaning work. See the difference we make.",
};

export default function GalleryPage() {
  return (
    <div>
      <section
        className="w-full px-4 py-16 sm:px-6 sm:py-24"
        aria-label="Gallery: before and after photos"
      >
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Before & after
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600">
            See the difference our gutter cleaning makes. Real results from real jobs.
          </p>
        </div>
        <div className="mt-12 grid w-full max-w-4xl mx-auto grid-cols-2 gap-4">
          {galleryPhotos.map((photo, i) => (
            <div
              key={i}
              className="min-w-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 shadow-sm"
            >
              <Image
                src={photo}
                alt={`Gallery photo ${i + 1}`}
                width={photo.width}
                height={photo.height}
                className="h-auto w-full block rounded-xl"
                sizes="50vw"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
