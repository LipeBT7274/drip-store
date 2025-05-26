import { useState } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  // Filtra produtos pelo nome (case insensitive)
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="home-page">
      <h1>Produtos</h1>

      <input
        type="search"
        placeholder="Pesquisar produtos..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>R${product.price.toFixed(2)}</p>
            </Link>
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </main>
  )
}
