import React from "react";
import "./AccountHero.css";

export default function AccountHero() {
  return (
    <div className="acc-hero-wrapper">
      <div className="acc-hero-section">
        {/* Background layers */}
        <div className="acc-royal-bg"></div>
        <div className="acc-royal-pattern"></div>
        <div className="acc-gold-glow"></div>
        <div className="acc-gold-glow-2"></div>
        <div className="acc-diagonal-lines"></div>
        <div className="acc-royal-dust"></div>
        <div className="acc-royal-border"></div>

        {/* overlay */}
        <div className="acc-overlay"></div>

        <div className="acc-hero-content">
          <h1 className="acc-main-heading">Trading Account Types</h1>

          <div className="acc-sub-text">
            <i className="fas fa-crown"></i>
            <span>Choose your path • Secure • Transparent • Smart</span>
          </div>

          <div className="acc-info-cards">
            <div className="acc-feature-card">
              <div className="acc-card-icon-lg">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="acc-card-title">Pricing Plan</div>
              <div className="acc-card-description">
                Flexible tiers • Transparent fees • No hidden costs
              </div>
            </div>

            <div className="acc-feature-card">
              <div className="acc-card-icon-lg">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="acc-card-title">Guide to Account Security</div>
              <div className="acc-card-description">
                2FA, strong passwords • Secure authentication • Best practices
              </div>
            </div>

            <div className="acc-feature-card">
              <div className="acc-card-icon-lg">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <div className="acc-card-title">Common Risks & Phishing</div>
              <div className="acc-card-description">
                Identify scams • Stay protected • Security alerts
              </div>
            </div>
          </div>

          <a href="#" className="acc-learn-more-link">
            Explore account options <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
