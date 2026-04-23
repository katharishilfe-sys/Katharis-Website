import type { Metadata } from "next";
import ProjektSection from "@/components/ProjektSection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Referenz-Projekte – Katharis | Vorher & Nachher",
  description: "Echte Vorher-Nachher-Beispiele unserer Arbeit. Diskrete Entrümpelung und Messie-Hilfe in Böblingen & Stuttgart – sehen Sie selbst das Ergebnis.",
  openGraph: {
    title: "Vorher & Nachher – Projekte von Katharis",
    description: "Echte Vorher-Nachher-Beispiele unserer Arbeit. Entrümpelung und Messie-Hilfe in Böblingen & Stuttgart.",
    url: "https://katharis.de/projekte",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Katharis – Referenzprojekte" }],
  },
};

export default function ProjektePage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Startseite", href: "/" }, { label: "Projekte" }]} />
      <ProjektSection />
    </>
  );
}
