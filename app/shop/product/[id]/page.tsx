import { ProductDetail }   from '@/components/shop/ProductDetail'
import { RelatedProducts } from '@/components/shop/RelatedProducts'
import { getProductById }  from '@/lib/products'
import { notFound }        from 'next/navigation'

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const product = getProductById(params.id)
  if (!product) notFound()

  return (
    <div className="min-h-screen pt-20" style={{ background: 'var(--os-black)' }}>
      <ProductDetail product={product} />
      <RelatedProducts currentId={params.id} />
    </div>
  )
}
