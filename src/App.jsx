import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listUsers } from "./actions/userAction";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Formulario de Registro</h1>
        <Form />
      </div>
      <div className="">
        <div className="col-sm-10 col-sm-offset-1">
          <h1>Lista de Usuarios</h1>
          <Table />
        </div>
      </div>
    </div>
  );
}
