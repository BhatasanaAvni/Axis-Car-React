import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";


const btn = {
  background: "#343430",
  textAlign: "center",
  padding: "12px 36px",
  display: "flex",
  alignItems: "center",
  border: "0.56px solid #ffff",
  fontSize: "26.82px",
  fontWeight: 300,
  lineHeight: "26.94px",
};

const Btn = () => {
  return (
    <div>
     <div className="btn">
      <button style={btn}>
        <a href="">Order Now
          <MdOutlineArrowOutward/>        
        </a>
      </button>
     </div>
    </div>
  )
}

export default Btn
