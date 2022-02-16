import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/userAction";

export default function Form() {
  const dispacth = useDispatch();
  const [data, setData] = useState({
    user_github: "",
    email: "",
    terms: false,
  });
  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (data.terms) {
      dispacth(createUser(data));
      resetForm();
    } else {
      alert("Please accept the terms and conditions");
    }
  }
  function resetForm() {
    setData({
      user_github: "",
      email: "",
      terms: false,
    });
  }
  const { user_github, email, terms } = data;
  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="control-label" htmlFor="user_github">
          Usuario Github:
        </label>
        <input
          type="text"
          className="form-control input-lg"
          id="user_github"
          name="user_github"
          value={user_github}
          onChange={handleChange}
          placeholder="Ingresa un usuario"
        />
        <p className="help-block"></p>
      </div>
      <div className="form-group">
        <label className="control-label" htmlFor="email">
          Correo:
        </label>
        <input
          type="email"
          className="form-control input-lg"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Ingresa un correo"
        />
        <p className="help-block"></p>
      </div>
      <div className="checkbox terms-checkbox">
        <label>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={terms}
            onChange={handleChange}
          />
          Acepto los términos y condiciones
        </label>
      </div>
      <div className="action text-right">
        <button type="submit" className="btn btn-primary btn-block btn-lg">
          Registrarse
        </button>
      </div>
    </form>
  );
}
