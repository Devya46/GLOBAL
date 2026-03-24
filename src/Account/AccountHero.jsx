import React from "react";
import "./AccountHero.css";

const TradingAccountTypes = () => {
  const handleExploreClick = () => {
    alert(
      "Explore all trading accounts: Individual, Joint, Corporate, Demo & Premium Plans. Contact support for tailored advice.",
    );
  };

  return (
    <div className="tat-page-wrapper">
      <div className="tat-container">
        {/* Hero */}
        <div className="tat-hero">
          <h1>Trading Account Types</h1>

          <div className="tat-tagline">
            <span>
              <i className="fas fa-chart-line"></i> Choose your path
            </span>
            <span>
              <i className="fas fa-shield-alt"></i> Secure
            </span>
            <span>
              <i className="fas fa-chart-simple"></i> Transparent
            </span>
            <span>
              <i className="fas fa-microchip"></i> Smart
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="tat-card-grid">
          {/* Pricing */}
          <div className="tat-card">
            <div className="tat-card-icon">
              <i className="fas fa-tags"></i>
            </div>
            <h2>Pricing Plan</h2>
            <p>
              Flexible tiers designed for retail & pro traders. Clear cost
              structure with maximum efficiency.
            </p>

            <ul className="tat-feature-list">
              <li>
                <i className="fas fa-layer-group"></i> Flexible tiers · Starter,
                Pro, Elite
              </li>
              <li>
                <i className="fas fa-receipt"></i> Transparent fees · Zero
                hidden spreads
              </li>
              <li>
                <i className="fas fa-coins"></i> No hidden costs · Flat
                commissions
              </li>
            </ul>

            <div className="tat-badge">
              <i className="fas fa-chart-simple"></i> from $0/mo + competitive
            </div>
          </div>

          {/* Account */}
          <div className="tat-card">
            <div className="tat-card-icon">
              <i className="fas fa-user-circle"></i>
            </div>
            <h2>Trading Account</h2>
            <p>
              Diverse account structures to match your experience — individual,
              joint, corporate & demo.
            </p>

            <ul className="tat-feature-list">
              <li>
                <i className="fas fa-user-check"></i> Individual · Full control
                & ownership
              </li>
              <li>
                <i className="fas fa-users"></i> Joint · Shared access, dual
                security
              </li>
              <li>
                <i className="fas fa-building"></i> Corporate · Institutional
                grade
              </li>
              <li>
                <i className="fas fa-chalkboard-user"></i> Demo · Risk-free
                practice
              </li>
            </ul>

            <div className="tat-badge">
              <i className="fas fa-arrow-right"></i> Switch anytime
            </div>
          </div>

          {/* Smart */}
          <div className="tat-card">
            <div className="tat-card-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h2>Smart Features</h2>
            <p>
              AI insights, real-time analytics & custom alerts for every account
              type.
            </p>

            <ul className="tat-feature-list">
              <li>
                <i className="fas fa-brain"></i> Smart risk management tools
              </li>
              <li>
                <i className="fas fa-chart-pie"></i> Portfolio analytics
                dashboard
              </li>
              <li>
                <i className="fas fa-bolt"></i> Low-latency execution
              </li>
            </ul>

            <div className="tat-badge">Explore account options ↓</div>
          </div>
        </div>

        {/* Double Section */}
        <div className="tat-double-section">
          {/* Security */}
          <div className="tat-full-card">
            <div className="tat-section-header">
              <i className="fas fa-lock"></i>
              <h2>Guide to Account Security</h2>
            </div>

            <div className="tat-insight-list">
              <div className="tat-insight-item">
                <i className="fas fa-key"></i>
                <span>
                  <strong>2FA & strong passwords</strong> – Always enable
                  two-factor authentication and use complex passphrases.
                </span>
              </div>

              <div className="tat-insight-item">
                <i className="fas fa-fingerprint"></i>
                <span>
                  <strong>Secure authentication</strong> – Biometric login,
                  hardware keys, and authenticator apps.
                </span>
              </div>

              <div className="tat-insight-item">
                <i className="fas fa-shield-hooded"></i>
                <span>
                  <strong>Best practices</strong> – Regular password rotation,
                  withdrawal whitelist, and session timeouts.
                </span>
              </div>
            </div>

            <div className="tat-badge">
              <i className="fas fa-check-circle"></i> Verified security
              protocols
            </div>
          </div>

          {/* Risks */}
          <div className="tat-full-card">
            <div className="tat-section-header">
              <i className="fas fa-triangle-exclamation"></i>
              <h2>Common Risks & Phishing</h2>
            </div>

            <div className="tat-insight-list">
              <div className="tat-insight-item">
                <i className="fas fa-fish"></i>
                <span>
                  <strong>Identify scams</strong> – Recognize fake support
                  emails, spoofed websites, and pump-and-dump schemes.
                </span>
              </div>

              <div className="tat-insight-item">
                <i className="fas fa-eye"></i>
                <span>
                  <strong>Stay protected</strong> – Never share OTPs, verify
                  URL, use anti-phishing codes.
                </span>
              </div>

              <div className="tat-insight-item">
                <i className="fas fa-bell"></i>
                <span>
                  <strong>Security alerts</strong> – Real-time login alerts,
                  device management, and suspicious activity monitoring.
                </span>
              </div>
            </div>

            <div className="tat-badge">
              <i className="fas fa-shield-virus"></i> Phishing-resistant mode
              available
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="tat-explore-section">
          <button className="tat-explore-btn" onClick={handleExploreClick}>
            <i className="fas fa-compass"></i>
            Explore account options
            <i className="fas fa-arrow-right"></i>
          </button>

          <p className="tat-explore-text">
            Compare features, fees, and security levels — find your perfect
            match
          </p>
        </div>

        {/* Footer */}
        <div className="tat-footer-note">
          <i className="fas fa-chart-line"></i> Secure • Transparent • Smart —
          All account types are monitored 24/7
        </div>
      </div>
    </div>
  );
};

export default TradingAccountTypes;
