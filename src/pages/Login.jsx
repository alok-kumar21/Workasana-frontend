import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../App.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        setMessage("Login successful!");
        navigate("/dashboard");
      } else {
        setMessage(data.error || "Login failed");
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  return (
    <div id="centerForm" className="d-flex justify-content-center ">
      <div>
        {message && (
          <div className="alert alert-success text-center">{message}</div>
        )}
        <h1 className="text-primary text-center">Workasana</h1>
        <h2 className="text-center">Login into your Account</h2>

        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="email">
            Enter Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <br />
          <label className="form-label" htmlFor="password">
            Enter Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <br />
          <div className="d-grid gap-2">
            <button className="btn  btn-primary" type="submit">
              Login
            </button>
          </div>
          <br />
          <Link to="/signup">Signup</Link>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Login;
