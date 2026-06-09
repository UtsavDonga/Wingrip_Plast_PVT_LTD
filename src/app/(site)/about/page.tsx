import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Factory, Users, Award, TrendingUp } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { StaggerGroup, StaggerItem } from '@/components/ui/Stagger'
import { CERTIFICATIONS, TRUST_STATS } from '@/lib/constants'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export const metadata: Metadata = {
  title: 'About Us — Pipe Manufacturer Since 2013 | Wingrip Plast',
  description:
    'Learn about Wingrip Plast Pvt. Ltd. — a Jamnagar-based manufacturer of CPVC, UPVC & SWR pipes since 2013. ISO 9001 certified, BIS compliant, supplying across India.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Wingrip Plast — Pipe Manufacturer Since 2013',
    description: 'Jamnagar-based manufacturer of CPVC, UPVC, SWR pipes and fittings. ISO certified since 2013.',
    url: '/about',
  },
}

const TIMELINE: { year: string; title: string; description: string }[] = [
  {
    year: '2013',
    title: 'Company Founded',
    description:
      'Wingrip Plast Pvt. Ltd. was established in Hapa, Jamnagar, Gujarat, with a clear mission: to manufacture pipes and fittings of uncompromising quality for the Indian market.',
  },
  {
    year: '2015',
    title: 'BIS Certification Achieved',
    description:
      'Wingrip earned Bureau of Indian Standards (BIS) certification for its UPVC and CPVC product lines, becoming one of the few small manufacturers in Saurashtra to hold the ISI mark.',
  },
  {
    year: '2017',
    title: 'SWR Range Launched',
    description:
      'Expanded into the drainage segment with our complete SWR pipes and fittings range, allowing builders and contractors to source the entire plumbing system from a single supplier.',
  },
  {
    year: '2019',
    title: 'ISO 9001:2015 Certified',
    description:
      'Achieved ISO 9001:2015 Quality Management System certification, formalising the quality processes that had guided production from the beginning.',
  },
  {
    year: '2021',
    title: 'Dealer Network Reaches 300+',
    description:
      'Extended our dealer and distributor network to over 300 partners across Gujarat and neighbouring states, making Wingrip products available in hardware stores and plumbing suppliers across the region.',
  },
  {
    year: '2024',
    title: '500+ Dealer Network, All-India Supply',
    description:
      'Today, Wingrip supplies products to 500+ dealers and distributors across 28+ Indian states, with ongoing expansion into new markets and product lines.',
  },
]

const PLANT_HIGHLIGHTS = [
  { icon: Factory, label: 'Manufacturing Plant', value: 'Hapa, Jamnagar, Gujarat' },
  { icon: TrendingUp, label: 'Plant Area', value: '44,000 sq. ft.' },
  { icon: Users, label: 'Production Lines', value: '6 Extrusion Lines' },
  { icon: Award, label: 'Certifications', value: 'ISO 9001:2015 + BIS + ISI' },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <nav className="mb-4 flex items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="mb-3 text-3xl font-black md:text-4xl">
            About Wingrip Plast Pvt. Ltd.
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Over a decade of manufacturing excellence from Jamnagar, Gujarat. We build pipes that
            infrastructure professionals stake their reputation on.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white py-20" aria-labelledby="story-heading">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                  Our Story
                </p>
                <h2 id="story-heading" className="mb-6 text-3xl font-black text-neutral-dark md:text-4xl">
                  Excellence Is Our Passion. Always Has Been.
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Wingrip Plast Pvt. Ltd. was founded in 2013 in the industrial heartland of Hapa,
                    Jamnagar — a city with a long tradition of manufacturing excellence. From the first
                    day, we chose a single guiding principle: never compromise on quality, even when
                    cheaper alternatives exist.
                  </p>
                  <p>
                    Jamnagar is home to some of India's most demanding infrastructure projects — from
                    petrochemical facilities to large-scale residential townships. Building pipes for
                    this market taught us that quality failures are not just business problems; they
                    disrupt lives. That understanding is embedded into every product we make.
                  </p>
                  <p>
                    Today, we manufacture CPVC, UPVC, SWR, and agriculture pipes; roto-moulded water
                    tanks; solvent cement; and brass fittings — all under one roof, all meeting or
                    exceeding the applicable Indian and international standards. We supply 500+ dealers
                    and distributors across 28+ Indian states, and our products are used in homes,
                    hospitals, hotels, farms, and government infrastructure across the country.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {TRUST_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col rounded-2xl border border-primary/10 bg-primary/5 p-6 text-center"
                  >
                    <div className="mb-1 text-4xl font-black text-primary">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-neutral-light py-20" aria-labelledby="timeline-heading">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Journey"
            title="A Decade of Growing Stronger"
            subtitle="Key milestones in our journey from a Jamnagar startup to an all-India supplier."
          />

          <div className="mx-auto max-w-3xl">
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-6 top-0 h-full w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-1/2"
                aria-hidden="true"
              />

              <ol className="flex flex-col gap-10">
                {TIMELINE.map((event, i) => (
                  <li key={event.year} className="relative flex gap-6 md:gap-0">
                    {/* Year bubble */}
                    <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-black text-sm text-white shadow-md">
                        {event.year.slice(-2)}
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`ml-4 flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-card md:ml-0 md:w-[calc(50%-36px)] ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                        }`}
                    >
                      <span className="mb-1 block text-xs font-bold text-accent">{event.year}</span>
                      <h3 className="mb-2 text-base font-bold text-neutral-dark">{event.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">{event.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Plant & Infrastructure */}
      <section className="bg-white py-20" aria-labelledby="plant-heading">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Manufacturing Infrastructure"
            title="Where Quality Begins"
            subtitle="Our Hapa, Jamnagar plant is where every Wingrip product is designed, manufactured, tested, and dispatched."
          />

          <StaggerGroup className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PLANT_HIGHLIGHTS.map((item) => (
              <StaggerItem key={item.label}>
                <div className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <item.icon size={22} aria-hidden="true" />
                  </div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
                    {item.label}
                  </div>
                  <div className="text-sm font-bold text-neutral-dark">{item.value}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Plant image placeholder */}
          <Reveal className="flex h-72 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-light to-primary/5">
            <span className="text-sm text-gray-400 italic">
              [CLIENT TO PROVIDE: Plant / Factory photograph]
            </span>
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-neutral-light py-20" aria-labelledby="certifications-heading">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Quality Credentials"
            title="Certified to the Standards That Matter"
            subtitle="Our certifications are not wall decorations — they are the documented proof behind every product claim we make."
          />

          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <StaggerItem key={cert.name}>
                <div className="flex h-full gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary font-black text-sm text-white">
                    {cert.badge}
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-neutral-dark">{cert.name}</h3>
                    <p className="mb-2 text-xs text-gray-400">{cert.issuer}</p>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-white" aria-labelledby="about-cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="about-cta-heading" className="mb-4 text-2xl font-black md:text-3xl">
            Ready to Partner with Wingrip?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-white/80">
            Whether you are a dealer looking to expand your range, a builder needing a reliable supply
            partner, or a government procurement officer requiring certified documentation — we are
            ready to talk.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-accent px-8 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-accent-600"
            >
              Request a Quote
            </Link>
            <Link
              href="/products"
              className="rounded-lg border-2 border-white/40 px-8 py-3 text-sm font-bold text-white transition-all hover:border-white hover:bg-white/10"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
