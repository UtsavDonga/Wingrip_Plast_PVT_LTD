'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { INDIAN_STATES } from '@/lib/constants'
import type { EnquiryFormData } from '@/types'

const enquirySchema = z.object({
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
  productInterest: z.string().min(1, 'Please select a product'),
  message: z.string().min(10, 'Please describe your requirement (min 10 characters)'),
})

const PRODUCT_OPTIONS = [
  'CPVC Pipes & Fittings',
  'UPVC Pipes & Fittings',
  'SWR Pipes & Fittings',
  'Agriculture Pipes',
  'Water Tanks',
  'Solvent Cement',
  'Brass Fittings & Valves',
  'Multiple Products / Full Range',
]

interface EnquiryFormProps {
  productName?: string
  compact?: boolean
}

export default function EnquiryForm({ productName, compact = false }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      productInterest: productName || '',
    },
  })

  async function onSubmit(data: EnquiryFormData) {
    setServerError(null)
    try {
      const res = await fetch('/api/enquiry', {
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
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 size={32} className="text-green-600" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-neutral-dark">Enquiry Submitted!</h3>
        <p className="text-sm text-gray-600">
          Thank you for contacting Wingrip. Our team will get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Product enquiry form">
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
        {/* Name */}
        <div className={compact ? '' : 'sm:col-span-1'}>
          <label htmlFor="enquiry-name" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="enquiry-name"
            type="text"
            autoComplete="name"
            placeholder="Rajesh Kumar"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
              errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
            }`}
            {...register('name')}
          />
          {errors.name && (
            <p id="enquiry-name-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="enquiry-company" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Company / Organisation
          </label>
          <input
            id="enquiry-company"
            type="text"
            autoComplete="organization"
            placeholder="ABC Builders Pvt. Ltd."
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            {...register('company')}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="enquiry-phone" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Mobile Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'enquiry-phone-error' : undefined}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
              errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
            }`}
            {...register('phone')}
          />
          {errors.phone && (
            <p id="enquiry-phone-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="enquiry-email" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="enquiry-email"
            type="email"
            autoComplete="email"
            placeholder="rajesh@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'enquiry-email-error' : undefined}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
              errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
            }`}
            {...register('email')}
          />
          {errors.email && (
            <p id="enquiry-email-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* City */}
        <div>
          <label htmlFor="enquiry-city" className="mb-1.5 block text-sm font-semibold text-gray-700">
            City <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="enquiry-city"
            type="text"
            autoComplete="address-level2"
            placeholder="Ahmedabad"
            aria-invalid={!!errors.city}
            aria-describedby={errors.city ? 'enquiry-city-error' : undefined}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
              errors.city ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
            }`}
            {...register('city')}
          />
          {errors.city && (
            <p id="enquiry-city-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.city.message}
            </p>
          )}
        </div>

        {/* State */}
        <div>
          <label htmlFor="enquiry-state" className="mb-1.5 block text-sm font-semibold text-gray-700">
            State <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="enquiry-state"
            aria-invalid={!!errors.state}
            aria-describedby={errors.state ? 'enquiry-state-error' : undefined}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
              errors.state ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
            }`}
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
            <p id="enquiry-state-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.state.message}
            </p>
          )}
        </div>

        {/* Product Interest */}
        <div className={compact ? '' : 'sm:col-span-2'}>
          <label
            htmlFor="enquiry-product"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Product Interest <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="enquiry-product"
            aria-invalid={!!errors.productInterest}
            aria-describedby={errors.productInterest ? 'enquiry-product-error' : undefined}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
              errors.productInterest ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
            }`}
            {...register('productInterest')}
          >
            <option value="">Select Product Category</option>
            {PRODUCT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.productInterest && (
            <p id="enquiry-product-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.productInterest.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className={compact ? '' : 'sm:col-span-2'}>
          <label
            htmlFor="enquiry-message"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Your Requirement <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="enquiry-message"
            rows={compact ? 3 : 4}
            placeholder="Please describe your requirement — quantities, sizes, project type, or any specific questions."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
            className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
              errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
            }`}
            {...register('message')}
          />
          {errors.message && (
            <p id="enquiry-message-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.message.message}
            </p>
          )}
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

      <Button
        type="submit"
        size="md"
        loading={isSubmitting}
        className="mt-6 w-full"
        aria-label="Submit enquiry"
      >
        <Send size={16} aria-hidden="true" />
        {isSubmitting ? 'Sending...' : 'Send Enquiry'}
      </Button>

      <p className="mt-3 text-center text-xs text-gray-400">
        We will respond within 1 business day. Your information is never shared with third parties.
      </p>
    </form>
  )
}
