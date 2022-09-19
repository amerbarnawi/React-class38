import React from "react";

function GetCategoryButton({ info }) {
  return (
    <button
      key={info.category}
      className={
        +info.selected === info.index
          ? "category-button selected-button"
          : "category-button"
      }
      id={info.index}
      onClick={info.clickHandler}
    >
      {info.category}
    </button>
  );
}

export default GetCategoryButton;
