import Image from 'next/image'
import { COMPANY } from '@/lib/constants'

interface LogoProps {
  className?: string
  priority?: boolean
}

/**
 * Wingrip brand logo. Source file lives at /public/images/wingrip-logo.png.
 * Width/height are the intrinsic ratio; display size is controlled via className
 * (e.g. `h-10 w-auto`).
 */
export default function Logo({ className = 'h-10 w-auto', priority = false }: LogoProps) {
  return (
    <Image
      src="/images/wingrip-logo.png"
      alt={`${COMPANY.name} — ${COMPANY.tagline}`}
      width={300}
      height={120}
      priority={priority}
      className={className}
    />
  )
}
