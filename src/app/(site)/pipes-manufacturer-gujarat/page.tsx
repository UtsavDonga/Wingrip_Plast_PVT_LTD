import type { Metadata } from 'next'
import SeoLanding from '@/components/shared/SeoLanding'
import type { ArticleBlock } from '@/types'

export const metadata: Metadata = {
  title: 'Pipes Manufacturer in Gujarat — CPVC, UPVC & SWR | Wingrip Plast',
  description:
    'Wingrip Plast is a leading pipes manufacturer in Gujarat, producing ISI-marked CPVC, UPVC, SWR & agriculture pipes from Jamnagar. Supplying dealers, builders & projects across Gujarat.',
  alternates: { canonical: '/pipes-manufacturer-gujarat' },
  openGraph: {
    title: 'Pipes Manufacturer in Gujarat | Wingrip Plast',
    description: 'ISI-marked CPVC, UPVC & SWR pipes manufactured in Jamnagar, Gujarat. Supplying across the state.',
    url: '/pipes-manufacturer-gujarat',
  },
}

const BODY: ArticleBlock[] = [
  {
    type: 'p',
    text: 'Gujarat is one of India’s most active construction and infrastructure markets, and reliable piping is the backbone of every project built here. Wingrip Plast Pvt. Ltd. is a Gujarat-based pipes manufacturer, producing a complete range of ISI-marked CPVC, UPVC, SWR, and agriculture pipes from our plant in Hapa, Jamnagar. We have been manufacturing and supplying across the state and beyond since 2013.',
  },
  { type: 'h2', text: 'A Complete Piping Range, Made in Gujarat' },
  {
    type: 'p',
    text: 'From residential plumbing to large municipal and agricultural projects, Wingrip offers a single-source solution. Our product lines cover hot and cold water supply, drainage, water storage, and water conveyance — all manufactured under one roof and tested in our in-house quality laboratory before dispatch.',
  },
  {
    type: 'ul',
    items: [
      'CPVC pipes and fittings for hot and cold water plumbing (IS 15778).',
      'UPVC pressure pipes for cold water supply and distribution (IS 4985).',
      'SWR pipes and fittings for soil, waste, and rainwater drainage (IS 14735).',
      'Agriculture pipes for irrigation, borewell, and water conveyance.',
      'Roto-moulded water storage tanks, solvent cement, and brass fittings.',
    ],
  },
  { type: 'h2', text: 'Why Gujarat Buyers Choose Wingrip' },
  {
    type: 'p',
    text: 'Being based in Jamnagar means short, dependable supply lines for dealers and contractors across Saurashtra and the wider state. Local manufacturing also means we can respond quickly to large project requirements without waiting on third-party suppliers. Every product carries the ISI mark and is made from virgin, food-safe material — never recycled scrap.',
  },
  { type: 'callout', text: 'A growing network of 500+ dealers across 28+ states trusts Wingrip for consistent quality and reliable supply.' },
  { type: 'h2', text: 'Supplying Dealers, Builders & Government Projects' },
  {
    type: 'p',
    text: 'Whether you are a hardware dealer looking to stock a trusted brand, a builder sourcing certified materials for a township, or a procurement officer who needs documented BIS compliance, Wingrip is set up to support you. We provide certificates and test reports on request and offer dedicated dealer support across Gujarat.',
  },
]

export default function GujaratLandingPage() {
  return (
    <SeoLanding
      path="/pipes-manufacturer-gujarat"
      breadcrumb="Pipes Manufacturer in Gujarat"
      eyebrow="Serving All of Gujarat"
      h1="Pipes Manufacturer in Gujarat"
      intro="ISI-marked CPVC, UPVC, SWR, and agriculture pipes manufactured in Jamnagar, Gujarat — supplying dealers, builders, and government projects across the state since 2013."
      areaServed="Gujarat, India"
      body={BODY}
      relatedProducts={[
        { label: 'CPVC Pipes & Fittings', href: '/products?category=cpvc-pipes-fittings' },
        { label: 'UPVC Pipes & Fittings', href: '/products?category=upvc-pipes-fittings' },
        { label: 'SWR Pipes & Fittings', href: '/products?category=swr-pipes-fittings' },
        { label: 'Agriculture Pipes', href: '/products?category=agriculture-pipes' },
        { label: 'Water Tanks', href: '/products?category=water-tanks' },
        { label: 'View All Products', href: '/products' },
      ]}
    />
  )
}
