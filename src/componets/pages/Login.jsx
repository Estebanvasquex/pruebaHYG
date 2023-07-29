import React, { useState } from "react";

import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from '@mui/icons-material/Https';

import form from "../../styles/styles.css";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <section className="containerMain">
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2>Login</h2>
            <div className="input-box">
              <EmailIcon fontSize="small" className="iconMui"/>
              <input type="email" required />
              <label htmlFor="">Email</label>
            </div>

            <div className="input-box">
              <HttpsIcon fontSize="small" className="iconMui"/>
              <input type="password" required />
              <label htmlFor="">Pasword</label>
            </div>

            <div className="forget">
              <label htmlFor=""><input type="checkbox" /> Remember Me <a href="#" className="prueba">Forget Password</a></label>
              
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
