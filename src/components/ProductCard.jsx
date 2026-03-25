import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ car }) {
  return (
    <Link to={`/vehicles/${car.id}`} className="product-card">
      <img src={car.image} alt={car.name} className="product-img" />
      <div className="product-body">
        <div className="product-name">{car.name}</div>
        <div className="product-spec">Quãng đường {car.range} • {car.hp} HP</div>
        <div className="product-footer">
          <div className="product-price">{car.price}</div>
          <Link to={`/vehicles/${car.id}`} className="product-link">Chi tiết</Link>
        </div>
      </div>
    </Link>
  )
}
