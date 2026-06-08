'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import type { FAQItem } from '@/types'

interface FAQSectionProps {
  items: FAQItem[]
  title?: string
  eyebrow?: string
  subtitle?: string
  /** Tighter spacing when embedded inside another page section. */
  compact?: boolean
}

export default function FAQSection({
  items,
  title = 'Frequently Asked Questions',
  eyebrow = 'FAQ',
  subtitle,
  compact = false,
}: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(0)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <section className={compact ? '' : 'bg-white py-16 md:py-20'} aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={compact ? '' : 'container mx-auto px-4'}>
        <div className="mx-auto max-w-3xl">
          {!compact && <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" />}
          {compact && (
            <h2 id="faq-heading" className="mb-6 text-2xl font-bold text-neutral-dark">
              {title}
            </h2>
          )}

          <div className="flex flex-col gap-3">
            {items.map((item, i) => {
              const isOpen = open === i
              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-neutral-dark">{item.question}</span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-gray-600">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
