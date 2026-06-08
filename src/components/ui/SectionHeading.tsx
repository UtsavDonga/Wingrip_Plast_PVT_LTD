import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', align === 'center' ? 'text-center' : 'text-left', className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      )}
      <h2
        className={cn(
          'text-3xl font-bold text-neutral-dark md:text-4xl',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg text-gray-600',
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
