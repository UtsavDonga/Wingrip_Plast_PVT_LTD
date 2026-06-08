import type { Metadata } from 'next'
import SeoLanding from '@/components/shared/SeoLanding'
import type { ArticleBlock } from '@/types'

export const metadata: Metadata = {
  title: 'CPVC Pipe Manufacturer in Jamnagar — ISI Marked | Wingrip Plast',
  description:
    'Wingrip Plast is a CPVC pipe manufacturer in Jamnagar, Gujarat. ISI-marked CPVC pipes & fittings (IS 15778) for hot & cold water plumbing, rated up to 93°C. Request a quote today.',
  alternates: { canonical: '/cpvc-pipe-manufacturer-jamnagar' },
  openGraph: {
    title: 'CPVC Pipe Manufacturer in Jamnagar | Wingrip Plast',
    description: 'ISI-marked CPVC pipes & fittings for hot and cold water, manufactured in Jamnagar, Gujarat.',
    url: '/cpvc-pipe-manufacturer-jamnagar',
  },
}

const BODY: ArticleBlock[] = [
  {
    type: 'p',
    text: 'Wingrip Plast Pvt. Ltd. is a CPVC pipe manufacturer based in Hapa, Jamnagar, Gujarat. We produce ISI-marked CPVC pipes and fittings engineered for reliable hot and cold water plumbing in homes, hotels, hospitals, and commercial buildings. Manufactured to IS 15778 from virgin, lead-free compound, our CPVC system is built to last for decades.',
  },
  { type: 'h2', text: 'CPVC Built for Indian Hot Water Systems' },
  {
    type: 'p',
    text: 'CPVC (Chlorinated Polyvinyl Chloride) is the modern standard for internal plumbing because it safely carries hot water at temperatures up to around 93°C without softening or degrading. That makes it the correct choice for geyser lines, solar water heater plumbing, and any application where both hot and cold water run through the same system.',
  },
  {
    type: 'ul',
    items: [
      'Rated for continuous hot water service up to 93°C.',
      'Corrosion-proof and scale-resistant — no rusting like metal pipes.',
      'Does not impart taste or odour to drinking water.',
      'Lightweight and solvent-welded for fast, clean installation.',
      'Manufactured to IS 15778 and carrying the ISI mark.',
    ],
  },
  { type: 'h2', text: 'Why Buy CPVC Direct from a Jamnagar Manufacturer' },
  {
    type: 'p',
    text: 'Sourcing directly from a local manufacturer means dependable stock, faster dispatch, and consistent quality batch after batch. Because we control the entire process — from raw material selection through extrusion to in-house testing — we can guarantee that every length of pipe meets specification. We also supply the matching CPVC solvent cement and brass transition fittings needed to complete the system.',
  },
  { type: 'callout', text: 'Always use CPVC-grade solvent cement on CPVC joints — ordinary UPVC cement is not formulated for hot water and can fail over time.' },
  { type: 'h2', text: 'Certified Quality You Can Document' },
  {
    type: 'p',
    text: 'For builders and project tenders, ISI certification is often a documented requirement. Wingrip CPVC products are BIS-certified and backed by test reports available on request, giving you the paperwork as well as the performance. Whether you need a few cases for a single home or a bulk order for a township, our team can help you specify the right sizes and quantities.',
  },
]

export default function CpvcJamnagarLandingPage() {
  return (
    <SeoLanding
      path="/cpvc-pipe-manufacturer-jamnagar"
      breadcrumb="CPVC Pipe Manufacturer in Jamnagar"
      eyebrow="Manufactured in Jamnagar"
      h1="CPVC Pipe Manufacturer in Jamnagar"
      intro="ISI-marked CPVC pipes and fittings (IS 15778) for hot and cold water plumbing, rated up to 93°C — manufactured at our Jamnagar, Gujarat plant from virgin, lead-free compound."
      areaServed="India"
      body={BODY}
      relatedProducts={[
        { label: 'CPVC Pipes & Fittings', href: '/products?category=cpvc-pipes-fittings' },
        { label: 'Solvent Cement', href: '/products?category=solvent-cement' },
        { label: 'Brass Fittings & Valves', href: '/products?category=brass-fittings-valves' },
        { label: 'UPVC Pipes & Fittings', href: '/products?category=upvc-pipes-fittings' },
        { label: 'Why Wingrip', href: '/why-wingrip' },
        { label: 'View All Products', href: '/products' },
      ]}
    />
  )
}
