import React from "react";
import "./RiskSection.css";

export default function RiskSection() {
  return (
    <section className="risk-section">
      <div className="glow-left"></div>
      <div className="glow-right"></div>

      <div className="risk-container">
        {/* LEFT IMAGE */}
        <div className="risk-image">
          <div className="img-wrapper">
            <img
              src="https://tradersklub.com/wp-content/uploads/2026/03/CommonRisksPhishingAttempts.png"
              alt="Phishing attack prevention illustration"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="risk-content">
          <div className="tag">
            <i className="fas fa-shield-halved"></i>
            <span>RIM GLOBAL · SECURITY INSIGHTS</span>
          </div>

          <h1>
            Common <span className="green">Risks</span> And <br />
            <span className="green">Phishing</span> Attempts
          </h1>

          <div className="desc">
            <i className="fas fa-fish"> </i>
            “Phishing” is an attempt by criminals to procure or intercept
            personal data by imitating a trustworthy entity — using fake
            websites, e-mails, phone calls or SMS.
          </div>

          <div className="desc">
            <i className="fas fa-key"> </i>
            The term combines <strong>“fishing”</strong> with the
            <strong> P from password</strong>. Criminals bait users into
            revealing sensitive data.
          </div>

          <div className="risk-badges">
            <span className="badge">
              <i className="fas fa-envelope"></i> Email Spoofing
            </span>
            <span className="badge">
              <i className="fas fa-mobile-alt"></i> Smishing (SMS)
            </span>
            <span className="badge">
              <i className="fas fa-phone-alt"></i> Vishing Calls
            </span>
            <span className="badge">
              <i className="fas fa-link"></i> Fake Login Pages
            </span>
            <span className="badge">
              <i className="fas fa-qrcode"></i> QR Phishing
            </span>
          </div>

          <div className="safety-note">
            <i className="fas fa-shield-virus"></i>
            <span>
              🔐 Stay vigilant: verify sender identity, avoid suspicious links,
              and never share OTPs.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
