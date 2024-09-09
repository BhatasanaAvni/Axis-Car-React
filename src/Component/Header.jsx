import React from "react";
import Navbtn from "../SubComponent/Navbtn";
import "../Style/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="main-header">
      <nav className="container Header">
        <div className="logo-img">
          <img src="./assets/image/CAR BRAND  1.png" alt="" />
        </div>
        <div className="nav-toggle" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`Nav-link ${isOpen ? "open" : ""}`}>
          <li>
            <a href="">Vehicles</a>
          </li>
          <li>
            <a href="">Design</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <Navbtn />
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Header;
