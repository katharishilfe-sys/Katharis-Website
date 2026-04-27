"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AnnouncementBanner() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    function onScroll() {
      // Voll sichtbar bei 0px, blasst bis 300px auf min. 0.25 ab
      const ratio = Math.min(window.scrollY / 300, 1);
      setOpacity(1 - ratio * 0.75);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[90] transition-opacity"
      style={{
        backgroundColor: "#EBA059",
        boxShadow: "0 -3px 16px rgba(0,0,0,0.18)",
        opacity,
      }}
    >
      <Link
        href="/kontakt"
        className="flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold"
        style={{ color: "#1A3C34" }}
      >
        Ihr Pflegekassen-Budget verfällt am 1.&nbsp;Juli – Jetzt nutzen&nbsp;→
      </Link>
    </div>
  );
}
