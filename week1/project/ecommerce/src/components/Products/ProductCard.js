import React from "react";

function ProductCard(props) {
  return (
    <li className="product-card" key={props.product.id}>
      <img src={props.product.image} alt={props.product.category}></img>
      <p>{props.product.title}</p>
    </li>
  );
}

export default ProductCard;
