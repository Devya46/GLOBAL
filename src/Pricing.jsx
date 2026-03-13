import React, { useEffect } from "react";
import "./Pricing.css";
import {
  FaChartLine,
  FaCoins,
  FaBalanceScale,
  FaRobot,
  FaExchangeAlt,
} from "react-icons/fa";

export default function Pricing() {
  useEffect(() => {
    const cards = document.querySelectorAll(".pricing-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("show");
              }, index * 200);
            });
          } else {
            cards.forEach((card) => {
              card.classList.remove("show");
            });
          }
        });
      },
      { threshold: 0.35 },
    );

    const grid = document.querySelector(".pricing-grid");

    if (grid) observer.observe(grid);

    return () => {
      if (grid) observer.unobserve(grid);
    };
  }, []);

  return (
    <section className="rim-pricing">
      <div className="pricing-header">
        <h2>PRICING PLAN</h2>
        <p>Start Your Trading Account Now!</p>

        <span>
          We are equipped with four types of trading accounts to suit the
          different needs and risk tolerances of trader.
        </span>
      </div>

      <div className="pricing-grid">
        {/* CLASSIC */}
        <div className="pricing-card">
          <div className="card-top">
            <div className="text">
              <h3>CLASSIC</h3>
              <div className="price">$100</div>
              <span className="deposit">Per Min Deposit</span>
            </div>
          </div>

          <div className="plan-divider">
            <span>CLASSIC ACCOUNT</span>
          </div>

          <ul className="features-list">
            <li>
              <FaChartLine className="feature-icon" />
              Spread : 2 Pips
            </li>

            <li>
              <FaCoins className="feature-icon" />
              Commission : No
            </li>

            <li>
              <FaBalanceScale className="feature-icon" />
              Leverage : 1:1000
            </li>

            <li>
              <FaRobot className="feature-icon" />
              EA Allowed : No
            </li>

            <li>
              <FaExchangeAlt className="feature-icon" />
              Swap Charges : No
            </li>
          </ul>

          <a href="#" className="price-btn">
            Open Account
          </a>
        </div>

        {/* ECN */}

        <div className="pricing-card featured">
          <div className="card-top">
            <h3>ECN</h3>
            <div className="price">$500</div>
            <span className="deposit">Per Min Deposit</span>
          </div>

          <div className="plan-divider">
            <span>ECN ACCOUNT</span>
          </div>

          <ul className="features-list">
            <li>
              <FaChartLine className="feature-icon" />
              Spread : 1.5 Pips
            </li>

            <li>
              <FaCoins className="feature-icon" />
              Commission : No
            </li>

            <li>
              <FaBalanceScale className="feature-icon" />
              Leverage : 1:800
            </li>

            <li>
              <FaRobot className="feature-icon" />
              EA Allowed : No
            </li>

            <li>
              <FaExchangeAlt className="feature-icon" />
              Swap Charges : No
            </li>
          </ul>

          <a href="#" className="price-btn">
            Open Account
          </a>
        </div>

        {/* STANDARD */}

        <div className="pricing-card">
          <div className="card-top">
            <div className="text">
              <h3>STANDARD</h3>
              <div className="price">$2500</div>
              <span className="deposit">Per Min Deposit</span>
            </div>
          </div>

          <div className="plan-divider">
            <span>STANDARD ACCOUNT</span>
          </div>

          <ul className="features-list">
            <li>
              <FaChartLine className="feature-icon" />
              Spread : 1 Pips
            </li>

            <li>
              <FaCoins className="feature-icon" />
              Commission : No
            </li>

            <li>
              <FaBalanceScale className="feature-icon" />
              Leverage : 1:600
            </li>

            <li>
              <FaRobot className="feature-icon" />
              EA Allowed : No
            </li>

            <li>
              <FaExchangeAlt className="feature-icon" />
              Swap Charges : No
            </li>
          </ul>

          <a href="#" className="price-btn">
            Open Account
          </a>
        </div>

        {/* VIP */}

        <div className="pricing-card">
          <div className="card-top">
            <div className="text">
              <h3>VIP</h3>
              <div className="price">$5000</div>
              <span className="deposit">Per Min Deposit</span>
            </div>
          </div>

          <div className="plan-divider">
            <span>VIP ACCOUNT</span>
          </div>

          <ul className="features-list">
            <li>
              <FaChartLine className="feature-icon" />
              Spread : 0.2 Pips
            </li>

            <li>
              <FaCoins className="feature-icon" />
              Commission : No
            </li>

            <li>
              <FaBalanceScale className="feature-icon" />
              Leverage : 1:400
            </li>

            <li>
              <FaRobot className="feature-icon" />
              EA Allowed : No
            </li>

            <li>
              <FaExchangeAlt className="feature-icon" />
              Swap Charges : No
            </li>
          </ul>

          <a href="#" className="price-btn">
            Open Account
          </a>
        </div>
      </div>
    </section>
  );
}
