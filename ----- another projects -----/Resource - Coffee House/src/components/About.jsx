import React from "react";
import image1 from "../assets/about-1.jpg";
import image2 from "../assets/about-2.jpg";
import image3 from "../assets/about-3.jpg";
import image4 from "../assets/about-4.jpg";

function About() {
  return (
    <div>
      <h1 className="about-title" id="about">
        Resource is{" "}
        <span>
          <i>the perfect and cozy place</i>
        </span>{" "}
        where you can enjoy a variety of hot beverages, relax, catch up with
        friends, or get some work done.
      </h1>

      <div className="imgs">
        <div className="img-wrapper">
          <img style={{ height: "590px" }} src={image1} alt="image" />
        </div>

        <div style={{ height: "430px" }} className="img-wrapper none-img">
          <img src={image2} alt="image" />
        </div>

        <div style={{ height: "430px" }} className="img-wrapper none-img">
          <img src={image3} alt="image" />
        </div>

        <div className="img-wrapper">
          <img style={{ height: "590px" }} src={image4} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default About;
