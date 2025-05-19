import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Footer from "./Footer";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">1MDM</div>
        <div className="nav-links">
          <a href="/About">About us</a>

          <a href="/our-story">Our Story</a>
          <a href="#">Sell on 1MDM</a>
          <a href="/pricing">Pricing</a>
        </div>
        <div className="account-links">
          <button className="notuse">My Account</button> |
          <button className="notuse" onClick={() => navigate("/contact")}>
            Contact us
          </button>
        </div>
      </header>

      <section className="b2b-section">
        <div className="b2b-left">
          <p className="subtitle">
            Sell on <span className="highlight">1mdm.com</span>
          </p>
          <h1 className="b2b-title">Reach millions of B2B buyers globally</h1>
          <div className="b2b-buttons">
            <button className="btn btn-primary">Start selling</button>
            <button className="btn btn-outline">Chat with consultant</button>
          </div>
        </div>

        <div className="b2b-right">
          <img
            src="/your-globe-image.png"
            alt="Global Network"
            className="globe-img"
          />
          <ul className="stats-list">
            <li>
              <span className="stat-number">26,000,000</span>
              <br />
              active buyers globally
            </li>
            <li>
              <span className="stat-number">400,000</span>
              <br />
              product inquiries daily
            </li>
            <li>
              <span className="stat-number">200</span>
              <br />
              countries and regions represented
            </li>
          </ul>
        </div>
      </section>

      <section className="video-section">
        <h2 className="video-heading">
          1mdm.com is a leading ecommerce platform that <br />
          helps SMEs go global
        </h2>
        <div className="video-content">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-description">
            <p>
              Connect with millions of business buyers from around the world.
            </p>
            <p>
              Get the tools and know-how to build a successful ecommerce
              presence for your business.
            </p>
            <p>
              Pocket more from each sale, with take rates as low as 0% in some
              cases.
            </p>
          </div>
        </div>
      </section>

      <section className="red-banner">
        <h2 className="red-banner-heading">
          Largest number of products & categories of <br />
          medical devices on a single place – 1mdm.com
        </h2>
        <p className="red-banner-subtext">
          Connect with buyers worldwide for your product &<br />
          start selling now.
        </p>
      </section>

      <section className="tools-section">
        <h2 className="tools-heading">
          Grow your business with a suite of tools built for you
        </h2>

        <div className="tools-content">
          <div className="tools-sidebar">
            <ul>
              <li className="active">Custom storefront</li>
              <li>Advertising tools</li>
              <li>Data and analytics</li>
              <li>Customers support</li>
            </ul>
          </div>

          <div className="tools-description">
            <h3>Set up a store that showcases your brand</h3>
            <p>
              Differentiate yourself from the competition with a full store
              dedicated to your products – no coding or design skills necessary!
            </p>
          </div>

          <div className="tools-image">
            <img src="/your-path-to-image.png" alt="Custom storefront" />
          </div>
        </div>
      </section>

      <section className="success-stories">
        <h2 className="success-heading">
          Success stories from 1mdm.com sellers
        </h2>

        <div className="story-card">
          <div className="story-text">
            <div className="quote-icon">❝</div>
            <p>
              Mr David runs a manufacturing company that works in this field of
              medical devices. With administrative and production across the
              country. With full respect for environment and several years’
              experience using IP systems that are conventional
            </p>
          </div>

          <div className="story-image">
            <img src="/your-path-to-image.png" alt="Seller testimonial" />
          </div>

          <div className="nav-buttons">
            <button className="nav-btn left">←</button>
            <button className="nav-btn right">→</button>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Grow Your Business?</h2>
          <div className="cta-buttons">
            <button className="btn-primary">Start selling</button>
            <button className="btn-outline">Chat with consultant</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
