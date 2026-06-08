'use client'

import { motion } from 'framer-motion'
import { CERTIFICATIONS } from '@/lib/constants'

export default function CertificationsStrip() {
  return (
    <section className="border-y border-gray-100 bg-neutral-light py-14" aria-labelledby="certifications-heading">
      <div className="container mx-auto px-4">
        <p
          id="certifications-heading"
          className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-gray-400"
        >
          Certifications &amp; Quality Standards
        </p>

        <motion.div
          className="flex flex-wrap items-stretch justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          role="list"
          aria-label="Quality certifications held by Wingrip"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white px-8 py-6 text-center shadow-card"
              role="listitem"
            >
              {/* Badge circle */}
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white font-black text-sm">
                {cert.badge}
              </div>
              <div className="mb-1 text-sm font-bold text-neutral-dark">{cert.name}</div>
              <div className="text-xs text-gray-500">{cert.issuer}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
