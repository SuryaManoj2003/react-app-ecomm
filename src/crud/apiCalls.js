import axios from "axios";

export default async function getData() {
  var response = await axios.get("http://localhost:3000/products");
  return response;
}
