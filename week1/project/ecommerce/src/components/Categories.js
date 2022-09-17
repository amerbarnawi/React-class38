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

  function createButtons() {
    return categories.map((category, index) => {
      return (
        <GetCategoryButton
          info={{
            id: index,
            categoryButton: category,
            clickHandler: getProductsByCategory,
            selected: selected,
          }}
        />
      );
    });
  }

  return (
    <div>
      <h2>Products</h2>
      <div className="categories-buttons">{createButtons()}</div>
      <Products productsArray={productsArray} />
    </div>
  );
}

export default Categories;
