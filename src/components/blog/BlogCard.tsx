import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'
import { BLOG_CATEGORY_LABELS } from '@/data/blog'
import { formatDate, readingTime } from '@/lib/utils'
import type { BlogPost } from '@/types'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
      aria-label={`Read article: ${post.title}`}
    >
      {/* Cover */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-neutral-light to-primary/5">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-4 text-center text-[11px] italic text-gray-400">
            [CLIENT TO PROVIDE: cover image]
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary backdrop-blur">
          {BLOG_CATEGORY_LABELS[post.category]}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar size={12} aria-hidden="true" />
            {formatDate(post.publishedAt)}
          </span>
          <span aria-hidden="true">•</span>
          <span>{readingTime(post.body)} min read</span>
        </div>
        <h3 className="mb-2 text-lg font-bold leading-snug text-neutral-dark transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500 line-clamp-3">
          {post.excerpt}
        </p>
        <span className="flex items-center gap-1 text-sm font-semibold text-accent">
          Read Article
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
