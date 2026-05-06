'use client'

import { useState } from 'react'
import { COLLECTIONS, BRANDS } from '@/lib/products'
import { ChevronDown } from 'lucide-react'

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="border-b border-os-border pb-6 mb-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full mb-4"
      >
        <span className="font-accent text-xs tracking-widest text-os-text">{title}</span>
        <ChevronDown size={14} className={`text-os-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div>{children}</div>}
    </div>
  )
}

export function ShopFilters() {
  const [activeCollection, setActiveCollection] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 50])

  return (
    <div className="sticky top-24">
      <p className="font-accent text-xs tracking-[0.3em] text-os-gold mb-8 uppercase">Filtres</p>

      <FilterSection title="Famille Olfactive">
        <div className="flex flex-col gap-2">
          {COLLECTIONS.map(col => (
            <button
              key={col.id}
              onClick={() => setActiveCollection(col.id)}
              className={`flex items-center justify-between py-1.5 font-body text-sm transition-colors ${
                activeCollection === col.id ? 'text-os-gold' : 'text-os-muted hover:text-os-text'
              }`}
            >
              <span>{col.label}</span>
              <span className="text-xs opacity-50">{col.count}</span>
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Marque">
        <div className="flex flex-col gap-2">
          {BRANDS.map(brand => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-3.5 h-3.5 border border-os-border group-hover:border-os-gold/50 transition-colors shrink-0 flex items-center justify-center">
              </div>
              <span className="font-body text-sm text-os-muted group-hover:text-os-text transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Prix">
        <div className="space-y-3">
          <div className="flex justify-between font-body text-xs text-os-muted">
            <span>{priceRange[0]} €</span>
            <span>{priceRange[1]} €</span>
          </div>
          <input
            type="range"
            min={0}
            max={50}
            value={priceRange[1]}
            onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full accent-os-gold cursor-pointer"
          />
        </div>
      </FilterSection>
    </div>
  )
}
