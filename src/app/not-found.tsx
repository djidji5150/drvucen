import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-serif text-5xl">Stranica nije pronađena</h1>
      <p className="mt-4 text-muted">Provjerite adresu ili se vratite na početnu.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-white"
      >
        Naslovna
      </Link>
    </div>
  );
}
