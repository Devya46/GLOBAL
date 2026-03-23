import React from "react";
import "./RgsPractice.css";

export default function RgsPractice() {
  return (
    <section className="rgs_practice_section">
      {/* floating particles */}
      <div className="rgs_particle rgs_p1"></div>
      <div className="rgs_particle rgs_p2"></div>

      <div className="rgs_practice_container">
        {/* HEADER */}
        <div className="rgs_practice_header">
          <div className="rgs_practice_tag">
            <i className="fa-regular fa-gem"></i> RIM GLOBAL
          </div>

          <h2>
            <span>Practice</span> Investing with Confidence
          </h2>

          <div className="rgs_practice_sub">
            Master the markets with hands-on tools, real-time insights, and a
            community of experts.
          </div>
        </div>

        {/* CARDS */}
        <div className="rgs_practice_cards">
          {/* CARD 1 */}
          <div className="rgs_practice_card">
            <div className="rgs_icon_wrap">
              <i className="fa-regular fa-circle-user"></i>
            </div>
            <h3>
              <span>Create</span> An Account
            </h3>
            <p>
              Seamless onboarding in minutes. We provide institutional-grade
              security and the highest level of financial confidence, protecting
              your journey from day one.
            </p>
            <div className="rgs_marker"></div>
          </div>

          {/* CARD 2 */}
          <div className="rgs_practice_card">
            <div className="rgs_icon_wrap">
              <i className="fa-solid fa-chart-simple"></i>
            </div>
            <h3>
              <span>Practice</span> Investing
            </h3>
            <p>
              Build your investing skills with diverse asset classes — stocks,
              crypto, forex, commodities, and ETFs. Use our risk-free simulator
              to refine your strategy.
            </p>
            <div className="rgs_marker"></div>
          </div>

          {/* CARD 3 */}
          <div className="rgs_practice_card">
            <div className="rgs_icon_wrap">
              <i className="fa-solid fa-chalkboard-user"></i>
            </div>
            <h3>
              <span>Discuss</span> Strategies
            </h3>
            <p>
              Join a vibrant community of top investors. Discover proven
              strategies, share insights, and elevate your portfolio with
              collaborative market intelligence.
            </p>
            <div className="rgs_marker"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
