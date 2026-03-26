import React from "react";
import "./PartnersScreen.css";

// Partner data – includes name, icon (FontAwesome class), short description
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

// Trust / stats row component
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

// Main Component: Our Partners Screen
const PartnersScreen = () => {
  return (
    <div className="partners-screen">
      <div className="partners-inner">
        {/* Header area */}
        <div className="section-header">
          <h2>✦ Our Partners ✦</h2>
          <div className="accent-line"></div>
          <div className="subhead">trusted alliances driving innovation</div>
        </div>

        {/* Partners grid */}
        <div className="partners-grid">
          {partnersData.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>

        {/* Stats section */}
        <StatsRow />

        {/* Footer note */}
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
