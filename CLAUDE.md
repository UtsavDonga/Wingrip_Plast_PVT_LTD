# CLAUDE.md — Wingrip Plast Pvt. Ltd. Website

Guidance for Claude Code (and developers) working in this repository. This file
documents the **full, end-to-end implementation** of the Wingrip Plast marketing
website, built in three phases.

---

## 1. Project Overview

**Client:** Wingrip Plast Pvt. Ltd. — an Indian manufacturer of CPVC, UPVC & SWR
pipes, agriculture pipes, water tanks, solvent cement, and brass fittings.

- **Founded:** 2013
- **Location:** Hapa Industrial Area, Jamnagar, Gujarat – 361120, India
- **Tagline:** "Excellence Is Our Passion"
- **Goal:** A production-ready, SEO-optimized, accessible marketing website that
  serves homeowners, dealers/distributors, builders, and government projects, and
  lets the client edit content via a CMS without touching code.

The site is **content-complete and runs entirely on bundled static data** — Sanity
CMS, Resend email, and Google Analytics are all optional and activate only when
their environment variables are set.

---

## 2. Tech Stack

| Concern | Choice |
|---|---|
| Framework | **Next.js 14** (App Router) — pinned `14.2.35` |
| Language | **TypeScript** (strict mode) |
| UI | **React 18** + **Tailwind CSS v3** (no CSS Modules / styled-components in app code) |
| Animation | **Framer Motion** |
| Forms | **React Hook Form** + **Zod** |
| Email | **Resend** (REST API in a Route Handler) |
| CMS | **Sanity v3** (embedded Studio at `/studio`) — optional, static fallback |
| Icons | **lucide-react** + custom SVGs in `public/images/categories/` |
| SEO | Next Metadata API, JSON-LD, `next-sitemap` |
| Utilities | `clsx` + `tailwind-merge` (`cn()`), `@sanity/image-url` |

> All libraries are free/open-source (MIT). The only paid concerns are an optional
> domain and optional Vercel Pro for commercial hosting.

---

## 3. Commands

```bash
npm install        # install dependencies (use --prefer-offline on flaky networks)
npm run dev        # dev server → http://localhost:3000
npm run build      # production build (also runs next-sitemap via postbuild)
npm start          # serve the production build
npm run lint       # ESLint (next/core-web-vitals + @typescript-eslint)
npm run analyze    # bundle analyzer (ANALYZE=true next build)
```

The project must stay **build- and lint-clean** at all times. After any change:
run `npm run lint && npm run build`.

---

## 4. Environment Variables

All optional — the site works with none of them. Documented in `.env.local.example`.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL (metadata, sitemap, OG, share links, email logo). Defaults to `https://www.wingrippipes.com`. |
| `RESEND_API_KEY` | Enables real enquiry/dealer emails. Without it, submissions are logged and still return success. |
| `ENQUIRY_TO_EMAIL` | Inbox that receives form submissions. |
| `ENQUIRY_FROM_EMAIL` | Verified Resend sender address. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 (`G-XXXX`). Component is inert until set. |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Activates the Sanity-backed data layer. Without it, all data comes from static files. |
| `NEXT_PUBLIC_SANITY_DATASET` | Usually `production`. |
| `NEXT_PUBLIC_SANITY_API_VERSION` | e.g. `2024-01-01`. |
| `SANITY_API_TOKEN` | Server-only; for drafts/authenticated reads. |

**Never** hardcode secrets or commit `.env.local`. Reference `process.env.*` only in
server code.

---

## 5. Architecture & Key Conventions

- **App Router only.** No Pages Router.
- **Route groups:** All public pages live under `src/app/(site)/` with a shared
  `(site)/layout.tsx` (Header, Footer, ScrollProgress, FloatingActions, LocalBusiness
  JSON-LD, skip link) and `(site)/template.tsx` (page-transition animation). The root
  `src/app/layout.tsx` is **minimal** (html/body, fonts, global metadata, GA). This
  split exists so **`/studio` renders full-screen** without site chrome.
