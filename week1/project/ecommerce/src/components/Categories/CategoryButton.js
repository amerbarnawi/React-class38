import React from "react";

function GetCategoryButton(props) {
  return (
    <button
      className={
        +props.info.selected === props.info.id
          ? "category-button selected-button"
          : "category-button"
      }
      id={props.info.id}
      onClick={props.info.clickHandler}
    >
      {props.info.categoryButton}
    </button>
  );
}

export default GetCategoryButton;
