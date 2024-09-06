import React from "react";
import "../Style/Slider.css";
const Slider = () => {
  return (
    <div>
        <div className="container slider-conteiner">
          <div className="slider-heading">
            <h4>
              A World of <br />
              Automotive Excellence
            </h4>
            <p>
              where each vehicle is meticulously crafted to elevate your driving
              experience <br />
              to unparalleled levels of luxury and performance.
            </p>
          </div>
          <div className="slider-img">
            
            <img
              src="./assets/image/sam-warren-F6dapEqCwOE-unsplash.png"
              alt=""
            />
            <img
              src="./assets/image/giorgio-trovato-oSQj-4_NVMs-unsplash.png"
              alt=""
            />
            <img
              src="./assets/image/victor-furtuna-0mchrVHAYzg-unsplash.png"
              alt=""
            />
            <img
              src="./assets/image/taras-chernus--Y8-NNDqiRM-unsplash.png"
              alt=""
            />
          </div>
        </div>
      </div>
  );
};

export default Slider;
