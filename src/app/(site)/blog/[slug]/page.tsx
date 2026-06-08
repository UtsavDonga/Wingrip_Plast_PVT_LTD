import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Calendar, Clock, User } from 'lucide-react'
import ArticleBody from '@/components/blog/ArticleBody'
import BlogCard from '@/components/blog/BlogCard'
import ShareButtons from '@/components/blog/ShareButtons'
import Reveal from '@/components/ui/Reveal'
import { getPostBySlug, getPostSlugs, getRelatedPosts } from '@/lib/queries'
import { BLOG_CATEGORY_LABELS } from '@/data/blog'
import { COMPANY } from '@/lib/constants'
import { formatDate, readingTime } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wingrippipes.com'

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Article Not Found' }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.seoKeywords,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const related = await getRelatedPosts(post, 3)
  const minutes = readingTime(post.body)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/images/og-image.jpg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${slug}` },
    keywords: post.seoKeywords.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="border-b border-gray-100 bg-neutral-light py-3" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex flex-wrap items-center gap-1 text-sm">
            <li><Link href="/" className="text-gray-500 transition-colors hover:text-primary">Home</Link></li>
            <li aria-hidden="true"><ChevronRight size={13} className="text-gray-400" /></li>
            <li><Link href="/blog" className="text-gray-500 transition-colors hover:text-primary">Blog</Link></li>
            <li aria-hidden="true"><ChevronRight size={13} className="text-gray-400" /></li>
            <li><span className="font-semibold text-neutral-dark line-clamp-1" aria-current="page">{post.title}</span></li>
          </ol>
        </div>
      </nav>

      <article className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Header */}
            <Reveal>
              <Link
                href={`/blog?category=${post.category}`}
                className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary"
              >
                {BLOG_CATEGORY_LABELS[post.category]}
              </Link>
              <h1 className="mb-5 text-3xl font-black leading-tight text-neutral-dark md:text-4xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-gray-100 pb-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <User size={14} aria-hidden="true" />
                  {post.author}
                  {post.authorRole && <span className="text-gray-400">· {post.authorRole}</span>}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} aria-hidden="true" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} aria-hidden="true" />
                  {minutes} min read
                </span>
              </div>
            </Reveal>

            {/* Cover */}
            <Reveal delay={0.1}>
              <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center px-4 text-center text-xs italic text-gray-400">
                    [CLIENT TO PROVIDE: cover image for &ldquo;{post.title}&rdquo;]
                  </div>
                )}
              </div>
            </Reveal>

            {/* Body */}
            <ArticleBody blocks={post.body} />

            {/* Footer: share + keywords */}
            <div className="mt-10 flex flex-col gap-6 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <ShareButtons slug={post.slug} title={post.title} />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-600"
              >
                Get a Product Quote
                <ChevronRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-neutral-light py-14" aria-labelledby="related-heading">
          <div className="container mx-auto px-4">
            <h2 id="related-heading" className="mb-8 text-2xl font-bold text-neutral-dark">
              Related Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
