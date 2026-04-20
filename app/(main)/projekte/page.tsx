import type { Metadata } from "next";
import ProjektSection from "@/components/ProjektSection";

export const metadata: Metadata = {
  title: "Referenz-Projekte – Katharis",
  description: "Echte Vorher-Nachher-Beispiele unserer Arbeit. Diskrete Entrümpelung und Messie-Hilfe in Böblingen & Stuttgart.",
};

export default function ProjektePage() {
  return <ProjektSection />;
}
