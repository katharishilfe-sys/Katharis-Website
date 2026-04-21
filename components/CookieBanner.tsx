"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const PRIMARY = "#1A3C34";
const ACCENT = "#EBA059";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] px-4 py-4 md:py-5"
      style={{ backgroundColor: PRIMARY, boxShadow: "0 -4px 20px rgba(0,0,0,0.2)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-white/80 leading-relaxed flex-1">
          Wir verwenden technisch notwendige Cookies, um diese Website zu betreiben.
          Weitere Informationen finden Sie in unserer{" "}
          <Link href="/datenschutz" className="underline text-white hover:text-white/70">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <button
          onClick={accept}
          className="shrink-0 px-6 py-2.5 rounded-full font-bold text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: ACCENT, color: "#fff" }}
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
