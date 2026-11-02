import { categories, services } from "../lib/content";

export const dynamic = "force-static";

export default function sitemap() {
  const base = "https://drvucen.com";
  const paths = [
    "",
    "/usluge",
    "/galerija",
    "/kontakt",
    ...categories.map((c) => `/usluge/${c.slug}`),
    ...services.map((s) => `/usluge/${s.slug}`),
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
