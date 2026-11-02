import type { Metadata } from "next";
import Link from "next/link";
import { CoverPhoto } from "../../components/CoverPhoto";
import { categories, services } from "../../lib/content";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Opšta dermatovenerologija, laserski tretmani i estetska dermatologija u ordinaciji Dr Vučen.",
};

export default function UslugePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">Pregled</p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight sm:text-6xl">Usluge</h1>
      <p className="mt-5 max-w-xl text-lg text-muted">
        Od dijagnostike kože do Fotona laserskih procedura i estetske dermatologije.
      </p>
      <div className="mt-16 space-y-20">
        {categories.map((cat) => (
          <section key={cat.slug}>
            <div className="flex items-end justify-between gap-4 border-b border-[var(--line)] pb-4">
              <h2 className="font-serif text-3xl tracking-tight">{cat.title}</h2>
              <Link
                href={`/usluge/${cat.slug}`}
                className="text-[0.7rem] tracking-[0.18em] text-accent uppercase"
              >
                Oblast
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.category === cat.id)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/usluge/${s.slug}`}
                    className="group overflow-hidden rounded-[1.5rem] bg-card ring-1 ring-[var(--line)]"
                  >
                    <CoverPhoto
                      src={s.image}
                      alt={s.title}
                      className="h-36"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="p-5">
                      <h3 className="font-serif text-xl tracking-tight">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{s.summary}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
