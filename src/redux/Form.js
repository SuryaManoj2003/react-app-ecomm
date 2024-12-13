import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Form() {
  let [stateAmount, setAmount] = useState(0);
  let [number, setNumber] = useState(0);
  let [name, setName] = useState("-");
  let dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <input
              className="form-control m-2"
              placeholder="Enter the amout"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              onFocus={(e) => {
                setAmount("");
              }}
              value={stateAmount}
            ></input>
          </div>
          <button
            className="btn btn-primary col-2 m-2"
            onClick={(e) => {
              dispatch({ type: "deposit", amount: stateAmount });
              setAmount(0);
            }}
          >
            Deposit
          </button>
          <button
            className="btn btn-danger col-2 m-2"
            onClick={(e) => {
              dispatch({ type: "withdraw", amount: stateAmount });
              setAmount(0);
            }}
          >
            Withdraw
          </button>
          <div className="col-4">
            <input
              className="form-control m-2"
              placeholder="Enter the name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              onFocus={(e) => {
                setName("");
              }}
              value={name}
            ></input>
          </div>
          <button
            className="btn btn-primary col-2 m-2"
            onClick={(e) => {
              dispatch({ type: "name", updatedName: name });
              setName("-");
            }}
          >
            Update
          </button>
          <button className="btn  col-2 m-2"></button>
          <div className="col-4">
            <input
              className="form-control m-2"
              placeholder="Enter the number"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              onFocus={(e) => {
                setNumber("");
              }}
              value={number}
            ></input>
          </div>
          <button
            className="btn btn-primary col-2 m-2"
            onClick={(e) => {
              dispatch({ type: "number", updatedNumber: number });
              setNumber(0);
            }}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}
