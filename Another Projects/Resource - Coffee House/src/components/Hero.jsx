import React from "react";
import video from "../assets/video.mp4";
import cup from "../assets/coffee-cup.png";

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>

        <div className="texts">
          <h1>
            <span>Enjoy</span> premium coffee at our charming cafe
          </h1>
          
          <p>
            With its inviting atmosphere and delicious coffee options, the
            Coffee House Resource is a popular destination for coffee lovers and
            those seeking a warm and inviting space to enjoy their favorite
            beverage.
          </p>

          <button className="menu-btn">
            Menu <img src={cup} alt="cup" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
