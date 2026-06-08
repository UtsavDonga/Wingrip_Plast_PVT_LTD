export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategorySlug
  categoryName: string
  tagline: string
  description: string
  applications: string[]
  specifications: ProductSpec[]
  sizes: string[]
  fittings?: string[]
  standard?: string
  features?: string[]
  image: string
  featured: boolean
}

export interface ProductSpec {
  label: string
  value: string
}

export type ProductCategorySlug =
  | 'cpvc-pipes-fittings'
  | 'upvc-pipes-fittings'
  | 'swr-pipes-fittings'
  | 'agriculture-pipes'
  | 'water-tanks'
  | 'solvent-cement'
  | 'brass-fittings-valves'

export interface ProductCategory {
  slug: ProductCategorySlug
  name: string
  shortDescription: string
  description: string
  icon: string
  color: string
  productCount: number
}

export interface EnquiryFormData {
  name: string
  company?: string
  phone: string
  email: string
  city: string
  state: string
  productInterest: string
  message: string
}

export interface DealerFormData {
  name: string
  company?: string
  phone: string
  email: string
  city: string
  state: string
  productInterest: string
  currentBusiness?: string
  message?: string
}

export type ArticleBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'callout'; text: string }

export type BlogCategorySlug = 'guides' | 'industry-news' | 'product-updates' | 'company'

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category: BlogCategorySlug
  author: string
  authorRole?: string
  publishedAt: string
  coverImage: string
  seoKeywords: string[]
  featured: boolean
  body: ArticleBlock[]
}

export interface FAQItem {
  question: string
  answer: string
}

export type GalleryCategorySlug = 'plant' | 'products' | 'dealer-meets' | 'exhibitions'

export interface GalleryItem {
  id: string
  title: string
  caption?: string
  category: GalleryCategorySlug
  image: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface Certification {
  name: string
  issuer: string
  description: string
  badge?: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
}
