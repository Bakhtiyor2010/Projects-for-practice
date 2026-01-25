import React from "react";
import phones from "../assets/mobile-screens.png";

export default function Download() {
  return (
    <div className="download" id="mobile-app">
      <div className="left">
        <h1>
          <span>Download</span> our apps to start ordering
        </h1>

        <p>
          Download the Resource app today and experience the comfort of ordering
          your favorite coffee from wherever you are
        </p>

        <div className="btns">
          <button>
            <i class="fa-brands fa-apple"></i>

            <div className="texts-btn">
              <h6>Available on the</h6>
              <h5>App Store</h5>
            </div>
          </button>

          <button>
            <i class="fa-brands fa-google-play"></i>

            <div className="texts-btn">
              <h6>Available on</h6>
              <h5>Google Play</h5>
            </div>
          </button>
        </div>
      </div>

      <div className="right">
        <img src={phones} alt="phones" />
      </div>
    </div>
  );
}
