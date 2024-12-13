import React, { useEffect, useState } from "react";
import Card from "./Card";

// import { useLocation, useParams } from "react-router-dom";

export default function ProductComponent() {
  // let obj = useParams();
  // console.log(obj);

  // let queryParams = useLocation();
  // let search = new URLSearchParams(queryParams.search);
  // let category = search.get("category");
  // let posts = search.get("posts");

  var [products, setProducts] = useState([]);

  let [searchProducts, setSearchProducts] = useState([]);

  let [searchText, setSearchText] = useState("");

  var fetching = async () => {
    let productData = await (
      await fetch("https://fakestoreapi.com/products")
    ).json();
    //let realData = await fetchData.json();

    setProducts(productData);
    setSearchProducts(productData);
  };

  //fetching(); This still works but useEffect is used for demonstration purpose....

  useEffect(() => {
    fetching();
  }, []);

  async function searchData() {
    let sampleData = products.filter((product, index) => {
      return product.title
        .trim()
        .toLowerCase()
        .includes(searchText.trim().toLowerCase());
    });
    setSearchProducts(sampleData);
  }

  useEffect(() => {
    searchData();
  }, [searchText]);

  if (products.length === 0) {
    return (
      <>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Fetching Data.....
        </h1>
      </>
    );
  } else {
    return (
      <>
        <div className="products-search-bar">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
        </div>
        <div className="main-container">
          {searchProducts.map((product, index) => {
            return <Card key={product.id} {...product}></Card>;
          })}
        </div>
      </>
    );
  }
}
