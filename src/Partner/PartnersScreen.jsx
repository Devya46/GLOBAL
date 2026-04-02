// PartnersScreen.jsx
import React from "react";
import "./PartnersScreen.css";

// Icons as reusable components
const IconChart = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 21H4V4M7 14L10 10L13 13L20 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconCommission = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2V4M12 20V22M4 12H2M6.5 6.5L5 5M17.5 6.5L19 5M6.5 17.5L5 19M17.5 17.5L19 19M22 12H20M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const IconSupport = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 9C18 6.79086 16.2091 5 14 5H10C7.79086 5 6 6.79086 6 9V15C6 17.2091 7.79086 19 10 19H14C16.2091 19 18 17.2091 18 15V9Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M12 5V3M9 21H15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const IconShield = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L3 7L12 12L21 7L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12L12 17L21 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 17L12 22L21 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Benefits data
const benefitsData = [
  {
    id: 1,
    title: "High Commissions",
    description: "Up to 70% revenue share",
    icon: <IconCommission />,
  },
  {
    id: 2,
    title: "Advanced Analytics",
    description: "Real-time performance tracking",
    icon: <IconChart />,
  },
  {
    id: 3,
    title: "Dedicated Support",
    description: "24/7 partner success team",
    icon: <IconSupport />,
  },
  {
    id: 4,
    title: "Secure Platform",
    description: "Enterprise-grade security",
    icon: <IconShield />,
  },
];

const PartnersScreen = () => {
  return (
    <div className="partners-screen">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">Become a Partner</span>
          <h1 className="hero-title">
            Grow With <span className="highlight">Elite Trading</span>
          </h1>
          <p className="hero-description">
            Join the world's fastest-growing broker network. Access
            institutional-grade liquidity, cutting-edge technology, and
            industry-leading commission structures.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Apply Now</button>
            <button className="btn-outline">Contact Sales</button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <div className="benefits-container">
          <div className="benefits-header">
            <span className="benefits-badge">Why Partner With Us</span>
            <h2 className="benefits-title">Unlock Your Full Potential</h2>
            <p className="benefits-description">
              Everything you need to build and scale your trading business
            </p>
          </div>
          <div className="benefits-grid">
            {benefitsData.map((benefit) => (
              <div key={benefit.id} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Scale Your Trading Business?</h2>
            <p className="cta-description">
              Join our partner program today and get access to institutional
              tools, dedicated support, and competitive commissions.
            </p>
            <button className="cta-button">Become a Partner →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersScreen;