- **Data layer with graceful fallback:** `src/lib/queries.ts` fetches from Sanity
  when configured, and **falls back to static data** (`src/data/*.ts`) otherwise.
  Every page works with or without the CMS.
- **Single source of company info:** `src/lib/constants.ts` holds the `COMPANY`
  object (phone, email, address, GST, socials, map URLs). **Never hardcode** phone,
  email, or address in components — import from constants.
- **Types:** All shared types in `src/types/index.ts`. **No `any`.**
- **Images:** Always `next/image`, never `<img>`. Local SVGs use `unoptimized`.
- **Styling:** Tailwind utilities only. Inline `style={{}}` allowed only for truly
  dynamic values (e.g. animation delays, decorative gradients).
- **Imports:** Use `@/` path alias. No deep relative `../../` imports (except the
  studio route importing the root `sanity.config.ts`).
- **Server vs Client:** Prefer React Server Components. Add `'use client'` only for
  hooks, event handlers, or Framer Motion.
- **Accessibility:** WCAG 2.1 AA — labelled forms, `aria-*`, keyboard-navigable,
  descriptive `alt` text, focus-visible outlines.
- **No Lorem Ipsum.** Outstanding client data uses clearly-marked
  `[CLIENT TO PROVIDE: ...]` placeholders.

---

## 6. Directory Structure

```
src/
├── app/
│   ├── layout.tsx                  # ROOT layout: html/body, fonts, global metadata, GA
│   ├── globals.css
│   ├── not-found.tsx               # 404
│   ├── (site)/                     # ── All public pages (shared chrome) ──
│   │   ├── layout.tsx              # Header, Footer, ScrollProgress, FloatingActions, JSON-LD
│   │   ├── template.tsx            # per-route fade/slide transition
│   │   ├── page.tsx                # Homepage
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx        # enquiry form + embedded Google Map
│   │   ├── why-wingrip/page.tsx    # process, quality testing, infrastructure, certs
│   │   ├── gallery/                # page.tsx + GalleryClient.tsx (filterable grid)
│   │   ├── dealer/page.tsx         # dealer program + DealerForm
│   │   ├── blog/                   # page.tsx + BlogClient.tsx + [slug]/page.tsx
│   │   ├── products/               # page.tsx + ProductsClient.tsx + [slug]/page.tsx
│   │   ├── pipes-manufacturer-gujarat/page.tsx        # SEO landing
│   │   ├── cpvc-pipe-manufacturer-jamnagar/page.tsx   # SEO landing
│   │   └── upvc-pipe-supplier-india/page.tsx          # SEO landing
│   ├── api/
│   │   ├── enquiry/route.ts        # contact/quote form → Resend (HTML email)
│   │   └── dealer/route.ts         # dealer application → Resend (HTML email)
│   └── studio/[[...tool]]/         # Sanity Studio (client-only) + layout.tsx
├── components/
│   ├── layout/                     # Header, Footer, Logo, FloatingActions
│   ├── home/                       # Hero, TrustBar, ProductCategories, WhyWingrip,
│   │                               #   AudienceSection, CertificationsStrip, ContactCTA
│   ├── products/ProductCard.tsx
│   ├── blog/                       # ArticleBody, BlogCard, ShareButtons
│   ├── forms/                      # EnquiryForm, DealerForm
│   ├── shared/                     # CatalogueDownload, FAQSection, SeoLanding
│   ├── analytics/GoogleAnalytics.tsx
│   └── ui/                         # Button, Badge, Card, SectionHeading,
│                                   #   AnimatedCounter, Reveal, Stagger, ScrollProgress
├── data/                           # Static content (also the Sanity fallback)
│   ├── products.ts                 # 7 categories + ~20 products + helpers
│   ├── blog.ts                     # 5 full SEO articles (ArticleBlock[]) + helpers
│   ├── gallery.ts                  # gallery items (placeholders)
│   └── faqs.ts                     # HOME_FAQS + PRODUCT_FAQS (by category)
├── lib/
│   ├── constants.ts                # COMPANY, WHATSAPP_ENQUIRY_URL, TRUST_STATS, CERTIFICATIONS, INDIAN_STATES
│   ├── utils.ts                    # cn(), slugify(), formatDate(), readingTime()
│   ├── sanity.ts                   # Sanity client (null when unconfigured) + urlForImage()
│   └── queries.ts                  # GROQ queries + accessors with static fallback
└── types/index.ts                  # All shared TypeScript interfaces

sanity/
├── env.ts                          # projectId/dataset/apiVersion + isSanityConfigured
└── schemas/                        # product, productCategory, certification,
                                    #   galleryImage, blogPost, teamMember + index.ts
sanity.config.ts                    # Studio config (structureTool + visionTool)

public/
├── images/
│   ├── wingrip-logo.png            # brand logo (Header + Footer + email)
│   └── categories/*.svg            # 7 product-category icons
├── robots.txt
└── (sitemap.xml + sitemap-0.xml generated by next-sitemap on build)
```

