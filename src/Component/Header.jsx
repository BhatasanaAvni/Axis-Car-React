import React from "react";
import Navbtn from "../SubComponent/Navbtn";
import '../Style/Header.css'

const Header = () => {
  return (
    <div>
      <nav className="container Header">
        <div className="logo-img">
          <img src="./assets/image/CAR BRAND  1.png" alt="" />
        </div>
        <ul className="Nav-link">
          <li>
            <a href="">Vehicles</a>
          </li>
          <li>
            <a href="">Design</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
        </ul>
        <Navbtn />
      </nav>
    </div>
  );
};

export default Header;

