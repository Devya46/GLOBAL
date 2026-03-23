import React from "react";
// import "./WithdrawalGuidelines.css";

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
          <h3>Poli / Bpay (Australia)</h3>
          <p>No extra charges · 2–3 days</p>
        </div>

        {/* RULES */}
        <div style={styles.highlight}>
          <h3 style={styles.heading}>Excess withdrawal rule</h3>
          <p style={styles.text}>Use bank wire for extra withdrawals</p>

          <h3 style={styles.heading}>First-time documentation</h3>
          <ul
            style={{ marginTop: "1rem", color: "white", "margin-left": "20px" }}
          >
            <li>Wire → bank statement required</li>
            <li>Vietnam banking → statement required</li>
          </ul>
        </div>

        {/* FINAL */}
        <div style={styles.highlight}>
          <h3 style={styles.heading}>No third-party payments</h3>
          <p style={styles.text}>Withdrawals must go to your account only</p>
        </div>
      </div>
      <div
        style={{
          marginTop: "2.5rem",
          padding: "1rem 0 0.5rem",
          borderTop: "1px solid #2f5575",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          margin: "0px 208px",
        }}
      >
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
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

          <span style={{ fontSize: "0.75rem", color: "#8fb0d0" }}>
            Funds returned to verified source only
          </span>
        </div>

        <span
          style={{
            background: "#0f2a3f",
            padding: "0.3rem 1rem",
            borderRadius: "40px",
            fontSize: "0.7rem",
            color: "#c0d4f0",
          }}
        >
          🔐 RIM Global compliance
        </span>
      </div>

      <div
        style={{
          fontSize: "0.68rem",
          color: "#5882a7",
          marginTop: "1rem",
          textAlign: "center",
          "padding-bottom": "70px",
        }}
      >
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
    fontFamily: "Inter, sans-serif",
    paddingTop: "80px",
  },

  container: {
    maxWidth: "1080px",
    margin: "auto",
    padding: "2rem",
  },

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
  },

  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  title: {
    fontSize: "2rem",
    background: "linear-gradient(125deg, #fff, #bdd6ff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },

  subtitle: {
    color: "#8aa9cc",
    fontSize: "0.8rem",
  },

  badge: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(245,176,66,0.2)",
    padding: "6px 12px",
    borderRadius: "40px",
    color: "#ffde9c",
  },

  divider: {
    height: "2px",
    background: "linear-gradient(90deg,#2c6e9e,#f5b042)",
    marginTop: "1rem",
  },

  note: {
    marginTop: "1rem",
    color: "#bfd9ff",
  },

  card: {
    marginTop: "2rem",
    padding: "1.5rem",
    borderRadius: "20px",
    background: "rgba(10,25,45,0.5)",
    border: "1px solid rgba(80,130,170,0.25)",
  },

  heading: {
    marginBottom: "0.5rem",
    color: "#fff",
    fontSize: "23px",
  },

  text: {
    color: "#cde2ff",
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
  },

  highlight: {
    marginTop: "2rem",
    padding: "1.5rem",
    borderLeft: "4px solid #f5b042",
    background: "#0b1c32",
    borderRadius: "10px",
    color: "#fff",
  },
};
