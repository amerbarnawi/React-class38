import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Products from "./Products";

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
