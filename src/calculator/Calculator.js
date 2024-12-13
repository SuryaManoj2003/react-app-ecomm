import React, { useEffect, useState } from "react";
import "./cal-index.css";

export function Test() {
  return (
    <>
      <h1>Hii</h1>
    </>
  );
}

export function Calculator() {
  let [answer, setAnswer] = useState("");

  // let [values, setValues] = useState([]);

  let a = "";
  function clear() {
    setAnswer();
  }

  useEffect(() => {
    console.log("hii");
  }, [answer]);

  return (
    <>
      <h1 className="heading">Calculator App</h1>
      <div className="container">
        <section className="display">
          <p className="display-text">{answer}</p>
        </section>

        <button
          className="btn-7 button"
          onClick={(e) => {
            a =
              document.querySelector(".display-text").innerHTML +
              e.target.innerHTML;

            setAnswer(a);
          }}
        >
          7
        </button>
        <button
          className="btn-8 button"
          onClick={(e) => {
            a =
              document.querySelector(".display-text").innerHTML +
              e.target.innerHTML;

            setAnswer(a);
          }}
        >
          8
        </button>
        <button
          className="btn-9 button"
          onClick={(e) => {
            a =
              document.querySelector(".display-text").innerHTML +
              e.target.innerHTML;

            setAnswer(a);
          }}
        >
          9
        </button>
        <button
          className="btn-div button"
          onClick={(e) => {
            a =
              document.querySelector(".display-text").innerHTML +
              e.target.innerHTML;

            setAnswer(a);
          }}
        >
          /
        </button>
        <button
          className="btn-4 button"
          onClick={(e) => {
            a =
              document.querySelector(".display-text").innerHTML +
              e.target.innerHTML;

            setAnswer(a);
          }}
        >
          4
        </button>
        <button
          className="btn-5 button"
          onClick={(e) => {
            a =
              document.querySelector(".display-text").innerHTML +
              e.target.innerHTML;

            setAnswer(a);
          }}
        >
          5
        </button>
        <button
          className="btn-6 button"
          onClick={(e) => {
            a =
              document.querySelector(".display-text").innerHTML +
              e.target.innerHTML;

            setAnswer(a);
          }}
        >
          6
        </button>
        <button
          className="btn-mul button"
          onClick={(e) => {
            a =
              document.querySelector(".display-text").innerHTML +
              e.target.innerHTML;

            setAnswer(a);
          }}
        >
          *
        </button>
        <button
          className="btn-1 button"
          onClick={(e) => {
            a =
              document.querySelector(".display-text").innerHTML +
              e.target.innerHTML;

            setAnswer(a);
          }}
        >
          1
        </button>
        <button
          className="btn-2 button"
          onClick={(e) => {
            a =
              document.querySelector(".display-text").innerHTML +
              e.target.innerHTML;

            setAnswer(a);
          }}
        >
          2
        </button>
        <button
          className="btn-3 button"
          onClick={(e) => {
            a =
              document.querySelector(".display-text").innerHTML +
              e.target.innerHTML;

            setAnswer(a);
          }}
        >
          3
        </button>
        <button
          className="btn-sub button"
          onClick={(e) => {
            a =
              document.querySelector(".display-text").innerHTML +
              e.target.innerHTML;

            setAnswer(a);
          }}
        >
          -
        </button>
        <button
          className="btn-0 button"
          onClick={(e) => {
            a =
              document.querySelector(".display-text").innerHTML +
              e.target.innerHTML;

            setAnswer(a);
          }}
        >
          0
        </button>
        <button
          className="btn-equal button"
          onClick={() => {
            setAnswer(eval(answer));
          }}
        >
          =
        </button>
        <button
          className="btn-clear button"
          onClick={() => {
            clear();
          }}
        >
          C
        </button>
        <button
          className="btn-add button"
          onClick={(e) => {
            a =
              document.querySelector(".display-text").innerHTML +
              e.target.innerHTML;

            setAnswer(a);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
