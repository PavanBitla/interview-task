import React from "react";
import Footer from "./Footer";
import "./PricingPage.css";

function PricingPage() {
  return (
    <>
      <div className="pricing-wrapper">
        <section className="pricing-section">
          <div className="pricing-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th></th>
                  <th className="pricing-column standard">
                    <h5>Standard</h5>
                    <h3>
                      $3,499<span className="period">/year</span>
                    </h3>
                    <p>
                      $291.5<span className="period">/month</span>
                    </p>
                    <a href="https://rzp.io/l/VNIBMls5">
                      <button>Select & Pay</button>
                    </a>
                  </th>
                  <th className="pricing-column extended">
                    <p className="offer">2-year with 20% Savings</p>
                    <h5>Standard Extended</h5>
                    <h3>
                      $5,299<span className="period">/2 years</span>
                    </h3>
                    <p>
                      $441.5<span className="period">/month</span>
                    </p>
                    <a href="https://rzp.io/l/FNGf2Ogt">
                      <button>Select & Pay</button>
                    </a>
                  </th>
                  <th className="pricing-column premium">
                    <h5>Premium</h5>
                    <h3>
                      $6,999<span className="period">/year</span>
                    </h3>
                    <p>
                      $583.2<span className="period">/month</span>
                    </p>
                    <a href="https://rzp.io/l/NmMBwbV">
                      <button>Select & Pay</button>
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Post products", "Unlimited", "Unlimited", "Unlimited"],
                  ["Receive & respond to inquiries", "", "", ""],
                  [
                    "Keyword ad spend",
                    "USD 500",
                    "USD 500-100",
                    "USD 1000-150",
                  ],
                  ["Showcased products", "20", "20", "30"],
                  ["Respond to RFQs", "60/month", "60/month", "60/month"],
                  ["Keyword Traffic", "", "", ""],
                  ["180 day traffic accelerator", "", "", ""],
                  ["Sub accounts", "5", "5", "5"],
                  [
                    "Worldwide Shipping (over 60+ countries)",
                    "Yes",
                    "Yes",
                    "Yes",
                  ],
                  ["Onboarding (for free)", "", "", ""],
                  ["Product posting service", "75", "75", "100"],
                  ["Minisite creation", "Yes", "Yes", "Yes"],
                  ["Feature configuration", "", "", ""],
                  ["Customer service", "", "", ""],
                  [
                    "Account Manager",
                    "Dedicated account manager",
                    "Dedicated account manager",
                    "NYC Based Key Account Manager",
                  ],
                  [
                    "US-based Key Success Program (KSP)",
                    "Not available",
                    "Not available",
                    "Included",
                  ],
                ].map(([feature, standard, extended, premium], index) => (
                  <tr key={index}>
                    <th>{feature}</th>
                    <td>{standard}</td>
                    <td>{extended}</td>
                    <td>{premium}</td>
                  </tr>
                ))}
                <tr>
                  <th></th>
                  <td>
                    <a href="https://rzp.io/l/VNIBMls5">
                      <button>Select & Pay</button>
                    </a>
                  </td>
                  <td>
                    <a href="https://rzp.io/l/FNGf2Ogt">
                      <button>Select & Pay</button>
                    </a>
                  </td>
                  <td>
                    <a href="https://rzp.io/l/NmMBwbV">
                      <button>Select & Pay</button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <section className="sales-contact">
              <h3>Need help picking the best plan?</h3>
              <p>
                Book a free personal demo with our customer success professional
                to get more sales for your business.
              </p>
              <a
                href="https://wa.me/+919820045154"
                target="_blank"
                rel="noreferrer"
              >
                <button>Talk to sales</button>
              </a>
            </section>
          </div>
        </section>

        <section className="cta-section">
          <h3>Reach millions of B2B buyers globally</h3>
          <p>
            Choose an 1mdm.com seller plan to launch your new business growth
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default PricingPage;
