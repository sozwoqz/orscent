import { PRODUCTS } from '@/lib/products'
import { ProductCard } from './ProductCard'

export function RelatedProducts({ currentId }: { currentId: string }) {
  const related = PRODUCTS.filter(p => p.id !== currentId).slice(0, 4)

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <div className="border-t border-os-border pt-16">
        <p className="section-eyebrow mb-4 text-center">Vous pourriez aimer</p>
        <h2 className="font-display text-4xl font-light text-os-text text-center mb-12">
          Fragrances Similaires
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
