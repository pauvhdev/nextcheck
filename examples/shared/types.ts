/**
 * Example domain types — illustrative only, not the production code.
 * Shows the typing style shared across the NextCheck frontend and backend.
 */

export type ReservationStatus =
  | 'booked'
  | 'arriving'
  | 'in_house'
  | 'departed'
  | 'cancelled'

export type Channel = 'airbnb' | 'booking' | 'vrbo' | 'direct' | 'other'

export interface Money {
  amount: number
  currency: 'EUR' | 'USD' | 'GBP'
}

export interface Reservation {
  id: string
  guestName: string
  channel: Channel
  checkIn: string // ISO date, YYYY-MM-DD
  checkOut: string // ISO date, YYYY-MM-DD
  status: ReservationStatus
  total: Money
  roomName: string | null
}

/**
 * Number of nights between two ISO dates
 * (inclusive of check-in, exclusive of check-out).
 */
export function nights(checkIn: string, checkOut: string): number {
  const ms = new Date(checkOut).getTime() - new Date(checkIn).getTime()
  return Math.max(0, Math.round(ms / 86_400_000))
}
