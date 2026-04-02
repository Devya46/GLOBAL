// PartnerProgramsMain.jsx
import React, { useState } from "react";
import "./PartnerProgramsMain.css";

// Partner data – includes name, icon, short description
const partnersData = [
  {
    id: 1,
    name: "Vertex Global",
    iconClass: "fas fa-globe-americas",
    desc: "Digital Infrastructure",
  },
  {
    id: 2,
    name: "Aether Capital",
    iconClass: "fas fa-chart-line",
    desc: "Strategic Investments",
  },
  {
    id: 3,
    name: "Nexa Industries",
    iconClass: "fas fa-industry",
    desc: "Manufacturing Excellence",
  },
  {
    id: 4,
    name: "Onyx Ventures",
    iconClass: "fas fa-gem",
    desc: "VC & Innovation",
  },
  {
    id: 5,
    name: "Solara Energy",
    iconClass: "fas fa-solar-panel",
    desc: "Renewable Solutions",
  },
  {
    id: 6,
    name: "CodeFusion",
    iconClass: "fas fa-code",
    desc: "AI & Software",
  },
];

// Stats data
const stats = [
  { value: "150+", label: "Global Partners" },
  { value: "24", label: "Countries" },
  { value: "98%", label: "Satisfaction" },
];

// Partner Card Component
const PartnerCard = ({ partner }) => {
  return (
    <div className="partner-card">
      <div className="partner-logo">
        <i className={partner.iconClass}></i>
      </div>
      <div className="partner-name">{partner.name}</div>
      <div className="partner-desc">{partner.desc}</div>
    </div>
  );
};

// Stats row component
const StatsRow = () => {
  return (
    <div className="trust-section">
      {stats.map((stat, idx) => (
        <div key={idx} className="stat-item">
          <span className="stat-number">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

// NEW: Compact Partner Program Section
const PartnerProgram = () => {
  const [selectedTier, setSelectedTier] = useState("silver");

  const tiers = {
    silver: {
      name: "Silver",
      benefits: ["Basic Support", "Marketing Kit", "5% Commission"],
    },
    gold: {
      name: "Gold",
      benefits: [
        "Priority Support",
        "Co-marketing",
        "10% Commission",
        "Quarterly Review",
      ],
    },
    platinum: {
      name: "Platinum",
      benefits: [
        "24/7 Support",
        "Strategic Planning",
        "15% Commission",
        "Global Events",
        "Dedicated Manager",
      ],
    },
  };

  return (
    <div className="partner-program-new">
      <div className="program-badge">
        <i className="fas fa-star-of-life"></i>
        <span>Join the Alliance</span>
      </div>

      <div className="program-compact-content">
        <div className="program-left">
          <h3>Partner Program</h3>
          <p>Grow with us • Exclusive benefits • Global network</p>

          <div className="tier-selector">
            <button
              className={`tier-btn ${selectedTier === "silver" ? "active" : ""}`}
              onClick={() => setSelectedTier("silver")}
            >
              Silver
            </button>
            <button
              className={`tier-btn ${selectedTier === "gold" ? "active" : ""}`}
              onClick={() => setSelectedTier("gold")}
            >
              Gold
            </button>
            <button
              className={`tier-btn ${selectedTier === "platinum" ? "active" : ""}`}
              onClick={() => setSelectedTier("platinum")}
            >
              Platinum
            </button>
          </div>

          <div className="benefits-list">
            {tiers[selectedTier].benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-item">
                <i className="fas fa-check"></i>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="program-right">
          <div className="cta-compact">
            <div className="cta-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <div className="cta-text">
              <h4>Ready to partner?</h4>
              <button className="apply-btn">
                Apply Now <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

// Main Component
const PartnersScreen = () => {
  return (
    <div className="partners-screen">
      <div className="partners-inner">
        {/* Header */}
        <div className="section-header">
          <h2>✦ Partner Program ✦</h2>
          <div className="accent-line"></div>
          <div className="subhead">trusted alliances driving innovation</div>
        </div>

        {/* Partners grid */}
        <div className="partners-grid">
          {partnersData.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>

        {/* Stats */}
        <StatsRow />

        {/* NEW: Compact Partner Program Section */}
        <PartnerProgram />

        {/* Footer */}
        <div className="footer-note">
          <i className="fas fa-handshake"></i>
          <span>Proud to collaborate with industry leaders</span>
          <i className="fas fa-arrow-trend-up"></i>
        </div>
      </div>
    </div>
  );
};

export default PartnersScreen;
