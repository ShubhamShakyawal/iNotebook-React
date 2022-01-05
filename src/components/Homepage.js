import React from "react";
import image1 from "../1.png";
import image2 from "../2.png";
import image3 from "../3.png";
import white from "../white.png";
export default function Homepage() {
  return (
    <div className="m-0 p-0">
      <img
        className="position-absolute top-0"
        src={image1}
        alt="image1"
        style={{ width: "100%", minHeight: "100%" }}
      />
      <img src={white} alt="white" style={{ width: "82%", minHeight: "70%" }} />
      <img
        src={image2}
        alt="image2"
        style={{ width: "100%", minHeight: "100%" }}
      />
      <img
        src={image3}
        alt="image3"
        style={{ width: "100%", minHeight: "90%" }}
      />
    </div>
  );
}
