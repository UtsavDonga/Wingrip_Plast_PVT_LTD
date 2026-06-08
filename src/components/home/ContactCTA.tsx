'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { COMPANY, WHATSAPP_ENQUIRY_URL } from '@/lib/constants'

export default function ContactCTA() {
  return (
    <section className="bg-primary py-20 text-white" aria-labelledby="contact-cta-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Get in Touch
            </p>
            <h2
              id="contact-cta-heading"
              className="mb-4 text-3xl font-black md:text-4xl"
            >
              Ready to Work with Wingrip?
            </h2>
            <p className="mx-auto max-w-xl text-lg text-white/80">
              Whether you need a price quote, technical specifications, or want to explore a
              dealer arrangement — our team is ready to respond within one business day.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* Call */}
            <a
              href={`tel:${COMPANY.phone}`}
              className="group flex flex-col items-center rounded-2xl border border-white/20 bg-white/10 p-8 text-center transition-all hover:border-white/40 hover:bg-white/20"
              aria-label={`Call Wingrip at ${COMPANY.phoneDisplay}`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 group-hover:bg-white/30 transition-colors">
                <Phone size={24} aria-hidden="true" />
              </div>
              <div className="mb-1 text-sm font-semibold text-white/70">Call Us</div>
              <div className="font-bold">{COMPANY.phoneDisplay}</div>
              <div className="mt-2 text-xs text-white/60">Mon–Sat, 9am–6pm IST</div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${COMPANY.email}`}
              className="group flex flex-col items-center rounded-2xl border border-white/20 bg-white/10 p-8 text-center transition-all hover:border-white/40 hover:bg-white/20"
              aria-label={`Email Wingrip at ${COMPANY.email}`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 group-hover:bg-white/30 transition-colors">
                <Mail size={24} aria-hidden="true" />
              </div>
              <div className="mb-1 text-sm font-semibold text-white/70">Email Us</div>
              <div className="font-bold text-sm break-all">{COMPANY.email}</div>
              <div className="mt-2 text-xs text-white/60">We reply within 24 hours</div>
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_ENQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 p-8 text-center transition-all hover:border-[#25D366] hover:bg-[#25D366]/20"
              aria-label="Chat with Wingrip on WhatsApp"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366]/20 group-hover:bg-[#25D366]/40 transition-colors">
                <MessageCircle size={24} aria-hidden="true" />
              </div>
              <div className="mb-1 text-sm font-semibold text-white/70">WhatsApp</div>
              <div className="font-bold">Chat Instantly</div>
              <div className="mt-2 text-xs text-white/60">Quickest response</div>
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => (window.location.href = '/contact')}
            >
              Send an Enquiry
              <ArrowRight size={18} />
            </Button>
            <Link
              href="/contact"
              className="text-sm font-semibold text-white/80 underline-offset-2 hover:text-white hover:underline"
            >
              Or fill out our detailed enquiry form →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
