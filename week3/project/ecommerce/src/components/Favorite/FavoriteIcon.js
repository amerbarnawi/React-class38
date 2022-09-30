import React from "react";
import heartRegular from "../../assets/heart-regular.svg";
import heartSolid from "../../assets/heart-solid.svg";
import { useFavorites } from "./FavoritesContext";

function FavoriteIcon({ productId }) {
  const { favoritesArray: favoritesIds, updateFavorite } = useFavorites();

  return (
    <div className="heart-image" onClick={() => updateFavorite(productId)}>
      <img
        id={productId}
        src={favoritesIds.includes(productId) ? heartSolid : heartRegular}
        alt="heart"
      />
    </div>
  );
}

export default FavoriteIcon;
