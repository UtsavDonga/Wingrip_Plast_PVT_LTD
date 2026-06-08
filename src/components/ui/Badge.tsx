import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'accent' | 'success' | 'outline'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold',
        {
          'bg-neutral-light text-neutral-dark': variant === 'default',
          'bg-primary/10 text-primary': variant === 'primary',
          'bg-accent/10 text-accent': variant === 'accent',
          'bg-green-100 text-green-700': variant === 'success',
          'border border-primary text-primary': variant === 'outline',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
