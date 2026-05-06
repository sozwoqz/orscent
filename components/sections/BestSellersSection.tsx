'use client'

import { motion } from 'framer-motion'
import { PRODUCTS } from '@/lib/products'
import { ProductCard } from '@/components/shop/ProductCard'
import Link from 'next/link'

export function BestSellersSection() {
  const bestsellers = PRODUCTS.filter(p => p.badge === 'bestseller')
    .concat(PRODUCTS.filter(p => p.badge === 'new').slice(0, 2))
    .slice(0, 4)

  return (
    <section id="bestsellers" className="py-24 px-6" style={{ background: 'var(--os-black)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-eyebrow mb-4"
          >
            Nos Incontournables
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-light text-os-text"
          >
            Best-Sellers
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/shop" className="btn-outline inline-block">
            <span>Voir toute la boutique</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
