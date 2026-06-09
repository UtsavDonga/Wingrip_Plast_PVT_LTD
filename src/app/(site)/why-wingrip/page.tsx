import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronRight,
  FlaskConical,
  Factory,
  ShieldCheck,
  Gauge,
  Recycle,
  Thermometer,
  Microscope,
  Ruler,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { StaggerGroup, StaggerItem } from '@/components/ui/Stagger'
import { CERTIFICATIONS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Why Wingrip — Manufacturing, Quality Testing & Infrastructure',
  description:
    'Discover how Wingrip Plast manufactures ISI-marked CPVC, UPVC & SWR pipes — from raw material selection and modern extrusion lines to in-house quality testing and BIS-certified standards.',
  alternates: { canonical: '/why-wingrip' },
  openGraph: {
    title: 'Why Wingrip — Quality You Can Build On',
    description:
      'Modern manufacturing, rigorous in-house testing, and BIS-certified quality. See what goes into every Wingrip pipe.',
    url: '/why-wingrip',
  },
}

const PROCESS_STEPS = [
  {
    icon: Recycle,
    title: 'Raw Material Selection',
    text: 'Only virgin, lead-free PVC/CPVC compound from reputed suppliers — never recycled scrap — for consistent strength and food-safe water contact.',
  },
  {
    icon: Factory,
    title: 'Precision Extrusion',
    text: 'Computer-controlled extrusion lines maintain exact wall thickness and diameter on every metre of pipe produced.',
  },
  {
    icon: Ruler,
    title: 'Calibration & Sizing',
    text: 'Vacuum calibration tanks lock in dimensional accuracy so fittings seat perfectly and joints stay leak-free.',
  },
  {
    icon: ShieldCheck,
    title: 'Marking & Packing',
    text: 'Each pipe is batch-marked with size, standard, and ISI details, then carefully bundled to prevent transit damage.',
  },
]

const QUALITY_TESTS = [
  {
    icon: Gauge,
    title: 'Hydrostatic Pressure Test',
    text: 'Pipes are pressurised well beyond rated working pressure to confirm they withstand real-world stress without failure.',
  },
  {
    icon: Thermometer,
    title: 'Heat Reversion Test',
    text: 'Samples are heat-cycled to verify dimensional stability and resistance to deformation at elevated temperatures.',
  },
  {
    icon: Microscope,
    title: 'Density & Composition',
    text: 'Material density and composition are checked to ensure compliance with the relevant IS specification.',
  },
  {
    icon: FlaskConical,
    title: 'Impact & Flattening',
    text: 'Impact and flattening tests confirm toughness and flexibility so pipes survive handling, installation, and ground movement.',
  },
]

const INFRASTRUCTURE = [
  { label: 'Plant Area', value: '44,000 sq. ft.' },
  { label: 'Extrusion Lines', value: '6 lines' },
  { label: 'In-house QC Lab', value: 'Fully equipped testing laboratory' },
  { label: 'Product Categories', value: '7' },
  { label: 'Pan-India Supply', value: '28+ States' },
  { label: 'Operational Since', value: '2013' },
]

export default function WhyWingripPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-700 py-20 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '26px 26px',
          }}
          aria-hidden="true"
        />
        <div className="container relative mx-auto px-4">
          <nav className="mb-4 flex items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-white">Why Wingrip</span>
          </nav>
          <Reveal className="max-w-2xl">
            <h1 className="mb-4 text-3xl font-black leading-tight md:text-5xl">
              Quality You Can Build On
            </h1>
            <p className="text-lg text-white/80">
              Behind every Wingrip pipe is careful material selection, modern manufacturing, and
              uncompromising in-house testing. Here is what sets our products apart.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="From Granule to Pipe"
            title="Our Manufacturing Process"
            subtitle="A controlled, repeatable process is the foundation of a reliable pipe. This is how we make ours."
            align="center"
          />
          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="relative h-full rounded-2xl border border-gray-100 bg-neutral-light p-7">
                  <span className="absolute right-5 top-5 text-3xl font-black text-primary/10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                    <step.icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-neutral-dark">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{step.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Quality Testing */}
      <section className="bg-neutral-light py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Tested, Not Assumed"
            title="In-House Quality Testing"
            subtitle="Every batch is tested in our own laboratory against IS specifications before it ships. Nothing leaves the plant unchecked."
            align="center"
          />
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
            {QUALITY_TESTS.map((test) => (
              <StaggerItem key={test.title}>
                <div className="flex h-full gap-5 rounded-2xl border border-gray-100 bg-white p-7 shadow-card">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <test.icon size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-neutral-dark">{test.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{test.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal direction="right">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                Infrastructure
              </p>
              <h2 className="mb-4 text-3xl font-bold text-neutral-dark md:text-4xl">
                Built for Scale &amp; Consistency
              </h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                Our Jamnagar facility combines modern machinery with an in-house quality lab,
                letting us control every stage of production and respond quickly to large orders. We
                have been manufacturing and supplying across India since 2013.
              </p>
              <div className="flex h-56 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-light to-primary/5 text-sm italic text-gray-400">
                [CLIENT TO PROVIDE: plant / machinery photograph]
              </div>
            </Reveal>
            <StaggerGroup className="grid grid-cols-2 gap-4">
              {INFRASTRUCTURE.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="h-full rounded-2xl border border-gray-100 bg-neutral-light p-6">
                    <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm font-bold text-neutral-dark">{item.value}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Certifications deep-dive */}
      <section className="bg-neutral-light py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Certified Quality"
            title="Standards &amp; Certifications"
            subtitle="Wingrip products comply with the Indian Standards that matter for plumbing, water supply, and drainage."
            align="center"
          />
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <StaggerItem key={cert.name}>
                <div className="group h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-lg font-black text-white">
                    {cert.badge}
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-neutral-dark">{cert.name}</h3>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {cert.issuer}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600">{cert.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-all hover:bg-accent-600 hover:shadow-xl"
            >
              Request Certificates &amp; Test Reports
              <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
