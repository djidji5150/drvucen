import Link from "next/link";
import { CoverPhoto } from "../components/CoverPhoto";
import { categories, clinic, services } from "../lib/content";

export default function Home() {
  const phone = clinic.phones[0];
  const featured = services.filter((s) =>
    [
      "dermoskopija",
      "laserska-epilacija",
      "prosireni-kapilari",
      "fraxel-er-yag",
      "mezoterapija",
      "uklanjanje-tetovaza",
    ].includes(s.slug),
  );

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-end gap-12 px-4 pt-16 pb-20 lg:grid-cols-12 lg:pt-24">
          <div className="lg:col-span-7">
            <p className="text-[0.7rem] tracking-[0.32em] text-muted uppercase">
              Banja Luka · {clinic.legal}
            </p>
            <h1 className="mt-5 max-w-xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl">
              Laser centar
              <span className="mt-2 block text-accent">nove generacije.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">
              Iza nas je dvadeset godina iskustva sa savremenim medicinskim
              laserima i kontinuirana edukacija u vodećim svjetskim centrima.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`tel:${phone.tel}`}
                className="rounded-full bg-foreground px-6 py-3 text-sm tracking-[0.12em] text-background uppercase hover:bg-accent"
              >
                {phone.display}
              </a>
              <Link
                href="/usluge"
                className="rounded-full border border-[var(--line)] px-6 py-3 text-sm tracking-[0.12em] uppercase hover:border-foreground"
              >
                Pregled usluga
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <CoverPhoto
              src="/media/hero.jpg"
              alt="Tretman lica u dermatološkoj ordinaciji"
              className="aspect-[4/5] rounded-[2rem] sm:aspect-[5/6]"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:grid-cols-3">
          {[
            ["20+", "godina rada sa medicinskim laserima"],
            ["Fotona", "Nd:YAG, ER:YAG i QX-Max"],
            ["08–20h", clinic.address],
          ].map(([title, text]) => (
            <div key={title}>
              <p className="font-serif text-4xl tracking-tight">{title}</p>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">Usluge</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              Tri oblasti rada
            </h2>
          </div>
          <Link href="/usluge" className="hidden text-sm tracking-[0.16em] uppercase sm:block">
            Sve usluge
          </Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/usluge/${cat.slug}`}
              className="group overflow-hidden rounded-[1.75rem] bg-card ring-1 ring-[var(--line)]"
            >
              <CoverPhoto
                src={cat.image}
                alt={cat.title}
                className="h-56"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl tracking-tight">{cat.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{cat.summary}</p>
                <p className="mt-5 text-[0.7rem] tracking-[0.2em] text-accent uppercase">
                  Otvori oblast
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <p className="text-[0.7rem] tracking-[0.28em] text-white/50 uppercase">
            Najtraženije
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            Tretmani
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => (
              <Link
                key={s.slug}
                href={`/usluge/${s.slug}`}
                className="bg-foreground p-7 hover:bg-white/5"
              >
                <h3 className="font-serif text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 lg:grid-cols-2">
        <CoverPhoto
          src="/media/ordinacija.jpg"
          alt="Specijalista dermatovenerolog"
          className="aspect-[4/3] rounded-[2rem]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div>
          <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">Specijalista</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            {clinic.doctor}
          </h2>
          <p className="mt-2 text-muted">{clinic.specialty}</p>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            Dermatovenerološka ambulanta i laser centar u srcu Banje Luke. Radno
            vrijeme je svakog radnog dana od 08 do 20 časova.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-full bg-foreground px-6 py-3 text-sm tracking-[0.12em] text-background uppercase hover:bg-accent"
          >
            Adresa i mapa
          </Link>
        </div>
      </section>
    </>
  );
}
