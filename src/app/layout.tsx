import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { COMPANY } from '@/lib/constants'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wingrippipes.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY.name} — CPVC, UPVC & SWR Pipe Manufacturer in Jamnagar`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    'Wingrip Plast Pvt. Ltd. — ISI-marked CPVC, UPVC, SWR pipe manufacturer in Jamnagar, Gujarat. Supplying dealers, builders, and government projects across India since 2013. BIS certified.',
  keywords: [
    'CPVC pipe manufacturer Jamnagar',
    'UPVC pipe supplier Gujarat',
    'SWR pipe manufacturer India',
    'pipe manufacturer Jamnagar',
    'agriculture pipe Gujarat',
    'water tank manufacturer',
    'brass fittings supplier India',
    'ISI marked pipes',
    'BIS certified pipes',
    'Wingrip Plast',
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: COMPANY.name,
    title: `${COMPANY.name} — CPVC, UPVC & SWR Pipe Manufacturer in Jamnagar`,
    description:
      'ISI-marked CPVC, UPVC, SWR pipe manufacturer in Jamnagar, Gujarat. Supplying across India since 2013.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} — Pipe Manufacturer Jamnagar`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} — CPVC, UPVC & SWR Pipe Manufacturer`,
    description: 'ISI-marked pipes and fittings from Jamnagar, Gujarat. Supplying across India since 2013.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
