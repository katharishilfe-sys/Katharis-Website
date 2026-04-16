import * as ftp from "basic-ftp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCAL_DIR = path.join(__dirname, "../out");

const client = new ftp.Client();
client.ftp.verbose = true;

try {
  await client.access({
    host: "dd51334.kasserver.com",
    user: "f0183318",
    password: "KatharisUpload2026",
    secure: false,
  });

  console.log("✓ FTP verbunden");
  console.log("Zielverzeichnis:", await client.pwd());

  // Upload all files from out/ to the correct web root
  await client.uploadFromDir(LOCAL_DIR, "/test/");

  console.log("\n✅ Upload abgeschlossen! Die Website ist live auf katharis.de");
} catch (err) {
  console.error("❌ FTP Fehler:", err);
} finally {
  client.close();
}
