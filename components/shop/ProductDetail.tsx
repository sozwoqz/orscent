'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ShoppingBag, Heart, Share2 } from 'lucide-react'
import type { Product } from '@/lib/products'
import { useCart } from '@/lib/cart'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export function ProductDetail({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)
  const { addItem } = useCart()

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addItem(product)
    toast.success(`${product.name} ajouté au panier`, { icon: '✦' })
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Images */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative aspect-square overflow-hidden"
            style={{ background: 'var(--os-surface)' }}
          >
            <Image
              src={product.images[activeImg] || product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-20 h-20 overflow-hidden border transition-all ${
                    activeImg === i ? 'border-os-gold' : 'border-os-border hover:border-os-gold/40'
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Infos */}
        <div className="py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="section-eyebrow mb-2">{product.brand}</p>
            <h1 className="font-display text-4xl md:text-5xl font-light text-os-text mb-2">
              {product.name}
            </h1>
            <p className="font-body text-sm text-os-muted mb-5">{product.collection} · {product.size}</p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14}
                    fill={i < Math.floor(product.rating) ? 'var(--os-gold)' : 'transparent'}
                    stroke={i < Math.floor(product.rating) ? 'var(--os-gold)' : 'var(--os-muted)'}
                  />
                ))}
              </div>
              <span className="font-display text-lg text-os-gold">{product.rating}</span>
              <span className="font-body text-sm text-os-muted">({product.reviews} avis)</span>
            </div>

            {/* Prix */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-display text-4xl text-os-gold">{product.price.toFixed(2)} €</span>
              {product.originalPrice && (
                <span className="font-body text-lg text-os-muted line-through">{product.originalPrice.toFixed(2)} €</span>
              )}
            </div>

            {/* Description */}
            <p className="font-body text-sm text-os-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Notes olfactives */}
            <div className="glass-card p-6 mb-8">
              <p className="section-eyebrow mb-5">Pyramide Olfactive</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Tête', notes: product.notes.top,   color: 'var(--os-gold-light)' },
                  { label: 'Cœur', notes: product.notes.heart, color: 'var(--os-gold)' },
                  { label: 'Fond', notes: product.notes.base,  color: 'var(--os-gold-dark)' },
                ].map(tier => (
                  <div key={tier.label}>
                    <p className="font-accent text-[10px] tracking-wider mb-2" style={{ color: tier.color }}>
                      {tier.label}
                    </p>
                    <ul className="space-y-1">
                      {tier.notes.map(note => (
                        <li key={note} className="font-body text-xs text-os-muted">{note}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Qty + Add to cart */}
            <div className="flex gap-3 mb-4">
              <div className="flex items-center border border-os-border">
                <button onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-4 py-3 text-os-muted hover:text-os-text transition-colors font-body">
                  −
                </button>
                <span className="px-4 font-body text-sm text-os-text w-10 text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)}
                  className="px-4 py-3 text-os-muted hover:text-os-text transition-colors font-body">
                  +
                </button>
              </div>
              <button onClick={handleAdd} className="btn-gold flex-1 flex items-center justify-center gap-3">
                <ShoppingBag size={16} />
                <span>Ajouter au panier</span>
              </button>
            </div>

            <div className="flex gap-3">
              <button className="btn-outline flex-1 flex items-center justify-center gap-2 text-xs">
                <Heart size={14} />
                <span>Liste de souhaits</span>
              </button>
              <button className="btn-outline px-4">
                <Share2 size={14} />
              </button>
            </div>

            {/* Garanties */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-os-border">
              {[
                { icon: '◈', text: 'Livraison rapide' },
                { icon: '◇', text: 'Produit authentique' },
                { icon: '◉', text: 'Retours 30j' },
              ].map((g, i) => (
                <div key={i} className="text-center">
                  <span className="text-os-gold text-lg block mb-1">{g.icon}</span>
                  <p className="font-body text-xs text-os-muted">{g.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
