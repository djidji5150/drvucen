import type { Metadata } from "next";
import { CoverPhoto } from "../../components/CoverPhoto";
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
        Ilustracije tretmana, opreme i kliničkog rada — dok ne stignu fotografije
        iz same ordinacije.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallerySlots.map((item, i) => (
          <CoverPhoto
            key={item.title}
            src={item.image}
            alt={item.title}
            className={
              i === 0
                ? "aspect-[4/3] rounded-[1.5rem] sm:col-span-2"
                : "aspect-[4/3] rounded-[1.5rem]"
            }
            sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        ))}
      </div>
    </div>
  );
}
