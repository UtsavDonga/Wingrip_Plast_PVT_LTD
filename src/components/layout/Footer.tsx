import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { COMPANY, WHATSAPP_ENQUIRY_URL } from '@/lib/constants'
import { PRODUCT_CATEGORIES } from '@/data/products'
import Logo from '@/components/layout/Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="mb-6 inline-flex rounded-xl bg-white p-3"
              aria-label="Wingrip Plast — Home"
            >
              <Logo className="h-11 w-auto" />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Manufacturer and supplier of CPVC, UPVC, SWR pipes, Agriculture pipes, Water tanks,
              Solvent cement, and Brass fittings. Trusted by dealers, builders, and contractors
              across India since 2013.
            </p>

            {/* Certifications */}
            <div className="mb-6 flex flex-wrap gap-2">
              {['ISI', 'ISO 9001', 'BIS'].map((cert) => (
                <span
                  key={cert}
                  className="rounded-md border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold text-primary-200"
                >
                  {cert}
                </span>
              ))}
            </div>

            {/* Social Icons — only rendered when a URL is configured */}
            <div className="flex gap-3">
              {COMPANY.social.facebook && (
                <SocialLink href={COMPANY.social.facebook} label="Facebook">
                  <Facebook size={16} />
                </SocialLink>
              )}
              {COMPANY.social.instagram && (
                <SocialLink href={COMPANY.social.instagram} label="Instagram">
                  <Instagram size={16} />
                </SocialLink>
              )}
              {COMPANY.social.linkedin && (
                <SocialLink href={COMPANY.social.linkedin} label="LinkedIn">
                  <Linkedin size={16} />
                </SocialLink>
              )}
              {COMPANY.social.youtube && (
                <SocialLink href={COMPANY.social.youtube} label="YouTube">
                  <Youtube size={16} />
                </SocialLink>
              )}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-300">
              Products
            </h3>
            <ul className="flex flex-col gap-3">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-300">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'About Wingrip', href: '/about' },
                { label: 'Why Wingrip', href: '/why-wingrip' },
                { label: 'All Products', href: '/products' },
                { label: 'Blog', href: '/blog' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Become a Dealer', href: '/dealer' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-300">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                  <span>{COMPANY.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                  <address className="not-italic leading-relaxed">
                    {COMPANY.address.line1},<br />
                    {COMPANY.address.line2},<br />
                    {COMPANY.address.city} – {COMPANY.address.pincode},<br />
                    {COMPANY.address.state}, {COMPANY.address.country}
                  </address>
                </div>
              </li>
              <li>
                <a
                  href={WHATSAPP_ENQUIRY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-[#25D366]/10 px-4 py-2.5 text-sm font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/20"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-gray-500 sm:flex-row">
          <p>
            © {currentYear} {COMPANY.name}. All rights reserved. GST: {COMPANY.gst}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Use
            </Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gray-400 transition-all hover:bg-primary hover:text-white"
    >
      {children}
    </a>
  )
}
