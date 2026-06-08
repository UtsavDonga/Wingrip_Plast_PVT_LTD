import Script from 'next/script'

/**
 * Google Analytics 4 integration. Renders nothing unless
 * NEXT_PUBLIC_GA_MEASUREMENT_ID is set, so it stays inert in local dev / preview.
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  if (!gaId || gaId.includes('[CLIENT')) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}
