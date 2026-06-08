'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TrendingUp, Building2, FileCheck, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const AUDIENCES = [
  {
    icon: TrendingUp,
    tag: 'Dealers & Distributors',
    title: 'Grow Your Business with Wingrip',
    color: 'bg-primary text-white',
    cardBg: 'bg-primary/5 border-primary/20',
    titleColor: 'text-primary',
    points: [
      'Competitive dealer margins with transparent pricing',
      'Consistent stock availability — no supply disruptions',
      'Full product range means more wallet share per dealer',
      'Promotional and marketing support for your territory',
      'Fast order processing and reliable dispatch timelines',
    ],
    cta: { label: 'Become a Dealer', href: '/contact?subject=dealer' },
  },
  {
    icon: Building2,
    tag: 'Builders & Contractors',
    title: 'One Supplier for Every Project',
    color: 'bg-accent text-white',
    cardBg: 'bg-accent/5 border-accent/20',
    titleColor: 'text-accent-600',
    points: [
      'Complete range from drainage to hot water supply',
      'Technical specifications ready for your project team',
      'ISI-marked products accepted by all site engineers',
      'Bulk order pricing with delivery coordination',
      'Dedicated account support for large projects',
    ],
    cta: { label: 'Get Project Quote', href: '/contact?subject=project' },
  },
  {
    icon: FileCheck,
    tag: 'Government & Institutional',
    title: 'Tender-Ready Documentation',
    color: 'bg-green-600 text-white',
    cardBg: 'bg-green-50 border-green-200',
    titleColor: 'text-green-700',
    points: [
      'BIS-certified products meeting all tender specifications',
      'ISO 9001:2015 quality management documentation',
      'ISI marked with full test reports available',
      'GST compliant with proper invoicing and documentation',
      'Government project experience across Gujarat and India',
    ],
    cta: { label: 'Request Documents', href: '/contact?subject=government' },
  },
]

export default function AudienceSection() {
  return (
    <section className="bg-white py-20" aria-labelledby="audience-heading">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Who We Serve"
          title="The Right Partner for Every Stakeholder"
          subtitle="Wingrip is built to serve the full chain — from the dealer selling pipes at the counter to the government engineer approving specifications on a 100-crore project."
        />

        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {AUDIENCES.map((audience) => (
            <motion.div
              key={audience.tag}
              variants={{
                hidden: { opacity: 0, y: 32 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`flex flex-col rounded-2xl border p-8 ${audience.cardBg}`}
            >
              {/* Icon tag */}
              <div className={`mb-5 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${audience.color}`}>
                <audience.icon size={13} aria-hidden="true" />
                {audience.tag}
              </div>

              <h3 className={`mb-5 text-xl font-bold ${audience.titleColor}`}>
                {audience.title}
              </h3>

              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {audience.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href={audience.cta.href}
                className="flex items-center gap-2 text-sm font-bold text-inherit transition-colors hover:gap-3"
                style={{ color: 'inherit' }}
              >
                <span className={audience.titleColor}>{audience.cta.label}</span>
                <ArrowRight size={14} className={audience.titleColor} aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
