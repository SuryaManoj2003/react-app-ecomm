import React, { lazy, useState } from "react";
import "./App.css";
// import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//import getData from "./crud/apiCalls";
//import { Props, BackClass, BackFunction, InputState } from "./import/Imports";
// import { TodoList } from "./Imports";
// import { Calculator } from "./calculator/Calculator";
// import { UseEffect } from "./apiCards/UseEffect";
//import { UseRef } from "./useRef/UseRef";
// import Search_bar from "./apiCards/Search_bar";

// import Child2 from "./useRef/Child2";

// import { Form } from "./form-handling/form1";

// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// function Header() {
//   return (
//     <>
//       <header className="header">
//         <ul className="links-list">
//           <li className="link-1">
//             <Link to={"/"} className="Link">
//               Home
//             </Link>
//           </li>
//           <li className="link-2">
//             <Link
//               to={"products/80/manoj?category=men's&posts=200"}
//               className="Link"
//             >
//               Products
//             </Link>
//           </li>
//         </ul>
//       </header>
//     </>
//   );
// }

// function Routing() {
//   return (
//     <Routes>
//       <Route path="/" element={""}></Route>
//       <Route path="products" element={<UseEffect></UseEffect>}></Route>
//       <Route
//         path="products/:id/:name"
//         element={<UseEffect></UseEffect>}
//       ></Route>
//     </Routes>
//   );
// }

// function App() {
//   return (
//     <>
//       {/* <Cls></Cls>
//       <Func />

//       <Fragment /> */}
//       {/* <Func1 /> */}
//       {/* <Counter />
//       <Count />  */}
//       {/* <InputState />
//       <BackFunction />
//       <BackClass />
//       <Props /> */}
//       {/* <TodoList></TodoList> */}
//       {/* <Calculator></Calculator> */}
//       {/* <UseEffect></UseEffect> */}

//       <BrowserRouter>
//         <Header></Header>
//         <Routing></Routing>
//       </BrowserRouter>
//     </>
//   );
// }
// export default App;

// export var context = createContext();

// let Lazy = lazy(() => import("./form-handling/Lazy"));

// export default function App() {
//   // let name1 = "surya";
//   // let age = 30;
//   return (
//     <>
//       {/* <context.Provider value={{ name1, age }}>
//         <UseRef></UseRef>
//       </context.Provider> */}
//       {/* <Search_bar></Search_bar> */}
//       <BrowserRouter>
//         <Link to={"/"}>Home</Link>
//         <Link to={"about"}>About</Link>

//         <Suspense>
//           <Routes>
//             <Route path="/" element={<h1>Hii this is Home</h1>}></Route>
//             <Route path="about" element={<Lazy></Lazy>}></Route>
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </>
//   );
// }

// import Higher from "./HigherOrder/Higher";

// function App1(props) {
//   return <h1>Hello mr {props.name}</h1>;
// }

// let My = Higher(App1);

// import PropTypes from "prop-types";

// function PropType(props) {
//   return (
//     <>
//       <h1>Hello {props.name}</h1>
//     </>
//   );
// }

// PropType.propTypes = {
//   name: PropTypes.string,
// };

// function Portal() {
//   return ReactDOM.createPortal(
//     <button>Click</button>,
//     document.getElementById("portal")
//   );
// }

// import { DataDisplay } from "./crud/DataDisplay";

// export default function App() {
//   return (
//     <>
//       <DataDisplay></DataDisplay>
//     </>
//   );
// }

import Home from "./template/nav_bar/home";
// import Footer from "./template/footer/footer";

import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import "./template/nav_bar/nav_bar.css";

const Footer = lazy(() => import("./template/footer/footer"));

const About = lazy(() => import("./template/about/about"));

const ProductComponent = lazy(() => import("./template/products/products"));

// function Options() {

//   return (
//     <>
//       <div className="options-container">
//         <Link
//           to="/"

//         >
//           Home
//         </Link>
//         <Link to="about">About</Link>
//         <Link to="products">Products</Link>
//       </div>
//     </>
//   );
// }

export function Routing() {
  let [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <div className="nav-bar">
        <h1 className="nav-bar-heading">SHONER</h1>

        <div className="links-container">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="products">Products</Link>
        </div>

        <div className="search">
          <input type="text" placeholder="Search..."></input>
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button
            onClick={() => {
              setShowOptions(!showOptions);
            }}
            className="options-button"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          {showOptions && (
            <div className="options-container">
              <Link
                to="/"
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
              >
                Home
              </Link>
              <Link
                to="about"
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
              >
                About
              </Link>
              <Link
                to="products"
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
              >
                Products
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <div className="main-heading-container">
        <h1 className="main-heading">SHONER</h1>
      </div>

      <BrowserRouter>
        <Routing></Routing>
        <Routes>
          <Route path="" element={""}>
            <Route path="/" element={<Home></Home>}></Route>
          </Route>

          <Route path="about" element={<About></About>}></Route>
          <Route
            path="products"
            element={<ProductComponent></ProductComponent>}
          ></Route>
        </Routes>
      </BrowserRouter>

      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
