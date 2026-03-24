import React from "react";
import "./KeepGrowing.css";

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

      {/* Section 2: Introducer - Full width */}
      <div className="section-two">
        <div className="section-two-container">
          <div className="introducer-content">
            <div className="introducer-header">
              <div className="card-badge introducer-badge">
                Introducer Program
              </div>
              <h2 className="introducer-title">
                We Built a Market{" "}
                <span className="highlight-gold">They Trade, You Earn!</span>
              </h2>
              <p className="introducer-subtitle">
                Refer clients to us and earn rebates on the volumes they trade.
              </p>
            </div>

            <div className="earn-showcase">
              <div className="earn-card main-card">
                <div className="percentage-display">
                  <div className="percentage-ring">
                    <span className="percentage-number">55%</span>
                    <span className="percentage-label">Revenue Share</span>
                  </div>
                  <div className="percentage-desc">
                    <h4>Earn up to 55%</h4>
                    <p>of our revenue from every active trader you introduce</p>
                  </div>
                </div>
              </div>

              <div className="earn-card scale-card">
                <div className="scale-icon">📈</div>
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
                    <div className="benefit-icon">💎</div>
                    <div>
                      <h5>Lifetime Rebates</h5>
                      <p>Earn as long as your referred clients trade</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">⚡</div>
                    <div>
                      <h5>Real-Time Tracking</h5>
                      <p>Monitor your earnings and volume instantly</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">🎯</div>
                    <div>
                      <h5>Dedicated Support</h5>
                      <p>Personal account manager for introducers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="introducer-cta">
              <button className="btn-gold">Become an Introducer →</button>
              <button className="btn-glass">View Commission Structure</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
