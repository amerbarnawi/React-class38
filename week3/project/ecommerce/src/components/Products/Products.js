import React, { useState } from "react";
import ProductCard from "./ProductCard";
import useFetchData from "../Hooks/FetchHook";
import { useParams } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState(() => []);

  let url = "";
  const { category } = useParams();

  if (category === undefined) {
    url = "https://fakestoreapi.com/products";
  } else {
    url = `https://fakestoreapi.com/products/category/${category}`;
  }

  const { error, isLoading } = useFetchData(url, setProducts);

  return (
    <div>
      {isLoading ? (
        <h3>Products are loading .. </h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div>
          <ul className="products-container">
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Products;
