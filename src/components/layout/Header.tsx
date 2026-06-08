'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { COMPANY, WHATSAPP_ENQUIRY_URL } from '@/lib/constants'
import { PRODUCT_CATEGORIES } from '@/data/products'
import Button from '@/components/ui/Button'
import Logo from '@/components/layout/Logo'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden bg-primary-900 text-white md:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <span className="text-primary-200">
            Since 2013 — Manufacturing Excellence from Jamnagar, Gujarat
          </span>
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-accent"
          >
            <Phone size={14} />
            {COMPANY.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full border-b bg-white transition-shadow duration-300',
          scrolled ? 'shadow-md border-gray-200' : 'border-transparent'
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Wingrip Plast — Home">
            <Logo className="h-10 w-auto md:h-12" priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            <NavLink href="/" label="Home" pathname={pathname} />

            {/* Products Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold transition-colors',
                  pathname.startsWith('/products')
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                )}
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products
                <ChevronDown
                  size={14}
                  className={cn('transition-transform duration-200', productsOpen && 'rotate-180')}
                />
              </button>

              {productsOpen && (
                <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                      Product Categories
                    </p>
                    <Link
                      href="/products"
                      className="text-xs font-semibold text-primary hover:text-accent transition-colors"
                    >
                      View All →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/products?category=${cat.slug}`}
                        className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-primary/5"
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-bold">
                          {cat.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors">
                            {cat.name}
                          </div>
                          <div className="mt-0.5 text-xs text-gray-500 line-clamp-1">
                            {cat.shortDescription.split('.')[0]}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/why-wingrip" label="Why Wingrip" pathname={pathname} />
            <NavLink href="/blog" label="Blog" pathname={pathname} />
            <NavLink href="/gallery" label="Gallery" pathname={pathname} />
            <NavLink href="/about" label="About" pathname={pathname} />
            <NavLink href="/contact" label="Contact" pathname={pathname} />
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={WHATSAPP_ENQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:border-[#25D366] hover:text-[#25D366]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <Button
              size="sm"
              onClick={() => (window.location.href = '/contact')}
            >
              Request a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="border-t border-gray-100 bg-white pb-6 lg:hidden">
            <div className="container mx-auto px-4">
              <MobileNav />
            </div>
          </div>
        )}
      </header>
    </>
  )
}

function NavLink({
  href,
  label,
  pathname,
}: {
  href: string
  label: string
  pathname: string
}) {
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
  return (
    <Link
      href={href}
      className={cn(
        'rounded-lg px-4 py-2 text-sm font-semibold transition-colors',
        isActive
          ? 'bg-primary/5 text-primary'
          : 'text-gray-700 hover:text-primary hover:bg-gray-50'
      )}
    >
      {label}
    </Link>
  )
}

function MobileNav() {
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <nav className="flex flex-col gap-1 pt-4" aria-label="Mobile navigation">
      <Link href="/" className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50">
        Home
      </Link>

      <div>
        <button
          onClick={() => setProductsOpen(!productsOpen)}
          className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
        >
          Products
          <ChevronDown
            size={16}
            className={cn('transition-transform duration-200', productsOpen && 'rotate-180')}
          />
        </button>
        {productsOpen && (
          <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-gray-100 pl-4">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="py-2 text-sm text-gray-600 hover:text-primary"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/products"
              className="py-2 text-sm font-semibold text-primary hover:text-accent"
            >
              View All Products →
            </Link>
          </div>
        )}
      </div>

      <Link href="/why-wingrip" className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50">
        Why Wingrip
      </Link>
      <Link href="/blog" className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50">
        Blog
      </Link>
      <Link href="/gallery" className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50">
        Gallery
      </Link>
      <Link href="/about" className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50">
        About Us
      </Link>
      <Link href="/dealer" className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50">
        Become a Dealer
      </Link>
      <Link href="/contact" className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50">
        Contact
      </Link>

      <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
        <a
          href={`tel:${COMPANY.phone}`}
          className="flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-3 text-sm font-semibold text-primary"
        >
          <Phone size={16} />
          {COMPANY.phoneDisplay}
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white"
        >
          Request a Quote
        </Link>
      </div>
    </nav>
  )
}
