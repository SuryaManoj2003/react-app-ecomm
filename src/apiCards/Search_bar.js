import { useState, useEffect, useMemo } from "react";

import "./search-bar.css";

function Search_bar() {
  var [products, setProducts] = useState([]);
  let [handle, setHandle] = useState([]);
  //let [searched, setSearched] = useState([]);

  let [text, setText] = useState("");
  var [time, setTime] = useState(new Date().toLocaleTimeString());
  var fetching = async () => {
    let productData = await (
      await fetch("https://fakestoreapi.com/products")
    ).json();
    //let realData = await fetchData.json();

    setProducts(productData);
    setHandle(productData);
    //console.log(handle);

    //console.log(productData);
  };

  // var searching = async () => {
  //   let productData = await (
  //     await fetch("https://fakestoreapi.com/products")
  //   ).json();
  //   //let realData = await fetchData.json();

  //   setSearched(productData);
  //   //console.log(productData);
  // };

  useMemo(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  // useEffect(() => {
  //   setTime(new Date().toLocaleTimeString());
  // }, [time]);

  //fetching(); This still works but useEffect is used for demonstration purpose....

  useEffect(() => {
    fetching();
    //searching();
  }, []);

  useMemo(() => {
    searchFunction();
  }, [text]);

  function searchFunction() {
    handle = products.filter((ele) => {
      return ele.title.toLowerCase().includes(text.toLowerCase());
    });
    setHandle(handle);
  }

  //console.log(searched);

  return (
    <>
      <h3>Time : {time}</h3>
      <input
        type="text"
        onKeyUp={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <table>
        <tr>
          <th className="s-no">S.no</th>
          <th className="title">Title</th>
          <th className="price">Price</th>
        </tr>

        {handle.map((product, index) => {
          return (
            <tr key={index}>
              <td className="s-no">{product.id}</td>
              <td className="title">{product.title}</td>
              <td className="price">$ {product.price}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Search_bar;
