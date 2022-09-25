import React from "react";

function CategoryButton({ info }) {
  const { index, category, clickHandler, selected } = info;
  return (
    <button
      key={category}
      className={
        +selected === index
          ? "category-button selected-button"
          : "category-button"
      }
      id={index}
      onClick={clickHandler}
    >
      {category}
    </button>
  );
}

export default CategoryButton;
