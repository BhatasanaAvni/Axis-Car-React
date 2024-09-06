import React from "react";
import FacilityData from "../DataComponet/Facility/Index";
const Facility = () => {
  return (
    <>
      <div className="container">
        <div className="facility-container" style={{width: "100%" , maxWidth: "664px"}}>
          <FacilityData />
        </div>
      </div>
    </>
  );
};

export default Facility;
