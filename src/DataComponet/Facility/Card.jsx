import React from "react";

const Card = ({ Facilityprops }) => {
  console.log(Facilityprops);

  return (
    <>
      {Facilityprops.map((Facilitymap) => (
        <div key={Facilitymap.id} style={CardContent}>
          <h5 style={Number}>{Facilitymap.Number}</h5>
          <h6 style={heading}>{Facilitymap.heading}</h6>
          <p style={content}>{Facilitymap.content}</p>
        </div>
      ))}
    </>
  );
};

export default Card;

const Number = {
  fontSize: "40px",
  fontWeight: 400,
  lineHeight: "46px",
  color: " #A5EFFF",
};
const heading = {
  fontSize: "16px",
  fontWeight: 400,
  marginTop: "8px",
  marginBottom: "8px",
  lineHeight: "24px",
};
const content = {
  fontSize: "16px",
  fontWeight: 300,
  lineHeight: "24px",
};
const CardContent = {
  width: "100%",
  maxWidth: "300px",
};
