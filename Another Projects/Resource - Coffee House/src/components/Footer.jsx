import React from 'react'
import location from "../assets/location.png";
import phone from "../assets/phone.png";
import clock from "../assets/clock.png";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="left-footer">
          <h1 style={{color: 'var(--text-light)', maxWidth: '530px'}}>
            Sip, Savor, Smile. <span>It’s coffee time!</span>
          </h1>

          <div className="btns-footer">
            <button>
              <i class="fa-brands fa-twitter"></i>
            </button>

            <button>
              <i class="fa-brands fa-instagram"></i>
            </button>

            <button>
              <i class="fa-brands fa-facebook-f"></i>
            </button>
          </div>
        </div>

        <div className="right-footer">
          <p className="coffe-title footer-title">Contact us</p>

          <div className="links">
            <a href="#">
              <img src={location} alt="location" />
              <span style={{fontSize: '16px'}}>8558 Green Rd., LA</span>
            </a>

            <a href="#">
              <img src={phone} alt="phone" />
              <span style={{fontSize: '16px'}}>+1 (603) 555-0123</span>
            </a>

            <p>
              <img src={clock} alt="clock" />
              <span>Mon-Sat: 9:00 AM – 23:00 PM</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
