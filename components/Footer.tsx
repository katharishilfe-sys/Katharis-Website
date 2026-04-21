import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ACCENT = "#EBA059";
const PRIMARY = "#1A3C34";

const leistungen = [
  { label: "Messie-Hilfe", href: "/leistungen/messie-hilfe" },
  { label: "Entrümpelung", href: "/leistungen/entruempelung" },
  { label: "Grundreinigung", href: "/leistungen/grundreinigung" },
  { label: "Pflegekassen-Abrechnung", href: "/pflegekasse" },
];

// Gemeinsame Styles für perfektes Top-Alignment
const topItemStyle: React.CSSProperties = {
  margin: 0,
  padding: 0,
  display: "block",
  lineHeight: 1,
};

export default function Footer() {
  return (
    <footer className="text-white mt-auto" style={{ backgroundColor: PRIMARY }}>
      {/* Main grid – explicit top padding */}
      <div
        className="max-w-6xl mx-auto px-4"
        style={{ paddingTop: 60, paddingBottom: 60 }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          style={{ alignItems: "flex-start" }}
        >

          {/* Column 1 – Logo + Kontakt-Icons */}
          <div className="flex flex-col items-start" style={{ margin: 0, padding: 0 }}>
            <Image
              src="/katharis-logo.png"
              alt="Katharis Logo"
              width={48}
              height={48}
              style={{
                ...topItemStyle,
                filter: "brightness(0) invert(1)",
              }}
            />
            <p
              className="text-xl font-bold"
              style={{ margin: 0, marginTop: 12, lineHeight: 1 }}
            >
              Katharis
            </p>

            <ul
              className="flex flex-col gap-3 text-sm text-white/75"
              style={{ marginTop: 20, padding: 0, listStyle: "none" }}
            >
              <li className="flex items-center gap-3">
                <MapPin size={16} style={{ color: ACCENT }} className="shrink-0" />
                <span>Olgastraße 8, 71032 Böblingen</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} style={{ color: ACCENT }} className="shrink-0" />
                <a href="tel:07031/6953604" className="hover:text-white transition-colors">
                  07031/6953604
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} style={{ color: ACCENT }} className="shrink-0" />
                <a href="mailto:info@katharis.de" className="hover:text-white transition-colors">
                  info@katharis.de
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 – Leistungen */}
          <div className="flex flex-col items-start" style={{ margin: 0, padding: 0 }}>
            <h3
              className="text-xs font-semibold uppercase tracking-widest"
              style={{
                ...topItemStyle,
                color: ACCENT,
                marginTop: 34,
              }}
            >
              Leistungen
            </h3>
            <ul
              className="flex flex-col gap-3 text-sm text-white/75"
              style={{ marginTop: 20, padding: 0, listStyle: "none" }}
            >
              {leistungen.map((l) => (
                <li key={l.label} style={{ margin: 0, padding: 0 }}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Erreichbarkeit */}
          <div className="flex flex-col items-start" style={{ margin: 0, padding: 0 }}>
            <h3
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ ...topItemStyle, color: ACCENT, marginTop: 34 }}
            >
              Für Sie da
            </h3>
            <ul
              className="flex flex-col gap-3 text-sm text-white/75"
              style={{ marginTop: 20, padding: 0, listStyle: "none" }}
            >
              <li className="flex items-center gap-3">
                <Clock size={16} style={{ color: ACCENT }} className="shrink-0" />
                <span>
                  <strong className="text-white">Mo. – Sa.</strong> 08:00 – 20:00 Uhr
                </span>
              </li>
              <li className="leading-relaxed" style={{ margin: 0, padding: 0 }}>
                Kostenlose Vor-Ort-Besichtigung.
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/60">
          <p>© 2026 Katharis. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <span className="opacity-40">|</span>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <span className="opacity-40">|</span>
            <Link href="/agb" className="hover:text-white transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
