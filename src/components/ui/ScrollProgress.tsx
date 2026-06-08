'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin gradient bar fixed to the top that fills as the user scrolls the page. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-primary via-primary-400 to-accent"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
