# NextCheck

> Automated legal guest registration for accommodation providers in Spain.

**NextCheck** is a SaaS platform that automates the traveller-registration duties
that Spanish hotels and short-term rentals owe to the Ministry of the Interior
(SES Hospedajes) and the Catalan Police (Mossos d'Esquadra) — turning a manual,
error-prone legal obligation into a one-click, fully automated process.

🔗 **Live:** https://nextcheck.org

## The problem
Under Royal Decree 933/2021, every accommodation provider in Spain must report
each guest's data to the authorities. Doing it by hand is slow, repetitive and
easy to get wrong. NextCheck automates the whole flow end to end.

## What it does
- 📷 **Guest self check-in** with document scanning (OCR) — passports & ID cards.
- 🏛️ **Automatic legal filing** to SES Hospedajes (SOAP) and Mossos d'Esquadra.
- 🔌 **Channel manager sync** — Airbnb, Booking.com, Smoobu (iCal & API).
- 📅 **PMS features** — planning calendar, room status, rates, occupancy.
- 🤖 **AI assistant** for guest messaging and business analytics.
- 🌍 **Multi-language** check-in (10 languages), GDPR-compliant by design.

## Tech stack
- **Frontend:** React 18 · TypeScript · Vite · Tailwind CSS
- **Backend:** Firebase Cloud Functions (Node 22) · Fastify API on Cloud Run
- **Data:** Firestore, migrating to PostgreSQL (Cloud SQL + Prisma)
- **Infra:** Google Cloud Platform · Firebase Hosting · CI/CD (GitHub Actions)
- **Integrations:** Google Cloud Vision (OCR), SES SOAP web service,
  Playwright RPA, Resend, Gemini

## My role
Co-founder and full-stack software developer — frontend, Cloud Functions,
the relational migration, third-party integrations and infrastructure.

## Code samples
The production source code is private and proprietary. The [`examples/`](./examples)
folder contains small, self-contained samples written to illustrate the stack and
coding style — they are not the production code and contain no secrets.

---
© NextCheck — built in Spain.
