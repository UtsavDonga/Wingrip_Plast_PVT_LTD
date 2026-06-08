'use client'

import { cn } from '@/lib/utils'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'whatsapp'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed',
          {
            'bg-accent text-white hover:bg-accent-600 focus-visible:ring-accent shadow-md hover:shadow-lg active:scale-[0.98]':
              variant === 'primary',
            'border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary':
              variant === 'outline',
            'text-primary hover:bg-primary/10 focus-visible:ring-primary': variant === 'ghost',
            'bg-[#25D366] text-white hover:bg-[#20BC5A] focus-visible:ring-[#25D366]':
              variant === 'whatsapp',
          },
          {
            'text-sm px-4 py-2': size === 'sm',
            'text-base px-6 py-3': size === 'md',
            'text-lg px-8 py-4': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {loading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
