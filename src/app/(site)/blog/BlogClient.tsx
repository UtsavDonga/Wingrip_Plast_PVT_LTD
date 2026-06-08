'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import BlogCard from '@/components/blog/BlogCard'
import { BLOG_CATEGORIES, BLOG_CATEGORY_LABELS } from '@/data/blog'
import { formatDate, readingTime } from '@/lib/utils'
import type { BlogCategorySlug, BlogPost } from '@/types'

type Filter = BlogCategorySlug | 'all'

interface BlogClientProps {
  posts: BlogPost[]
  featured: BlogPost
}

export default function BlogClient({ posts, featured }: BlogClientProps) {
  const [active, setActive] = useState<Filter>('all')

  // Featured post shown in the hero is excluded from the grid for the "all" view.
  const gridPosts = useMemo(
    () =>
      posts.filter((p) => {
        if (p.id === featured.id) return false
        return active === 'all' || p.category === active
      }),
    [posts, featured.id, active]
  )

  const tabs: { slug: Filter; label: string }[] = [
    { slug: 'all', label: 'All Articles' },
    ...BLOG_CATEGORIES,
  ]

  return (
    <>
      {/* Featured hero */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid items-center gap-8 overflow-hidden rounded-3xl border border-gray-100 bg-neutral-light shadow-card transition-shadow hover:shadow-card-hover lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 lg:h-full">
              {featured.coverImage ? (
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center px-4 text-center text-xs italic text-gray-400">
                  [CLIENT TO PROVIDE: featured cover image]
                </div>
              )}
              <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                Featured
              </span>
            </div>
            <div className="p-6 md:p-10">
              <div className="mb-3 flex items-center gap-3 text-xs text-gray-400">
                <span className="font-bold uppercase tracking-wide text-primary">
                  {BLOG_CATEGORY_LABELS[featured.category]}
                </span>
                <span aria-hidden="true">•</span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} aria-hidden="true" />
                  {formatDate(featured.publishedAt)}
                </span>
                <span aria-hidden="true">•</span>
                <span>{readingTime(featured.body)} min read</span>
              </div>
              <h2 className="mb-3 text-2xl font-black leading-tight text-neutral-dark transition-colors group-hover:text-primary md:text-3xl">
                {featured.title}
              </h2>
              <p className="mb-6 text-gray-600 line-clamp-3">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
                Read Full Article
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="bg-neutral-light py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter articles by category">
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
                    layoutId="active-blog-tab"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {gridPosts.length === 0 ? (
            <p className="py-12 text-center text-gray-500">No articles in this category yet. Check back soon.</p>
          ) : (
            <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {gridPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
