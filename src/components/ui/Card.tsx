import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-gray-100 bg-white shadow-card',
        hover && 'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('px-6 pt-6 pb-4', className)}>{children}</div>
}

export function CardBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('px-6 pb-6', className)}>{children}</div>
}
