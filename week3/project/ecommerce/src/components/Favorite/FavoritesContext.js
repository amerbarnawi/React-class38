import React, { useState, useContext, createContext } from "react";

export const FavoritesContext = createContext();

export function useFavorites() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
  const [favoritesIds, setFavoritesArray] = useState([]);

  function updateFavorite(id) {
    const isIdInFavoritesArray = favoritesIds.includes(id);

    if (!isIdInFavoritesArray) {
      const newFavoritesArray = [...favoritesIds, id];
      setFavoritesArray(newFavoritesArray);
    } else {
      const newFavoritesArray = favoritesIds.filter(
        (productId) => productId !== id
      );
      setFavoritesArray(newFavoritesArray);
    }
  }

  return (
    <FavoritesContext.Provider
      value={{ favoritesArray: favoritesIds, updateFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
