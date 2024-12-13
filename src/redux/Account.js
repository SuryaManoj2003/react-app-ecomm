import { useSelector } from "react-redux";

export default function Account() {
  let state = useSelector((s) => {
    return s;
  });
  return (
    <>
      <div className="container">
        <h1>Account Details</h1>
        <table className="table table-bordered w-50">
          <thead>
            <tr>
              <th>Balance</th>
              <th>User Name</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{state.balance}</td>
              <td>{state.userName}</td>
              <td>{state.mobile}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
