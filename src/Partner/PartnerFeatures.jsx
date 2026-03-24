import React, { useState, useEffect } from "react";
import styles from "./PartnerFeatures.module.css";

const FeatureItem = ({
  iconClass,
  title,
  description,
  extraContent,
  index,
}) => {
  return (
    <div
      className={styles.featureCard}
      style={{ animationDelay: `${0.1 + index * 0.18}s` }}
    >
      <div className={styles.featureIcon}>
        <i className={iconClass}></i>
      </div>

      <div className={styles.featureContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        {extraContent}
      </div>
    </div>
  );
};

const PartnerFeatures = () => {
  const [lastUpdateMsg, setLastUpdateMsg] = useState(
    "✨ Live: New partner milestone tools active",
  );
  const [paymentKey, setPaymentKey] = useState(0);
  const [rippleEffect, setRippleEffect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const updates = [
        "🚀 Real-time: +127 new QR scans this hour",
        "💸 Recurring payment sent: $342.80 to wallet",
        "📈 Partner conversion rate +8.2% (last 24h)",
        "🔔 Important: Instant withdrawal feature upgraded",
        "🎯 Your unique QR code is trending in dashboard",
      ];
      const randomMsg = updates[Math.floor(Math.random() * updates.length)];
      setLastUpdateMsg(`✨ ${randomMsg}`);
    }, 11000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPaymentKey((prev) => prev + 1);
    }, 8000);

    return () => clearInterval(pulseInterval);
  }, []);

  const handleManualNotif = () => {
    const msgs = [
      "✅ Partner alert: New promotion assets ready",
      "⚡ Instant payout triggered: 0.015 ETH to trading account",
      "📱 Notification: Referral commission updated",
    ];

    const msg = msgs[Math.floor(Math.random() * msgs.length)];
    setLastUpdateMsg(`🔔 ${msg}`);

    setRippleEffect(true);
    setTimeout(() => setRippleEffect(false), 300);
  };

  const RecurringExtra = () => (
    <div className={styles.liveIndicator} key={`rec-${paymentKey}`}>
      <span className={styles.blinkDot}></span>
      <span>⚡ Real-time payouts · Auto-settlement active</span>
    </div>
  );

  const QrExtra = () => (
    <div className={styles.qrBadge}>
      <i className="fas fa-qrcode"></i>
      <span>Dynamic QR · track scans & rewards</span>
    </div>
  );

  const NotificationExtra = () => (
    <div className={styles.notifDemo}>
      <div
        className={styles.toast}
        style={rippleEffect ? { background: "#4f46e5" } : {}}
      >
        <i className="fas fa-bell"></i>
        <span>{lastUpdateMsg}</span>
      </div>

      <button onClick={handleManualNotif} className={styles.simulateBtn}>
        <i className="fas fa-sync-alt"></i> Live update
      </button>
    </div>
  );

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>
            <i className="fas fa-crown"></i>
            Partner Dynamic Suite
          </span>

          <h2 className={styles.title}>Next-gen partner tools</h2>

          <p className={styles.subtitle}>
            Real-time insights, automated payouts, and unique QR technology —
            built to scale your success.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.imageBox}>
            <img
              src="https://rimglobal.trade/assets/images/partner-illustration.png"
              alt="Partner"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/600x500/0f172a/4f46e5?text=RIM+Partner+Hub";
              }}
            />
          </div>

          <div className={styles.list}>
            <FeatureItem
              iconClass="fas fa-qrcode"
              title="Dynamic QR · Smart Promotion"
              description="Generate your unique QR code with live analytics."
              extraContent={<QrExtra />}
              index={0}
            />

            <FeatureItem
              iconClass="fas fa-credit-card"
              title="Recurring Payments & Wallet"
              description="Receive automated payouts instantly."
              extraContent={<RecurringExtra />}
              index={1}
            />

            <FeatureItem
              iconClass="fas fa-bell"
              title="Smart Notifications"
              description="Get real-time alerts and updates."
              extraContent={<NotificationExtra />}
              index={2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerFeatures;
