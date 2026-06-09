'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { PRODUCT_CATEGORIES } from '@/data/products'

const CATEGORY_ICONS: Record<string, string> = {
  'cpvc-pipes-fittings': '/images/categories/cpvc-pipes.svg',
  'upvc-pipes-fittings': '/images/categories/upvc-pipes.svg',
  'swr-pipes-fittings': '/images/categories/swr-pipes.svg',
  'agriculture-pipes': '/images/categories/agriculture-pipes.svg',
  'water-tanks': '/images/categories/water-tanks.svg',
  'solvent-cement': '/images/categories/solvent-cement.svg',
  'brass-fittings-valves': '/images/categories/brass-fittings-valves.svg',
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function ProductCategories() {
  return (
    <section className="bg-white py-20" aria-labelledby="categories-heading">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Complete Product Range"
          title="Seven Product Lines. One Trusted Supplier."
          subtitle="From high-pressure CPVC hot water systems to large-capacity water storage tanks — Wingrip gives builders and contractors a single source for every piping requirement."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          role="list"
          aria-label="Product categories"
        >
          {PRODUCT_CATEGORIES.map((cat) => (
            <motion.div key={cat.slug} variants={item} role="listitem">
              <Link
                href={`/products?category=${cat.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-hover"
                aria-label={`View ${cat.name} products`}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/8 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={CATEGORY_ICONS[cat.slug] || '/images/categories/cpvc-pipes.svg'}
                    alt=""
                    width={34}
                    height={34}
                    unoptimized
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-2 text-base font-bold text-neutral-dark transition-colors group-hover:text-primary">
                  {cat.name}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500">
                  {cat.shortDescription}
                </p>
                <span className="flex items-center gap-1 text-sm font-semibold text-accent">
                  View Products
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
          >
            Browse All Products
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
