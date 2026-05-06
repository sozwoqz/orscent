'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: `${6 + Math.random() * 8}s`,
  delay: `${Math.random() * 5}s`,
  size: Math.random() > 0.5 ? 2 : 3,
  color: Math.random() > 0.7 ? 'var(--os-amethyst)' : 'var(--os-gold)',
}))

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fond avec gradients */}
      <div className="absolute inset-0" style={{ background: 'var(--os-black)' }}>
        {/* Gradient radial or */}
        <div className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,169,110,0.12) 0%, transparent 70%)',
          }}
        />
        {/* Gradient amethyste droite */}
        <div className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 40% 60% at 80% 50%, rgba(139,92,246,0.08) 0%, transparent 70%)',
          }}
        />
        {/* Gradient amethyste gauche */}
        <div className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 30% 40% at 20% 70%, rgba(139,92,246,0.06) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Particles */}
      {PARTICLES.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
            animation: `particle ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
            opacity: 0.4,
          }}
        />
      ))}

      {/* Ligne décorative verticale */}
      <div className="absolute left-1/2 top-0 w-px h-32 opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--os-gold))' }}
      />

      {/* Contenu */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="section-eyebrow mb-8"
        >
          Parfumerie d'Exception
        </motion.p>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display font-light leading-none mb-6"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: 'var(--os-text)' }}
        >
          L'Art du
          <br />
          <span className="text-gold-shimmer italic">Parfum Oriental</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-body text-lg text-os-muted max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Des fragrances rares et envoûtantes, sélectionnées aux quatre coins 
          du monde pour les esprits raffinés.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/shop" className="btn-gold">
            <span>Explorer la Collection</span>
          </Link>
          <Link href="/#story" className="btn-outline">
            <span>Notre Histoire</span>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex items-center justify-center gap-12 mt-20"
        >
          {[
            { value: '48+',  label: 'Fragrances' },
            { value: '6',    label: 'Marques' },
            { value: '500+', label: 'Clients satisfaits' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-3xl text-os-gold font-light">{stat.value}</p>
              <p className="font-body text-xs text-os-muted tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Ligne bas */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 opacity-20"
        style={{ background: 'linear-gradient(to top, transparent, var(--os-gold))' }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] text-os-muted uppercase">Scroll</span>
        <div className="w-px h-8 overflow-hidden">
          <div className="w-px h-4 animate-bounce"
            style={{ background: 'var(--os-gold)', margin: '0 auto' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
