import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer style={{ background: 'var(--os-dark)', borderTop: '1px solid var(--os-border)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-accent text-2xl tracking-[0.25em] text-gold-shimmer mb-4">OR-SCENT</p>
            <p className="font-body text-sm text-os-muted leading-relaxed max-w-xs">
              Des fragrances d'exception sélectionnées pour leur raffinement. 
              L'Orient rencontre l'élégance dans chaque flacon.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-os-muted hover:text-os-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-os-muted hover:text-os-gold transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-eyebrow mb-5">Navigation</p>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/shop',    label: 'Boutique' },
                { href: '/#collections', label: 'Collections' },
                { href: '/#story',  label: 'Notre Histoire' },
                { href: '/#bestsellers', label: 'Best-sellers' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="font-body text-sm text-os-muted hover:text-os-text transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="section-eyebrow mb-5">Informations</p>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/livraison', label: 'Livraison & Retours' },
                { href: '/faq',       label: 'FAQ' },
                { href: '/cgv',       label: 'CGV' },
                { href: '/contact',   label: 'Contact' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="font-body text-sm text-os-muted hover:text-os-text transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-os-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-os-muted">
            © {new Date().getFullYear()} Or-Scent. Tous droits réservés.
          </p>
          <p className="font-body text-xs text-os-muted">
            Paiement sécurisé · Livraison France & Europe
          </p>
        </div>
      </div>
    </footer>
  )
}
