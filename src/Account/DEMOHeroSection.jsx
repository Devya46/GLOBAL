import React, { useState } from "react";
import "./DEMOHeroSection.css";

export default function DemoAccount() {
  const [toast, setToast] = useState("");

  const handleCreateDemo = () => {
    setToast(
      "✨ Demo account created! Practice with $100K virtual funds. Check your email for login details.",
    );

    setTimeout(() => setToast(""), 3200);
  };

  return (
    <div className="rimX-demo-root">
      <div className="rimX-container">
        {/* HERO */}
        <div className="rimX-hero">
          <div className="rimX-brand">
            <i className="fas fa-chart-line"></i>
            <span>RIM GLOBAL</span>
          </div>

          <h1>Demo Account</h1>

          <div className="rimX-tagline">
            <span>
              <i className="fas fa-chart-simple"></i> Practice Investing
            </span>
            <span>
              <i className="fas fa-shield-virus"></i> Zero risk
            </span>
            <span>
              <i className="fas fa-globe"></i> Real markets
            </span>
          </div>
        </div>

        {/* GRID */}
        <div className="rimX-demo-grid">
          {/* LEFT CARD */}
          <div className="rimX-practice-card">
            <div className="rimX-icon-large">
              <i className="fas fa-chalkboard-user"></i>
            </div>

            <h2>Practice Investing</h2>

            <div className="rimX-highlight">Demo Account • RIM Global</div>

            <p className="rimX-desc">
              Practice investing — zero risk, real markets. Simulate live
              trading conditions with $100,000 virtual capital, real-time data,
              and advanced execution.
            </p>

            <ul className="rimX-feature-list">
              <li>
                <i className="fas fa-chart-line"></i>
                Real-time market depth & execution
              </li>
              <li>
                <i className="fas fa-clock"></i>
                24/7 demo environment, no expiration
              </li>
              <li>
                <i className="fas fa-chart-pie"></i>
                Full access to stocks, forex, crypto & indices
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                Mobile & desktop sync
              </li>
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="rimX-cta-card">
            <div className="rimX-stats">
              <span className="rimX-stat-badge">
                <i className="fas fa-chart-line"></i> 10,000+ investors
              </span>
              <span className="rimX-stat-badge">
                <i className="fas fa-shield-alt"></i> Zero risk capital
              </span>
            </div>

            <i
              className="fas fa-user-plus"
              style={{ fontSize: "2.2rem", color: "#5d9eff" }}
            ></i>

            <h3>Create An Account</h3>

            <p style={{ margin: "0.5rem 0", fontSize: "0.85rem" }}>
              Get started in 2 minutes — no deposit required
            </p>

            <button className="rimX-cta-btn" onClick={handleCreateDemo}>
              <i className="fas fa-rocket"></i>
              Create An Account
              <i className="fas fa-arrow-right"></i>
            </button>

            <div className="rimX-divider"></div>

            <div
              className="rimX-stat-badge"
              style={{ display: "inline-block", marginTop: "0.5rem" }}
            >
              <i className="fas fa-check-circle"></i>
              Trusted by 10,000+ investors
            </div>
          </div>
        </div>

        {/* FEATURE ROW */}
        <div className="rimX-feature-row">
          <div className="rimX-info-card">
            <i className="fas fa-hand-holding-heart"></i>
            <h4>Highest confidence</h4>
            <p>
              We provide our customers with the highest level of financial
              confidence and investment protection.
            </p>
          </div>

          <div className="rimX-info-card">
            <i className="fas fa-chart-line"></i>
            <h4>Real market conditions</h4>
            <p>
              Live spreads, liquidity, and execution — identical to live
              accounts.
            </p>
          </div>

          <div className="rimX-info-card">
            <i className="fas fa-laptop-code"></i>
            <h4>Advanced demo tools</h4>
            <p>
              Technical indicators, risk simulators, and portfolio analysis.
            </p>
          </div>
        </div>

        {/* TRUST */}
        <div className="rimX-trust-section">
          <p>
            <i className="fas fa-user-check"></i> Trusted by 10,000+ investors
            <i className="fas fa-chart-simple"></i> 4.9/5 rating
            <i className="fas fa-clock"></i> 24/7 demo support
          </p>

          <div className="rimX-divider"></div>

          <p style={{ fontSize: "0.75rem" }}>
            Practice investing — zero risk, real markets. Join RIM Global demo
            community today.
          </p>
        </div>

        {/* FOOTER */}
        <div className="rimX-footer">
          <i className="fas fa-chart-line"></i> RIM Global Demo | Risk-free
          environment • Real market depth • Instant activation
        </div>
      </div>

      {/* TOAST */}
      {toast && (
        <div className="rimX-toast">
          <i className="fas fa-check-circle"></i> {toast}
        </div>
      )}
    </div>
  );
}
