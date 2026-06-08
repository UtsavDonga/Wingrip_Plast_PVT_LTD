import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Download, CheckCircle2, Phone } from 'lucide-react'
import { getProductBySlug, getRelatedProducts, getProductSlugs } from '@/lib/queries'
import EnquiryForm from '@/components/forms/EnquiryForm'
import ProductCard from '@/components/products/ProductCard'
import Badge from '@/components/ui/Badge'
import Reveal from '@/components/ui/Reveal'
import FAQSection from '@/components/shared/FAQSection'
import { PRODUCT_FAQS } from '@/data/faqs'
import { COMPANY, WHATSAPP_ENQUIRY_URL } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getProductSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return { title: 'Product Not Found' }

  const description = `${product.name} by Wingrip Plast — ${product.tagline}. ${product.standard ? `${product.standard} compliant.` : ''} Available sizes: ${product.sizes.slice(0, 4).join(', ')}. ISI marked. Request a quote from Jamnagar, Gujarat.`

  return {
    title: `${product.name} — ${product.categoryName}`,
    description: description.slice(0, 160),
    openGraph: {
      title: `${product.name} | Wingrip Plast — ${product.categoryName}`,
      description: product.tagline,
      url: `/products/${slug}`,
    },
    alternates: {
      canonical: `/products/${slug}`,
    },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) notFound()

  const relatedProducts = await getRelatedProducts(product, 3)
  const categoryFaqs = PRODUCT_FAQS[product.category]

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: { '@type': 'Brand', name: 'Wingrip' },
    manufacturer: {
      '@type': 'Organization',
      name: 'Wingrip Plast Pvt. Ltd.',
    },
    category: product.categoryName,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav
        className="border-b border-gray-100 bg-neutral-light py-3"
        aria-label="Breadcrumb"
      >
        <div className="container mx-auto px-4">
          <ol className="flex flex-wrap items-center gap-1 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight size={13} className="text-gray-400" /></li>
            <li>
              <Link href="/products" className="text-gray-500 hover:text-primary transition-colors">
                Products
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight size={13} className="text-gray-400" /></li>
            <li>
              <Link
                href={`/products?category=${product.category}`}
                className="text-gray-500 hover:text-primary transition-colors"
              >
                {product.categoryName}
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight size={13} className="text-gray-400" /></li>
            <li>
              <span className="font-semibold text-neutral-dark" aria-current="page">
                {product.name}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Product Header */}
            <Reveal className="mb-8">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <Badge variant="primary">{product.categoryName}</Badge>
                {product.featured && <Badge variant="accent">Popular Choice</Badge>}
                {product.standard && <Badge variant="default">{product.standard}</Badge>}
              </div>
              <h1 className="mb-3 text-3xl font-black text-neutral-dark md:text-4xl">
                {product.name}
              </h1>
              <p className="text-xl font-medium text-gray-600">{product.tagline}</p>
            </Reveal>

            {/* Product Image */}
            <Reveal delay={0.1} className="mb-8 flex h-72 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-light to-primary/5">
              <span className="text-sm text-gray-400 italic">
                [CLIENT TO PROVIDE: Product image for {product.name}]
              </span>
            </Reveal>

            {/* Description */}
            <div className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-neutral-dark">Product Overview</h2>
              <p className="leading-relaxed text-gray-600">{product.description}</p>
            </div>

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-10">
                <h2 className="mb-5 text-xl font-bold text-neutral-dark">Key Features</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 flex-shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications */}
            <div className="mb-10">
              <h2 className="mb-5 text-xl font-bold text-neutral-dark">
                Technical Specifications
              </h2>
              <div className="overflow-hidden rounded-xl border border-gray-100">
                <table className="w-full text-sm" aria-label={`Technical specifications for ${product.name}`}>
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="px-5 py-3 text-left font-semibold text-primary" scope="col">
                        Parameter
                      </th>
                      <th className="px-5 py-3 text-left font-semibold text-primary" scope="col">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr
                        key={spec.label}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      >
                        <td className="px-5 py-3 font-medium text-gray-700">{spec.label}</td>
                        <td className="px-5 py-3 text-gray-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Available Sizes */}
            <div className="mb-10">
              <h2 className="mb-5 text-xl font-bold text-neutral-dark">Available Sizes</h2>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Available sizes">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    role="listitem"
                    className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="mb-10">
              <h2 className="mb-5 text-xl font-bold text-neutral-dark">Applications</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gray-700">{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fittings (if applicable) */}
            {product.fittings && product.fittings.length > 0 && (
              <div className="mb-10">
                <h2 className="mb-5 text-xl font-bold text-neutral-dark">Available Fittings</h2>
                <div className="flex flex-wrap gap-2">
                  {product.fittings.map((fitting) => (
                    <span
                      key={fitting}
                      className="rounded-lg border border-gray-200 bg-neutral-light px-3 py-1.5 text-sm text-gray-600"
                    >
                      {fitting}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Enquiry Form */}
              <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                <h2 className="mb-1 text-lg font-bold text-neutral-dark">Request a Quote</h2>
                <p className="mb-6 text-sm text-gray-500">
                  Get pricing and availability for {product.name}. Our team responds within 1
                  business day.
                </p>
                <EnquiryForm productName={product.categoryName} compact />
              </div>

              {/* Quick Contact */}
              <div className="rounded-2xl border border-primary/10 bg-primary/5 p-6">
                <h3 className="mb-4 text-sm font-bold text-neutral-dark">Prefer to Call?</h3>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="mb-3 flex items-center gap-3 text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  <Phone size={16} aria-hidden="true" />
                  {COMPANY.phoneDisplay}
                </a>
                <a
                  href={WHATSAPP_ENQUIRY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#20BC5A]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Download */}
              <div className="mt-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                <a
                  href={COMPANY.cataloguePdf}
                  download
                  className="flex items-center gap-3 text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
                >
                  <Download size={18} className="flex-shrink-0 text-primary" aria-hidden="true" />
                  Download Full Product Catalogue
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 border-t border-gray-100 pt-16" aria-labelledby="related-products-heading">
            <h2 id="related-products-heading" className="mb-8 text-2xl font-bold text-neutral-dark">
              More in {product.categoryName}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Category FAQ */}
      {categoryFaqs && categoryFaqs.length > 0 && (
        <FAQSection
          items={categoryFaqs}
          title={`${product.categoryName} — FAQ`}
          subtitle={`Common questions about Wingrip ${product.categoryName.toLowerCase()}.`}
        />
      )}
    </>
  )
}
