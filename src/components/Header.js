import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btn, setbtn] = useState("Login");
  return (
    <header className="main-header z-10">
      <h1 className="font-lob font">
        <Link
          to={"/"}
          className="font-lob font-semibold text-[#43766c] text-2xl"
        >
          DineEase
        </Link>
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
