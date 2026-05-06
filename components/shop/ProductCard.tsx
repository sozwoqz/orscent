'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, Star } from 'lucide-react'
import type { Product } from '@/lib/products'
import { useCart } from '@/lib/cart'
import toast from 'react-hot-toast'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product)
    toast.success(`${product.name} ajouté au panier`, { icon: '✦' })
  }

  const BADGE_STYLES: Record<string, string> = {
    bestseller: 'bg-os-gold text-os-black',
    new:        'bg-os-amethyst text-white',
    exclusive:  'bg-os-surface text-os-gold border border-os-gold/30',
  }

  const BADGE_LABELS: Record<string, string> = {
    bestseller: 'Best-seller',
    new:        'Nouveau',
    exclusive:  'Exclusif',
  }

  return (
    <Link href={`/shop/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden aspect-[3/4] mb-4"
        style={{ background: 'var(--os-surface)' }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-3 left-3 px-2.5 py-1 font-accent text-[9px] tracking-widest uppercase ${BADGE_STYLES[product.badge]}`}>
            {BADGE_LABELS[product.badge]}
          </div>
        )}

        {/* Overlay add to cart */}
        <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }}>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-5 py-2.5 font-body text-xs tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
            style={{ background: 'var(--os-gold)', color: '#080808' }}
          >
            <ShoppingBag size={13} />
            Ajouter
          </button>
        </div>
      </div>

      {/* Infos */}
      <div>
        <p className="font-accent text-[10px] tracking-widest text-os-gold mb-1">{product.brand}</p>
        <h3 className="font-display text-lg text-os-text group-hover:text-gold-shimmer transition-colors mb-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={10}
                fill={i < Math.floor(product.rating) ? 'var(--os-gold)' : 'transparent'}
                stroke={i < Math.floor(product.rating) ? 'var(--os-gold)' : 'var(--os-muted)'}
              />
            ))}
          </div>
          <span className="font-body text-[11px] text-os-muted">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-display text-xl text-os-gold">{product.price.toFixed(2)} €</span>
          {product.originalPrice && (
            <span className="font-body text-sm text-os-muted line-through">{product.originalPrice.toFixed(2)} €</span>
          )}
          <span className="font-body text-xs text-os-muted ml-1">{product.size}</span>
        </div>
      </div>
    </Link>
  )
}
