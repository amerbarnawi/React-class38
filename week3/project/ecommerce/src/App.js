import React from "react";
import "./App.css";
import ProductDetails from "./components/Products/ProductDetails";
import Home from "./components/Home";
import { FavoritesProvider } from "./components/Favorite/FavoritesContext";
import Favorites from "./components/Favorite/Favorites";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/:category" element={<Products />} />
          </Route>
          <Route path="products/:id" element={<ProductDetails />} replace />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
