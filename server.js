// Minimale Demo-App für das Coolify-Lab: zeigt Version/Umgebung, /health für Healthchecks.
const http = require("http");

const VERSION = "1.2.0";
const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || "unbekannt";
const started = new Date().toISOString();

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(500, { "Content-Type": "application/json" }); // ABSICHTLICHER FEHLER (Rollback-Test)
    return res.end(JSON.stringify({ status: "ok", version: VERSION, env: APP_ENV }));
  }
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<!doctype html><title>Coolify-Lab Demo</title>
<h1>Coolify-Lab Demo</h1>
<p>Neu in 1.1.0: diese Zeile.</p>
<p>Version: <b>${VERSION}</b></p>
<p>Umgebung: <b>${APP_ENV}</b></p>
<p>Container gestartet: ${started}</p>`);
});

server.listen(PORT, () => console.log(`demo-app ${VERSION} (${APP_ENV}) läuft auf Port ${PORT}`));
process.on("SIGTERM", () => server.close(() => process.exit(0)));
