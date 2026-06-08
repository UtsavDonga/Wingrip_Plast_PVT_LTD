'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface StaggerProps {
  children: ReactNode
  className?: string
  /** Delay between each child animating in. */
  stagger?: number
  once?: boolean
}

const containerVariants = (stagger: number): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
})

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Wrap a grid/list to animate children in sequence as they scroll into view. */
export function StaggerGroup({ children, className, stagger = 0.1, once = true }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
    >
      {children}
    </motion.div>
  )
}

/** A single child inside StaggerGroup. */
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
