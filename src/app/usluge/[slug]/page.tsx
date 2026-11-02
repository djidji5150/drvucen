import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CoverPhoto } from "../../../components/CoverPhoto";
import {
  categories,
  clinic,
  getService,
  services,
  servicesByCategory,
} from "../../../lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...categories.map((c) => ({ slug: c.slug })),
    ...services.map((s) => ({ slug: s.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  const service = getService(slug);
  const title = category?.title ?? service?.title;
  const description = category?.summary ?? service?.summary;
  if (!title) return {};
  return { title, description };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  const service = getService(slug);
  const phone = clinic.phones[0];

  if (category) {
    const items = servicesByCategory(category.id);
    return (
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
          <Link href="/usluge">Usluge</Link>
        </p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight">{category.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{category.summary}</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map((s) => (
            <Link
              key={s.slug}
              href={`/usluge/${s.slug}`}
              className="overflow-hidden rounded-[1.5rem] bg-card ring-1 ring-[var(--line)]"
            >
              <CoverPhoto
                src={s.image}
                alt={s.title}
                className="h-40"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="p-5">
                <h2 className="font-serif text-2xl tracking-tight">{s.title}</h2>
                <p className="mt-2 text-sm text-muted">{s.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (!service) notFound();

  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
        <Link href="/usluge">Usluge</Link>
      </p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-6xl">{service.title}</h1>
      <p className="mt-5 text-lg text-muted">{service.summary}</p>
      <CoverPhoto
        src={service.image}
        alt={service.title}
        className="mt-10 aspect-[16/9] rounded-[2rem]"
        sizes="(max-width: 768px) 100vw, 768px"
      />
      <div className="mt-10 space-y-5 text-[1.05rem] leading-relaxed">
        {service.body.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>
      <div className="mt-12 rounded-[1.75rem] bg-foreground p-8 text-background">
        <p className="font-serif text-3xl tracking-tight">Zakažite konsultaciju</p>
        <p className="mt-3 text-sm text-white/65">
          Pregled i informacije o tretmanu dogovaraju se telefonom. Konsultacije
          za lasersku epilaciju su besplatne.
        </p>
        <a
          href={`tel:${phone.tel}`}
          className="mt-6 inline-block rounded-full bg-background px-5 py-2.5 text-sm tracking-[0.12em] text-foreground uppercase"
        >
          {phone.display}
        </a>
      </div>
      {related.length ? (
        <div className="mt-16">
          <h2 className="font-serif text-2xl tracking-tight">Povezane usluge</h2>
          <ul className="mt-5 divide-y divide-[var(--line)]">
            {related.map((s) => (
              <li key={s.slug}>
                <Link href={`/usluge/${s.slug}`} className="block py-3 hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
