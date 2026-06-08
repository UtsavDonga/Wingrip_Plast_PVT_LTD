import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react'
import EnquiryForm from '@/components/forms/EnquiryForm'
import Reveal from '@/components/ui/Reveal'
import { COMPANY, WHATSAPP_ENQUIRY_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us — Get a Quote for Pipes & Fittings | Wingrip Plast',
  description:
    'Contact Wingrip Plast Pvt. Ltd. for CPVC, UPVC & SWR pipe enquiries. Call, email, or WhatsApp. Located in Hapa, Jamnagar, Gujarat. Response within 1 business day.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Wingrip Plast — Request a Quote',
    description: 'Get in touch for pipe and fitting enquiries. Jamnagar, Gujarat. Response within 1 business day.',
    url: '/contact',
  },
}

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: 'Phone',
    value: COMPANY.phoneDisplay,
    href: `tel:${COMPANY.phone}`,
    detail: 'Monday – Saturday, 9:00 AM – 6:00 PM IST',
  },
  {
    icon: Mail,
    label: 'Email',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    detail: 'We respond within 1 business day',
  },
  {
    icon: MapPin,
    label: 'Factory Address',
    value: COMPANY.address.full,
    href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address.full)}`,
    detail: 'Visits by appointment only',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 6:00 PM',
    href: null,
    detail: 'Closed on national holidays',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <nav className="mb-4 flex items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="mb-3 text-3xl font-black md:text-4xl">Get in Touch</h1>
          <p className="max-w-xl text-lg text-white/80">
            We are ready to help with your pipe and fitting requirements. Fill in the enquiry form
            or reach us directly — whatever suits you best.
          </p>
        </div>
      </section>

      <section className="bg-neutral-light py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Contact Details Column */}
            <div className="flex flex-col gap-6">
              {/* Contact Cards */}
              {CONTACT_DETAILS.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-gray-400">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-semibold text-neutral-dark hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-neutral-dark">{item.value}</span>
                      )}
                      <p className="mt-0.5 text-xs text-gray-500">{item.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_ENQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-6 transition-all hover:border-[#25D366]/60 hover:bg-[#25D366]/10"
                aria-label="Chat with Wingrip on WhatsApp"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#25D366]/20">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#25D366]" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-dark">Chat on WhatsApp</div>
                  <div className="text-xs text-gray-500">Fastest way to get a response</div>
                </div>
              </a>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-card">
                <h2 className="mb-2 text-2xl font-bold text-neutral-dark">Send an Enquiry</h2>
                <p className="mb-8 text-sm text-gray-500">
                  Tell us what you need — products, quantities, project type — and our team will
                  respond with pricing and availability within one business day.
                </p>
                <EnquiryForm />
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-12">
            <h2 className="mb-6 text-xl font-bold text-neutral-dark">Our Location</h2>
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-card">
              <div className="flex h-72 w-full items-center justify-center bg-neutral-light">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto mb-2 text-primary" aria-hidden="true" />
                  <p className="text-sm font-semibold text-gray-600">
                    {COMPANY.address.full}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-lg border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
                  >
                    Open in Google Maps
                  </a>
                  <p className="mt-3 text-xs text-gray-400 italic">
                    [CLIENT TO PROVIDE: Google Maps embed URL for exact factory location]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
