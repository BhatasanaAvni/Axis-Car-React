import React from "react";
import "../Style/Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="container foter-container">
        <div className="top-footer">
          <div className="social-icon">
            <FaTwitter />
            <FaFacebook />
            <RiInstagramFill />
            <FaWhatsapp />
          </div>
          <div className="footer-link">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Team</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="get-btn">
            Got To Top
            <svg
              viewBox="0 0 47 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.116211"
                width="46.8835"
                height="46.8835"
                rx="23.4418"
                fill="#A5EFFF"
              />
              <path
                d="M17.1568 18.7463C17.8753 18.7535 18.9554 18.0544 19.8631 17.3449C21.0344 16.4328 22.0593 15.339 22.8457 14.0811C23.4352 13.138 24.0035 11.9931 24.0128 11.0674M24.0128 11.0674C24.0035 11.9931 24.5488 13.1501 25.1194 14.1039C25.8814 15.3773 26.8842 16.4914 28.035 17.4268C28.9294 18.1543 29.9971 18.8749 30.7137 18.8821M24.0128 11.0674L23.7801 34.3078"
                stroke="black"
                stroke-width="0.558712"
              />
            </svg>
          </div>
        </div>
        <div className="bottem-foter">
          <div className="inner-bottem-foter">
            <div className="svg-icon">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0.883301C7.23765 4.64647 10.2368 7.64566 14 7.8833C10.2368 8.12095 7.23765 11.1201 7 14.8833C6.76236 11.1201 3.76317 8.12095 0 7.8833C3.76317 7.64566 6.76236 4.64647 7 0.883301Z"
                  fill="#D9D9D9"
                />
              </svg>
              <span>We want to hear from you</span>
            </div>
            <div className="like-us">
              <p>You’re built different Just like us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
