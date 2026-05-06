'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const COLLECTIONS = [
  {
    id: 'oud',
    name: 'Collection Oud',
    desc: 'Le bois d\'agar dans toute sa splendeur',
    count: 12,
    gradient: 'linear-gradient(135deg, #3D1F00 0%, #1A0D00 100%)',
    accent: '#C9A96E',
    symbol: 'عود',
  },
  {
    id: 'floral',
    name: 'Collection Florale',
    desc: 'Roses, jasmins et fleurs rares d\'Orient',
    count: 18,
    gradient: 'linear-gradient(135deg, #1A0020 0%, #0D0010 100%)',
    accent: '#A78BFA',
    symbol: 'زهر',
  },
  {
    id: 'ambré',
    name: 'Collection Ambrée',
    desc: 'Chauds, enveloppants, enivrants',
    count: 10,
    gradient: 'linear-gradient(135deg, #1F1000 0%, #0D0800 100%)',
    accent: '#E8C992',
    symbol: 'عنبر',
  },
]

export function CollectionsSection() {
  return (
    <section id="collections" className="py-24 px-6" style={{ background: 'var(--os-black)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-eyebrow mb-4"
          >
            Univers Olfactifs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl font-light text-os-text"
          >
            Nos Collections
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLLECTIONS.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                href={`/shop?collection=${col.id}`}
                className="group block relative overflow-hidden aspect-[3/4] cursor-pointer"
                style={{ background: col.gradient }}
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${col.accent}15 0%, transparent 70%)` }}
                />

                {/* Symbole arabe */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[8rem] font-light select-none transition-transform duration-700 group-hover:scale-110"
                    style={{ color: col.accent, opacity: 0.06 }}>
                    {col.symbol}
                  </span>
                </div>

                {/* Border hover */}
                <div className="absolute inset-0 border transition-all duration-300"
                  style={{ borderColor: `${col.accent}20` }}
                />
                <div className="absolute inset-0 border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: `${col.accent}50` }}
                />

                {/* Contenu */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-8 h-px mb-4 transition-all duration-300 group-hover:w-16"
                    style={{ background: col.accent }}
                  />
                  <p className="font-accent text-xs tracking-widest mb-2"
                    style={{ color: col.accent }}>
                    {col.count} fragrances
                  </p>
                  <h3 className="font-display text-2xl font-light text-os-text mb-2">
                    {col.name}
                  </h3>
                  <p className="font-body text-sm text-os-muted">
                    {col.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-body text-xs tracking-widest" style={{ color: col.accent }}>
                      Explorer →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
