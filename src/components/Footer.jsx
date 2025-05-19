import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <div className="logo-text">1MDM</div>
          <p>
            One Medical Devices
            <br />
            Market Place
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Platform</h4>
            <a href="#">Sell on 1MDM</a>
            <a href="#">Pricing</a>
            <a href="#">About Us</a>
            <a href="#">Our Story</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Brands</a>
          </div>
          <div className="footer-column">
            <h4>Press Room</h4>
            <a href="#">Images & B-roll</a>
            <h4>Policies</h4>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Delivery Information</a>
          </div>
          <div className="footer-column">
            <h4>Reach Us</h4>
            <a href="#">Corporate Information</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="footer-buttons">
        <button className="footer-btn red">🛒 Start Selling</button>
        <button className="footer-btn white">🎧 Customer Service</button>
      </div>

      <div className="footer-bottom">
        <p>© 2025 1MDM 🔥 by Superlabs</p>
      </div>
    </footer>
  );
};

export default Footer;
