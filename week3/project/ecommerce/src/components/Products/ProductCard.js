import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "../Favorite/FavoriteIcon";

function ProductCard({ product }) {
  const path = `/products/${product.id}`;
  return (
    <li className="product-card" key={product.id}>
      <FavoriteIcon productId={product.id} />
      <Link className="product-card-link" to={path}>
        <div>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
        </div>
      </Link>
    </li>
  );
}

export default ProductCard;
