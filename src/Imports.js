import React, { useState } from "react";
//import ReactDOM from "react-dom/client";
//import { Map } from "./props/Props";
//import { Information } from "./info";

// export function Func() {
//   return (
//     <div>
//       <h1>Hii Surya Manoj-2</h1>
//       <h2>This is Functional Component</h2>
//     </div>
//   );
// }

// let users = [
//   {
//     id: 10,
//     name: "surya",
//   },
//   {
//     id: 20,
//     name: "Manoj",
//   },
// ];

// export function Func1() {
//   return (
//     <>
//       <div>
//         {users.map((u, i) => {
//           return (
//             <Map key={u.id} {...u} im={i}>
//               Hii Map
//             </Map>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default class Cls extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hii Surya Manoj-1</h1>
//         <div>
//           <h2>This is Class Component</h2>
//         </div>
//       </div>
//     );
//   }
// }

// export function Fragment() {
//   return (
//     <React.Fragment>
//       <div>
//         <h1>Hii Everyone</h1>
//       </div>
//     </React.Fragment>
//   );
// }

// export function Counter() {
//   // let counter = 0 ;

//   function updateCounter() {
//     counter++;
//     setCounter(counter);

//     counter2++;
//     setCounter2(counter2);
//   }

//   let [counter, setCounter] = useState(0);
//   let [counter2, setCounter2] = useState(0);

//   return (
//     <>
//       <p>
//         Counter value : {counter} and Counter2 value : {counter2}
//       </p>
//       <button
//         style={{
//           width: "60px",
//           margin: "10px",
//           marginTop: "-10px",
//           padding: "10px",
//         }}
//         onClick={updateCounter}
//       >
//         Click
//       </button>
//       <button
//         style={{
//           width: "60px",
//           margin: "10px",
//           marginTop: "-10px",
//           padding: "10px",
//         }}
//         onClick={() => {
//           counter = 0;
//           setCounter(counter);
//           setCounter2(counter);
//         }}
//       >
//         Reset
//       </button>
//     </>
//   );
// }

// export class Count extends React.Component {
//   constructor() {
//     super();
//     //this.updatePrice = this.updatePrice.bind(this);
//     this.state = {
//       counter: 0,
//       counter2: 0,
//     };
//   }

//   render() {
//     return (
//       <>
//         <p>
//           Counter value : {this.state.counter} and Counter2 value :
//           {this.state.counter2}
//         </p>
//         <button
//           style={{
//             width: "60px",
//             margin: "10px",
//             marginTop: "-10px",
//             padding: "10px",
//           }}
//           onClick={() => {
//             if (this.state.counter >= 0) {
//               this.setState({
//                 counter: this.state.counter + 1,
//                 counter2: this.state.counter2 + 1,
//               });
//             } else {
//               this.setState({
//                 counter: this.state.counter + 1,
//                 counter2: this.state.counter2 + 1,
//               });
//             }
//           }}
//         >
//           Click
//         </button>
//         <button
//           style={{
//             width: "80px",
//             margin: "10px",
//             marginTop: "-10px",
//             padding: "10px",
//           }}
//           onClick={() => {
//             if (this.state.counter <= 0) {
//               this.setState({
//                 counter: this.state.counter - 1,
//                 counter2: this.state.counter2 - 1,
//               });
//             } else {
//               this.setState({
//                 counter: this.state.counter - 1,
//                 counter2: this.state.counter2 - 1,
//               });
//             }
//           }}
//         >
//           unClick
//         </button>
//         <button
//           style={{
//             width: "60px",
//             margin: "10px",
//             marginTop: "-10px",
//             padding: "10px",
//           }}
//           onClick={() => {
//             if (this.state.counter >= 0) {
//               this.setState({
//                 counter: 0,
//                 counter2: 0,
//               });
//             } else {
//               this.setState({
//                 counter: 0,
//                 counter2: 0,
//               });
//             }
//           }}
//         >
//           Reset
//         </button>
//       </>
//     );
//   }
//   // updatePrice() {
//   //   console.log(this);
//   //   console.log(this.__proto__);
//   // }
// }

// export function InputState() {
//   let [text, setText] = useState("");
//   let [product, updateProduct] = useState({
//     name: "none",
//     price: 0,
//   });
//   // function getText(e) {
//   //   setText(e.target.value);
//   // }
//   return (
//     <>
//       <div className="division">
//         <label htmlFor="input">Enter : </label>
//         <input
//           type="text"
//           id="input"
//           onKeyUp={(e) => {
//             setText(e.target.value);
//           }}
//         />
//         <h1>You Typed : {text}</h1>
//         <button
//           onClick={() => {
//             setText("");
//             document.getElementById("input").value = "";
//           }}
//         >
//           Reset
//         </button>
//         <h1>Product name : {product.name}</h1>
//         <h1>Product price : {product.price}</h1>
//         <p>
//           Product name :
//           <input
//             type="text"
//             id="input-2"
//             onKeyUp={(e) => {
//               let new_price = document.getElementById("input-3").value;
//               updateProduct({
//                 ...product,
//                 name: e.target.value,
//                 price: new_price,
//               });
//             }}
//           ></input>
//         </p>
//         <p>
//           Product price :
//           <input
//             type="text"
//             id="input-3"
//             onKeyUp={(event) => {
//               let new_name = document.getElementById("input-2").value;
//               updateProduct({
//                 name: new_name,
//                 price: event.target.value,
//               });
//             }}
//           ></input>
//         </p>
//         <br />
//         <p>
//           <button
//             onClick={() => {
//               let new_name = document.getElementById("input-2").value;
//               let new_price = document.getElementById("input-3").value;
//               updateProduct({
//                 ...product,
//                 price: new_price,
//                 name: new_name,
//               });
//             }}
//           >
//             Update
//           </button>
//         </p>
//       </div>
//     </>
//   );
// }

