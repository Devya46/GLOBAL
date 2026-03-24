// InvestorsSection.jsx
import React, { useEffect } from "react";
import "./InvestorsSection.css";

// Icon components
const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ZapIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3L5 6V11C5 16.5 12 21 12 21C12 21 19 16.5 19 11V6L12 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M12 8V12M12 16H12.01"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ChartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 16V20H3V4H7V10H11V14H15V8H19V16H21Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const DropletIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.5C12 2.5 6 8.5 6 13C6 16.5 8.5 19 12 19C15.5 19 18 16.5 18 13C18 8.5 12 2.5 12 2.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const ApiIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="7"
      width="20"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M7 12H9M15 12H17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M19.4 15.05L18.3 14.2C18.15 14.05 18.05 13.85 18.05 13.65V10.35C18.05 10.15 18.15 9.95 18.3 9.8L19.4 8.95C19.85 8.55 20 7.9 19.75 7.4L18.55 5.2C18.3 4.7 17.75 4.45 17.2 4.65L15.95 5.05C15.75 5.1 15.55 5.1 15.35 5L14.15 4.45C13.7 4.25 13.35 3.8 13.35 3.3V2C13.35 1.45 12.9 1 12.35 1H9.65C9.1 1 8.65 1.45 8.65 2V3.3C8.65 3.8 8.3 4.25 7.85 4.45L6.65 5C6.45 5.1 6.25 5.1 6.05 5.05L4.8 4.65C4.25 4.45 3.7 4.7 3.45 5.2L2.25 7.4C2 7.9 2.15 8.55 2.6 8.95L3.7 9.8C3.85 9.95 3.95 10.15 3.95 10.35V13.65C3.95 13.85 3.85 14.05 3.7 14.2L2.6 15.05C2.15 15.45 2 16.1 2.25 16.6L3.45 18.8C3.7 19.3 4.25 19.55 4.8 19.35L6.05 18.95C6.25 18.9 6.45 18.9 6.65 19L7.85 19.55C8.3 19.75 8.65 20.2 8.65 20.7V22C8.65 22.55 9.1 23 9.65 23H12.35C12.9 23 13.35 22.55 13.35 22V20.7C13.35 20.2 13.7 19.75 14.15 19.55L15.35 19C15.55 18.9 15.75 18.9 15.95 18.95L17.2 19.35C17.75 19.55 18.3 19.3 18.55 18.8L19.75 16.6C20 16.1 19.85 15.45 19.4 15.05Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const InvestorsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="investors-section">
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>
      <div className="bg-grid"></div>

      <div className="container">
        {/* Header */}
        <div className="header animate-on-scroll">
          <div className="logo">RIHGLOBAL</div>
        </div>

        {/* Hero Content */}
        <div className="hero-content animate-on-scroll">
          <h1 className="hero-title">
            For <span className="gradient-text">INVESTORS</span>
          </h1>
          <p className="hero-description">
            Scale with elite partner accounts. Unlock institutional-grade
            trading conditions,
            <br />
            white-glove support, and industry-leading rebates.
          </p>
          {/* <div className="cta-group">
            <button className="btn btn-primary">
              Apply Now
              <ArrowIcon />
            </button>
            <button className="btn btn-outline">View Benefits</button>
          </div> */}
        </div>

        {/* Stats Cards */}
        {/* <div className="stats-grid animate-on-scroll">
          <div className="stat-card">
            <div className="stat-value">
              0.0%<span className="stat-unit"> cap</span>
            </div>
            <div className="stat-label">Commission</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">
              &lt;10<span className="stat-unit"> ms</span>
            </div>
            <div className="stat-label">Latency Execution</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">
              50+<span className="stat-unit"></span>
            </div>
            <div className="stat-label">Global Markets</div>
          </div>
        </div> */}

        {/* Premium Partner Tier */}
        {/* <div className="premium-tier animate-on-scroll">
          <div className="tier-badge">Premium Partner Tier</div>
          <h2 className="tier-title">Elite</h2>
          <div className="revenue-share">
            <span className="revenue-percent">Up to 85%</span>
            <span className="revenue-label">revenue share</span>
          </div>
        </div> */}

        {/* Features Grid - 2 columns as per image */}
        {/* <div className="features-grid animate-on-scroll">
          <div className="feature-card">
            <div className="feature-icon">
              <ZapIcon />
            </div>
            <div className="feature-content">
              <h3>Instant Commissions</h3>
              <p>24/7 Real-time settlement</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <ShieldIcon />
            </div>
            <div className="feature-content">
              <h3>Dedicated IB Desk</h3>
              <p>Priority White-glove support</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <ChartIcon />
            </div>
            <div className="feature-content">
              <h3>Advanced Analytics</h3>
              <p>Live AI-powered insights</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <DropletIcon />
            </div>
            <div className="feature-content">
              <h3>Institutional liquidity</h3>
              <p>Zero infrastructure cost</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <ApiIcon />
            </div>
            <div className="feature-content">
              <h3>API integration</h3>
              <p>Custom branding</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <SettingsIcon />
            </div>
            <div className="feature-content">
              <h3>Risk management</h3>
              <p>Multi-tier rebates</p>
            </div>
          </div>
        </div> */}

        {/* Bottom CTA */}
        {/* <div className="bottom-cta animate-on-scroll">
          <button className="btn btn-primary btn-large">
            Become an Elite Partner
            <ArrowIcon />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default InvestorsSection;
