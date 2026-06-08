import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronRight,
  TrendingUp,
  Truck,
  Headphones,
  BadgeCheck,
  Megaphone,
  MapPin,
} from 'lucide-react'
import DealerForm from '@/components/forms/DealerForm'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { StaggerGroup, StaggerItem } from '@/components/ui/Stagger'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { TRUST_STATS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Become a Dealer / Distributor — Partner with Wingrip Plast',
  description:
    'Join Wingrip Plast\'s 500+ dealer network across India. Attractive margins, reliable supply chain, marketing and technical support. Apply for a CPVC, UPVC & SWR pipe dealership today.',
  alternates: { canonical: '/dealer' },
  openGraph: {
    title: 'Become a Wingrip Dealer — Distributor Partnership',
    description:
      'Attractive margins, reliable supply, full marketing & technical support. Join 500+ Wingrip dealers across India.',
    url: '/dealer',
  },
}

const BENEFITS = [
  {
    icon: TrendingUp,
    title: 'Attractive Margins',
    description:
      'Competitive dealer pricing and volume-based incentive slabs designed to keep your business profitable on every product line.',
  },
  {
    icon: Truck,
    title: 'Reliable Supply Chain',
    description:
      'In-house manufacturing in Jamnagar means consistent stock availability and on-time dispatch — no waiting on third-party suppliers.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description:
      'A named channel manager, technical product training, and after-sales support so you can sell with confidence.',
  },
  {
    icon: BadgeCheck,
    title: 'Trusted, Certified Brand',
    description:
      'ISI-marked, BIS-certified products that move off the shelf. Sell a brand your customers already trust for quality.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Assistance',
    description:
      'Point-of-sale material, product catalogues, signage, and co-branded promotions to help you grow in your territory.',
  },
  {
    icon: MapPin,
    title: 'Protected Territory',
    description:
      'Well-defined territories so you can build your market without unhealthy competition from neighbouring dealers.',
  },
]

const STEPS = [
  { step: '01', title: 'Apply Online', text: 'Fill the dealership form with your business details.' },
  { step: '02', title: 'Quick Review', text: 'Our channel team reviews and connects within 2 business days.' },
  { step: '03', title: 'Onboarding', text: 'Pricing, territory, and product training are finalised.' },
  { step: '04', title: 'Start Selling', text: 'Receive your first stock and grow with full Wingrip support.' },
]

export default function DealerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary to-primary-700 py-20 text-white">
        <div className="absolute -right-20 -top-20 h-72 w-72 animate-float rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <nav className="mb-4 flex items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-white">Become a Dealer</span>
          </nav>
          <div className="max-w-2xl">
            <Reveal>
              <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-200">
                Dealer & Distributor Programme
              </span>
              <h1 className="mb-4 text-3xl font-black leading-tight md:text-5xl">
                Grow Your Business with Wingrip
              </h1>
              <p className="mb-8 text-lg text-white/80">
                Partner with a fast-growing Jamnagar manufacturer trusted by 500+ dealers across
                India. Strong margins, dependable supply, and real support behind every sale.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-4 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-all hover:bg-accent-600 hover:shadow-xl"
              >
                Apply for Dealership
                <ChevronRight size={16} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="border-b border-gray-100 bg-white py-10">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-primary md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-neutral-light py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Why Partner With Us"
            title="Everything You Need to Succeed"
            subtitle="We invest in our dealers because your growth is our growth. Here is what you get as a Wingrip channel partner."
            align="center"
          />
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="group h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-hover">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <benefit.icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-neutral-dark">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Simple Process"
            title="How to Become a Dealer"
            align="center"
          />
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <StaggerItem key={s.step}>
                <div className="relative rounded-2xl border border-gray-100 bg-neutral-light p-6">
                  <span className="text-4xl font-black text-primary/15">{s.step}</span>
                  <h3 className="mb-1 mt-2 text-base font-bold text-neutral-dark">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="scroll-mt-24 bg-neutral-light py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-card md:p-10">
                <div className="mb-8 text-center">
                  <h2 className="mb-2 text-2xl font-black text-neutral-dark md:text-3xl">
                    Apply for a Dealership
                  </h2>
                  <p className="mx-auto max-w-xl text-sm text-gray-500">
                    Tell us about your business. Our channel team will review your application and
                    get in touch within 2 business days.
                  </p>
                </div>
                <DealerForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
