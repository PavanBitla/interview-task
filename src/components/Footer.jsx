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
            <a href="/Sellon">Sell on 1MDM</a>
            <a href="/pricing">Pricing</a>
            <a href="/aboutus">About Us</a>
            <a href="/Our-story">Our Story</a>
            <a href="/careers">Careers</a>
            <a href="/blog">Blog</a>
            <a href="/brand">Brands</a>
          </div>
          <div className="footer-column">
            <h4>Press Room</h4>
            <a href="/terms">Images & B-roll</a>
            <h4>Policies</h4>
            <a href="/terms">Terms of Service</a>
            <a href="/terms">Privacy Policy</a>
            <a href="/Contact">Delivery Information</a>
          </div>
          <div className="footer-column">
            <h4>Reach Us</h4>
            <a href="/Contact">Corporate Information</a>
            <a href="/Contact">Contact Us</a>
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
