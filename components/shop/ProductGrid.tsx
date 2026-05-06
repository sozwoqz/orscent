'use client'

import { useState } from 'react'
import { PRODUCTS } from '@/lib/products'
import { ProductCard } from './ProductCard'
import { motion } from 'framer-motion'

const SORT_OPTIONS = [
  { value: 'featured',   label: 'Mis en avant' },
  { value: 'price-asc',  label: 'Prix croissant' },
  { value: 'price-desc', label: 'Prix décroissant' },
  { value: 'rating',     label: 'Mieux notés' },
]

export function ProductGrid() {
  const [sort, setSort] = useState('featured')

  const sorted = [...PRODUCTS].sort((a, b) => {
    if (sort === 'price-asc')  return a.price - b.price
    if (sort === 'price-desc') return b.price - a.price
    if (sort === 'rating')     return b.rating - a.rating
    return 0
  })

  return (
    <div>
      {/* Barre de tri */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-os-border">
        <p className="font-body text-sm text-os-muted">
          <span className="text-os-text">{PRODUCTS.length}</span> fragrances
        </p>
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="font-body text-sm text-os-text bg-transparent border border-os-border px-4 py-2 focus:outline-none focus:border-os-gold/50 cursor-pointer"
        >
          {SORT_OPTIONS.map(o => (
            <option key={o.value} value={o.value} style={{ background: '#111' }}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {sorted.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
