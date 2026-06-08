import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 text-7xl font-black text-primary/10">404</div>
      <h1 className="mb-3 text-2xl font-bold text-neutral-dark">Page Not Found</h1>
      <p className="mb-8 max-w-md text-gray-500">
        The page you are looking for doesn't exist or may have been moved. Let us help you find
        what you need.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
        >
          <Home size={16} aria-hidden="true" />
          Back to Home
        </Link>
        <Link
          href="/products"
          className="flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
        >
          <Search size={16} aria-hidden="true" />
          Browse Products
        </Link>
      </div>
    </div>
  )
}
