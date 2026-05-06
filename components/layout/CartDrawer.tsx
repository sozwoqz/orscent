'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart'
import Image from 'next/image'
import Link from 'next/link'

export function CartDrawer() {
  const { isOpen, toggleCart, items, removeItem, updateQty, total } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md flex flex-col"
            style={{ background: 'var(--os-dark)', borderLeft: '1px solid var(--os-border)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-os-border">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} className="text-os-gold" />
                <span className="font-accent text-sm tracking-widest text-os-text">MON PANIER</span>
              </div>
              <button onClick={toggleCart} className="text-os-muted hover:text-os-text transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={48} className="text-os-border" />
                  <p className="font-body text-os-muted text-sm">Votre panier est vide</p>
                  <Link href="/shop" onClick={toggleCart} className="btn-outline text-xs">
                    <span>Découvrir nos parfums</span>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex gap-4 pb-5 border-b border-os-border/50">
                      <div className="relative w-20 h-20 shrink-0 overflow-hidden"
                        style={{ background: 'var(--os-surface)' }}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-accent text-xs tracking-wider text-os-gold">{product.brand}</p>
                        <p className="font-display text-base text-os-text mt-0.5 truncate">{product.name}</p>
                        <p className="font-body text-xs text-os-muted mt-0.5">{product.size}</p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2 border border-os-border">
                            <button
                              onClick={() => updateQty(product.id, quantity - 1)}
                              className="p-1.5 hover:text-os-gold transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="font-body text-sm w-6 text-center">{quantity}</span>
                            <button
                              onClick={() => updateQty(product.id, quantity + 1)}
                              className="p-1.5 hover:text-os-gold transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="font-display text-base text-os-gold">
                            {(product.price * quantity).toFixed(2)} €
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="text-os-muted hover:text-os-text transition-colors self-start mt-1"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-os-border">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-body text-sm text-os-muted">Total</span>
                  <span className="font-display text-2xl text-os-gold">{total().toFixed(2)} €</span>
                </div>
                <button className="btn-gold w-full text-center cursor-pointer">
                  <span>Commander</span>
                </button>
                <Link
                  href="/shop"
                  onClick={toggleCart}
                  className="block text-center mt-3 font-body text-xs text-os-muted hover:text-os-text transition-colors tracking-wider"
                >
                  Continuer mes achats
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
