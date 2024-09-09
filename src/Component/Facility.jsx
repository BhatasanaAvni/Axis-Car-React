import React from "react";
import FacilityData from "../DataComponet/Facility/Index";
import "../Style/Facility.css";
const Facility = () => {
  return (
    <>
      <div className="container">
        <div className="facility-container">
          <FacilityData />
        </div>
      </div>
    </>
  );
};

export default Facility;
