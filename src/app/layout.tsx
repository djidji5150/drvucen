import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { clinic } from "../lib/content";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: `${clinic.name} ${clinic.tagline}`,
  medicalSpecialty: "Dermatology",
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.address,
    addressLocality: "Banja Luka",
    postalCode: "78000",
    addressCountry: "BA",
  },
  telephone: clinic.phones[0].display,
  openingHours: "Mo-Fr 08:00-20:00",
  url: "https://drvucen.com",
};

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drvucen.com"),
  icons: { icon: "/favicon.svg" },
  title: {
    default: `${clinic.name} ${clinic.tagline} · Banja Luka`,
    template: `%s · ${clinic.name}`,
  },
  description:
    "Dermatovenerološka ambulanta i laser centar u Banjoj Luci. Ordinira prim. dr Mira Vučen. Laserski tretmani, opšta i estetska dermatologija.",
  keywords: [
    "Dr Vučen",
    "dermatologija Banja Luka",
    "laser centar",
    "Mira Vučen",
    "epilacija laser",
    "dermoskopija",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sr-Latn-BA"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
