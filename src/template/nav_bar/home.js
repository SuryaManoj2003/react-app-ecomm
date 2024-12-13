import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import "./home.css";
export default function Home() {
  return (
    <>
      <div className="banner">
        <div className="banner-text">
          <p>
            Experience the perfect union of fashion and comfort – where your
            feet feel as good as they look
          </p>
        </div>
        <div className="banner-middle-heading">
          <h1 className="banner-middle-heading-1">A</h1>
          <h1 className="banner-middle-heading-1"> Perfect Shoes</h1>
        </div>
        <div className="banner-explore-link">
          <Link to={"products"}>Explore Shop -{">"}</Link>
        </div>
      </div>
      <div className="icons">
        <div className="shipping">
          <i className="fa-solid fa-truck icon-1"></i>
          <h6>Free Shipping</h6>
        </div>
        <div className="delivery">
          <i className="fa-solid fa-hand-holding-dollar icon-2"></i>
          <h6>Cash On Delivery</h6>
        </div>
        <div className="policy">
          <i className="fa-solid fa-repeat icon-3"></i>
          <h6>Easy Return Policy</h6>
        </div>
        <div className="service">
          <i className="fa-solid fa-user-clock icon-4"></i>
          <h6>Customer Service</h6>
        </div>
      </div>
      <div className="our-products">
        <h1 className="our-products-heading">Our Products</h1>
        <HomeProducts></HomeProducts>
      </div>
    </>
  );
}

function HomeProducts() {
  let [products, setProducts] = useState([]);
  async function getData() {
    let response = await axios.get("https://fakestoreapi.com/products?limit=6");
    setProducts(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="home-products-container">
        {products.map((product, index) => {
          return (
            <div
              className={"card-" + product.id + " home-card-container"}
              key={index}
            >
              <img
                src={product.image}
                alt="product"
                className="home-card-image"
              ></img>
              <p className="home-card-title">$ {product.title}</p>
              <p className="home-card-price">$ {product.price}</p>
            </div>
          );
        })}
      </div>

      <marquee behavior="alternate" className="marquee">
        <div className="scroll-bar">
          <div className="scroll-1 scroll-text">
            <h3>Men</h3>
          </div>
          <div className="scroll-2 scroll-text">
            <h3>Women</h3>
          </div>
          <div className="scroll-3 scroll-text">
            <h3>Casual</h3>
          </div>
          <div className="scroll-4 scroll-text">
            <h3>Accessories</h3>
          </div>
        </div>
      </marquee>
    </>
  );
}
