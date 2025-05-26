// src/components/Header.jsx
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { cartItems } = useCart()

  // Soma total de itens no carrinho
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          DRIP STORE
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart" className="cart-link">
            Carrinho {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
        </nav>
      </div>
    </header>
  )
}
