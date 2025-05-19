import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Hi, how can we help?</h1>

      <section className="contact-help-section">
        <h2 className="contact-subheader">Help and support</h2>
        <p className="contact-description">
          Have questions or need to report an issue with a 1MDM product or
          service? We've got you covered.
        </p>
        <button className="contact-btn-primary">Customer Service</button>
      </section>

      <section className="contact-info-section">
        <div className="contact-location">
          <h3 className="contact-label">1MDM HQ</h3>
          <p className="contact-address">
            No 34, Marudamalai Kuounder Layout, Ramakrishna Puram,
            <br />
            Sakthi Road, Ganapathy post, Coimbatore - 641006
          </p>
          <a href="tel:8369386910" className="contact-phone">
            836-938-6910
          </a>
        </div>

        <div className="contact-careers">
          <h3 className="contact-label">Careers at 1MDM</h3>
          <p className="contact-description">
            Learn more about our teams and job openings.
          </p>
          <button className="contact-btn-outline">Explore Jobs</button>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
