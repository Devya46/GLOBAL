import React from "react";
import "./Features.css";

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-wrapper">
        {/* CENTER TEXT */}

        <div className="features-center">
          <span className="features-tag">FEATURES</span>

          <h2>
            RIM Global <br />
            <span>Best Features</span>
          </h2>

          <p>
            With our RAW ECN account, traders can experience some of the lowest
            trading costs in the industry.
          </p>
        </div>

        {/* FEATURE CARDS */}

        <div className="feature-card card1">
          <div className="icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/11135/11135232.png"
              alt="Financial Security"
            />
          </div>

          <h4>Financial Security</h4>

          <p>
            We provide our customers with the highest level of financial
            confidence and investment protection.
          </p>
        </div>

        <div className="feature-card card2">
          <div className="icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/11328/11328453.png"
              alt="Segregation Of Funds"
            />
          </div>

          <h4>Segregation Of Funds</h4>

          <p>
            All client funds deposited are segregated from company assets and
            kept in a banking institution.
          </p>
        </div>

        <div className="feature-card card3">
          <div className="icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/13063/13063429.png"
              alt="International Asset Protection"
            />
          </div>

          <h4>International Asset Protection</h4>

          <p>
            As an authorized broker, we conduct operations in a fair and
            professional manner.
          </p>
        </div>
      </div>
    </section>
  );
}
