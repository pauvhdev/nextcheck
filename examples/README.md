# Example code

These files are **illustrative samples**, written to show the technologies and
coding style used to build NextCheck. They are **not** the production source code
(which is private and proprietary) and contain no secrets or real business logic.

| File | What it shows |
|------|---------------|
| [`shared/types.ts`](./shared/types.ts) | Domain types + a small pure helper (TypeScript) |
| [`frontend/ReservationCard.tsx`](./frontend/ReservationCard.tsx) | A presentational component (React + Tailwind CSS) |
| [`frontend/useReservations.ts`](./frontend/useReservations.ts) | A data-fetching hook with loading/error state (React) |
| [`backend/reservations.route.ts`](./backend/reservations.route.ts) | A typed REST endpoint (Fastify) |
