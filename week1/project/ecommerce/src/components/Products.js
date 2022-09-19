import React from "react";
import ProductCard from "./Products/ProductCard";

function Products({ productsArray }) {
  return (
    <ul className="products-container">
      {productsArray.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </ul>
  );
}

export default Products;
