"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const leistungen = [
  { href: "/leistungen/messie-hilfe", label: "Messie-Hilfe" },
  { href: "/leistungen/entruempelung", label: "Entrümpelung" },
  { href: "/leistungen/grundreinigung", label: "Grundreinigung" },
];

const standorte = [
  { href: "/standorte/boeblingen", label: "Böblingen" },
  { href: "/standorte/stuttgart", label: "Stuttgart" },
  { href: "/standorte/sindelfingen", label: "Sindelfingen" },
  { href: "/standorte/leonberg", label: "Leonberg" },
  { href: "/standorte/herrenberg", label: "Herrenberg" },
];

function LogoIcon({ size = 44 }: { size?: number }) {
  return (
    <Image
      src="/katharis-logo.png"
      alt="Katharis Icon"
      width={size}
      height={size}
      priority
    />
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [standorteOpen, setStandorteOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-2">
          <LogoIcon size={42} />
          <span className="text-xl font-bold" style={{ color: "#1A3C34" }}>
            Katharis
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center" style={{ color: "#1A3C34" }}>
          <div
            className="relative"
            onMouseEnter={() => setLeistungenOpen(true)}
            onMouseLeave={() => setLeistungenOpen(false)}
          >
            <button className="hover:opacity-70 transition-opacity flex items-center gap-1">
              Leistungen
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {leistungenOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-xl py-2 min-w-[180px] border border-gray-100">
                {leistungen.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm hover:bg-[#E8F1F2] transition-colors"
                    style={{ color: "#1A3C34" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setStandorteOpen(true)}
            onMouseLeave={() => setStandorteOpen(false)}
          >
            <button className="hover:opacity-70 transition-opacity flex items-center gap-1">
              Standorte
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {standorteOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-xl py-2 min-w-[160px] border border-gray-100">
                {standorte.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm hover:bg-[#E8F1F2] transition-colors"
                    style={{ color: "#1A3C34" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/ratgeber" className="hover:opacity-70 transition-opacity">Ratgeber</Link>
          <Link href="/pflegekasse" className="hover:opacity-70 transition-opacity">Pflegekasse</Link>
          <Link href="/ueber-uns" className="hover:opacity-70 transition-opacity">Über uns</Link>
          <Link href="/kontakt" className="hover:opacity-70 transition-opacity">Kontakt</Link>
        </nav>

        {/* CTA Phone Button */}
        <a
          href="tel:07031/6953604"
          className="hidden md:inline-block px-5 py-2 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#EBA059" }}
        >
          07031/6953604
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <span className="block w-6 h-0.5 bg-gray-700" />
          <span className="block w-6 h-0.5 bg-gray-700" />
          <span className="block w-6 h-0.5 bg-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-3 text-sm font-medium" style={{ color: "#1A3C34" }}>
          <p className="pt-3 font-semibold opacity-50 text-xs uppercase tracking-widest">Leistungen</p>
          {leistungen.map((item) => (
            <Link key={item.href} href={item.href} className="pl-2 hover:opacity-70" onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <p className="pt-1 font-semibold opacity-50 text-xs uppercase tracking-widest">Standorte</p>
          {standorte.map((item) => (
            <Link key={item.href} href={item.href} className="pl-2 hover:opacity-70" onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/ratgeber" onClick={() => setMenuOpen(false)}>Ratgeber</Link>
          <Link href="/pflegekasse" onClick={() => setMenuOpen(false)}>Pflegekasse</Link>
          <Link href="/ueber-uns" onClick={() => setMenuOpen(false)}>Über uns</Link>
          <Link href="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
          <a
            href="tel:07031/6953604"
            className="mt-2 text-center px-5 py-2 rounded-full font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#EBA059" }}
          >
            07031/6953604
          </a>
        </div>
      )}
    </header>
  );
}
