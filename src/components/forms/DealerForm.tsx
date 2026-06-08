'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle2, Handshake } from 'lucide-react'
import Button from '@/components/ui/Button'
import { INDIAN_STATES } from '@/lib/constants'
import type { DealerFormData } from '@/types'

const dealerSchema = z.object({
  name: z.string().min(2, 'Full name is required (min 2 characters)'),
  company: z.string().optional(),
  phone: z
    .string()
    .min(10, 'Enter a valid 10-digit mobile number')
    .max(13, 'Enter a valid mobile number')
    .regex(/^[+\d\s-]+$/, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email address'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(1, 'Please select a state'),
  productInterest: z.string().min(1, 'Please select a product line'),
  currentBusiness: z.string().optional(),
  message: z.string().optional(),
})

const PRODUCT_OPTIONS = [
  'CPVC Pipes & Fittings',
  'UPVC Pipes & Fittings',
  'SWR Pipes & Fittings',
  'Agriculture Pipes',
  'Water Tanks',
  'Solvent Cement',
  'Brass Fittings & Valves',
  'Full Product Range',
]

const inputClass = (hasError: boolean) =>
  `w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
    hasError ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
  }`

export default function DealerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DealerFormData>({
    resolver: zodResolver(dealerSchema),
  })

  async function onSubmit(data: DealerFormData) {
    setServerError(null)
    try {
      const res = await fetch('/api/dealer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.message || 'Submission failed. Please try again.')
      }
      setSubmitted(true)
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 size={32} className="text-green-600" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-neutral-dark">Application Received!</h3>
        <p className="max-w-sm text-sm text-gray-600">
          Thank you for your interest in partnering with Wingrip. Our channel team will review your
          application and contact you within 2 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Dealer registration form">
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="dealer-name" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="dealer-name"
            type="text"
            autoComplete="name"
            placeholder="Rajesh Kumar"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'dealer-name-error' : undefined}
            className={inputClass(!!errors.name)}
            {...register('name')}
          />
          {errors.name && (
            <p id="dealer-name-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="dealer-company" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Firm / Company Name
          </label>
          <input
            id="dealer-company"
            type="text"
            autoComplete="organization"
            placeholder="Kumar Hardware & Sanitary"
            className={inputClass(false)}
            {...register('company')}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="dealer-phone" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Mobile Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="dealer-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'dealer-phone-error' : undefined}
            className={inputClass(!!errors.phone)}
            {...register('phone')}
          />
          {errors.phone && (
            <p id="dealer-phone-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="dealer-email" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="dealer-email"
            type="email"
            autoComplete="email"
            placeholder="rajesh@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'dealer-email-error' : undefined}
            className={inputClass(!!errors.email)}
            {...register('email')}
          />
          {errors.email && (
            <p id="dealer-email-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* City */}
        <div>
          <label htmlFor="dealer-city" className="mb-1.5 block text-sm font-semibold text-gray-700">
            City <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="dealer-city"
            type="text"
            autoComplete="address-level2"
            placeholder="Rajkot"
            aria-invalid={!!errors.city}
            aria-describedby={errors.city ? 'dealer-city-error' : undefined}
            className={inputClass(!!errors.city)}
            {...register('city')}
          />
          {errors.city && (
            <p id="dealer-city-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.city.message}
            </p>
          )}
        </div>

        {/* State */}
        <div>
          <label htmlFor="dealer-state" className="mb-1.5 block text-sm font-semibold text-gray-700">
            State <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="dealer-state"
            aria-invalid={!!errors.state}
            aria-describedby={errors.state ? 'dealer-state-error' : undefined}
            className={inputClass(!!errors.state)}
            {...register('state')}
          >
            <option value="">Select State</option>
            {INDIAN_STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.state && (
            <p id="dealer-state-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.state.message}
            </p>
          )}
        </div>

        {/* Product Interest */}
        <div>
          <label htmlFor="dealer-product" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Product Line of Interest <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="dealer-product"
            aria-invalid={!!errors.productInterest}
            aria-describedby={errors.productInterest ? 'dealer-product-error' : undefined}
            className={inputClass(!!errors.productInterest)}
            {...register('productInterest')}
          >
            <option value="">Select Product Line</option>
            {PRODUCT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.productInterest && (
            <p id="dealer-product-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.productInterest.message}
            </p>
          )}
        </div>

        {/* Current Business */}
        <div>
          <label htmlFor="dealer-business" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Current Business Type
          </label>
          <input
            id="dealer-business"
            type="text"
            placeholder="Hardware store, distributor, contractor…"
            className={inputClass(false)}
            {...register('currentBusiness')}
          />
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="dealer-message" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Anything Else We Should Know?
          </label>
          <textarea
            id="dealer-message"
            rows={3}
            placeholder="Territory you cover, years in business, expected monthly volume, etc."
            className={`resize-none ${inputClass(false)}`}
            {...register('message')}
          />
        </div>
      </div>

      {serverError && (
        <div
          className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          {serverError}
        </div>
      )}

      <Button type="submit" size="md" loading={isSubmitting} className="mt-6 w-full">
        {isSubmitting ? (
          <>
            <Send size={16} aria-hidden="true" />
            Submitting…
          </>
        ) : (
          <>
            <Handshake size={16} aria-hidden="true" />
            Apply for Dealership
          </>
        )}
      </Button>

      <p className="mt-3 text-center text-xs text-gray-400">
        Our channel team reviews every application and responds within 2 business days.
      </p>
    </form>
  )
}
