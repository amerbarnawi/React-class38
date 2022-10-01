import React, { useState } from "react";
import useFetchData from "../Hooks/FetchHook";
import CategoryButton from "./CategoryButton";

function Navbar() {
  const [categories, setCategories] = useState(() => []);

  const url = "https://fakestoreapi.com/products/categories";
  const { error, isLoading } = useFetchData(url, setCategories);

  return (
    <div>
      {isLoading ? (
        <h3>Categories are loading ..</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="categories-buttons">
          {categories.map((category, index) => {
            return <CategoryButton key={index} category={category} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Navbar;
