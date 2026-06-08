import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import ProductCategories from '@/components/home/ProductCategories'
import WhyWingrip from '@/components/home/WhyWingrip'
import AudienceSection from '@/components/home/AudienceSection'
import CertificationsStrip from '@/components/home/CertificationsStrip'
import ContactCTA from '@/components/home/ContactCTA'
import CatalogueDownload from '@/components/shared/CatalogueDownload'
import FAQSection from '@/components/shared/FAQSection'
import { HOME_FAQS } from '@/data/faqs'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'CPVC, UPVC & SWR Pipe Manufacturer in Jamnagar, Gujarat | Wingrip Plast',
  description:
    'Wingrip Plast Pvt. Ltd. — ISI-marked CPVC, UPVC & SWR pipe manufacturer in Jamnagar, Gujarat. BIS certified. Supplying dealers, builders & government projects across India since 2013.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CPVC, UPVC & SWR Pipe Manufacturer in Jamnagar | Wingrip Plast',
    description: `${COMPANY.name} — ISI-marked pipes & fittings from Jamnagar. 500+ dealer network. Supplying across India since 2013.`,
    url: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProductCategories />
      <WhyWingrip />
      <AudienceSection />
      <CertificationsStrip />
      <CatalogueDownload />
      <FAQSection
        items={HOME_FAQS}
        subtitle="Quick answers about our products, certifications, and how to work with us."
      />
      <ContactCTA />
    </>
  )
}
