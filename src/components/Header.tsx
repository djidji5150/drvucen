"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, clinic } from "../lib/content";

const nav = [
  { href: "/", label: "Naslovna" },
  { href: "/usluge", label: "Usluge", children: categories },
  { href: "/galerija", label: "Galerija" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const phone = clinic.phones[0];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--background)_78%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif text-[1.65rem] tracking-tight">{clinic.name}</span>
          <span className="mt-0.5 block text-[0.65rem] tracking-[0.32em] text-muted uppercase">
            {clinic.tagline}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-[0.8rem] tracking-[0.14em] uppercase md:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
                <div className="invisible absolute left-0 top-full z-20 min-w-64 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-[var(--line)] bg-card/95 p-2 shadow-xl backdrop-blur">
                    {item.children.map((child) => (
                      <Link
                        key={child.slug}
                        href={`/usluge/${child.slug}`}
                        className="block rounded-xl px-3 py-2.5 text-[0.72rem] tracking-[0.08em] normal-case hover:bg-background"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="hover:text-accent">
                {item.label}
              </Link>
            ),
          )}
          <a
            href={`tel:${phone.tel}`}
            className="rounded-full bg-foreground px-4 py-2 tracking-[0.12em] text-background hover:bg-accent"
          >
            Termin
          </a>
        </nav>
        <button
          type="button"
          className="rounded-full border border-[var(--line)] px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Zatvori" : "Meni"}
        </button>
      </div>
      {open ? (
        <div className="border-t border-[var(--line)] bg-card px-4 py-5 md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <div key={item.href} className="flex flex-col gap-2">
                <Link href={item.href} onClick={() => setOpen(false)} className="font-medium">
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.slug}
                    href={`/usluge/${child.slug}`}
                    onClick={() => setOpen(false)}
                    className="pl-3 text-sm text-muted"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            ))}
            <a
              href={`tel:${phone.tel}`}
              className="mt-2 rounded-full bg-foreground px-4 py-3 text-center text-background"
            >
              Pozovite {phone.display}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
