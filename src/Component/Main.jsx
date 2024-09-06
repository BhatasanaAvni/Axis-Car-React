import React from "react";
import "../Style/Main.css";
import Btn from "../SubComponent/Btn";
const Main = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="main-heading">
              <h1>
                Axis Model <span>3</span>
              </h1>
          </div>
          <div className="main-btn">
            <Btn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
