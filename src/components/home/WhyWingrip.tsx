'use client'

import { motion } from 'framer-motion'
import { Award, Package, Clock, ShieldCheck } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Uncompromising Quality',
    description:
      'Every pipe and fitting leaves our Jamnagar plant only after passing rigorous quality checks. Our ISI-marked, BIS-certified products meet or exceed Indian and international standards — from IS 4985 for UPVC to ASTM D2846 for CPVC.',
    color: 'bg-blue-50 text-primary',
  },
  {
    icon: Package,
    title: 'Complete Product Range',
    description:
      'Seven product lines under one roof — CPVC, UPVC, SWR, Agriculture pipes, Water tanks, Solvent cement, and Brass fittings. Builders and contractors get everything they need from a single, trusted supplier, reducing coordination and procurement costs.',
    color: 'bg-orange-50 text-accent',
  },
  {
    icon: Clock,
    title: 'Reliable Supply Chain',
    description:
      'With our Hapa, Jamnagar manufacturing base and an established dealer network spanning 28+ states, Wingrip delivers consistently — whether you are building in Ahmedabad or assembling a project in Delhi. On-time supply is not a promise; it is our standard.',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: Award,
    title: 'Certified Excellence',
    description:
      'ISO 9001:2015 quality management, BIS certification, ISI mark — our documentation satisfies government tender requirements and institutional procurement teams. Every product comes with a full quality trail that passes the strictest specification reviews.',
    color: 'bg-purple-50 text-purple-700',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const itemVariant = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function WhyWingrip() {
  return (
    <section className="bg-neutral-light py-20" aria-labelledby="why-wingrip-heading">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Why Choose Wingrip"
          title="Built on Four Unshakeable Pillars"
          subtitle="Over a decade of manufacturing experience distilled into the principles that guide every product we make and every order we ship."
        />

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PILLARS.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={itemVariant}
              className="flex gap-5 rounded-2xl bg-white p-8 shadow-card"
            >
              <div
                className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl ${pillar.color}`}
              >
                <pillar.icon size={26} aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-3 text-lg font-bold text-neutral-dark">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
