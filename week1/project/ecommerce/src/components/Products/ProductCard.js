import React from "react";

function ProductCard({ products }) {
  return products.map((product) => {
    return (
      <li className="product-card" key={product.id}>
        <img src={product.image} alt={product.category}></img>
        <p>{product.title}</p>
      </li>
    );
  });
}

export default ProductCard;
