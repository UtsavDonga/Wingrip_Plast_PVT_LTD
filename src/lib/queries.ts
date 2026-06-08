import { groq } from 'next-sanity'
import { client } from '@/lib/sanity'
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  getProductBySlug as staticGetProductBySlug,
  getRelatedProducts as staticGetRelatedProducts,
} from '@/data/products'
import {
  getAllPostsStatic,
  getPostBySlugStatic,
  getFeaturedPostStatic,
  getRelatedPostsStatic,
} from '@/data/blog'
import type {
  ArticleBlock,
  BlogCategorySlug,
  BlogPost,
  Product,
  ProductCategory,
  ProductCategorySlug,
  ProductSpec,
} from '@/types'

// ─── GROQ Queries ──────────────────────────────────────────────────────────

export const productsQuery = groq`
  *[_type == "product"] | order(featured desc, name asc) {
    "id": _id,
    "slug": slug.current,
    name,
    "category": category->slug.current,
    "categoryName": category->name,
    tagline,
    description,
    applications,
    "specifications": specifications[]{ label, value },
    sizes,
    fittings,
    standard,
    features,
    "image": image.asset->url,
    featured
  }
`

export const productSlugsQuery = groq`*[_type == "product" && defined(slug.current)].slug.current`

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    "id": _id,
    "slug": slug.current,
    name,
    "category": category->slug.current,
    "categoryName": category->name,
    tagline,
    description,
    applications,
    "specifications": specifications[]{ label, value },
    sizes,
    fittings,
    standard,
    features,
    "image": image.asset->url,
    featured
  }
`

export const categoriesQuery = groq`
  *[_type == "productCategory"] | order(order asc) {
    "slug": slug.current,
    name,
    shortDescription,
    description,
    icon,
    "productCount": count(*[_type == "product" && references(^._id)])
  }
`

// ─── Raw Sanity shapes ───────────────────────────────────────────────────────

interface RawProduct {
  id: string
  slug: string
  name: string
  category: string
  categoryName: string
  tagline?: string
  description?: string
  applications?: string[]
  specifications?: ProductSpec[]
  sizes?: string[]
  fittings?: string[]
  standard?: string
  features?: string[]
  image?: string
  featured?: boolean
}

interface RawCategory {
  slug: string
  name: string
  shortDescription?: string
  description?: string
  icon?: string
  productCount?: number
}

function mapProduct(raw: RawProduct): Product {
  return {
    id: raw.id,
    slug: raw.slug,
    name: raw.name,
    category: raw.category as ProductCategorySlug,
    categoryName: raw.categoryName,
    tagline: raw.tagline ?? '',
    description: raw.description ?? '',
    applications: raw.applications ?? [],
    specifications: raw.specifications ?? [],
    sizes: raw.sizes ?? [],
    fittings: raw.fittings,
    standard: raw.standard,
    features: raw.features,
    image: raw.image ?? '',
    featured: raw.featured ?? false,
  }
}

function mapCategory(raw: RawCategory): ProductCategory {
  return {
    slug: raw.slug as ProductCategorySlug,
    name: raw.name,
    shortDescription: raw.shortDescription ?? '',
    description: raw.description ?? '',
    icon: raw.icon ?? '',
    color: 'bg-primary/5 border-primary/10',
    productCount: raw.productCount ?? 0,
  }
}

// ─── Data accessors (Sanity with static fallback) ───────────────────────────

export async function getAllProducts(): Promise<Product[]> {
  if (!client) return PRODUCTS
  try {
    const data = await client.fetch<RawProduct[]>(productsQuery)
    return data && data.length > 0 ? data.map(mapProduct) : PRODUCTS
  } catch (error) {
    console.error('[Sanity] getAllProducts failed, using static data:', error)
    return PRODUCTS
  }
}

export async function getAllCategories(): Promise<ProductCategory[]> {
  if (!client) return PRODUCT_CATEGORIES
  try {
    const data = await client.fetch<RawCategory[]>(categoriesQuery)
    return data && data.length > 0 ? data.map(mapCategory) : PRODUCT_CATEGORIES
  } catch (error) {
    console.error('[Sanity] getAllCategories failed, using static data:', error)
    return PRODUCT_CATEGORIES
  }
}

export async function getProductSlugs(): Promise<string[]> {
  if (!client) return PRODUCTS.map((p) => p.slug)
  try {
    const slugs = await client.fetch<string[]>(productSlugsQuery)
    return slugs && slugs.length > 0 ? slugs : PRODUCTS.map((p) => p.slug)
  } catch (error) {
    console.error('[Sanity] getProductSlugs failed, using static data:', error)
    return PRODUCTS.map((p) => p.slug)
  }
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  if (!client) return staticGetProductBySlug(slug)
  try {
    const data = await client.fetch<RawProduct | null>(productBySlugQuery, { slug })
    return data ? mapProduct(data) : staticGetProductBySlug(slug)
  } catch (error) {
    console.error('[Sanity] getProductBySlug failed, using static data:', error)
    return staticGetProductBySlug(slug)
  }
}

export async function getRelatedProducts(product: Product, limit = 3): Promise<Product[]> {
  if (!client) return staticGetRelatedProducts(product, limit)
  try {
    const all = await getAllProducts()
    return all
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, limit)
  } catch {
    return staticGetRelatedProducts(product, limit)
  }
}

// ─── Blog ────────────────────────────────────────────────────────────────────

export const postsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    "id": _id,
    "slug": slug.current,
    title,
    excerpt,
    category,
    "author": author->name,
    "authorRole": author->role,
    publishedAt,
    "coverImage": coverImage.asset->url,
    seoKeywords,
    body
  }
`

