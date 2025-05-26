import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>R${product.price}</p>
    </Link>
  )
}
