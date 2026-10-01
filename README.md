# coolify-lab-demo

Bewusst minimale Testanwendung für ein Coolify-Self-Hosting-Lab.

- `GET /` – zeigt Version, Umgebung (`APP_ENV`) und Startzeit des Containers
- `GET /health` – JSON-Healthcheck, wird von Docker/Coolify genutzt

Branches:
- `develop` → Development-Umgebung
- `main` → Production-Umgebung

Konfiguration ausschließlich über Umgebungsvariablen in Coolify. Im Repo liegen keine Secrets.
