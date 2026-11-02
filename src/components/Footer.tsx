import Link from "next/link";
import { categories, clinic } from "../lib/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-3xl tracking-tight">{clinic.name}</p>
          <p className="mt-1 text-[0.65rem] tracking-[0.28em] uppercase">{clinic.tagline}</p>
          <p className="mt-4 text-sm text-muted">{clinic.legal}</p>
        </div>
        <div>
          <p className="text-[0.65rem] tracking-[0.22em] text-muted uppercase">Ordinacija</p>
          <p className="mt-4">{clinic.doctor}</p>
          <p className="text-sm text-muted">{clinic.specialty}</p>
          <p className="mt-4 text-sm text-muted">
            {clinic.address}
            <br />
            {clinic.city}
          </p>
        </div>
        <div>
          <p className="text-[0.65rem] tracking-[0.22em] text-muted uppercase">Usluge</p>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/usluge/${c.slug}`} className="hover:text-accent">
                  {c.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/galerija" className="hover:text-accent">
                Galerija
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[0.65rem] tracking-[0.22em] text-muted uppercase">Kontakt</p>
          <p className="mt-4 text-sm">{clinic.hours}</p>
          <p className="mt-3 text-sm">
            <a href={`tel:${clinic.phones[0].tel}`} className="hover:text-accent">
              {clinic.phones[0].display}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--line)] py-5 text-center text-xs tracking-[0.14em] text-muted uppercase">
        © 2026 {clinic.name}
      </div>
    </footer>
  );
}
