// src/pages/ProductDetails.jsx
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  // Simulação de produto (depois substituímos pelo backend)
  const product = {
    id: id,
    name: 'Camiseta Oversized',
    description: 'Camiseta de alta qualidade, tecido premium e caimento perfeito.',
    price: 199.99,
    image: '/assets/camiseta.jpg',
  }

  return (
    <main className="product-page">
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">R${product.price.toFixed(2)}</p>

          <div className="quantity-control">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>

          <button className="add-to-cart-btn" onClick={() => addToCart(product, quantity)}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </main>
  )
}
