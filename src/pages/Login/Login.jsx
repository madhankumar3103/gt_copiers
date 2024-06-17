import React, { useState, useEffect } from "react";
import "./Login.css";
import "./Register.css"
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {

    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      navigate("/", { replace: true });
      setUserState(user);
      user.name = "Preetha"
      localStorage.setItem('isLoggedIn',JSON.stringify(user));
      window.location.reload()

  /*
      axios.post("http://localhost:9002/login", user).then((res) => {
        alert(res.data.message);
        setUserState(res.data.user);
        navigate("/", { replace: true });
      });
      */
    }
  }, [formErrors]);
  return (
    <div className="container_login">
      <div className="centered_login"></div>
    <div className="login">
    <form >
      <h1>Login</h1>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={changeHandler}
        value={user.email}
      />
      <p className=".error">{formErrors.email}</p>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={changeHandler}
        value={user.password}
      />
      <p className=".error">{formErrors.password}</p>
      <button className="button_common" onClick={loginHandler}>
        Login
      </button>
    </form>
    <div style={{"width" : "100%"}}> 
    <div style={{"width" : "50%","float": "left"}}>
      <NavLink to="/forget" className="login_nav_left">Forget Password</NavLink>
    </div>
    <div style={{"width" : "50%","float": "left"}}>
      <NavLink to="/signup" className="login_nav_right">Register Now</NavLink>
    </div>
    </div>
  </div>
  </div>
  
  );
};
export default Login;