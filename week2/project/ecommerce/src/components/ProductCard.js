import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const path = `/products/${product.id}`;
  return (
    <li className="product-card" key={product.id}>
      <Link className="product-card-link" to={path}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
      </Link>
    </li>
  );
}

export default ProductCard;
