import React, { useEffect, useRef } from "react";
import "./PartnerProgramsMain.css";

const PartnerProgramsMain = () => {
  const processSectionRef = useRef(null);

  const handleJoinClick = () => {
    alert(
      "Start your Partner Journey with RIM Global! Unique partner ID & daily revenue-share await.",
    );
    processSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    console.log(
      "RIM Global Partner Sections — Full width, dark bg process, icons integrated.",
    );
  }, []);

  // Feature cards data
  const featureCards = [
    {
      icon: "fas fa-briefcase",
      title: "Partners Program",
      features: [
        "Partner with a trusted and regulated broker",
        "Simple application process and easy-to-follow guide",
        "Multiple commission-paying trading accounts",
      ],
    },
    {
      icon: "fas fa-wallet",
      title: "Rewards & Withdrawals",
      features: [
        "Highly competitive, volume-based payments",
        "Fast profit withdrawals & multiple payment options",
        "Real-time referral commission dashboard",
      ],
    },
    {
      icon: "fas fa-chalkboard-user",
      title: "Extensive Dashboard",
      features: [
        "Real-time referral commission & advanced monitoring system",
        "24/7 multi-lingual support",
        "Custom performance insights & daily stats",
      ],
    },
    {
      icon: "fas fa-charging-station",
      title: "Ultra Low Spreads",
      features: [
        "Multiple trading platforms & fast execution",
        "Servers in USA & India → low latency",
        "Transparent pricing model",
      ],
    },
    {
      icon: "fas fa-rocket",
      title: "Easy To Get Started",
      features: [
        "Zero sign-up fees & simple set-up process",
        "Marketing tools + unique referral link",
        "Personalized partner onboarding",
      ],
    },
    {
      icon: "fas fa-infinity",
      title: "Unlimited Commissions",
      features: [
        "Earn 0.4 pips per standard lot",
        "Daily commissions + extra rebates",
        "No earning caps — scale infinitely",
      ],
    },
  ];

  return (
    <>
      {/* SECTION 1 : Full Width Hero with enhanced right side */}
      <section className="section-full section-hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fas fa-handshake"></i> Partner Programs
            </div>
            <h1>
              Scale with <span className="hero-highlight">RIM Global</span>
              <br />
              Referral Ecosystem
            </h1>
            <p className="hero-desc">
              Turn your network into a revenue machine. Industry-leading
              payouts, daily commissions, and a partner-first approach with
              regulated trust.
            </p>
            <button className="cta-button" onClick={handleJoinClick}>
              Start Earning <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="hero-animation">
            <div className="floating-card-enhanced">
              <div className="card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="card-text">
                <h4>0.4 pips per lot</h4>
                <p>Daily revenue-share · Unlimited commissions</p>
              </div>
            </div>
            <div className="floating-card-enhanced card2-enhanced">
              <div className="card-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              <div className="card-text">
                <h4>Real-time stats</h4>
                <p>Advanced dashboard · 24/7 monitoring</p>
              </div>
            </div>
            <div className="floating-card-enhanced card3-enhanced">
              <div className="card-icon">
                <i className="fas fa-globe-americas"></i>
              </div>
              <div className="card-text">
                <h4>Global infrastructure</h4>
                <p>Servers in USA & India · Low latency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 : Process with dark background image */}
      <section className="section-full section-process" ref={processSectionRef}>
        <div className="process-container">
          <div style={{ textAlign: "left" }}>
            <h2 className="section-title">
              Partnership <span className="title-accent">Process</span>
            </h2>
            <p className="subhead">
              Simple, transparent, and built for your success — from referral to
              reward
            </p>
          </div>
          {/* steps grid 1-6 with icons */}
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-title">
                <i className="fas fa-compass"></i> Start your journey
              </div>
              <div className="step-desc">
                We will guide you on how to start your referral journey
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-title">
                <i className="fas fa-id-card"></i> Unique ID & Link
              </div>
              <div className="step-desc">
                A unique partner ID is generated along with a campaign link
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-title">
                <i className="fas fa-share-alt"></i> Publish & Share
              </div>
              <div className="step-desc">
                Publish your partner link on your social, website and other
                channels
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-title">
                <i className="fas fa-users"></i> Referrals become clients
              </div>
              <div className="step-desc">
                Referrals become clients and start trading with RIM Global
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-title">
                <i className="fas fa-coins"></i> Daily Revenue-Share
              </div>
              <div className="step-desc">
                Receive daily revenue-share from eligible clients
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">6</div>
              <div className="step-title">
                <i className="fas fa-chart-simple"></i> Performance Updates
              </div>
              <div className="step-desc">
                Receive updates on your performance and support along the way.
              </div>
            </div>
          </div>

          {/* image & content row */}
          <div className="image-content-row">
            <div className="process-img">
              <svg
                width="220"
                height="160"
                viewBox="0 0 280 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="20"
                  y="40"
                  width="70"
                  height="70"
                  rx="14"
                  fill="#1A2340"
                  stroke="#5ee28a"
                  strokeWidth="2"
                />
                <rect
                  x="100"
                  y="80"
                  width="70"
                  height="70"
                  rx="14"
                  fill="#1A2340"
                  stroke="#5ee28a"
                  strokeWidth="2"
                />
                <rect
                  x="180"
                  y="40"
                  width="70"
                  height="70"
                  rx="14"
                  fill="#1A2340"
                  stroke="#5ee28a"
                  strokeWidth="2"
                />
                <path
                  d="M55 75 L100 115 L215 75"
                  stroke="#5ee28a"
                  strokeWidth="2.5"
                  strokeDasharray="5 3"
                  fill="none"
                />
                <circle cx="55" cy="75" r="5" fill="#5ee28a" />
                <circle cx="135" cy="115" r="5" fill="#5ee28a" />
                <circle cx="215" cy="75" r="5" fill="#5ee28a" />
                <text
                  x="40"
                  y="30"
                  fill="#a0b0e6"
                  fontSize="9"
                  fontWeight="bold"
                >
                  Referral Link
                </text>
                <text x="195" y="30" fill="#a0b0e6" fontSize="9">
                  Daily Payouts
                </text>
              </svg>
            </div>
            <div className="process-stats">
              <div className="stat-badge">
                <i className="fas fa-gem"></i>{" "}
                <strong>Zero sign-up fees</strong> — Simple set-up process,
                marketing tools + unique referral link
              </div>
              <div className="stat-badge">
                <i className="fas fa-chart-line"></i>
                <strong>Unlimited Commissions</strong> — Earn 0.4 pips per
                standard lot, daily commissions & extra rebates
              </div>
              <div className="stat-badge">
                <i className="fas fa-headset"></i>
                <strong>Real-time referral commission</strong> — Advanced
                monitoring system & 24/7 multi-lingual support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 : Take Your Business + Why Join */}
      {/* <section className="section-full section-features">
        <div className="features-container">
          <div className="features-header">
            <h2>
              Take Your Business
              <span className="title-accent"> to the Next Level</span>
            </h2>
            <p>
              Why Join The RIM Global Partner Programs — unlock premium tools,
              ultra-low spreads, and daily commissions
            </p>
          </div>
          <div className="features-grid">
            {featureCards.map((card, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-title">
                  <div className="feature-icon">
                    <i className={card.icon}></i>
                  </div>
                  {card.title}
                </div>
                <ul className="feature-list">
                  {card.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i>
                      {feature.includes("trusted and regulated broker") ? (
                        <>
                          Partner with a{" "}
                          <strong className="highlight-green">
                            trusted and regulated broker
                          </strong>
                        </>
                      ) : feature.includes("volume-based payments") ? (
                        <>
                          Highly competitive,{" "}
                          <strong>volume-based payments</strong>
                        </>
                      ) : feature.includes("0.4 pips per standard lot") ? (
                        <>
                          Earn{" "}
                          <strong className="highlight-green">
                            0.4 pips per standard lot
                          </strong>
                        </>
                      ) : (
                        feature
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <hr />
          <div className="footer-badges">
            <span>
              <i className="fas fa-chart-line" style={{ color: "#5ee28a" }}></i>{" "}
              Multiple trading platforms (MT4/5)
            </span>
            <span>
              <i className="fas fa-bolt" style={{ color: "#5ee28a" }}></i> Fast
              execution & high liquidity
            </span>
            <span>
              <i className="fas fa-headset" style={{ color: "#5ee28a" }}></i>{" "}
              Dedicated partner support 24/7
            </span>
            <span>
              <i
                className="fas fa-paintbrush-fine"
                style={{ color: "#5ee28a" }}
              ></i>
              Marketing banners & creative assets
            </span>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default PartnerProgramsMain;
