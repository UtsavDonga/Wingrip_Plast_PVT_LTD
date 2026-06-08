/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wingrippipes.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/studio/'] },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/api/*', '/studio/*', '/studio'],
  // Per-page-type priority and changefreq for better crawl signals.
  transform: async (config, path) => {
    const rule = (() => {
      if (path === '/') return { priority: 1.0, changefreq: 'weekly' }
      if (path === '/products' || path.startsWith('/products/'))
        return { priority: 0.9, changefreq: 'weekly' }
      // SEO landing pages
      if (
        path === '/pipes-manufacturer-gujarat' ||
        path === '/cpvc-pipe-manufacturer-jamnagar' ||
        path === '/upvc-pipe-supplier-india'
      )
        return { priority: 0.9, changefreq: 'monthly' }
      if (path === '/blog') return { priority: 0.8, changefreq: 'daily' }
      if (path.startsWith('/blog/')) return { priority: 0.7, changefreq: 'monthly' }
      if (path === '/dealer' || path === '/contact') return { priority: 0.8, changefreq: 'monthly' }
      return { priority: 0.6, changefreq: 'monthly' }
    })()

    return {
      loc: path,
      changefreq: rule.changefreq,
      priority: rule.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
