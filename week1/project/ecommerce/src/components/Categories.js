import React, { useState } from "react";
import GetCategoryButton from "./Categories/CategoryButton";
import categories from "../fake-data/all-categories";
import products from "../fake-data/all-products";
import Products from "./Products";

function Categories() {
  const [productsArray, setProductsArray] = useState(() => {
    return products;
  });

  const [selected, setSelected] = useState(() => {
    return undefined;
  });

  function getProductsByCategory(event) {
    setSelected(event.target.id);
    const categoryId = event.target.id;
    const category = categories[categoryId].slice(6);
    setProductsArray(
      products.filter((product) => {
        return product.category === category;
      })
    );
  }

  return (
    <div>
      <div className="categories-buttons">
        <GetCategoryButton
          info={{
            categories: categories,
            clickHandler: getProductsByCategory,
            selected: selected,
          }}
        />
      </div>
      <Products productsArray={productsArray} />
    </div>
  );
}

export default Categories;
