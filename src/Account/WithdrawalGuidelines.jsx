import React from "react";

const HeaderIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="rimW_gradHeader" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f0b27a" />
        <stop offset="100%" stopColor="#ffde9c" />
      </linearGradient>
    </defs>
    <path
      d="M3 6H21M6 3H18M12 21L12 12M12 12L15 15M12 12L9 15"
      stroke="url(#rimW_gradHeader)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="#ffde9c" strokeWidth="1.6" />
    <polyline points="12 6 12 12 16 14" stroke="#ffde9c" strokeWidth="1.6" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 6L9 17L4 12" stroke="#6fbf4c" strokeWidth="2" />
  </svg>
);

/* ================= MAIN COMPONENT ================= */

export default function WithdrawalGuidelines() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* HEADER */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={styles.headerRow}>
            <div>
              <div style={styles.logoRow}>
                <HeaderIcon />
                <h1 style={styles.title}>RIM GLOBAL</h1>
              </div>

              <div style={styles.subtitle}>
                withdrawal protocol & important guidelines
              </div>
            </div>

            <div style={styles.badge}>
              <ClockIcon />
              <span>cut-off 12:00 AEST/AEDT</span>
            </div>
          </div>

          <div style={styles.divider}></div>

          <p style={styles.note}>
            ⏱️ Requests before cut-off → processed same business day. After
            cut-off → following business day.
          </p>
        </div>

        {/* FEES */}
        <div style={styles.highlight}>
          <h3 style={styles.heading}>Fees & Banking Liabilities</h3>
          <p style={styles.text}>
            <strong>RIM Global does not charge additional fees</strong> for
            deposits or withdrawals.
          </p>
          <p style={styles.text}>
            International Bank Wire Transfers may take up to 14 days.
          </p>
        </div>

        {/* CARD RULES */}
        <div style={styles.highlight}>
          <h3 style={styles.heading}>Credit / Debit Card withdrawals</h3>

          <ul style={styles.list}>
            <li style={styles.listItem}>
              <CheckIcon /> Free processing · 3–5 days
            </li>
            <li style={styles.listItem}>
              <CheckIcon /> Withdraw more than deposit → bank wire
            </li>
            <li style={styles.listItem}>
              <CheckIcon /> Expired card → upload new card
            </li>
            <li style={styles.listItem}>
              <CheckIcon /> Lost card → issuer letter needed
            </li>
            <li style={styles.listItem}>
              <CheckIcon /> New card → small deposit required
            </li>
          </ul>
        </div>

        {/* EWALLETS */}
        <div style={styles.highlight}>
          <h3 style={styles.heading}>PayPal · Neteller · Skrill</h3>
          <p style={styles.text}>Same account · instant withdrawals</p>
        </div>

        {/* BANK METHODS */}
        <div style={styles.highlight}>
          <h3 style={styles.heading}>Fasapay / Rapidpay / Klarna</h3>
          <p style={styles.text}>Bank wire · 3–5 days · fees may apply</p>

          <h4 style={{ marginTop: "1rem", color: "white" }}>Webmoney</h4>
          <p style={styles.text}>Bank transfer only · no refunds</p>
        </div>

        {/* DOMESTIC */}
        <div style={styles.highlight}>
          <h3
            style={{ color: "#fff", fontSize: "23px", marginBottom: "0.5rem" }}
          >
            Poli / Bpay (Australia)
          </h3>
          <p style={styles.text}>No extra charges · 2–3 days</p>
        </div>

        {/* RULES */}
        <div style={styles.highlight}>
          <h3 style={styles.heading}>Excess withdrawal rule</h3>
          <p style={styles.text}>Use bank wire for extra withdrawals</p>

          <h3 style={{ ...styles.heading, marginTop: "1.5rem" }}>
            First-time documentation
          </h3>
          <ul
            style={{
              marginTop: "1rem",
              color: "white",
              marginLeft: "20px",
              paddingLeft: 0,
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              Wire → bank statement required
            </li>
            <li style={{ marginBottom: "8px" }}>
              Vietnam banking → statement required
            </li>
          </ul>
        </div>

        {/* FINAL */}
        <div style={styles.highlight}>
          <h3 style={styles.heading}>No third-party payments</h3>
          <p style={styles.text}>Withdrawals must go to your account only</p>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div style={styles.footerContainer}>
        <div style={styles.footerRow}>
          <div style={styles.footerLeft}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9bb7d4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8V12L14 14" />
            </svg>

            <span style={styles.footerText}>
              Funds returned to verified source only
            </span>
          </div>

          <span style={styles.complianceBadge}>🔐 RIM Global compliance</span>
        </div>
      </div>

      <div style={styles.disclaimer}>
        * Intermediary/beneficiary fees may apply for international wires. RIM
        Global not liable for external bank charges.
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    width: "100%",
    minHeight: "100vh",
    background: "radial-gradient(circle at 0% 0%, #0a0f1f, #050b18)",
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    paddingTop: "80px",
  },

  container: {
    maxWidth: "1080px",
    margin: "0 auto",
    padding: "2rem",
    width: "100%",
    boxSizing: "border-box",
  },

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
  },

  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  },

  title: {
    fontSize: "2rem",
    background: "linear-gradient(125deg, #fff, #bdd6ff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    margin: 0,
    lineHeight: 1.2,
  },

  subtitle: {
    color: "#8aa9cc",
    fontSize: "0.8rem",
    marginTop: "4px",
  },

  badge: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(245,176,66,0.2)",
    padding: "6px 12px",
    borderRadius: "40px",
    color: "#ffde9c",
    fontSize: "0.8rem",
    whiteSpace: "nowrap",
  },

  divider: {
    height: "2px",
    background: "linear-gradient(90deg,#2c6e9e,#f5b042)",
    marginTop: "1rem",
  },

  note: {
    marginTop: "1rem",
    color: "#bfd9ff",
    fontSize: "0.9rem",
  },

  heading: {
    marginBottom: "0.5rem",
    color: "#fff",
    fontSize: "23px",
    fontWeight: "600",
  },

  text: {
    color: "#cde2ff",
    lineHeight: 1.5,
  },

  list: {
    marginTop: "1rem",
    listStyle: "none",
    padding: 0,
  },

  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
    color: "#d1e5ff",
    flexWrap: "wrap",
  },

  highlight: {
    marginTop: "2rem",
    padding: "1.5rem",
    borderLeft: "4px solid #f5b042",
    background: "#0b1c32",
    borderRadius: "10px",
    color: "#fff",
  },

  footerContainer: {
    marginTop: "2.5rem",
    padding: "1rem 2rem 0.5rem",
    borderTop: "1px solid #2f5575",
    maxWidth: "1080px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    boxSizing: "border-box",
  },

  footerRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  },

  footerLeft: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  footerText: {
    fontSize: "0.75rem",
    color: "#8fb0d0",
  },

  complianceBadge: {
    background: "#0f2a3f",
    padding: "0.3rem 1rem",
    borderRadius: "40px",
    fontSize: "0.7rem",
    color: "#c0d4f0",
    whiteSpace: "nowrap",
  },

  disclaimer: {
    fontSize: "0.68rem",
    color: "#5882a7",
    marginTop: "1rem",
    textAlign: "center",
    paddingBottom: "70px",
    maxWidth: "1080px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
};

