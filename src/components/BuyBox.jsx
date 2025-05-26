// src/components/BuyBox.jsx
import { useCart } from '../context/CartContext'

export default function BuyBox({ price, product }) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  return (
    <div className="buy-box">
      <p>Preço: <strong>R${price}</strong></p>

      <div className="quantity-control">
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>

      <button className="add-to-cart" onClick={() => addToCart(product, quantity)}>
        Adicionar ao Carrinho
      </button>
    </div>
  )
}
