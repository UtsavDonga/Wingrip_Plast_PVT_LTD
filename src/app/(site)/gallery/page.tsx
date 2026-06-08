import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import GalleryClient from './GalleryClient'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Gallery — Plant, Products, Dealer Meets & Exhibitions',
  description:
    'Explore the Wingrip Plast gallery: our Jamnagar manufacturing plant, product range, dealer meets, and industry exhibitions. A look inside a trusted Indian pipe manufacturer.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Wingrip Plast Gallery — Inside Our World',
    description: 'Plant, products, dealer meets, and exhibitions — see Wingrip Plast up close.',
    url: '/gallery',
  },
}

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-700 py-20 text-white">
        <div className="absolute -left-16 -top-16 h-64 w-64 animate-float rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <nav className="mb-4 flex items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-white">Gallery</span>
          </nav>
          <Reveal className="max-w-2xl">
            <h1 className="mb-4 text-3xl font-black leading-tight md:text-5xl">A Look Inside Wingrip</h1>
            <p className="text-lg text-white/80">
              From our manufacturing floor to dealer meets and industry exhibitions — a glimpse of
              the people, products, and place behind the brand.
            </p>
          </Reveal>
        </div>
      </section>

      <GalleryClient />
    </>
  )
}