// export function BackFunction() {
//   function color() {
//     var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
//     let value = "#";
//     for (let i = 0; i < 6; i++) {
//       value = value + arr[Math.round(Math.random() * 15)];
//     }
//     document.body.style.backgroundColor = value;

//     console.log(value);
//     value = "";

//     console.log("hii");
//   }
//   return (
//     <>
//       <button
//         onClick={() => {
//           color();
//         }}
//       >
//         Color
//       </button>
//     </>
//   );
// }

// export class BackClass extends React.Component {
//   render() {
//     return (
//       <>
//         <br />
//         <br />{" "}
//         <input
//           type="color"
//           onChange={(e) => {
//             document.body.style.backgroundColor = e.target.value;
//           }}
//         ></input>
//       </>
//     );
//   }
// }

// export function Props() {
//   let products = [
//     {
//       id: 1,
//       name: "Lenovo",
//       price: 25000,
//       offerPrice: 21000,
//     },
//     {
//       id: 2,
//       name: "Acer aspire-7",
//       price: 55000,
//       offerPrice: 51000,
//     },
//   ];

//   return (
//     <>
//       {products.map((product, index) => {
//         return (
//           <Information key={index} {...product}>
//             Hii
//           </Information>
//         );
//       })}
//     </>
//   );
// }

// export function Example() {
//   let [product, update] = useState({
//     name: "unknown",
//     price: 0,
//   });
//   return (
//     <>
//       <h1>Product name : {product.name}</h1>
//       <h1>Product Price : {product.price}</h1>
//       Product name :{" "}
//       <input
//         type="text"
//         onKeyUp={(e) => {
//           update({
//             name: e.target.value,
//             price: product.price,
//           });
//         }}
//       ></input>
//       <br></br>
//       <br></br>
//       Product price :{" "}
//       <input
//         type="number"
//         onKeyUp={(e) => {
//           update({
//             name: product.name,
//             price: e.target.value,
//           });
//         }}
//       ></input>
//     </>
//   );
// }

// export function TodoList() {
//   let [task, addTask] = useState();
//   let [items, newItem] = useState([]);
//   return (
//     <>
//       <div className="todo-division">
//         <h1
//           style={{
//             marginRight: "10%",
//           }}
//         >
//           To-Do app using react-js
//         </h1>
//         <div className="add-division">
//           <input
//             type="text"
//             className="add-input"
//             style={{
//               boxShadow: " 1px 1px 3px blue",
//               outline: "none",
//               border: "none",
//             }}
//           ></input>
//           <button
//             className="add-button"
//             onClick={(e) => {
//               var data = document.querySelector(".add-input").value;
//               addTask(data);
//               items.push(
//                 <li className="list-items item-1">
//                   <p className="list-items-text">{data}</p>
//                   <button
//                     className="list-items-button"
//                     onClick={() => {
//                       document.querySelector(".list-items").style.display =
//                         "none";
//                       items.pop();
//                     }}
//                   >
//                     ❌
//                   </button>
//                 </li>
//               );
//             }}
//           >
//             Add
//           </button>
//         </div>
//         <div className="todo-list">
//           <ul className="todo-list-items">
//             {items.map((item) => {
//               return item;
//             })}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

export function TodoList() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  const addTask = (e) => {
    if (task.trim() === "") return;
    else {
      setItems([...items, task]);
      console.log(items);

      setTask("");
      document.querySelector(".add-input").value = "";
    }

    //setTask("");
  };

  document.body.onkeyup = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      setItems([...items, task]);
      console.log(items);

      setTask("");
      document.querySelector(".add-input").value = "";
    }
  };

  const deleteTask = (index) => {
    setItems(
      items.filter((_, i) => {
        console.log(i, index);
        return i !== index;
      })
    );
  };

  return (
    <div className="todo-division">
      <h1 style={{ marginRight: "10%" }}>To-Do app using React.js</h1>
      <div className="add-division">
        <input
          type="text"
          className="add-input"
          //value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            boxShadow: "1px 1px 3px blue",
            outline: "none",
            border: "none",
          }}
        />
        <button
          className="add-button"
          onClick={(e) => {
            addTask(e);
          }}
        >
          Add
        </button>
      </div>
      <div className="todo-list">
        <ul className="todo-list-items">
          {items.map((item, index) => (
            <li key={index} className="list-items">
              <p className="list-items-text">{item}</p>
              <button
                className="list-items-button"
                onClick={() => deleteTask(index)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
