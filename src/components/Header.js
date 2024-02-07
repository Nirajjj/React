import { useState } from "react";
const Header = () => {
  const [btn, setbtn] = useState("Login");
  return (
    <header className="main-header">
      <h1>DineEase</h1>
      <ul>
        <li>Home</li>
        <li>Offers</li>
        <li>Help</li>
        <li>About us</li>
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
