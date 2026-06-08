import type { Metadata } from 'next'
import SeoLanding from '@/components/shared/SeoLanding'
import type { ArticleBlock } from '@/types'

export const metadata: Metadata = {
  title: 'UPVC Pipe Supplier in India — ISI Marked Pressure Pipes | Wingrip Plast',
  description:
    'Wingrip Plast is a UPVC pipe supplier in India, manufacturing ISI-marked UPVC pressure pipes (IS 4985) for water supply, borewell & agriculture. Supplying 28+ states from Jamnagar, Gujarat.',
  alternates: { canonical: '/upvc-pipe-supplier-india' },
  openGraph: {
    title: 'UPVC Pipe Supplier in India | Wingrip Plast',
    description: 'ISI-marked UPVC pressure pipes for water supply and agriculture, supplied across India.',
    url: '/upvc-pipe-supplier-india',
  },
}

const BODY: ArticleBlock[] = [
  {
    type: 'p',
    text: 'Wingrip Plast Pvt. Ltd. is a UPVC pipe supplier serving customers across India. From our manufacturing plant in Jamnagar, Gujarat, we produce ISI-marked UPVC pressure pipes and fittings to IS 4985, supplying dealers, builders, farmers, and government projects in 28+ states. Our UPVC range forms the backbone of cold water supply and water conveyance infrastructure nationwide.',
  },
  { type: 'h2', text: 'UPVC Pressure Pipes for Every Cold Water Application' },
  {
    type: 'p',
    text: 'UPVC (Un-plasticised Polyvinyl Chloride) is the trusted material for cold water supply because it is strong, corrosion-proof, and handles high working pressure without scaling or rusting. It is ideal for municipal water supply, overhead tank distribution, borewell connections, and agricultural pressure lines.',
  },
  {
    type: 'ul',
    items: [
      'Handles high working pressure for pumped and gravity supply.',
      'Completely corrosion-proof and scale-resistant — no rusting.',
      'Smooth bore for excellent flow and low friction loss.',
      'Lightweight, easy to transport, and quick to install.',
      'Manufactured to IS 4985 and carrying the ISI mark.',
    ],
  },
  { type: 'h2', text: 'Reliable Supply Across India' },
  {
    type: 'p',
    text: 'A pipe is only useful if it arrives on time. With in-house manufacturing and a 500+ dealer network, Wingrip maintains consistent stock and dependable dispatch to locations across the country. We supply both standard and bulk project quantities, and our team can help coordinate large orders for contractors and government tenders.',
  },
  { type: 'callout', text: 'From single borewell connections to kilometre-long irrigation mains, Wingrip UPVC is sized and certified for the job.' },
  { type: 'h2', text: 'Quality That Meets the Standard' },
  {
    type: 'p',
    text: 'Every Wingrip UPVC pipe is made from virgin material and tested in our own laboratory against IS 4985 before it ships. ISI certification means the dimensions, wall thickness, and pressure rating are verified — so fittings seat correctly and joints stay leak-free. Certificates and test reports are available on request for project documentation.',
  },
]

export default function UpvcIndiaLandingPage() {
  return (
    <SeoLanding
      path="/upvc-pipe-supplier-india"
      breadcrumb="UPVC Pipe Supplier in India"
      eyebrow="Supplying 28+ States"
      h1="UPVC Pipe Supplier in India"
      intro="ISI-marked UPVC pressure pipes and fittings (IS 4985) for water supply, borewell, and agriculture — manufactured in Jamnagar, Gujarat and supplied across India."
      areaServed="India"
      body={BODY}
      relatedProducts={[
        { label: 'UPVC Pipes & Fittings', href: '/products?category=upvc-pipes-fittings' },
        { label: 'Agriculture Pipes', href: '/products?category=agriculture-pipes' },
        { label: 'CPVC Pipes & Fittings', href: '/products?category=cpvc-pipes-fittings' },
        { label: 'Solvent Cement', href: '/products?category=solvent-cement' },
        { label: 'Become a Dealer', href: '/dealer' },
        { label: 'View All Products', href: '/products' },
      ]}
    />
  )
}
