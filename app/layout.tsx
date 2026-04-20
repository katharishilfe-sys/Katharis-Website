import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Entrümpelung & Messie-Hilfe Böblingen | Katharis",
  description:
    "Diskrete Entrümpelung, Haushaltsauflösung & Messie-Hilfe in Böblingen und Stuttgart. Bis zu 100 % Kostenübernahme durch Ihre Pflegekasse möglich! Jetzt anrufen.",
  keywords:
    "Entrümpelung, Messie-Hilfe, Haushaltsauflösung, Böblingen, Stuttgart, Pflegekasse, Kostenübernahme, Grundreinigung",
  robots: "index, follow",
  metadataBase: new URL("https://www.katharis.de"),
  icons: {
    icon: "/favicon-512.png",
    apple: "/favicon-512.png",
    shortcut: "/favicon-512.png",
  },
  openGraph: {
    title: "Entrümpelung & Messie-Hilfe Böblingen | Katharis",
    description:
      "Diskrete Entrümpelung, Haushaltsauflösung & Messie-Hilfe in Böblingen und Stuttgart. Bis zu 100 % Kostenübernahme durch Ihre Pflegekasse möglich! Jetzt anrufen.",
    type: "website",
    url: "https://www.katharis.de",
    siteName: "Katharis",
    locale: "de_DE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Katharis – Hilfe statt Chaos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrümpelung & Messie-Hilfe Böblingen | Katharis",
    description:
      "Diskrete Entrümpelung, Haushaltsauflösung & Messie-Hilfe in Böblingen und Stuttgart. Bis zu 100 % Kostenübernahme durch Pflegekasse!",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Katharis",
  url: "https://www.katharis.de",
  telephone: "07031/6953604",
  email: "info@katharis.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Olgastraße 8",
    addressLocality: "Böblingen",
    postalCode: "71032",
    addressCountry: "DE",
  },
  founder: [
    { "@type": "Person", name: "Daniel Altenhof" },
    { "@type": "Person", name: "Kemal David Gülcü" },
  ],
  description:
    "Diskrete Entrümpelung, Haushaltsauflösung und spezialisierte Messie-Hilfe in Böblingen und Stuttgart. Bis zu 100 % Kostenübernahme durch die Pflegekasse möglich. Optionale Grundreinigung zubuchbar.",
  areaServed: ["Böblingen", "Stuttgart"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#E8F1F2" }}>
        {children}
      </body>
    </html>
  );
}
