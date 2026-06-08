import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Product } from '@/types'
import Badge from '@/components/ui/Badge'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-hover"
      aria-label={`View ${product.name} details`}
    >
      {/* Image placeholder */}
      <div className="mb-4 flex h-40 w-full items-center justify-center rounded-xl bg-neutral-light">
        <span className="text-xs text-gray-400 italic">
          [Image: {product.name}]
        </span>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-neutral-dark transition-colors group-hover:text-primary">
            {product.name}
          </h3>
          {product.featured && (
            <Badge variant="accent" className="shrink-0">
              Popular
            </Badge>
          )}
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
          {product.categoryName}
        </p>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500 line-clamp-2">
          {product.tagline}
        </p>

        {product.standard && (
          <p className="mb-4 text-xs text-gray-400">
            Standard: <span className="font-semibold text-gray-600">{product.standard}</span>
          </p>
        )}

        <span className="flex items-center gap-1 text-sm font-semibold text-accent">
          View Details
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
