import { useEffect, useState } from "react";
import getData from "./apiCalls";
import "./crud.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { EditForm, AddForm } from "./Crud_Form";

export function DataDisplay() {
  let [products, setProducts] = useState([]);

  let [showModal, setShowModal] = useState(false);

  let [addModal, setAddModal] = useState(false);

  let [productId, setProductId] = useState(0);

  let [prevData, setPrevData] = useState({});

  // async function previousData(prev) {
  //   setPrevData(prev);
  // }

  async function data() {
    let response = await getData();
    setProducts(response.data);
  }

  async function deleteButton(id) {
    axios.delete("http://localhost:3000/products/" + id);
    data();
  }

  async function saveButton(productData) {
    axios.put("http://localhost:3000/products/" + productId, {
      ...productData,
      id: productId,
    });
    data();
    setShowModal(!showModal);
    // console.log(productData);
  }

  async function cancelButton(modal) {
    setShowModal(modal);
    setAddModal(modal);
  }

  async function addSaveButton(productData) {
    axios.post("http://localhost:3000/products", {
      ...productData,
    });
    data();
    setAddModal(!addModal);
    // console.log(productData);
  }

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <h2
        className="text-primary"
        style={{
          textAlign: "center",
        }}
      >
        CRUD Operations with React JS
      </h2>

      <div className="table-container">
        <div className="button">
          <button
            className="btn btn-primary"
            onClick={() => {
              setAddModal(true);
            }}
          >
            Add new
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th className="product-id">ID</th>
              <th className="product-name">Name</th>
              <th className="product-image">Product</th>
              <th className="product-price">Price</th>
              <th className="product-operations"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>
                    <h6>{product.id}</h6>
                  </td>
                  <td>
                    <h6>{product.title}</h6>
                  </td>
                  <td>
                    <img src={product.image} alt="pic of a mobile"></img>
                  </td>
                  <td>
                    <h6>Rs.{product.price}/-</h6>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary m-2"
                      onClick={() => {
                        setShowModal(true);
                        setProductId(product.id);
                        setPrevData(product);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteButton(product.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {showModal && (
          <EditForm
            cancel={cancelButton}
            show={showModal}
            save={saveButton}
            previous={prevData}
          ></EditForm>
        )}
        {addModal && (
          <AddForm
            cancel={cancelButton}
            add={addModal}
            save={addSaveButton}
          ></AddForm>
        )}
      </div>
    </>
  );
}
