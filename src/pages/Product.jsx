// src/pages/Product.jsx
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import products from '../data/products'
import { useState } from 'react'

export default function Product() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === id)

  if (!product) {
    return <p>Produto não encontrado.</p>
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
