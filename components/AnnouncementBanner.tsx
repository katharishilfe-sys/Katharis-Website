"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("announcement-dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[90] px-4 py-3"
      style={{ backgroundColor: "rgba(26, 60, 52, 0.93)", backdropFilter: "blur(6px)" }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <Link
          href="/kontakt"
          className="text-sm font-semibold text-white hover:opacity-80 transition-opacity"
        >
          Ihr Pflegekassen-Budget verfällt am 1.&nbsp;Juli –{" "}
          <span style={{ color: "#EBA059" }}>Jetzt nutzen&nbsp;→</span>
        </Link>
        <button
          onClick={() => {
            localStorage.setItem("announcement-dismissed", "1");
            setVisible(false);
          }}
          className="shrink-0 text-white/50 hover:text-white transition-colors text-lg leading-none"
          aria-label="Schließen"
        >
          ×
        </button>
      </div>
    </div>
  );
}
