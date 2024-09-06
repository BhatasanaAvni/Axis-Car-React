import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";


const NavButton = {
  background: "transparent",
  textAlign: "center",
  padding: "12px 36px",
  gap: "5px",
  lineHeight: "22px",
  display: "flex",
  alignItems: "center",
  border: "2px solid #fff",
  fontSize: "12px",
};

const link ={
  display:'flex',
  alignItems:'center'
}
const Navbtn = () => {
  return (
    <div>
      <button style={NavButton}>
        <a href="" style={link}>
          Contact Us
          <MdOutlineArrowOutward />
        </a>
      </button>
    </div>
  );
};

export default Navbtn;
