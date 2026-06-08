import Link from 'next/link'
import { ChevronRight, Phone, ArrowRight, MapPin } from 'lucide-react'
import ArticleBody from '@/components/blog/ArticleBody'
import Reveal from '@/components/ui/Reveal'
import { StaggerGroup, StaggerItem } from '@/components/ui/Stagger'
import { COMPANY, WHATSAPP_ENQUIRY_URL, TRUST_STATS } from '@/lib/constants'
import type { ArticleBlock } from '@/types'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wingrippipes.com'

export interface SeoLandingProps {
  breadcrumb: string
  eyebrow: string
  h1: string
  intro: string
  body: ArticleBlock[]
  areaServed: string
  relatedProducts: { label: string; href: string }[]
  path: string
}

export default function SeoLanding({
  breadcrumb,
  eyebrow,
  h1,
  intro,
  body,
  areaServed,
  relatedProducts,
  path,
}: SeoLandingProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}${path}`,
    name: COMPANY.name,
    description: intro,
    url: `${siteUrl}${path}`,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    areaServed,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
      addressLocality: 'Jamnagar',
      addressRegion: 'Gujarat',
      postalCode: COMPANY.address.pincode,
      addressCountry: 'IN',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-700 py-16 text-white md:py-20">
        <div className="absolute -right-16 -top-16 h-64 w-64 animate-float rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <nav className="mb-4 flex items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-white">{breadcrumb}</span>
          </nav>
          <Reveal className="max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-200">
              <MapPin size={13} aria-hidden="true" />
              {eyebrow}
            </span>
            <h1 className="mb-4 text-3xl font-black leading-tight md:text-5xl">{h1}</h1>
            <p className="text-lg text-white/80">{intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Trust stats */}
      <section className="border-b border-gray-100 bg-white py-10">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-primary md:text-4xl">
                {stat.value}
                {stat.suffix}
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Body content */}
      <section className="bg-white py-14 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <ArticleBody blocks={body} />
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="bg-neutral-light py-14 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-neutral-dark">Explore Our Products</h2>
          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((product) => (
              <StaggerItem key={product.href}>
                <Link
                  href={product.href}
                  className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-hover"
                >
                  <span className="font-semibold text-neutral-dark group-hover:text-primary">
                    {product.label}
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-accent transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-black md:text-3xl">Get a Quote Today</h2>
          <p className="mx-auto mb-8 max-w-xl text-white/80">
            Speak to our team for pricing, availability, and certified documentation. We supply
            dealers, builders, and government projects across India.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-accent px-8 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-accent-600 hover:shadow-lg"
            >
              Request a Quote
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-8 py-3 text-sm font-bold text-white transition-all hover:border-white hover:bg-white/10"
            >
              <Phone size={16} aria-hidden="true" />
              Call Us
            </a>
            <a
              href={WHATSAPP_ENQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-white/40 px-8 py-3 text-sm font-bold text-white transition-all hover:border-white hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
