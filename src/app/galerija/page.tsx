import type { Metadata } from "next";
import { MediaPlaceholder } from "../../components/MediaPlaceholder";
import { gallerySlots } from "../../lib/content";

export const metadata: Metadata = {
  title: "Galerija",
  description: "Prostor i laserske procedure Dr Vučen laser centra.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">Ordinacija</p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight sm:text-6xl">Galerija</h1>
      <p className="mt-5 max-w-xl text-lg text-muted">
        Nove fotografije prostora stižu ovdje. Do tada — rezervisana mjesta.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallerySlots.map((label, i) => (
          <MediaPlaceholder
            key={label}
            seed={`${label}-${i}`}
            label={label}
            className={i === 0 ? "aspect-[4/3] rounded-[1.5rem] sm:col-span-2" : "aspect-[4/3] rounded-[1.5rem]"}
          />
        ))}
      </div>
    </div>
  );
}
