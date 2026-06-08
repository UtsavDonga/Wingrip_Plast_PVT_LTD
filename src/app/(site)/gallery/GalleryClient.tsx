'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ImageIcon } from 'lucide-react'
import { GALLERY_CATEGORIES, getGalleryByCategory } from '@/data/gallery'
import type { GalleryCategorySlug } from '@/types'

type Filter = GalleryCategorySlug | 'all'

export default function GalleryClient() {
  const [active, setActive] = useState<Filter>('all')
  const items = getGalleryByCategory(active)

  const tabs: { slug: Filter; label: string }[] = [
    { slug: 'all', label: 'All' },
    ...GALLERY_CATEGORIES,
  ]

  return (
    <section className="bg-neutral-light py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Gallery category filter">
          {tabs.map((tab) => (
            <button
              key={tab.slug}
              role="tab"
              aria-selected={active === tab.slug}
              onClick={() => setActive(tab.slug)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === tab.slug ? 'text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {active === tab.slug && (
                <motion.span
                  layoutId="active-gallery-tab"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.figure
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card"
              >
                {/* Placeholder visual */}
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-neutral-light to-primary/5 text-gray-300 transition-transform duration-500 group-hover:scale-105">
                  <ImageIcon size={28} aria-hidden="true" />
                  <span className="mt-2 px-3 text-center text-[10px] italic text-gray-400">
                    [CLIENT TO PROVIDE: {item.title} photo]
                  </span>
                </div>
                {/* Caption overlay */}
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-neutral-dark/85 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  {item.caption && <p className="text-xs text-white/70">{item.caption}</p>}
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
