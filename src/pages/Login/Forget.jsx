import React, { useState, useEffect } from "react";
import "./Login.css";
import "./Register.css"
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
const Forget = () => {
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
        return error;
      };
      const loginHandler = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(user));
        navigate("/", { replace: true });
        // if (!formErrors) {
    
        // }
      };
    return (
        <div className="container_login">
        <div className="centered_login"></div>
      <div className="login">
      <form >
        <h1>Forget Password</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        <p className=".error">{formErrors.email}</p>
        
        <button className="button_common" onClick={loginHandler}>
          Submit
        </button>
      </form>
    </div>
    </div>
    
    );
};

export default Forget;