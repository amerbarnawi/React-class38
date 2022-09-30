import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";
import Products from "./Products/Products";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="container">
      <Header />
      <Navbar setCategory={setSelectedCategory} />
      <Products category={selectedCategory} />
    </div>
  );
}
export default Home;
