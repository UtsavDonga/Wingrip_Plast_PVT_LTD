'use client'

import nextDynamic from 'next/dynamic'

// Sanity Studio relies on browser-only APIs, so it is loaded client-side only.
// This keeps it out of the server build's page-data collection (avoids the
// `createContext is not a function` error during `next build`).
const Studio = nextDynamic(() => import('./Studio'), {
  ssr: false,
  loading: () => (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      Loading Studio…
    </div>
  ),
})

export default function StudioPage() {
  return <Studio />
}
