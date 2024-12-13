import React, { useEffect } from "react";
import axios from "axios";

export default function Form() {
  async function fetching() {
    let data = await axios("https://fakestoreapi.com/products");
    // console.log(data.data);
  }

  useEffect(() => {
    fetching();
  }, []);

  return (
    <>
      <div className="border w-25 mt-5 m-auto p-3">
        <h2 className="text-primary text-center">Login Form</h2>
        <div className="mt-3">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email"></input>
        </div>
        <div className="mt-3">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password"></input>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary w-100">Login</button>
        </div>
      </div>
    </>
  );
}
