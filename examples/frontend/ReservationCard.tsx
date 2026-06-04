import type { Reservation, ReservationStatus } from '../shared/types'
import { nights } from '../shared/types'

/**
 * Example presentational component (React + TypeScript + Tailwind CSS).
 * Illustrative only — not the production component.
 */

const STATUS_STYLES: Record<ReservationStatus, { label: string; className: string }> = {
  booked: { label: 'Booked', className: 'bg-slate-100 text-slate-700' },
  arriving: { label: 'Arriving', className: 'bg-amber-100 text-amber-700' },
  in_house: { label: 'In house', className: 'bg-emerald-100 text-emerald-700' },
  departed: { label: 'Departed', className: 'bg-slate-100 text-slate-500' },
  cancelled: { label: 'Cancelled', className: 'bg-red-100 text-red-700' },
}

const formatMoney = (amount: number, currency: string) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency }).format(amount)

interface Props {
  reservation: Reservation
  onSelect?: (id: string) => void
}

export function ReservationCard({ reservation, onSelect }: Props) {
  const { id, guestName, channel, checkIn, checkOut, status, total, roomName } = reservation
  const badge = STATUS_STYLES[status]
  const stay = nights(checkIn, checkOut)

  return (
    <button
      type="button"
      onClick={() => onSelect?.(id)}
      className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-slate-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate font-semibold text-slate-900">{guestName}</p>
          <p className="text-sm text-slate-500">
            {roomName ?? 'Unassigned'} · {channel}
          </p>
        </div>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${badge.className}`}>
          {badge.label}
        </span>
      </div>

      <div className="mt-3 flex items-end justify-between">
        <p className="text-sm text-slate-600">
          {checkIn} → {checkOut}
          <span className="text-slate-400"> · {stay} {stay === 1 ? 'night' : 'nights'}</span>
        </p>
        <p className="font-semibold text-slate-900">{formatMoney(total.amount, total.currency)}</p>
      </div>
    </button>
  )
}
