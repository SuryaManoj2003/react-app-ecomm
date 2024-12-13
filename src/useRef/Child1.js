import { useContext, useState } from "react";
import { context } from "../App";

export default function Child1(props) {
  let data = useContext(context);
  let [text, setText] = useState("");

  // let [count, setCount] = useState(1);
  // let [num1, num2] = [20, 30];
  // var value = useMemo(() => {
  //   console.log(num1 + count);

  //   return num1 + count;
  // }, [num1, count]);

  return (
    <>
      <h1 className="text-primary">This is Child1 component {data.name1}</h1>
      <h1>This is child1 component {data.age}</h1>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          props.method(text);
        }}
      >
        Submit
      </button>
    </>
  );
}
