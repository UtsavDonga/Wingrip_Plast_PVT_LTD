'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, ChevronRight } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import CatalogueDownload from '@/components/shared/CatalogueDownload'
import { COMPANY } from '@/lib/constants'
import type { Product, ProductCategory, ProductCategorySlug } from '@/types'

interface ProductsClientPageProps {
  products: Product[]
  categories: ProductCategory[]
}

export default function ProductsClientPage({ products, categories }: ProductsClientPageProps) {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') as ProductCategorySlug | null
  const [activeCategory, setActiveCategory] = useState<ProductCategorySlug | 'all'>(
    initialCategory && categories.some((c) => c.slug === initialCategory) ? initialCategory : 'all'
  )

  const filteredProducts = useMemo(
    () =>
      activeCategory === 'all'
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory, products]
  )

  const activeCat = categories.find((c) => c.slug === activeCategory)

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-700 py-16 text-white">
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
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-white">Products</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-3xl font-black md:text-4xl"
          >
            Our Complete Product Range
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl text-lg text-white/80"
          >
            Seven product lines. All ISI-marked, BIS-certified, and manufactured at our Jamnagar
            plant. Single-source supply for builders, contractors, and dealers across India.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 z-30 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur md:top-20" aria-label="Filter products by category">
        <div className="container mx-auto overflow-x-auto px-4">
          <div className="flex gap-1 py-3" role="tablist" aria-label="Product category filter">
            <FilterTab
              label={`All Products (${products.length})`}
              active={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
            />
            {categories.map((cat) => (
              <FilterTab
                key={cat.slug}
                label={cat.name}
                active={activeCategory === cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-neutral-light py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {activeCat && (
              <motion.div
                key={activeCat.slug}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-10 overflow-hidden"
              >
                <div className="rounded-2xl border border-primary/10 bg-white p-6">
                  <h2 className="mb-2 text-xl font-bold text-neutral-dark">{activeCat.name}</h2>
                  <p className="text-sm leading-relaxed text-gray-600">{activeCat.description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing <span className="font-semibold text-neutral-dark">{filteredProducts.length}</span>{' '}
              products
              {activeCat && (
                <span>
                  {' '}in <span className="font-semibold text-neutral-dark">{activeCat.name}</span>
                </span>
              )}
            </p>
            <a
              href={COMPANY.cataloguePdf}
              download
              className="hidden items-center gap-2 rounded-lg border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white sm:flex"
            >
              <Download size={14} aria-hidden="true" />
              Download Catalogue
            </a>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              role="list"
              aria-label="Product list"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  role="listitem"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Catalogue Download */}
      <section className="bg-white pb-4 pt-12">
        <div className="container mx-auto px-4">
          <CatalogueDownload compact />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-neutral-dark">Need Something Specific?</h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-600">
            If you can&apos;t find the exact product or size you need, contact our team. We manufacture
            custom sizes and configurations for large projects.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-accent px-8 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-accent-600 hover:shadow-lg"
            >
              Request a Quote
            </Link>
            <Link
              href="/dealer"
              className="rounded-lg border-2 border-primary px-8 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white"
            >
              Become a Dealer
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function FilterTab({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`relative flex-shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
        active ? 'text-white' : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {active && (
        <motion.span
          layoutId="active-product-tab"
          className="absolute inset-0 rounded-lg bg-primary"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  )
}
