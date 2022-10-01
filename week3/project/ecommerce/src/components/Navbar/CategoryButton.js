import { NavLink, useParams } from "react-router-dom";

function CategoryButton({ category }) {
  const categoryFromPath = useParams();

  function setClassName() {
    if (
      categoryFromPath.category === category &&
      categoryFromPath.category !== undefined
    ) {
      return "category-button selected-button";
    } else {
      return "category-button";
    }
  }

  return (
    <NavLink
      to={`/${category}`}
      key={category}
      className={setClassName()}
      id={category}
    >
      {category}
    </NavLink>
  );
}

export default CategoryButton;
