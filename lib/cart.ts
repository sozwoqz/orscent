import { create } from 'zustand'
import type { Product } from './products'

export type CartItem = {
  product: Product
  quantity: number
}

type CartStore = {
  items: CartItem[]
  isOpen: boolean
  addItem:    (product: Product) => void
  removeItem: (productId: string) => void
  updateQty:  (productId: string, quantity: number) => void
  clearCart:  () => void
  toggleCart: () => void
  total:      () => number
  count:      () => number
}

export const useCart = create<CartStore>()((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (product) => {
    const existing = get().items.find(i => i.product.id === product.id)
    if (existing) {
      set({ items: get().items.map(i =>
        i.product.id === product.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      )})
    } else {
      set({ items: [...get().items, { product, quantity: 1 }] })
    }
  },

  removeItem: (productId) => {
    set({ items: get().items.filter(i => i.product.id !== productId) })
  },

  updateQty: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId)
      return
    }
    set({ items: get().items.map(i =>
      i.product.id === productId ? { ...i, quantity } : i
    )})
  },

  clearCart:  () => set({ items: [] }),
  toggleCart: () => set({ isOpen: !get().isOpen }),
  total: () => get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
  count: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
}))