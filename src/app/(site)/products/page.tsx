import type { Metadata } from 'next'
import { Suspense } from 'react'
import ProductsClientPage from './ProductsClient'
import { getAllProducts, getAllCategories } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'All Products — CPVC, UPVC, SWR Pipes, Water Tanks & More',
  description:
    'Browse Wingrip\'s complete product range: CPVC pipes, UPVC pipes, SWR drainage, agriculture pipes, water tanks, solvent cement, and brass fittings. ISI marked, BIS certified. Jamnagar, Gujarat.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Products | Wingrip Plast — CPVC, UPVC, SWR Pipe Manufacturer',
    description: 'Complete range of ISI-marked pipes, fittings, and water tanks from Wingrip Plast, Jamnagar.',
    url: '/products',
  },
}

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([getAllProducts(), getAllCategories()])

  return (
    <Suspense fallback={<ProductsLoadingState />}>
      <ProductsClientPage products={products} categories={categories} />
    </Suspense>
  )
}

function ProductsLoadingState() {
  return (
    <div className="py-20 text-center">
      <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  )
}
