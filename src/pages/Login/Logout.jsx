import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";


const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedInData = localStorage.getItem('isLoggedIn');
        if(isLoggedInData!=null){
          localStorage.removeItem('isLoggedIn');
          navigate("/", { replace: true });
        }
        console.log("logout")
        window.location.reload()
        /*
          axios.post("http://localhost:9002/login", user).then((res) => {
            alert(res.data.message);
            setUserState(res.data.user);
            navigate("/", { replace: true });
          });
          */
      }, []);

    return (
        <div>
           
        </div>
    );
};

export default Logout;