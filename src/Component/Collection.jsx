import React from "react";
import "../Style/Collection.css";
import CollectionData from "../DataComponet/Collection/index";

const Collection = () => {
  return (
    <>
      <div className="container">
        <div className="collection-heading">
          <h2>
            Your Ultimate Driving Experience <br />
            Begins Here
          </h2>
          <p>
            where each vehicle is meticulously crafted to elevate your driving
            experience <br />
            to unparalleled levels of luxury and performance.
          </p>
        </div>

        <div className="scroller-main">
          <div className="scroller">
            <img src="./assets/Video/scroll-1.gif" alt="" />
            <img
              src="./assets/Video/2b91a368ce176d7c7811ab3bb369fdd0.gif"
              alt=""
            />
            <img src="./assets/Video/scroll-1.gif" alt="" />
            <img
              src="./assets/Video/2b91a368ce176d7c7811ab3bb369fdd0.gif"
              alt=""
            />
          </div>
          
          <div className="data">
            <CollectionData />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
