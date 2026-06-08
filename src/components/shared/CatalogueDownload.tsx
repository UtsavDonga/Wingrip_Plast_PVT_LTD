'use client'

import { motion } from 'framer-motion'
import { Download, FileText, ArrowRight } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

interface CatalogueDownloadProps {
  /** Tighter spacing when embedded inside another section. */
  compact?: boolean
}

export default function CatalogueDownload({ compact = false }: CatalogueDownloadProps) {
  return (
    <section className={compact ? '' : 'bg-neutral-light py-16'} aria-labelledby="catalogue-heading">
      <div className={compact ? '' : 'container mx-auto px-4'}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-900 via-primary to-primary-700 p-8 md:p-12"
        >
          {/* Decorative grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
            aria-hidden="true"
          />
          <div className="absolute -right-10 -top-10 h-48 w-48 animate-float rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex items-start gap-5">
              <div className="hidden h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm sm:flex">
                <FileText size={30} aria-hidden="true" />
              </div>
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-accent-200">
                  Product Catalogue
                </p>
                <h2 id="catalogue-heading" className="mb-2 text-2xl font-black text-white md:text-3xl">
                  Download the Complete Wingrip Catalogue
                </h2>
                <p className="max-w-xl text-sm text-primary-100">
                  Full product range, technical specifications, available sizes, and applicable
                  standards — everything you need in one PDF.{' '}
                  <span className="italic text-primary-200">
                    [CLIENT TO PROVIDE: catalogue PDF]
                  </span>
                </p>
              </div>
            </div>

            <motion.a
              href={COMPANY.cataloguePdf}
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex flex-shrink-0 items-center gap-3 rounded-xl bg-accent px-7 py-4 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-600"
            >
              <Download size={18} aria-hidden="true" />
              Download Catalogue
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
