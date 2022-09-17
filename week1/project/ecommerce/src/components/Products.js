import React from "react";
import ProductCard from "./Products/ProductCard";

function Products(props) {
  function createCards() {
    return props.productsArray.map((product) => {
      return <ProductCard product={product} />;
    });
  }
  return <ul className="products-container">{createCards()}</ul>;
}

export default Products;
