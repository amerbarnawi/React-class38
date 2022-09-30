import React, { useState } from "react";
import { useFavorites } from "../Favorite/FavoritesContext";
import useFetchData from "../Hooks/FetchHook";
import Header from "../Header";
import ProductCard from "../Products/ProductCard";

function Favorites() {
  const [products, setProducts] = useState(() => []);
  const { favoritesArray: favoritesIds } = useFavorites();

  const url = "https://fakestoreapi.com/products";
  const { error, isLoading } = useFetchData(url, setProducts);

  const favoriteProducts = products.filter((product) => {
    return favoritesIds.includes(product.id);
  });

  if (isLoading) {
    return <h3>Favorites are Loading..</h3>;
  } else if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="favorite-container">
      <Header />
      <h2>Favorites</h2>
      {favoriteProducts.length > 0 ? (
        <div>
          <ul className="products-container">
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      ) : (
        <h4>You haven't chosen any favorites yet!</h4>
      )}
    </div>
  );
}

export default Favorites;
