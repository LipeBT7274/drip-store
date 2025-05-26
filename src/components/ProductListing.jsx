import ProductCard from './ProductCard'

const mockProducts = [
  { id: 1, name: 'Camiseta Preta', price: 99.90, image: '/assets/camiseta.jpg' },
  { id: 2, name: 'Tênis Branco', price: 299.90, image: '/assets/tenis.jpg' }
]

export default function ProductListing() {
  return (
    <section>
      <h2>Produtos</h2>
      <div className="product-grid">
        {mockProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
