import React from "react";
import "./OurStoryPage.css";
import Footer from "./Footer";

function OurStoryPage() {
  return (
    <div className="ourstory-wrapper">
      <div className="ourstory-container">
        <div className="ourstory-sidebar">
          <div className="ourstory-logo">1MDM</div>
          <div>
            <span className="ourstory-label">Conceptualized</span>
            <br />
            2019
          </div>
          <div>
            <span className="ourstory-label">Founder</span>
            <br />
            Balachander
          </div>
          <div>
            <span className="ourstory-label">Launch</span>
            <br />
            Public beta Jan 2022
          </div>
        </div>

        <div className="ourstory-content">
          <h1>Building access to crucial life saving devices</h1>
          <p className="ourstory-lead">
            1MDM began as a concept idea in 2019 as a platform for access to
            medical devices & machines, the idea was to make access to
            information easy & all in one singular place.
          </p>
          <p>
            The initial plan began as purely a platform for listing various
            medical machines across the world, starting with India as the base
            of this information. However something unexpected struck in 2020
            with a global pandemic and the project had been shelved as the focus
            shifted to building & focusing on existing projects.
          </p>
          <p>
            The global pandemic had taken a serious toll & had pushed the supply
            chain to its maximum capacity, this phase was followed by sharp hike
            in prices of oxygen concentrators and people hording or price hiking
            certain critical and life saving devices during the phase. The
            project was an obvious solution at the time to help people who were
            in need of such supplies.
          </p>
          <p>
            After seeing the heavy shortage and strain on the supply chain, 1MDM
            was launched again but focused only on oxygen concentrators
            providing reliable information to those in need of such suppliers.
            We had made sure to provide only manufacturers that weren’t taking
            advantage of the price hike to unfairly push such products in the
            market. We had began to slowly expand the product information to
            include other critical & life saving devices across.
          </p>
        </div>
      </div>

      <div className="ourstory-buttons">
        <button className="ourstory-btn" aria-label="Start Selling">
          <svg viewBox="0 0 24 24">
            <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 2v-2h12v2H7zm13-12h-5l-1-2H6v2h12v12H6v2h16v-14z" />
          </svg>
          Start Selling
        </button>

        <button className="ourstory-btn" aria-label="Customer Service">
          <svg viewBox="0 0 24 24">
            <path d="M12 2a9 9 0 0 0-9 9v3a9 9 0 0 0 9 9 9 9 0 0 0 9-9v-3a9 9 0 0 0-9-9zm5 11v3a5 5 0 1 1-10 0v-3a5 5 0 0 1 10 0z" />
          </svg>
          Customer Service
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default OurStoryPage;
