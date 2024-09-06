import React from "react";
import "../Style/Performence.css";
import Btn from "../SubComponent/Btn";

const Performence = () => {
  return (
    <div>
      <div className="container performence-section">
        <div className="performence-heading">
          <h5> Highly sought after </h5>
          <p>
            Collectors and enthusiasts due to their rarity, unique design, and
            exceptional <br /> performance capabilitie
          </p>
          <Btn />
        </div>
      </div>
    </div>
  );
};

export default Performence;
