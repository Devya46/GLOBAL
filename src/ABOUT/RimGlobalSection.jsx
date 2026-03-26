import React, { useEffect } from "react";
import styles from "./RimGlobalSection.module.css";

const RimGlobalSection = () => {
  // Card data array for cleaner mapping
  const features = [
    {
      title: "Fast Execution",
      description:
        "RIM Global utilises enterprise grade hardware on our trade servers in the NY4 & LD5 data centre in New York & London respectively. Our trader servers are collocated with the data server of our pricing providers in these data centres. Dedicated fibre optic cross connects us and our pricing providers to ensure the lowest latency and fastest possible trade execution for our clients.",
      badges: ["NY4 Data Center", "LD5 London Hub", "Fiber Optic"],
      icon: (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h6l-2 8 10-12h-6l2-8z" />
          <path d="M13 2L3 14h6l-2 8 10-12h-6l2-8z" fill="none" />
        </svg>
      ),
    },
    {
      title: "Superior Technology",
      description:
        "RIM Global has partnered with the world's best trading technology companies to bring you the ultimate trading experience and cutting edge trading tools. These tools include: Depth of Market (DoM), inbuilt spread monitoring, ladder trading, automated close of trades with custom order templates, and more. Our iPhone and Android trading applications have been optimised to provide you the best possible mobile trading experience.",
      badges: ["Depth of Market", "Spread Monitor", "Ladder Trading"],
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <path d="M7 9l2 2 4-4" stroke="currentColor" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Advanced Trading Tools",
      description:
        "Our additions to MetaTrader 4 such as a one click trade module, market depth, spread monitor, trade risk calculator, and advanced order types previously not available on MetaTrader 4 make for a better trading experience.",
      badges: ["1-Click Trade", "Risk Calculator", "Advanced Orders"],
      icon: (
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
          <path
            d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
            stroke="currentColor"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" />
        </svg>
      ),
    },
    {
      title: "Superior Trading Platforms",
      description:
        "MetaTrader 4, MetaTrader 5, and cTrader are 3 of the best trading platforms available today. RIM Global has revolutionised forex trading by giving traders direct access to our Raw Pricing using any of these popular trading platforms.",
      badges: ["MetaTrader 4", "MetaTrader 5", "cTrader", "Raw Pricing"],
      icon: (
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
          <rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="2"
            stroke="currentColor"
          />
          <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" />
          <line x1="8" y1="14" x2="12" y2="14" stroke="currentColor" />
          <path d="M8 18h8" stroke="currentColor" />
        </svg>
      ),
    },
    {
      title: "Trust And Transparency",
      description:
        "Trust and Transparency form the basis of RIM Global core values. RIM Global is a regulated Forex CFD provider that applies Raw Spreads on its main and most famous account type, so there is no requotes, no price manipulation and no restrictions.",
      badges: ["Regulated Broker", "Raw Spreads", "No Requotes"],
      icon: (
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
          <path
            d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z"
            stroke="currentColor"
            fill="rgba(155,197,255,0.1)"
          />
        </svg>
      ),
    },
  ];

  // Handle badge click with console feedback
  const handleBadgeClick = (badgeText, cardTitle) => {
    console.log(
      `🔍 Explore more: ${badgeText} — ${cardTitle} | RIM Global advanced infrastructure`,
    );
  };

  // Animation on mount
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.featureCard}`);
    cards.forEach((card, index) => {
      card.style.animationDelay = `${0.05 + index * 0.05}s`;
    });
  }, []);

  return (
    <section className={styles.rimWhySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Why Choose RIM Global</h2>
          <p>
            RIM Global has grown to become one of the largest MetaTrader 4 Forex
            CFD providers in the world by giving traders what they really want.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={styles.featureCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transition =
                  "transform 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1)";
              }}
            >
              <div className={styles.cardIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className={styles.techBadge}>
                {feature.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className={styles.badgeItem}
                    onClick={() => handleBadgeClick(badge, feature.title)}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Reinforced Trust & Transparency callout */}
        <div className={styles.trustHighlight}>
          <h4>⚡ Integrity & Innovation, Redefined</h4>
          <p>
            RIM Global — Regulated Forex CFD provider offering Raw Spreads, no
            requotes, no price manipulation, and unrestricted trading
            environment. Our commitment to transparency is backed by
            cutting-edge infrastructure and global licensing standards.
          </p>
          <div className={styles.trustBadgeLine}>
            <div className={styles.trustItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M20 12V8H4v8h16v-4M12 4v4M8 4v4M16 4v4"
                  stroke="currentColor"
                />
                <circle cx="12" cy="16" r="2" />
              </svg>
              <span>No Requotes</span>
            </div>
            <div className={styles.trustItem}>
              <svg viewBox="0 0 24 24" stroke="currentColor">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>Raw Spreads</span>
            </div>
            <div className={styles.trustItem}>
              <svg viewBox="0 0 24 24" stroke="currentColor">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span>Regulated & Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RimGlobalSection;
