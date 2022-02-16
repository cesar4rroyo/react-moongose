import React from "react";
import { useSelector } from "react-redux";

export default function Table() {
  const state = useSelector((state) => state.user);
  console.log(state);

  return (
    <table className="table bordered-table table-striped">
      <thead>
        <tr>
          <th className="text-center">Usuario Github</th>
          <th className="text-center">Correo</th>
        </tr>
      </thead>
      <tbody>
        {state.map((item) => (
          <tr key={item._id}>
            <td className="text-center">{item.user_github}</td>
            <td className="text-center">{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
