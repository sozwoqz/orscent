'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingBag, Menu, X, Search } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { CartDrawer } from './CartDrawer'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const { count, toggleCart, isOpen } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 border-b border-os-border/50'
            : 'py-6'
        }`}
        style={{
          background: scrolled
            ? 'rgba(8,8,8,0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-accent text-xl tracking-[0.2em] text-gold-shimmer">
            OR-SCENT
          </Link>

          {/* Nav links - desktop */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { href: '/',          label: 'Accueil' },
              { href: '/shop',      label: 'Boutique' },
              { href: '/#collections', label: 'Collections' },
              { href: '/#story',    label: 'Notre Histoire' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm tracking-wider text-os-muted hover:text-os-text transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button className="text-os-muted hover:text-os-gold transition-colors duration-300">
              <Search size={18} />
            </button>

            <button
              onClick={toggleCart}
              className="relative text-os-muted hover:text-os-gold transition-colors duration-300"
            >
              <ShoppingBag size={18} />
              {count() > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-body font-medium"
                  style={{ background: 'var(--os-gold)', color: '#080808' }}>
                  {count()}
                </span>
              )}
            </button>

            <button
              className="md:hidden text-os-muted hover:text-os-text transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-os-border/30 mt-3"
              style={{ background: 'rgba(8,8,8,0.98)' }}
            >
              <div className="flex flex-col px-6 py-6 gap-6">
                {[
                  { href: '/',          label: 'Accueil' },
                  { href: '/shop',      label: 'Boutique' },
                  { href: '/#collections', label: 'Collections' },
                  { href: '/#story',    label: 'Notre Histoire' },
                ].map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-body text-sm tracking-wider text-os-text hover:text-os-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <CartDrawer />
    </>
  )
}
