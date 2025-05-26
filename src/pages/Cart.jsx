import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart()

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <main className="cart-page">
      <h1>Seu Carrinho</h1>

      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio!</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>R${item.price.toFixed(2)}</p>
                  <div className="cart-quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remover</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Resumo do Pedido</h2>
            <p>Total: <strong>R${totalPrice.toFixed(2)}</strong></p>
            <button onClick={clearCart}>Finalizar Compra</button>
          </div>
        </div>
      )}
    </main>
  )
}
