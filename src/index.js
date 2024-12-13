import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

// var hello = () => {
//   return (
//     <div>
//       <h1>Hello Manoj</h1>
//     </div>
//   );
// };

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
