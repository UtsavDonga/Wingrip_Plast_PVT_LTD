import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'
import ScrollProgress from '@/components/ui/ScrollProgress'
import { COMPANY } from '@/lib/constants'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wingrippipes.com'

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteUrl,
  name: COMPANY.name,
  description:
    'Manufacturer and supplier of CPVC, UPVC, SWR pipes and fittings, Agriculture pipes, Water tanks, Solvent cement, and Brass fittings. Established 2013.',
  url: siteUrl,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  foundingDate: String(COMPANY.founded),
  slogan: COMPANY.tagline,
  taxID: COMPANY.gst,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
    addressLocality: 'Jamnagar',
    addressRegion: 'Gujarat',
    postalCode: COMPANY.address.pincode,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '[CLIENT TO PROVIDE: latitude]',
    longitude: '[CLIENT TO PROVIDE: longitude]',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [COMPANY.social.facebook, COMPANY.social.instagram, COMPANY.social.linkedin],
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingActions />
    </>
  )
}