export const postSlugsQuery = groq`*[_type == "blogPost" && defined(slug.current)].slug.current`

export const postBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    "id": _id,
    "slug": slug.current,
    title,
    excerpt,
    category,
    "author": author->name,
    "authorRole": author->role,
    publishedAt,
    "coverImage": coverImage.asset->url,
    seoKeywords,
    body
  }
`

interface PortableTextChild {
  text?: string
}
interface PortableTextBlock {
  _type?: string
  style?: string
  listItem?: string
  children?: PortableTextChild[]
}

interface RawPost {
  id: string
  slug: string
  title: string
  excerpt?: string
  category?: string
  author?: string
  authorRole?: string
  publishedAt?: string
  coverImage?: string
  seoKeywords?: string[]
  body?: PortableTextBlock[]
}

/** Convert Sanity Portable Text into the article block model used by the renderer. */
function mapPortableText(blocks: PortableTextBlock[] = []): ArticleBlock[] {
  const result: ArticleBlock[] = []
  let listBuffer: { type: 'ul' | 'ol'; items: string[] } | null = null

  const flush = () => {
    if (listBuffer) {
      result.push(listBuffer)
      listBuffer = null
    }
  }

  for (const block of blocks) {
    if (block._type !== 'block') continue
    const text = (block.children ?? []).map((c) => c.text ?? '').join('').trim()
    if (!text) continue

    if (block.listItem === 'bullet' || block.listItem === 'number') {
      const type = block.listItem === 'number' ? 'ol' : 'ul'
      if (!listBuffer || listBuffer.type !== type) {
        flush()
        listBuffer = { type, items: [] }
      }
      listBuffer.items.push(text)
      continue
    }

    flush()
    if (block.style === 'h2' || block.style === 'h3') {
      result.push({ type: block.style, text })
    } else if (block.style === 'blockquote') {
      result.push({ type: 'quote', text })
    } else {
      result.push({ type: 'p', text })
    }
  }
  flush()
  return result
}

function mapPost(raw: RawPost): BlogPost {
  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.title,
    excerpt: raw.excerpt ?? '',
    category: (raw.category as BlogCategorySlug) ?? 'guides',
    author: raw.author ?? 'Wingrip Team',
    authorRole: raw.authorRole,
    publishedAt: raw.publishedAt ?? new Date().toISOString(),
    coverImage: raw.coverImage ?? '',
    seoKeywords: raw.seoKeywords ?? [],
    featured: false,
    body: mapPortableText(raw.body),
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!client) return getAllPostsStatic()
  try {
    const data = await client.fetch<RawPost[]>(postsQuery)
    return data && data.length > 0 ? data.map(mapPost) : getAllPostsStatic()
  } catch (error) {
    console.error('[Sanity] getAllPosts failed, using static data:', error)
    return getAllPostsStatic()
  }
}

export async function getPostSlugs(): Promise<string[]> {
  if (!client) return getAllPostsStatic().map((p) => p.slug)
  try {
    const slugs = await client.fetch<string[]>(postSlugsQuery)
    return slugs && slugs.length > 0 ? slugs : getAllPostsStatic().map((p) => p.slug)
  } catch (error) {
    console.error('[Sanity] getPostSlugs failed, using static data:', error)
    return getAllPostsStatic().map((p) => p.slug)
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  if (!client) return getPostBySlugStatic(slug)
  try {
    const data = await client.fetch<RawPost | null>(postBySlugQuery, { slug })
    return data ? mapPost(data) : getPostBySlugStatic(slug)
  } catch (error) {
    console.error('[Sanity] getPostBySlug failed, using static data:', error)
    return getPostBySlugStatic(slug)
  }
}

export async function getFeaturedPost(): Promise<BlogPost> {
  const all = await getAllPosts()
  return all.find((p) => p.featured) ?? all[0] ?? getFeaturedPostStatic()
}

export async function getRelatedPosts(post: BlogPost, limit = 3): Promise<BlogPost[]> {
  if (!client) return getRelatedPostsStatic(post, limit)
  try {
    const all = await getAllPosts()
    const sorted = all
      .filter((p) => p.id !== post.id)
      .sort((a, b) => {
        const aMatch = a.category === post.category ? 1 : 0
        const bMatch = b.category === post.category ? 1 : 0
        return bMatch - aMatch
      })
    return sorted.slice(0, limit)
  } catch {
    return getRelatedPostsStatic(post, limit)
  }
}
