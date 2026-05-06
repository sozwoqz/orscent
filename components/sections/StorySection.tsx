'use client'

import { motion } from 'framer-motion'

export function StorySection() {
  return (
    <section id="story" className="py-32 px-6 relative overflow-hidden"
      style={{ background: 'var(--os-dark)' }}>
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-px h-full opacity-10"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--os-gold), transparent)' }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Texte */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-eyebrow mb-6"
          >
            Notre Univers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-6xl font-light text-os-text leading-tight mb-8"
          >
            L'Orient dans
            <br />
            <span className="italic text-gold-shimmer">chaque flacon</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-5 text-os-muted font-body text-base leading-relaxed"
          >
            <p>
              Or-Scent est née d'une passion pour les fragrances orientales, 
              ces parfums envoûtants qui racontent des histoires millénaires 
              de soie, d'épices et de mystère.
            </p>
            <p>
              Chaque fragrance de notre collection est sélectionnée avec soin 
              parmi les meilleures maisons de parfumerie du Moyen-Orient et du monde, 
              pour vous offrir une expérience olfactive incomparable.
            </p>
            <p>
              Des compositions riches en oud, en rose de Taïf et en ambre précieux — 
              des trésors olfactifs accessibles, livrés directement chez vous.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-6 mt-12"
          >
            {[
              { icon: '✦', title: 'Sélection Premium', desc: 'Chaque parfum rigoureusement choisi' },
              { icon: '◈', title: 'Livraison Soignée', desc: 'Emballage élégant protecteur' },
              { icon: '◇', title: 'Authenticité', desc: 'Produits 100% originaux garantis' },
              { icon: '◉', title: 'Service Client', desc: 'Disponible 7j/7 pour vous guider' },
            ].map((f, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-os-gold text-lg shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <p className="font-accent text-xs tracking-wider text-os-text mb-1">{f.title}</p>
                  <p className="font-body text-xs text-os-muted">{f.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visuel décoratif */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[3/4] glass-card p-1">
            <div className="w-full h-full flex items-center justify-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 100%)' }}>
              {/* Orb décoratif */}
              <div className="absolute w-64 h-64 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.15) 0%, transparent 70%)' }}
              />
              <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)' }}
              />
              {/* Texte calligraphique */}
              <div className="relative z-10 text-center">
                <p className="font-display text-8xl font-light opacity-10 text-os-gold select-none">
                  عطر
                </p>
                <p className="font-accent text-xs tracking-[0.5em] text-os-gold opacity-50 mt-4">
                  PARFUM
                </p>
              </div>
              {/* Points décoratifs */}
              {[
                { top: '20%', left: '15%' },
                { top: '70%', right: '20%' },
                { top: '45%', right: '10%' },
              ].map((pos, i) => (
                <div key={i}
                  className="absolute w-1.5 h-1.5 rounded-full animate-float"
                  style={{ ...pos, background: 'var(--os-gold)', animationDelay: `${i * 2}s`, opacity: 0.5 }}
                />
              ))}
            </div>
          </div>
          {/* Badge flottant */}
          <div className="absolute -bottom-6 -left-6 glass-card px-5 py-4">
            <p className="font-accent text-xs tracking-wider text-os-gold">Depuis 2023</p>
            <p className="font-display text-2xl text-os-text mt-1">500+</p>
            <p className="font-body text-xs text-os-muted">commandes livrées</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