---

## 7. Phase 1 — Foundation

The marketing core, built first and confirmed before Phase 2.

- **Scaffold & config:** `package.json`, `tsconfig.json` (strict, `@/` alias),
  `tailwind.config.ts` (brand theme), `next.config.mjs`, `postcss.config.mjs`,
  `.eslintrc.json`, `.prettierrc`, `.gitignore`, `.env.local.example`,
  `next-sitemap.config.js`.
- **Design system / UI:** `Button`, `Badge`, `Card`, `SectionHeading`,
  `AnimatedCounter`.
- **Layout:** `Header` (top bar, sticky nav with mega Products dropdown, mobile
  drawer, WhatsApp + Request-a-Quote CTAs) and `Footer` (brand, products, quick
  links, contact, certifications).
- **Homepage sections:** Hero (animated headline + stat counters), TrustBar,
  ProductCategories, WhyWingrip, AudienceSection (Dealers/Builders/Government),
  CertificationsStrip, ContactCTA.
- **Products:** `/products` listing with category filter + `/products/[slug]` detail
  (specs table, sizes, applications, features, sticky enquiry sidebar). Static data
  in `src/data/products.ts` (7 categories, ~20 products).
- **About** (`/about`): company story, 2013→2024 timeline, plant highlights, certs.
- **Contact** (`/contact`): enquiry form + contact cards + map.
- **Enquiry API** (`/api/enquiry`): Zod validation, Resend HTML email, proper status
  codes (400/502/500), graceful logging fallback when no API key.
- **SEO:** Metadata API on all pages, **LocalBusiness** JSON-LD (site-wide),
  **Product** JSON-LD (detail pages), `robots.txt`, `next-sitemap`.

