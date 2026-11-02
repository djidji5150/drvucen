import type { Metadata } from "next";
import { ContactPanel } from "../../components/ContactPanel";
import { clinic } from "../../lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Adresa, telefoni i mapa ordinacije Dr Vučen, Jovana Dučića 11, Banja Luka.",
};

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">Posjeta</p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight sm:text-6xl">Kontakt</h1>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-[1.75rem] bg-card p-8 ring-1 ring-[var(--line)]">
            <p className="font-serif text-3xl tracking-tight">
              {clinic.name}
            </p>
            <p className="mt-1 text-sm tracking-[0.18em] text-muted uppercase">
              {clinic.tagline}
            </p>
            <dl className="mt-8 grid gap-6 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">Adresa</dt>
                <dd className="mt-2">
                  {clinic.address}
                  <br />
                  {clinic.city}
                  <br />
                  {clinic.region}
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">
                  Radno vrijeme
                </dt>
                <dd className="mt-2">{clinic.hours}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">Telefon</dt>
                <dd className="mt-2 space-y-1">
                  {clinic.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="block hover:text-accent">
                      {p.display}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">Ljekar</dt>
                <dd className="mt-2">
                  {clinic.doctor}
                  <br />
                  {clinic.specialty}
                </dd>
              </div>
            </dl>
            <a
              href={clinic.mapLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block text-[0.7rem] tracking-[0.18em] uppercase hover:text-accent"
            >
              Google mape
            </a>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] ring-1 ring-[var(--line)]">
            <iframe
              title="Mapa ordinacije"
              src={clinic.mapEmbed}
              className="h-72 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
        <ContactPanel />
      </div>
    </div>
  );
}
