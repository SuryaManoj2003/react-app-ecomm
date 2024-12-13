import React from "react";
import "./card.css";
export default function Card(props) {
  let discount = (props.price - props.price * 0.1).toFixed(2);
  return (
    <>
      <div className={`card-container card-${props.id}`}>
        <img src={props.image} className="card-img" alt="product-image"></img>
        <p className="card-title">{props.title}</p>

        <h2 className="card-price">Price : ${discount}</h2>
        <p className="card-original-price">
          <strike>Price : ${props.price}</strike>
        </p>
        <button className="card-button">Shop now</button>
      </div>
    </>
  );
}
