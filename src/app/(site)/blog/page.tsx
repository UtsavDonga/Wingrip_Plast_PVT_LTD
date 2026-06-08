import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import BlogClient from './BlogClient'
import Reveal from '@/components/ui/Reveal'
import { getAllPosts, getFeaturedPost } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'Blog — Pipe Guides, Plumbing Tips & Industry Insights',
  description:
    'Practical guides on CPVC, UPVC & SWR pipes, home plumbing, water tanks, and ISI quality from the Wingrip Plast team. Helpful, India-focused advice for homeowners, builders & dealers.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Wingrip Blog — Pipe & Plumbing Guides',
    description: 'Expert guides on pipes, plumbing, and water systems for Indian homes and projects.',
    url: '/blog',
  },
}

export default async function BlogPage() {
  const [posts, featured] = await Promise.all([getAllPosts(), getFeaturedPost()])

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-700 py-16 text-white">
        <div className="absolute -right-16 -top-16 h-64 w-64 animate-float rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <nav className="mb-4 flex items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-white">Blog</span>
          </nav>
          <Reveal className="max-w-2xl">
            <h1 className="mb-4 text-3xl font-black leading-tight md:text-5xl">
              Guides, Tips &amp; Insights
            </h1>
            <p className="text-lg text-white/80">
              Practical, India-focused advice on pipes, plumbing, and water systems — from the people
              who manufacture them.
            </p>
          </Reveal>
        </div>
      </section>

      <BlogClient posts={posts} featured={featured} />
    </>
  )
}
