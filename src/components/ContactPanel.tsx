"use client";

import { FormEvent, useState } from "react";
import { clinic } from "../lib/content";

export function ContactPanel() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  const phone = clinic.phones[0];

  return (
    <div className="rounded-[1.75rem] bg-foreground p-8 text-background">
      <h2 className="font-serif text-3xl tracking-tight">Pošaljite poruku</h2>
      <p className="mt-3 text-sm text-white/60">
        Termini se potvrđuju telefonom. Forma je prvi korak.
      </p>
      {sent ? (
        <div className="mt-8 rounded-2xl bg-white/8 p-5">
          <p>Hvala. Pozovite nas radi termina.</p>
          <a href={`tel:${phone.tel}`} className="mt-3 inline-block text-white/80">
            {phone.display}
          </a>
        </div>
      ) : (
        <form onSubmit={onSubmit} action="#" method="post" className="mt-8 grid gap-4">
          <label className="grid gap-2 text-xs tracking-[0.16em] uppercase">
            Ime i prezime
            <input
              required
              name="name"
              className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-sm tracking-normal text-white normal-case outline-none placeholder:text-white/40"
            />
          </label>
          <label className="grid gap-2 text-xs tracking-[0.16em] uppercase">
            Telefon
            <input
              required
              name="phone"
              type="tel"
              className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-sm tracking-normal text-white normal-case outline-none placeholder:text-white/40"
            />
          </label>
          <label className="grid gap-2 text-xs tracking-[0.16em] uppercase">
            Poruka
            <textarea
              name="message"
              rows={4}
              className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-sm tracking-normal text-white normal-case outline-none placeholder:text-white/40"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-background px-5 py-3 text-sm tracking-[0.14em] text-foreground uppercase"
          >
            Pošalji
          </button>
        </form>
      )}
    </div>
  );
}