### Phase 1 setup fixes (important)
- Next pinned to **14.2.35** (the original 14.2.5 had a security advisory).
- Config is **`next.config.mjs`**, NOT `.ts` (Next 14 doesn't support TS config).
- `.eslintrc.json` extends only `next/core-web-vitals` and explicitly registers
  `@typescript-eslint` parser + plugin (`next/typescript` is a v15-only config).
- `overrides.postcss: ^8.5.15` clears a build-time advisory in Next's nested postcss.

---

## 8. Phase 2 — Growth (Leads, Brand Depth, Interactivity)

- **Dealer page** (`/dealer`): benefits, 4-step process, trust stats, `DealerForm`
  (RHF + Zod) → `/api/dealer/route.ts` (Resend HTML email).
- **Why Wingrip** (`/why-wingrip`): manufacturing process, in-house quality testing,
  infrastructure facts, certifications deep-dive.
- **Gallery** (`/gallery`): filterable grid (Plant / Products / Dealer Meets /
  Exhibitions), data in `src/data/gallery.ts`, animated client filter.
- **Sanity CMS:** `sanity.config.ts`, 6 schemas (`product`, `productCategory`,
  `certification`, `galleryImage`, `blogPost`, `teamMember`), `src/lib/sanity.ts`
  client, `src/lib/queries.ts` GROQ. Product listing + detail pages fetch from Sanity
  **with static fallback**. Embedded Studio at **`/studio`**.
- **WhatsApp floating button** + back-to-top (`FloatingActions`, all pages).
- **Google Analytics 4** (`GoogleAnalytics.tsx`, `Script` `afterInteractive`).
- **Catalogue download** section (homepage + products page).
- **Interactivity pass (site-wide):** reusable `Reveal` (scroll reveal), `Stagger`
  (StaggerGroup/StaggerItem), `ScrollProgress` (top bar), page transitions via
  `(site)/template.tsx`, animated filter tabs, hover-lift cards, floating gradient
  blobs, extra Tailwind keyframes (float, pulse-ring, shimmer, marquee, gradient-x).
- **Route-group refactor** into `(site)/` (see §5).

### Sanity Studio note (critical)
`/studio` must load **client-only**: `studio/[[...tool]]/page.tsx` is `'use client'`
and uses `next/dynamic(() => import('./Studio'), { ssr: false })`. The inner
`Studio.tsx` (`'use client'`) imports `NextStudio` + the root `sanity.config.ts`.
Loading Studio server-side breaks `next build` with `createContext is not a function`.
`studio/layout.tsx` sets `robots: noindex`.

---

## 9. Phase 3 — SEO + Authority (Content)

- **Blog** (`/blog`, `/blog/[slug]`): featured-post hero, category filter, card grid;
  post page with author, date, **auto reading-time**, related posts, social share
  (WhatsApp/Facebook/LinkedIn/copy), **`Article`** JSON-LD.
- **5 full original SEO articles** (600+ words each) in `src/data/blog.ts` as
  structured `ArticleBlock[]` (no markdown dependency), rendered by
  `components/blog/ArticleBody.tsx`:
  1. CPVC vs UPVC Pipes: Which One Should You Choose?
  2. Complete Guide to SWR Pipe Sizes and Fittings
  3. How to Choose the Right Pipe for Your Home Plumbing
  4. Why ISI-Marked Pipes Matter: Quality You Can Trust
  5. Water Tank Buying Guide for Indian Homes
- **3 SEO landing pages** (each its own route under `(site)/`), all rendering the
  shared `components/shared/SeoLanding.tsx` (reuses `ArticleBody`, emits page-specific
  **LocalBusiness** JSON-LD with `areaServed`, links to product categories):
  - `/pipes-manufacturer-gujarat`
  - `/cpvc-pipe-manufacturer-jamnagar`
  - `/upvc-pipe-supplier-india`
- **FAQ sections** with **`FAQPage`** JSON-LD (`components/shared/FAQSection.tsx`,
  accordion). Data in `src/data/faqs.ts`: `HOME_FAQS` (homepage) and `PRODUCT_FAQS`
  keyed by category (CPVC/UPVC/SWR product pages).
- **Sitemap finalised:** `next-sitemap.config.js` uses a `transform` for per-type
  `priority`/`changefreq`; excludes `/api` and `/studio`. Output includes blog posts
  and landing pages.
- **Page-speed:** all images via `next/image` with correct `sizes`, no `<img>`, no
  render-blocking scripts (GA `afterInteractive`, fonts via `next/font`).

> The blog also includes a dependency-free Portable Text → `ArticleBlock` mapper in
> `queries.ts`, so when Sanity goes live, CMS blog bodies render through the same
> `ArticleBody` component.

---

## 10. Data Model (`src/types/index.ts`)

Key types: `Product`, `ProductSpec`, `ProductCategory`, `ProductCategorySlug` (union
of 7 slugs), `EnquiryFormData`, `DealerFormData`, `GalleryItem`, `GalleryCategorySlug`,
`BlogPost`, `BlogCategorySlug`, `ArticleBlock` (`h2|h3|p|ul|ol|quote|callout`),
`FAQItem`, `Certification`, `TimelineEvent`, `NavItem`.

**The 7 product category slugs:** `cpvc-pipes-fittings`, `upvc-pipes-fittings`,
`swr-pipes-fittings`, `agriculture-pipes`, `water-tanks`, `solvent-cement`,
`brass-fittings-valves`.

---

## 11. Company Constants & Real Data (`src/lib/constants.ts`)

Filled with real client data:

- **Phone:** `+918849009146` (display `+91 88490 09146`)
- **WhatsApp:** `919978479105` (all WhatsApp links derive from `WHATSAPP_ENQUIRY_URL`)
- **Email:** `info@wingrippipes.com` (sales: `sales@wingrippipes.com`)
- **GST:** `24AABCW6076G1Z9` (also `taxID` in LocalBusiness JSON-LD)
- **Address:** Survey No.421, Plot No.26, Opp. Sujata International, B/h Mahindra
  Tractor, Hapa, Jamnagar – 361120, Gujarat, India
- **Instagram:** `https://www.instagram.com/wingrip_plast`
- **Facebook / LinkedIn / YouTube:** empty (`''`) → Footer hides them, JSON-LD
  `sameAs` filters them out. They auto-appear when URLs are added.
- **Map:** `mapEmbedUrl` (address-query `output=embed`, used in the Contact page
  iframe) + `mapLink`.
- **Plant facts:** 44,000 sq. ft., 6 extrusion lines (About + Why Wingrip).

`TRUST_STATS` (11+ yrs, 7 categories, 28+ states, 500+ dealers), `CERTIFICATIONS`
(BIS/ISO/IS 15778/IS 4985/IS 14735), and `INDIAN_STATES` also live here.

---

## 12. SEO Summary

- **Metadata API** on every page (titles, descriptions, canonical, OpenGraph, Twitter).
- **JSON-LD:** LocalBusiness (site-wide + per landing page), Product (product detail),
  Article (blog posts), FAQPage (homepage + CPVC/UPVC/SWR product pages).
- **Sitemap & robots:** generated by `next-sitemap` on `postbuild`; `/api` and
  `/studio` excluded; per-type priority/changefreq.

---

## 13. Deployment (Vercel)

1. Push to GitHub → import into Vercel (framework auto-detected: **Next.js**, root `./`).
2. Leave Build/Output/Install settings at defaults.
3. Add Environment Variables (see §4) — at minimum set `NEXT_PUBLIC_SITE_URL`; add
   the Resend keys for working emails. Sanity/GA vars are optional.
4. Deploy. Then add a custom domain and verify the Resend sender domain (DNS).
5. Post-deploy: submit `sitemap.xml` to Google Search Console; test rich results
   (Product / Article / FAQ / LocalBusiness).

Free hosting alternatives that also work: Netlify, Cloudflare Pages.

---

## 14. Pending Client Inputs

**Text data (drop-in to `constants.ts` / page data):**
- Facebook / LinkedIn / YouTube URLs
- Number of employees, monthly production capacity
- Exact water-tank warranty period (currently "Available on request")
- Exact factory GPS lat/long (to re-add `geo` to LocalBusiness JSON-LD)

**Asset files (upload to `public/…`):**
- Product photos, gallery photos, blog cover images, plant/factory photos
- Catalogue PDF → `public/downloads/wingrip-product-catalogue.pdf`
- OG share image (1200×630) → `public/images/og-image.jpg`

Until provided, these surface as clearly-marked `[CLIENT TO PROVIDE: …]` placeholders
(images) — no Lorem Ipsum, no fabricated business data.

---

## 15. Gotchas / Non-Obvious Notes

- **Flaky-network installs:** use
  `npm install --prefer-offline --no-audit --no-fund --maxsockets=3 --fetch-retries=8`.
- **`next.config.mjs`** (not `.ts`) — Next 14 requirement.
- **Sanity Studio is client-only** (`ssr: false`) — see §8.
- **Local SVGs** use `next/image` with `unoptimized` to avoid the global
  `dangerouslyAllowSVG` flag.
- **`as const` on `COMPANY`** makes empty socials type `''`; conditional rendering and
  `.filter(Boolean)` handle them.
- Keep the project **build- and lint-clean** after every change.
