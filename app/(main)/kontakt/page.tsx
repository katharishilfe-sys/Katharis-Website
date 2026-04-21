import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import KontaktForm from "./KontaktForm";

export const metadata: Metadata = {
  title: "Kontakt – Katharis | Diskrete Messie-Hilfe in Böblingen & Stuttgart",
  description:
    "Jetzt kostenlos und unverbindlich Kontakt aufnehmen. Katharis berät Sie diskret in Böblingen & Stuttgart – telefonisch, per Mail oder Formular.",
};

export default function KontaktPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Startseite", href: "/" }, { label: "Kontakt" }]} />

      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
          Kontakt aufnehmen
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-12" style={{ color: "#1A3C34" }}>
          Ihr erster Schritt zu einem sauberen Neuanfang.
        </h1>

        <KontaktForm />
      </div>
    </>
  );
}
