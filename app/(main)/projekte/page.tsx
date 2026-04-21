import type { Metadata } from "next";
import ProjektSection from "@/components/ProjektSection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Referenz-Projekte – Katharis | Vorher & Nachher",
  description: "Echte Vorher-Nachher-Beispiele unserer Arbeit. Diskrete Entrümpelung und Messie-Hilfe in Böblingen & Stuttgart – sehen Sie selbst das Ergebnis.",
};

export default function ProjektePage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Startseite", href: "/" }, { label: "Projekte" }]} />
      <ProjektSection />
    </>
  );
}
