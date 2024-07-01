import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import * as assets from "../helper/assets";
import productsData from "../content/productPage.json";
import { Header, Footer } from "../Components/index";

const ProductCard = ({ product }) => (
  <div
    className="product-card"
    style={{ backgroundImage: `url(${assets[product.backgroundImage]})` }}
  >
    <div className="card-content">
      <div className="left-side">
        <img
          src={assets[product.productImage]}
          alt={product.productName}
          className="left-image"
        />
      </div>
      <div className="right-side">
        <div className="description-card">
          <h2 className="product-name">{product.productName}</h2>
          <p className="product-description">{product.productDescription}</p>
          <p className="product-pricing">{product.startJourny}</p>
        </div>
      </div>
    </div>
  </div>
);

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData.products);
  }, []);

  return (
    <>
      <Header />
      <div className="product-container">
        <div className="product-container-img">
          <img
            src={assets.NO_HIDDEN_CHARGES}
            alt="Top Image"
            className="top-image"
          />
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
