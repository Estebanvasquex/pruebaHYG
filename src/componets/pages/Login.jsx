import React, { useState } from "react";

import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";

import  "../../styles/styles.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const nav = useNavigate();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.email === "estebanvasquex@gmail.com" && user.password === "123") {
      nav("/users");
      console.log(user);
    } else {
      alert("Debe verificar los parametros");
    }
  };

  return (
    <section className="containerMain">
      <div className="form-box">
        <div className="form-value">
          <form action="" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="input-box">
              <EmailIcon fontSize="small" className="iconMui" />
              <input
                type="email"
                required
                name="email"
                onChange={handleChange}
              />
              <label htmlFor="">Email</label>
            </div>

            <div className="input-box">
              <HttpsIcon fontSize="small" className="iconMui" />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                required
              />
              <label htmlFor="">Pasword</label>
            </div>

            <div className="forget">
              <label htmlFor="">
                <input type="checkbox" /> Remember Me{" "}
                <a href="#" className="prueba">
                  Forget Password
                </a>
              </label>
            </div>
            <button>log in</button>
            <div className="register">
              <p>
                Don't have an account? <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
