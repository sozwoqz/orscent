'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Amira B.',
    location: 'Paris',
    rating: 5,
    text: 'L\'Oud Noir Intense est absolument envoûtant. Je reçois des compliments partout où je passe. Une projection et une tenue incroyables pour le prix.',
    product: 'Oud Noir Intense — Volaré',
  },
  {
    name: 'Sofiane M.',
    location: 'Lyon',
    rating: 5,
    text: 'Amber Gold par Asalah est maintenant mon signature scent. Chaud, épicé, enveloppant. Exactement ce que je cherchais depuis des années.',
    product: 'Amber Gold — Asalah',
  },
  {
    name: 'Leila K.',
    location: 'Marseille',
    rating: 5,
    text: 'Livraison ultra rapide, emballage soigné et parfum authentique. Or-Scent c\'est la référence pour les parfums orientaux en France.',
    product: 'Ameerati — Lattafa',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--os-dark)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-eyebrow mb-4"
          >
            Témoignages
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl font-light text-os-text"
          >
            Ce qu'ils en disent
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card gold-border-hover p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} fill="var(--os-gold)" stroke="none" />
                ))}
              </div>

              {/* Texte */}
              <p className="font-body text-sm text-os-muted leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Divider */}
              <div className="w-8 h-px mb-5" style={{ background: 'var(--os-gold)', opacity: 0.4 }} />

              {/* Auteur */}
              <div>
                <p className="font-display text-base text-os-text">{t.name}</p>
                <p className="font-body text-xs text-os-muted mt-0.5">{t.location}</p>
                <p className="font-accent text-[10px] tracking-wider mt-2" style={{ color: 'var(--os-gold)', opacity: 0.7 }}>
                  {t.product}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
