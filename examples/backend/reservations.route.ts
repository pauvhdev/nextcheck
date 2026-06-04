import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import type { Reservation } from '../shared/types'

/**
 * Example REST endpoint (Fastify + TypeScript).
 * Illustrative only — not the production route.
 *
 * GET /api/reservations?from&to
 * Returns the reservations of the property given in the `x-property-id` header,
 * optionally filtered by an overlapping date range.
 */

interface ReservationQuery {
  from?: string
  to?: string
}

// In the real service this comes from the database (Prisma + PostgreSQL).
// Here it is hard-coded just to keep the sample self-contained.
const SAMPLE: Reservation[] = [
  { id: 'r1', guestName: 'María García', channel: 'booking', checkIn: '2026-06-10', checkOut: '2026-06-13', status: 'booked', total: { amount: 285, currency: 'EUR' }, roomName: '101' },
  { id: 'r2', guestName: 'John Smith', channel: 'airbnb', checkIn: '2026-06-09', checkOut: '2026-06-11', status: 'in_house', total: { amount: 190, currency: 'EUR' }, roomName: '102' },
]

export async function reservationRoutes(app: FastifyInstance): Promise<void> {
  app.get(
    '/api/reservations',
    async (req: FastifyRequest<{ Querystring: ReservationQuery }>, reply: FastifyReply) => {
      const propertyId = req.headers['x-property-id']
      if (typeof propertyId !== 'string' || !propertyId) {
        return reply.code(400).send({ error: 'missing_property' })
      }

      const { from, to } = req.query
      const items = SAMPLE.filter((r) => {
        if (from && r.checkOut < from) return false // ends before the window
        if (to && r.checkIn > to) return false // starts after the window
        return true
      })

      return { items, count: items.length }
    },
  )
}
