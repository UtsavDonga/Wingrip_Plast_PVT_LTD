'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const TRUST_ITEMS = [
  'Since 2013',
  'ISI Marked Products',
  'ISO 9001:2015 Certified',
  'All India Supply',
  'BIS Certified',
  'GST Compliant',
  '500+ Dealer Network',
]

export default function TrustBar() {
  return (
    <section className="border-b border-gray-100 bg-neutral-light py-4" aria-label="Trust indicators">
      <div className="container mx-auto overflow-hidden px-4">
        <motion.ul
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:flex-nowrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          role="list"
        >
          {TRUST_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-gray-700"
            >
              <CheckCircle2 size={15} className="flex-shrink-0 text-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
