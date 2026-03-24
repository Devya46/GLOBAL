import React, { useEffect, useState } from "react";
import styles from "./PartnertypeHeader.module.css";

const iconsList = [
  "fas fa-chart-line",
  "fas fa-hand-holding-usd",
  "fas fa-percent",
  "fas fa-building-columns",
  "fas fa-chart-simple",
  "fas fa-arrow-right-arrow-left",
  "fas fa-file-invoice-dollar",
  "fas fa-network-wired",
  "fas fa-chart-gantt",
  "fas fa-user-tie",
  "fas fa-bezier-curve",
  "fas fa-chart-scatter",
  "fas fa-coins",
  "fas fa-chart-pie",
];

const PartnertypeHeader = () => {
  const [floatingIcons, setFloatingIcons] = useState([]);
  const [toast, setToast] = useState(null);
  const [cardStyle, setCardStyle] = useState({});

  useEffect(() => {
    const generated = Array.from({ length: 24 }).map(() => {
      const icon = iconsList[Math.floor(Math.random() * iconsList.length)];
      return {
        icon,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 1.8,
        duration: 14 + Math.random() * 24,
        delay: Math.random() * 6,
        opacity: 0.04 + Math.random() * 0.09,
      };
    });

    setFloatingIcons(generated);
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y - rect.height / 2) / 25;
    const rotateY = (rect.width / 2 - x) / 25;

    setCardStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`,
    });
  };

  const resetCard = () => {
    setCardStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
    });
  };

  return (
    <section className={styles.heroSection}>
      {/* Floating BG */}
      <div className={styles.floatingBg}>
        {floatingIcons.map((item, i) => (
          <i
            key={i}
            className={`${styles.floatingIcon} ${item.icon}`}
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              fontSize: `${item.size}rem`,
              opacity: item.opacity,
              animationDuration: `${item.duration}s`,
              animationDelay: `${item.delay}s`,
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.badge}>
              <i className="fas fa-handshake"></i>
              Exclusive Broker Partner Program
            </div>

            <h1>
              Scale with <span>Elite Partner</span> Account
            </h1>

            <p className={styles.desc}>
              Unlock institutional-grade trading conditions, white-glove
              support, and industry-leading rebates.
            </p>

            <div className={styles.stats}>
              <div>
                <i className="fas fa-chart-line"></i>
                <h4 className="stat-value">0.0%</h4>
                <p>Commission caps</p>
              </div>

              <div>
                <i className="fas fa-bolt"></i>
                <h4 className="stat-value">&lt; 10ms</h4>
                <p>Execution</p>
              </div>

              <div>
                <i className="fas fa-globe"></i>
                <h4 className="stat-value">50+</h4>
                <p>Markets</p>
              </div>
            </div>

            <div className={styles.cta}>
              <button onClick={() => showToast("🚀 Application opening!")}>
                <i className="fas fa-rocket"></i> Apply Now
              </button>

              <button
                className={styles.outline}
                onClick={() => showToast("📈 Viewing benefits")}
              >
                <i className="fas fa-chart-simple"></i> View Benefits
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <div
              className={styles.card}
              style={cardStyle}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetCard}
            >
              <div className={styles.iconCluster}>
                <i className="fas fa-chart-pie"></i>
                <i className="fas fa-coins"></i>
                <i className="fas fa-arrow-trend-up"></i>
              </div>

              <h3>Premium Partner Tier</h3>
              <p>Up to 85% revenue share + IB desk</p>

              <div className={styles.badge2}>Instant Commissions</div>
            </div>
          </div>
        </div>
      </div>

      {toast && <div className={styles.toast}>{toast}</div>}
    </section>
  );
};

export default PartnertypeHeader;
