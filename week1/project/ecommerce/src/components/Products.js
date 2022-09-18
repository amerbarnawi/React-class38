import React from "react";
import ProductCard from "./Products/ProductCard";

function Products(props) {
  return (
    <ul className="products-container">
      <ProductCard products={props.productsArray} />
    </ul>
  );
}

export default Products;
