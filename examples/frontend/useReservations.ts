import { useEffect, useState } from 'react'
import type { Reservation } from '../shared/types'

/**
 * Example data-fetching hook (React + TypeScript).
 * Illustrative only — not the production hook.
 *
 * Loads the reservations of a property with loading/error state, and aborts the
 * request on unmount or when the property changes to avoid updating a stale
 * component.
 */

interface State {
  reservations: Reservation[]
  loading: boolean
  error: string | null
}

const INITIAL: State = { reservations: [], loading: false, error: null }

export function useReservations(propertyId: string | undefined, apiBaseUrl: string): State {
  const [state, setState] = useState<State>(INITIAL)

  useEffect(() => {
    if (!propertyId) {
      setState(INITIAL)
      return
    }

    const controller = new AbortController()
    setState((s) => ({ ...s, loading: true, error: null }))

    fetch(`${apiBaseUrl}/api/reservations`, {
      headers: { 'x-property-id': propertyId },
      signal: controller.signal,
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(`Request failed (${res.status})`)
        const data = (await res.json()) as { items: Reservation[] }
        setState({ reservations: data.items, loading: false, error: null })
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === 'AbortError') return
        setState({ reservations: [], loading: false, error: (err as Error).message })
      })

    return () => controller.abort()
  }, [propertyId, apiBaseUrl])

  return state
}
