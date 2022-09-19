import React from "react";

function GetCategoryButton({ info }) {
  return info.categories.map((category, index) => {
    return (
      <button
        key={index}
        className={
          +info.selected === index
            ? "category-button selected-button"
            : "category-button"
        }
        id={index}
        onClick={info.clickHandler}
      >
        {category}
      </button>
    );
  });
}

export default GetCategoryButton;
