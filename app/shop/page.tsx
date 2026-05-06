import { ShopHeader }  from '@/components/shop/ShopHeader'
import { ProductGrid } from '@/components/shop/ProductGrid'
import { ShopFilters } from '@/components/shop/ShopFilters'

export const metadata = {
  title: 'Boutique — Or-Scent',
  description: 'Explorez notre collection de parfums d\'exception.',
}

export default function ShopPage() {
  return (
    <div className="min-h-screen pt-20" style={{ background: 'var(--os-black)' }}>
      <ShopHeader />
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex gap-8">
          <aside className="hidden lg:block w-64 shrink-0">
            <ShopFilters />
          </aside>
          <div className="flex-1">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
