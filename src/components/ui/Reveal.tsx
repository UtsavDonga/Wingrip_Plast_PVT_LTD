'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface RevealProps {
  children: ReactNode
  /** Animation direction the element travels from. */
  direction?: Direction
  /** Delay in seconds before the animation starts. */
  delay?: number
  /** Travel distance in pixels. */
  distance?: number
  /** Render as a different element wrapper. Defaults to div. */
  className?: string
  /** Animate only once (default) or every time it enters the viewport. */
  once?: boolean
}

const offset = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up':
      return { y: distance }
    case 'down':
      return { y: -distance }
    case 'left':
      return { x: distance }
    case 'right':
      return { x: -distance }
    default:
      return {}
  }
}

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  distance = 28,
  className,
  once = true,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offset(direction, distance) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
