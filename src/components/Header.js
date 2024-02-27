import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/createContext";
import { useSelector } from "react-redux";
import { HiHome } from "react-icons/hi2";
import { IoIosHelpBuoy } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
  const [btn, setbtn] = useState("Login");
  const { loginUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const [activeNumber, setActiveNumber] = useState(1);
  const handleClick = (elem) => {
    setActiveNumber(elem);
  };

  return (
    <header className="main-header z-10 shadow-lg">
      <Link to={"/"} className="font-lob font-semibold text-[#43766c] text-2xl">
        <h1 className="font-lob font" id="logo">
          DineEase
        </h1>
      </Link>

      <ul>
        <li onClick={() => handleClick(1)}>
          <Link
            to="/"
            className={`after ${activeNumber === 1 ? "active" : ""}`}
          >
            <div className="flex justify-center items-start">
              <HiHome className="text-xl text-[#43766c]" />
              <span className="ml-2">Home</span>
            </div>
          </Link>
        </li>
        <li onClick={() => handleClick(2)}>
          <Link
            to="/contact"
            className={`after ${activeNumber === 2 ? "active" : ""}`}
          >
            <div className="flex justify-center items-start">
              <IoIosHelpBuoy className="text-xl text-[#43766c]" />
              <span className="ml-2">Help</span>
            </div>
          </Link>
        </li>
        <li onClick={() => handleClick(3)}>
          <Link
            to="/about"
            className={`after ${activeNumber === 3 ? "active" : ""}`}
          >
            <div className="flex justify-center items-start">
              <IoIosInformationCircle className="text-xl text-[#43766c]" />
              <span className="ml-2">About</span>
            </div>
          </Link>
        </li>
        <li onClick={() => handleClick(4)}>
          <Link
            to="/cart"
            className={`after ${activeNumber === 4 ? "active" : ""}`}
          >
            <div className="flex justify-center items-start">
              <FaCartShopping className="text-xl text-[#43766c]" />
              <span className="ml-2">Cart ({cartItems.length})</span>
            </div>
          </Link>
        </li>
        <button
          className="login-btn"
          onClick={() => {
            btn === "Login" ? setbtn("Log-Out") : setbtn("Login");
          }}
        >
          {btn}
        </button>
      </ul>
    </header>
  );
};

export default Header;
