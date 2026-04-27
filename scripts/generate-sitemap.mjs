import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../out");

const today = new Date().toISOString().split("T")[0];

const routes = [
  { url: "/",                              priority: "1.0", changefreq: "weekly"  },
  { url: "/kontakt/",                      priority: "0.9", changefreq: "monthly" },
  { url: "/leistungen/",                    priority: "0.85",changefreq: "monthly" },
  { url: "/leistungen/messie-hilfe/",      priority: "0.9", changefreq: "monthly" },
  { url: "/leistungen/entruempelung/",     priority: "0.8", changefreq: "monthly" },
  { url: "/leistungen/grundreinigung/",    priority: "0.8", changefreq: "monthly" },
  { url: "/pflegekasse/",                  priority: "0.85",changefreq: "monthly" },
  { url: "/standorte/",                    priority: "0.8", changefreq: "monthly" },
  { url: "/standorte/boeblingen/",         priority: "0.85",changefreq: "monthly" },
  { url: "/standorte/stuttgart/",          priority: "0.85",changefreq: "monthly" },
  { url: "/standorte/sindelfingen/",       priority: "0.8", changefreq: "monthly" },
  { url: "/standorte/leonberg/",           priority: "0.8", changefreq: "monthly" },
  { url: "/standorte/herrenberg/",         priority: "0.8", changefreq: "monthly" },
  { url: "/ratgeber/",                     priority: "0.75",changefreq: "monthly" },
  { url: "/ratgeber/messie-syndrom/",      priority: "0.8", changefreq: "yearly"  },
  { url: "/ratgeber/pflegekasse-entruempelung/", priority: "0.8", changefreq: "yearly" },
  { url: "/ratgeber/haushaltsaufloesung-kosten/", priority: "0.8", changefreq: "yearly" },
  { url: "/ueber-uns/",                    priority: "0.7", changefreq: "yearly"  },
  { url: "/projekte/",                     priority: "0.7", changefreq: "monthly" },
  { url: "/impressum/",                    priority: "0.3", changefreq: "yearly"  },
  { url: "/datenschutz/",                  priority: "0.3", changefreq: "yearly"  },
  { url: "/agb/",                          priority: "0.3", changefreq: "yearly"  },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>https://katharis.de${r.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml);
console.log("✓ sitemap.xml erstellt mit", routes.length, "Routen");
