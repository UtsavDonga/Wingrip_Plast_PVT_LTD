'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Shield, Star, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import { COMPANY, TRUST_STATS } from '@/lib/constants'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20 text-white lg:py-28">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-600/30"
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm"
          >
            <MapPin size={14} className="text-accent" />
            Manufacturing Excellence from Jamnagar, Gujarat — Since 2013
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl"
          >
            CPVC, UPVC &amp; SWR Pipe{' '}
            <span className="text-accent">Manufacturer</span> in Jamnagar,
            Gujarat
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg leading-relaxed text-white/80 md:text-xl"
          >
            ISI-marked pipes and fittings trusted by 500+ dealers, builders, and contractors
            across India. BIS certified. Supplying all 28 states. Built to last decades.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: Shield, text: 'ISI Marked' },
              { icon: Star, text: 'ISO 9001 Certified' },
              { icon: Shield, text: 'BIS Certified' },
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold"
              >
                <Icon size={12} className="text-accent" />
                {text}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" onClick={() => (window.location.href = '/contact')}>
              Request a Quote
              <ArrowRight size={18} />
            </Button>
            <a
              href={COMPANY.cataloguePdf}
              className="flex items-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              download
            >
              <Download size={18} />
              Download Catalogue
            </a>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:grid-cols-4"
          role="list"
          aria-label="Key statistics"
        >
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="text-center" role="listitem">
              <div className="text-3xl font-black text-accent md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-sm font-medium text-white/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
