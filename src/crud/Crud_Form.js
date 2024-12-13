import { useState } from "react";
import "./form.css";

export function EditForm(props) {
  let [details, setDetails] = useState(props.previous);

  return (
    <div className="form-modal">
      <div className="form-container">
        <h1
          style={{
            color: "#ff6f33",
          }}
        >
          Edit Details
        </h1>
        <label htmlFor="mobile-name" className="label">
          Enter the mobile name
        </label>
        <input
          onChange={(e) => {
            setDetails({
              ...details,
              title: e.target.value,
            });
          }}
          value={details.title}
          type="text"
          placeholder="Enter the name of the mobile"
          className="form-controls"
          id="mobile-name"
        ></input>
        <label htmlFor="mobile-image" className="label">
          Enter the url of the image
        </label>
        <input
          onChange={(e) => {
            setDetails({
              ...details,
              image: e.target.value,
            });
          }}
          value={details.image}
          type="text"
          placeholder="Enter the url of the mobile image"
          className="form-controls"
          id="mobile-image"
        ></input>
        <label htmlFor="mobile-price" className="label">
          Enter the mobile price
        </label>
        <input
          onChange={(e) => {
            setDetails({
              ...details,
              price: e.target.value,
            });
          }}
          value={details.price}
          type="number"
          placeholder="Enter the price of the mobile"
          className="form-controls"
          id="mobile-price"
        ></input>
        <div className="form-buttons">
          <button
            className="btn btn-primary"
            onClick={() => {
              props.save(details);
            }}
          >
            Save
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.cancel(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export function AddForm(props) {
  let [details, setDetails] = useState({
    title: "",
    url: "",
    price: 0,
  });
  return (
    <div className="form-modal">
      <div className="form-container">
        <h1
          style={{
            color: "#ff6f33",
          }}
        >
          Add new Mobile
        </h1>
        <label htmlFor="mobile-name" className="label">
          Enter the mobile name
        </label>
        <input
          onKeyUp={(e) => {
            setDetails({
              ...details,
              title: e.target.value,
            });
          }}
          type="text"
          placeholder="Enter the name of the mobile"
          className="form-controls"
          id="mobile-name"
        ></input>
        <label htmlFor="mobile-image" className="label">
          Enter the url of the image
        </label>
        <input
          onKeyUp={(e) => {
            setDetails({
              ...details,
              image: e.target.value,
            });
          }}
          type="text"
          placeholder="Enter the url of the mobile image"
          className="form-controls"
          id="mobile-image"
        ></input>
        <label htmlFor="mobile-price" className="label">
          Enter the mobile price
        </label>
        <input
          onKeyUp={(e) => {
            setDetails({
              ...details,
              price: e.target.value,
            });
          }}
          type="number"
          placeholder="Enter the price of the mobile"
          className="form-controls"
          id="mobile-price"
        ></input>
        <div className="form-buttons">
          <button
            className="btn btn-primary"
            onClick={() => {
              props.save(details);
            }}
          >
            Save
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.cancel(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// {
//   "products": [
//     {
//       "title": "Vivo v21",
//       "price": 21000,
//       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uj6d5haBV93vlxdRaVxE4wS2YivGqRVHLQ&s",
//       "id": 1
//     },

//     {
//       "title": "Mi 11x",
//       "price": 27000,
//       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWl4_dVJlV5Zqi0wB5FfLFDdjP6eushN4sg&s",
//       "id": 2
//     },
//     {
//       "title": "vivo v6",
//       "price": 14000,
//       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3yxKh4ejkDTJsx0q1F2MUMu8Fjdq7iXiuA&s",
//       "id": 3
//     }
//   ]
// }
