import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ArticleBlock } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function formatPhoneForTel(phone: string): string {
  return phone.replace(/\s+/g, '')
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** Estimate reading time in minutes from article blocks (~200 words/min). */
export function readingTime(blocks: ArticleBlock[]): number {
  const words = blocks.reduce((total, block) => {
    if ('text' in block) return total + block.text.split(/\s+/).length
    if ('items' in block) return total + block.items.join(' ').split(/\s+/).length
    return total
  }, 0)
  return Math.max(1, Math.round(words / 200))
}
