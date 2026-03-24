// InvestorsShowcase.jsx
import React from "react";
import "./OurInvestors.css";

const InvestorsShowcase = () => {
  const investors = [
    {
      id: 1,
      name: "Joe A. Logan",
      role: "Fin Investor",
      image:
        "https://tradersklub.com/wp-content/uploads/2026/03/investor-1.png",
    },
    {
      id: 2,

      name: "Reva Turner",
      role: "Tech-Investor",
      image: "https://tradersklub.com/wp-content/uploads/2026/03/Reva.png",
    },
    {
      id: 3,
      name: "Karon J. Marsh",
      role: "Fin-Fin Investor",
      image: "https://tradersklub.com/wp-content/uploads/2026/03/Karon.png",
    },
    {
      id: 4,
      name: "Sam A. Helton",
      role: "Main Investor",
      image: "https://tradersklub.com/wp-content/uploads/2026/03/Sam.png",
    },
  ];

  return (
    <section className="investors-showcase">
      <div className="showcase-bg-overlay"></div>
      <div className="showcase-container">
        <div className="showcase-header">
          <span className="showcase-badge">RIM GLOBAL INVESTORS</span>
          <h2 className="showcase-title">
            Our <span className="highlight">Investors</span>
          </h2>
          <p className="showcase-description">
            Backed by industry leaders shaping the future of global trading
          </p>
        </div>

        <div className="investors-grid">
          {investors.map((investor, index) => (
            <div
              key={investor.id}
              className="investor-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="investor-image-wrapper">
                <img
                  src={investor.image}
                  alt={investor.name}
                  className="investor-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%232d2d4a"/><text x="50" y="67" text-anchor="middle" fill="%2360ce80" font-size="40">👤</text></svg>';
                  }}
                />
                <div className="investor-overlay">
                  <div className="status-badge">Active</div>
                </div>
              </div>
              <div className="investor-info">
                <h3 className="investor-name">{investor.name}</h3>
                <p className="investor-role">{investor.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="showcase-footer">
          <button className="showcase-btn">
            View All Partners
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default InvestorsShowcase;
