import React, { useState } from "react";
import Products from "./Products";
import useFetchData from "./Hook";
import CategoryButton from "./CategoryButton";

function Navbar() {
  const [categories, setCategories] = useState(() => []);
  const [category, setCategory] = useState(() => "");
  const [selected, setSelected] = useState(() => undefined);

  const url = "https://fakestoreapi.com/products/categories";
  const { error, isLoading } = useFetchData(url, setCategories);

  function getCategory(e) {
    const category = e.target.innerText;
    const id = e.target.id;
    setCategory(category);
    setSelected(id);
  }

  return (
    <div>
      {isLoading ? (
        <h3>Categories are loading ..</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="categories-buttons">
          {categories.map((category, index) => {
            return (
              <CategoryButton
                key={index}
                info={{
                  index: index,
                  category: category,
                  clickHandler: getCategory,
                  selected: selected,
                }}
              />
            );
          })}
        </div>
      )}
      <Products category={category} />
    </div>
  );
}

export default Navbar;
