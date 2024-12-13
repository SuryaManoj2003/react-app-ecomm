// import React, { useEffect, useRef, useState } from "react";

import { useRef, useState } from "react";
import Child1 from "./Child1";
// import { Link, Outlet } from "react-router-dom";
export function UseRef() {
  var input = useRef([]);

  let [text, setText] = useState("");

  function receivedText(content) {
    setText(content);
  }

  // useEffect(() => {

  // }, [count]);

  return (
    <>
      {/* <button>
        <Link to={"hii"}>Hii</Link>
      </button>
      <Outlet></Outlet> */}
      <h1
        ref={(ele) => {
          input.current[0] = ele;
        }}
        onClick={(e) => {
          e.target.innerHTML =
            e.target.innerHTML === "Changed" ? "This is heading 1" : "Changed";
          input.current[1].innerHTML = "This is heading 2";
        }}
      >
        This is heading 1
      </h1>
      <h1
        ref={(ele) => {
          input.current[1] = ele;
        }}
        onClick={(e) => {
          e.target.innerHTML =
            e.target.innerHTML === "Changed" ? "This is heading 2" : "Changed";
          input.current[0].innerHTML = "This is heading 1";
        }}
      >
        This is heading 2
      </h1>

      <Child1 method={receivedText}></Child1>
      <h2>Value : {text}</h2>
    </>
  );
}
