export type Product = {
  id: string
  name: string
  brand: string
  collection: string
  price: number
  originalPrice?: number
  size: string
  image: string
  images: string[]
  notes: { top: string[]; heart: string[]; base: string[] }
  description: string
  badge?: 'bestseller' | 'new' | 'exclusive'
  inStock: boolean
  rating: number
  reviews: number
  tags: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: 'volare-oud-noir',
    name: 'Oud Noir Intense',
    brand: 'Volaré',
    collection: 'Signature',
    price: 29.90,
    size: '100ml',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80',
      'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80',
    ],
    notes: {
      top: ['Bergamote', 'Cardamome'],
      heart: ['Oud', 'Rose de Taïf'],
      base: ['Ambre', 'Musc blanc', 'Santal'],
    },
    description: 'Un voyage olfactif au cœur de l\'Orient. L\'Oud Noir Intense capture l\'essence mystérieuse du bois d\'agar, sublimée par la délicatesse de la rose de Taïf.',
    badge: 'bestseller',
    inStock: true,
    rating: 4.9,
    reviews: 127,
    tags: ['oud', 'oriental', 'intense', 'homme'],
  },
  {
    id: 'lattafa-ameerati',
    name: 'Ameerati',
    brand: 'Lattafa',
    collection: 'Premium',
    price: 24.90,
    size: '100ml',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffedac5c1b8?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1588776814546-1ffedac5c1b8?w=600&q=80',
    ],
    notes: {
      top: ['Ananas', 'Bergamote', 'Framboise'],
      heart: ['Jasmin', 'Rose', 'Iris'],
      base: ['Vanille', 'Musc', 'Ambre'],
    },
    description: 'Une fragrance féminité absolue. Ameerati signifie "ma princesse" en arabe — un parfum doux, floral et enveloppant qui incarne la grâce orientale.',
    badge: 'new',
    inStock: true,
    rating: 4.7,
    reviews: 89,
    tags: ['floral', 'doux', 'femme', 'vanillé'],
  },
  {
    id: 'platinium-royal-oud',
    name: 'Royal Oud',
    brand: 'Collection Platinium Paris',
    collection: 'Elite',
    price: 34.90,
    originalPrice: 44.90,
    size: '100ml',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80',
    ],
    notes: {
      top: ['Citron', 'Bergamote', 'Poivre rose'],
      heart: ['Oud', 'Cèdre', 'Patchouli'],
      base: ['Vétiver', 'Ambre gris', 'Musc animal'],
    },
    description: 'L\'élégance parisienne rencontre le raffinement oriental. Royal Oud est une ode au bois précieux, sculpté par des maîtres parfumeurs.',
    badge: 'exclusive',
    inStock: true,
    rating: 4.8,
    reviews: 64,
    tags: ['oud', 'boisé', 'luxe', 'mixte'],
  },
  {
    id: 'dubai-flower-bloom',
    name: 'Dubai Bloom',
    brand: 'Dubai Flower',
    collection: 'Garden',
    price: 19.90,
    size: '50ml',
    image: 'https://images.unsplash.com/photo-1616169201999-849d86fc9b45?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1616169201999-849d86fc9b45?w=600&q=80',
    ],
    notes: {
      top: ['Mandarine', 'Fleur d\'oranger'],
      heart: ['Jasmin sauvage', 'Tubéreuse'],
      base: ['Musc', 'Cèdre blanc'],
    },
    description: 'Les jardins en fleurs de Dubai capturés dans un flacon. Une fragrance aérienne et joyeuse qui célèbre la beauté naturelle.',
    inStock: true,
    rating: 4.5,
    reviews: 43,
    tags: ['floral', 'frais', 'femme', 'léger'],
  },
  {
    id: 'asalah-amber-gold',
    name: 'Amber Gold',
    brand: 'Asalah',
    collection: 'Heritage',
    price: 27.90,
    size: '100ml',
    image: 'https://images.unsplash.com/photo-1600612253971-2219a3b61f43?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1600612253971-2219a3b61f43?w=600&q=80',
    ],
    notes: {
      top: ['Safran', 'Cannelle', 'Cardamome'],
      heart: ['Rose', 'Oud', 'Encens'],
      base: ['Ambre', 'Benjoin', 'Vétiver'],
    },
    description: 'Un héritage olfactif transmis de génération en génération. Amber Gold incarne l\'âme des souks orientaux, chaud, épicé et enivrant.',
    badge: 'bestseller',
    inStock: true,
    rating: 4.9,
    reviews: 156,
    tags: ['ambré', 'épicé', 'oriental', 'mixte'],
  },
  {
    id: 'dubai-collection-noir',
    name: 'Dubai Noir',
    brand: 'Dubai Collection',
    collection: 'Black Series',
    price: 32.90,
    size: '100ml',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&q=80',
    ],
    notes: {
      top: ['Cuir', 'Poivre noir'],
      heart: ['Oud fumé', 'Iris'],
      base: ['Ambre noir', 'Musc'],
    },
    description: 'Mystère et séduction. Dubai Noir est l\'expression ultime du parfum masculin oriental — sombre, magnétique, inoubliable.',
    badge: 'new',
    inStock: true,
    rating: 4.6,
    reviews: 38,
    tags: ['cuiré', 'fumé', 'homme', 'intense'],
  },
]

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id)
}

export function getProductsByCollection(collection: string): Product[] {
  return PRODUCTS.filter(p => p.collection === collection)
}

export function getBestSellers(): Product[] {
  return PRODUCTS.filter(p => p.badge === 'bestseller')
}

export function getNewArrivals(): Product[] {
  return PRODUCTS.filter(p => p.badge === 'new')
}

export const COLLECTIONS = [
  { id: 'all', label: 'Tous', count: PRODUCTS.length },
  { id: 'oud', label: 'Oud', count: PRODUCTS.filter(p => p.tags.includes('oud')).length },
  { id: 'floral', label: 'Floral', count: PRODUCTS.filter(p => p.tags.includes('floral')).length },
  { id: 'oriental', label: 'Oriental', count: PRODUCTS.filter(p => p.tags.includes('oriental')).length },
  { id: 'ambré', label: 'Ambré', count: PRODUCTS.filter(p => p.tags.includes('ambré')).length },
  { id: 'boisé', label: 'Boisé', count: PRODUCTS.filter(p => p.tags.includes('boisé')).length },
]

export const BRANDS = Array.from(new Set(PRODUCTS.map(p => p.brand)))