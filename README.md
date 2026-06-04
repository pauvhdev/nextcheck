# NextCheck

> Automated guest registration and check-in for accommodation providers across Europe.

**NextCheck** is a SaaS platform that automates **legal guest registration** and
streamlines day-to-day operations for hotels and short-term rentals. Across Europe,
hosts are legally required to report their guests' data to the national authorities
for every stay — a manual, repetitive and error-prone duty. NextCheck turns it into
a one-click, fully automated process and adds the tools to run the property end to end.

🔗 **Live:** https://nextcheck.org

## The problem
Most European countries require accommodation providers to register their guests
with the authorities for each stay. Done by hand it is slow and easy to get wrong.
NextCheck automates the whole flow and keeps every stay compliant — launching first
in Spain and expanding to further European markets.

## What it does
- 📷 **Guest self check-in** with document scanning (OCR) — passports & ID cards.
- 🏛️ **Automatic legal guest registration** with the relevant national authorities.
- 🔌 **Channel manager sync** — Airbnb, Booking.com, Smoobu (iCal & API).
- 📅 **Property management** — planning calendar, room status, rates, occupancy.
- 🤖 **AI assistant** for guest messaging and business analytics.
- 🌍 **Multi-language** check-in (10 languages), GDPR-compliant by design.

## Tech stack
- **Frontend:** React 18 · TypeScript · Vite · Tailwind CSS
- **Backend:** Firebase Cloud Functions (Node 22) · Fastify API on Cloud Run
- **Data:** Firestore, migrating to PostgreSQL (Cloud SQL + Prisma)
- **Infra:** Google Cloud Platform · Firebase Hosting · CI/CD (GitHub Actions)
- **Integrations:** OCR (Google Cloud Vision), official guest-registration web
  services, channel managers, transactional email and AI

## My role
Co-founder and full-stack software developer — frontend, Cloud Functions,
the relational migration, third-party integrations and infrastructure.

## Code samples
The production source code is private and proprietary. The [`examples/`](./examples)
folder contains small, self-contained samples written to illustrate the stack and
coding style — they are not the production code and contain no secrets.

---
© NextCheck — building for accommodation providers across Europe.
