'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import toast from 'react-hot-toast'

export function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    toast.success('Merci ! Vous recevrez nos offres exclusives.', {
      icon: '✦',
    })
    setEmail('')
  }

  return (
    <section className="py-32 px-6 relative overflow-hidden" style={{ background: 'var(--os-black)' }}>
      {/* Glow décoratif */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-eyebrow mb-6"
        >
          Rejoignez Or-Scent
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-light text-os-text mb-4"
        >
          Offres <span className="italic text-gold-shimmer">Exclusives</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-os-muted mb-10 text-sm leading-relaxed"
        >
          Inscrivez-vous pour recevoir nos nouvelles collections, 
          offres spéciales et conseils olfactifs en avant-première.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            className="flex-1 px-5 py-3 font-body text-sm text-os-text placeholder:text-os-muted focus:outline-none"
            style={{
              background: 'rgba(26,26,26,0.8)',
              border: '1px solid rgba(201,169,110,0.2)',
            }}
          />
          <button type="submit" className="btn-gold shrink-0">
            <span>S'inscrire</span>
          </button>
        </motion.form>

        <p className="font-body text-xs text-os-muted mt-4 opacity-60">
          Pas de spam. Désinscription possible à tout moment.
        </p>
      </div>
    </section>
  )
}
