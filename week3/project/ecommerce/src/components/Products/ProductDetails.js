import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useFetchData from "../Hooks/FetchHook";
import FavoriteIcon from "../Favorite/FavoriteIcon";
import Header from "../Header";

function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const productId = productDetails.id;

  const params = useParams();
  const url = `https://fakestoreapi.com/products/${params.id}`;

  const { error, isLoading } = useFetchData(url, setProductDetails);

  return (
    <div>
      <Header />
      {isLoading ? (
        <h3>Product details is loading ..</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="product-details-container">
          <FavoriteIcon productId={productId} />
          <img src={productDetails.image} alt={productDetails.title} />
          <h3>{`Price: ${productDetails.price} $`}</h3>
          <h2>{productDetails.title}</h2>
          <div className="rating">
            <ul>
              <li>Rate:{productDetails.rating.rate}</li>
              <li>Count:{productDetails.rating.count}</li>
            </ul>
          </div>
          <p>{productDetails.description}</p>
          <Link className="home-button" to="/">
            Home page
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
