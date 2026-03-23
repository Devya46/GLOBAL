import React, { useEffect, useState } from "react";
import style from "./FundsHub.module.css";

export default function FundsHub() {
  const s = style;

  const [feedback, setFeedback] = useState(
    "Click any button to see funding steps",
  );

  const handleDeposit = () => {
    setFeedback(
      "✓ Deposit simulation: Choose method → Enter amount → Confirm 2FA → Instant credit (demo)",
    );
  };

  const handleWithdraw = () => {
    setFeedback(
      "✓ Withdrawal flow: Select wallet → Verify whitelist → 2FA code → processing within hours (demo)",
    );
  };

  return (
    <div className={s["funds-hub"]}>
      <div className={s["funds-container"]}>
        {/* HERO */}
        <div className={s["hero-funds"]}>
          <h1>Withdrawal & Deposits</h1>

          <div className={s["hero-sub"]}>
            <span>
              <i className="fas fa-bolt"></i> Instant processing
            </span>
            <span>
              <i className="fas fa-shield-hooded"></i> Bank-grade security
            </span>
            <span>
              <i className="fas fa-chart-line"></i> Real-time limits
            </span>
          </div>
        </div>

        {/* CARDS */}
        <div className={s["tx-grid"]}>
          {/* DEPOSIT */}
          <div className={s["fund-card"]}>
            <div className={s["card-header-icon"]}>
              <i className="fas fa-arrow-down-to-bracket"></i>
              <h2>Deposit methods</h2>
            </div>

            <div className={s["method-list"]}>
              <div className={s["method-item"]}>
                <i className="fas fa-university"></i>
                <span>Wire transfer · 0% fee, 1-2 days</span>
              </div>
              <div className={s["method-item"]}>
                <i className="fab fa-cc-visa"></i>
                <span>Visa / Mastercard · Instant, 1.5% fee</span>
              </div>
              <div className={s["method-item"]}>
                <i className="fab fa-bitcoin"></i>
                <span>USDT / ETH / BTC · &lt; 10 min, 0.3% network</span>
              </div>
              <div className={s["method-item"]}>
                <i className="fas fa-mobile-alt"></i>
                <span>Apple Pay · Google Pay · instant</span>
              </div>
            </div>

            <div className={s["badge-speed"]}>
              Min deposit: $20 | Max: unlimited
            </div>
          </div>

          {/* WITHDRAW */}
          <div className={s["fund-card"]}>
            <div className={s["card-header-icon"]}>
              <i className="fas fa-arrow-up-from-bracket"></i>
              <h2>Withdrawal options</h2>
            </div>

            <div className={s["method-list"]}>
              <div className={s["method-item"]}>
                <i className="fas fa-landmark"></i>
                <span>Bank transfer · 1-3 days, flat $5 fee</span>
              </div>
              <div className={s["method-item"]}>
                <i className="fab fa-usd"></i>
                <span>Stablecoins · 1h, network fee</span>
              </div>
              <div className={s["method-item"]}>
                <i className="fas fa-wallet"></i>
                <span>Skrill / Neteller · instant, 1.8%</span>
              </div>
              <div className={s["method-item"]}>
                <i className="fas fa-exchange-alt"></i>
                <span>Internal transfer · free</span>
              </div>
            </div>

            <div className={s["badge-speed"]}>
              Min withdrawal: $50 | Daily cap: $50k
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className={s["info-panel"]}>
          <div className={s["info-tile"]}>
            <i className="fas fa-calculator"></i>
            <h3>Transparent fees</h3>
            <p>No hidden charges · Deposit fees as low as 0%</p>
          </div>

          <div className={s["info-tile"]}>
            <i className="fas fa-globe"></i>
            <h3>Multi-currency support</h3>
            <p>USD, EUR, GBP + 30+ cryptocurrencies</p>
          </div>

          <div className={s["info-tile"]}>
            <i className="fas fa-fingerprint"></i>
            <h3>Secure authentication</h3>
            <p>2FA, whitelist, email confirmations</p>
          </div>
        </div>

        {/* CTA */}
        <div className={s["action-zone"]}>
          <div className={s["action-title"]}>
            <i className="fas fa-hand-holding-usd"></i>
            <span>Quick action — simulate transfer request</span>
          </div>

          <div className={s["simulate-buttons"]}>
            <button className={s["fund-btn"]} onClick={handleDeposit}>
              Request deposit guide
            </button>

            <button
              className={`${s["fund-btn"]} ${s["fund-btn-outline"]}`}
              onClick={handleWithdraw}
            >
              Request withdrawal guide
            </button>
          </div>

          <div className={s["toast-msg"]}>{feedback}</div>
        </div>

        {/* FOOTER */}
        <div className={s["fund-footer"]}>
          24/7 processing · Encrypted · Instant crypto settlement
        </div>
      </div>
    </div>
  );
}
