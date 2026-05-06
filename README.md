# Or-Scent — Site E-commerce

Site Next.js 14 pour la boutique de parfums Or-Scent.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Zustand** (gestion panier)
- **react-hot-toast** (notifications)

## Design System
- **Fonts** : Cormorant Garamond (display) + DM Sans (body) + Cinzel (accent)
- **Couleurs** : Noir `#080808` · Or `#C9A96E` · Améthyste `#8B5CF6`
- **Style** : Premium moderne sombre, glassmorphism, particles

## Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Ouvrir http://localhost:3000
```

## Structure

```
orscent/
├── app/
│   ├── layout.tsx          # Layout racine
│   ├── page.tsx            # Landing page
│   ├── shop/
│   │   ├── page.tsx        # Boutique
│   │   └── product/[id]/   # Fiche produit
├── components/
│   ├── layout/             # Navbar, Footer, CartDrawer
│   ├── sections/           # Hero, Story, BestSellers, Collections, etc.
│   └── shop/               # ProductCard, ProductGrid, ProductDetail, etc.
├── lib/
│   ├── products.ts         # Données produits + types
│   └── cart.ts             # Store Zustand panier
└── styles/
    └── globals.css         # Variables CSS + classes custom
```

## Pages

| Page | URL |
|------|-----|
| Landing | `/` |
| Boutique | `/shop` |
| Fiche produit | `/shop/product/[id]` |

## Prochaines étapes

- [ ] Connecter Shopify Storefront API
- [ ] Ajouter Stripe pour le paiement
- [ ] Déployer sur Vercel
- [ ] Intégrer les vraies photos produits
