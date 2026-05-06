'use client'

import { motion } from 'framer-motion'

export function ShopHeader() {
  return (
    <div className="py-20 px-6 text-center relative"
      style={{
        background: 'linear-gradient(to bottom, rgba(201,169,110,0.04) 0%, transparent 100%)',
        borderBottom: '1px solid var(--os-border)',
      }}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="section-eyebrow mb-4"
      >
        Tous nos Parfums
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-5xl md:text-6xl font-light text-os-text"
      >
        La <span className="italic text-gold-shimmer">Boutique</span>
      </motion.h1>
    </div>
  )
}
