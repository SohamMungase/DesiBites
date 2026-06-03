import { Logo_url } from "../utils.js/constant";
import React, { useState } from "react";
import { Link } from "react-router";

const Header = () => {

  const [btn,setBtn] = useState("Login")

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo_url} />
      </div>

      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Body</Link>
      </div>

      <button onClick={()=>{
        btn === "Login"? setBtn("Logout") : setBtn("Login")
      }}></button>
    </div>
  );
};

export default Header;
