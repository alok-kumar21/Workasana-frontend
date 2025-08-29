import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setTimeout(() => navigate("/login"), 1000);
      } else {
        setMessage(data.error || "Signup failed");
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  return (
    <div id="centerForm" className="d-flex justify-content-center">
      <div>
        <h1 className="text-primary text-center mb-3">Workasana</h1>
        <h2 className="text-center mb-4">SignUp create new Account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="name" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <br />
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Signup
            </button>
          </div>
          <br />
          <Link to="/login">Login</Link>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Signup;
