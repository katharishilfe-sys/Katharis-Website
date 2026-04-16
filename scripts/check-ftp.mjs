import * as ftp from "basic-ftp";

const client = new ftp.Client();
try {
  await client.access({
    host: "dd51334.kasserver.com",
    user: "f0183318",
    password: "KatharisUpload2026",
    secure: false,
  });
  const list = await client.list("/katharis.de/");
  list.forEach(f => console.log(f.type === 2 ? `[DIR] ${f.name}` : `[FILE] ${f.name} (${f.size} bytes)`));
} catch (err) {
  console.error("Fehler:", err.message);
} finally {
  client.close();
}
