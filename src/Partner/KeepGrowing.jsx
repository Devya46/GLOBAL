// KeepGrowing.jsx
import React from "react";
import "./KeepGrowing.css";

// Icons as components for better scalability and styling
const TrendingUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8 10 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const DiamondIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>
);

const ZapIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const TargetIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const UsersIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const InvestorSection = () => {
  return (
    <section className="investor-section">
      {/* Section 1: RIM Global - Full width with side image */}
      <div className="section-one">
        <div className="section-one-container">
          <div className="section-one-content">
            <div className="content-left">
              <div className="card-badge rim-badge">RIM Global</div>
              <h1 className="section-title">
                Keep Growing As An <span className="highlight">Investor</span>
              </h1>
              <p className="section-description">
                Join our global community of investors to view other traders'
                portfolios, discuss strategies and access their collective
                expertise. Then practice what you learn with a free $100,000
                virtual portfolio.
              </p>
              <div className="info-card">
                <p>
                  Growth investing is highly attractive to many investors
                  because buying stock in emerging companies can provide
                  impressive returns (as long as the companies are successful).
                  However, such companies are untried, and thus often pose a
                  fairly high risk.
                </p>
                <p>
                  Growth investors tend to favor smaller, younger companies
                  poised to expand and increase profitability potential in the
                  future.
                </p>
              </div>
              <div className="action-buttons">
                <button className="btn-primary rim-btn">
                  Join Community →
                </button>
                <button className="btn-outline">Learn More</button>
              </div>
            </div>
            <div className="content-right">
              <div className="image-container">
                <img
                  src="https://tradersklub.com/wp-content/uploads/2026/03/Growing_As_An_Investor.png"
                  alt="Growth investing chart showing upward trajectory"
                  className="hero-image"
                />
                <div className="image-backdrop"></div>
                <div className="floating-stats">
                  <div className="floating-stat">
                    <span className="stat-number">+248%</span>
                    <span className="stat-text">Avg. Portfolio Growth</span>
                  </div>
                  <div className="floating-stat">
                    <span className="stat-number">50K+</span>
                    <span className="stat-text">Active Investors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Introducer - Updated with Dark Navy Blue, White/Blue, Green Highlights */}
      <div className="section-two">
        <div className="section-two-container">
          <div className="introducer-content">
            <div className="introducer-header">
              <div className="card-badge introducer-badge">
                <UsersIcon />
                <span>Introducer Program</span>
              </div>
              <h2 className="introducer-title">
                We Built a Market{" "}
                <span className="highlight-green">They Trade, You Earn!</span>
              </h2>
              <p className="introducer-subtitle">
                Refer clients to us and earn rebates on the volumes they trade.
              </p>
            </div>

            <div className="earn-showcase">
              <div className="earn-card main-card">
                <div className="percentage-display">
                  <div className="percentage-ring-wrapper">
                    <svg className="percentage-ring-svg" viewBox="0 0 120 120">
                      <circle
                        className="ring-bg"
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="8"
                      />
                      <circle
                        className="ring-fill"
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="#2ecc71"
                        strokeWidth="8"
                        strokeDasharray="339.292"
                        strokeDashoffset="152.681"
                        strokeLinecap="round"
                        transform="rotate(-90 60 60)"
                      />
                    </svg>
                    <div className="percentage-number">
                      <span className="percent-value">55</span>
                      <span className="percent-symbol">%</span>
                    </div>
                  </div>
                  <div className="percentage-desc">
                    <h4>Revenue Share</h4>
                    <p>of our revenue from every active trader you introduce</p>
                    <div className="earn-highlight">Up to 55% earnings</div>
                  </div>
                </div>
              </div>

              <div className="earn-card scale-card">
                <div className="scale-icon">
                  <TrendingUpIcon />
                </div>
                <h4>Scale Your Income</h4>
                <p>
                  The more clients you introduce, the higher your income grows.
                  No limits, no caps.
                </p>
                <div className="progress-bars">
                  <div className="progress-item">
                    <span>1-10 traders</span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                    <span className="progress-percent">35%</span>
                  </div>
                  <div className="progress-item">
                    <span>11-50 traders</span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                    <span className="progress-percent">45%</span>
                  </div>
                  <div className="progress-item">
                    <span>51+ traders</span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    <span className="progress-percent">55%</span>
                  </div>
                </div>
              </div>

              <div className="earn-card benefits-card">
                <div className="benefits-list">
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <DiamondIcon />
                    </div>
                    <div>
                      <h5>Lifetime Rebates</h5>
                      <p>Earn as long as your referred clients trade</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <ZapIcon />
                    </div>
                    <div>
                      <h5>Real-Time Tracking</h5>
                      <p>Monitor your earnings and volume instantly</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <TargetIcon />
                    </div>
                    <div>
                      <h5>Dedicated Support</h5>
                      <p>Personal account manager for introducers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="introducer-cta">
              <button className="btn-green">Become an Introducer →</button>
              <button className="btn-outline-light">
                View Commission Structure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