// Media queries for responsive design - added via CSS-in-JS with @media
// Since React inline styles don't support media queries, we inject a style tag
const responsiveStyles = `
  @media (max-width: 768px) {
    .responsive-wrapper {
      padding-top: 60px;
    }
  }

  @media (max-width: 640px) {
    .responsive-container {
      padding: 1.5rem;
    }
    
    .responsive-title {
      font-size: 1.5rem;
    }
    
    .responsive-heading {
      font-size: 20px;
    }
    
    .responsive-badge span {
      font-size: 0.7rem;
    }
    
    .responsive-badge {
      white-space: normal;
    }
    
    .responsive-highlight {
      padding: 1rem;
    }
    
    .responsive-footer-container {
      padding: 1rem 1.5rem 0.5rem;
    }
    
    .responsive-compliance-badge {
      white-space: normal;
      text-align: center;
    }
    
    .responsive-footer-row {
      flex-direction: column;
      text-align: center;
    }
    
    .responsive-footer-left {
      justify-content: center;
    }
    
    .responsive-disclaimer {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .responsive-container {
      padding: 1rem;
    }
    
    .responsive-title {
      font-size: 1.3rem;
    }
    
    .responsive-logo-row {
      gap: 6px;
    }
    
    .responsive-heading {
      font-size: 18px;
    }
    
    .responsive-text {
      font-size: 0.85rem;
    }
    
    .responsive-list-item {
      font-size: 0.85rem;
    }
    
    .responsive-note {
      font-size: 0.8rem;
    }
    
    .responsive-highlight {
      padding: 0.875rem;
      margin-top: 1.5rem;
    }
    
    .responsive-badge {
      padding: 4px 10px;
    }
    
    .responsive-footer-container {
      padding: 0.875rem 1rem 0.5rem;
    }
    
    .responsive-footer-text {
      font-size: 0.7rem;
    }
    
    .responsive-compliance-badge {
      font-size: 0.65rem;
    }
    
    .responsive-disclaimer {
      font-size: 0.6rem;
      padding-bottom: 50px;
    }
  }
`;

// Inject responsive styles
if (typeof document !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.textContent = responsiveStyles;
  document.head.appendChild(styleTag);
}

// Add class names to elements for responsive styling
// This ensures the media queries work properly
if (typeof document !== "undefined") {
  const addResponsiveClasses = () => {
    const wrapper = document.querySelector('[data-wrapper="true"]');
    if (wrapper) {
      wrapper.classList.add("responsive-wrapper");
    }
  };
  // We'll add data attributes in the component instead
}
