import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btn, setbtn] = useState("Login");
  return (
    <header className="main-header">
      <h1>
        <Link to={"/"}>DineEase</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Help</Link>
        </li>
        <li>
          <Link to="/About">About us</Link>
        </li>
        <li>Cart</li>
        <button
          className="login-btn"
          onClick={() => {
            btn === "Login" ? setbtn("Log out") : setbtn("Login");
          }}
        >
          {btn}
        </button>
      </ul>
    </header>
  );
};

export default Header;
