import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Katharis | Messie-Hilfe Böblingen & Stuttgart",
  description:
    "Kontaktieren Sie Katharis diskret und schnell. Telefon, E-Mail oder Kontaktformular. Mo.–Sa. 08:00–20:00 Uhr. Kostenlose Erstberatung.",
  openGraph: {
    title: "Kontakt – Katharis | Messie-Hilfe Böblingen & Stuttgart",
    description:
      "Kontaktieren Sie Katharis diskret und schnell. Telefon, E-Mail oder Kontaktformular. Mo.–Sa. 08:00–20:00 Uhr. Kostenlose Erstberatung.",
    url: "https://www.katharis.de/kontakt/",
  },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
