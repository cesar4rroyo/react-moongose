import React from "react";
import data from "./data";

export default function Table() {
  return (
    <table className="table bordered-table table-striped">
      <thead>
        <tr>
          <th className="text-center">Usuario Github</th>
          <th className="text-center">Correo</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="text-center">{item.user_github}</td>
            <td className="text-center">{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
