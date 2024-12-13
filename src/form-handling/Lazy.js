import { lazy, Suspense, useState } from "react";
// import Form from "./form1";

export default function Lazy() {
  let [click, setClick] = useState(false);
  let M = lazy(() => {
    console.log("Hii");

    return import("./form1");
  });

  return (
    <>
      <h1>Lazy Loading using conditional rendering</h1>
      <button
        onClick={() => {
          !click ? setClick(true) : setClick(false);
        }}
      >
        Open
      </button>
      {click && (
        <Suspense>
          <M></M>
        </Suspense>
      )}
    </>
  );
}
