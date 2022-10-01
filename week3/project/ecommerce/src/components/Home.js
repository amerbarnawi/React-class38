import React from "react";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";
import Products from "./Products/Products";

function Home() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Products />
    </div>
  );
}
export default Home;
