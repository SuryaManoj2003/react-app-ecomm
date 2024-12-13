import { createStore } from "redux";

let initialState = {
  balance: null,
  userName: "",
  mobile: null,
};

let initialAction = {
  type: "",
  amount: 0,
  updatedName: "",
  updatedNumber: null,
};

function accountReducer(state = initialState, action = initialAction) {
  if (action.type === "deposit") {
    return { ...state, balance: state.balance + +action.amount };
  } else if (action.type === "withdraw") {
    if (state.balance >= +action.amount) {
      return { ...state, balance: state.balance - +action.amount };
    } else {
      alert("You have insufficient balance");
      return { ...state };
    }
  } else if (action.type === "name") {
    return { ...state, userName: action.updatedName };
  } else if (action.type === "number") {
    return { ...state, mobile: action.updatedNumber };
  } else if (action.type === "reset") {
    return initialState;
  } else {
    return initialState;
  }
}

let store = createStore(accountReducer);

// store.dispatch({ type: "deposit", amount: 0 });
// store.dispatch({ type: "name", updatedName: "" });
// store.dispatch({ type: "number", updatedNumber: null });
// store.dispatch({ type: "withdraw", amount: 21000 });

store.dispatch({ type: "" });

export default store;
