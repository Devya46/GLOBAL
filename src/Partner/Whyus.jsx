import React from "react";
import styles from "./Whyus.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faWallet,
  faChalkboardUser,
  faChargingStation,
  faRocket,
  faInfinity,
  faCheckCircle,
  faChartLine,
  faBolt,
  faHeadset,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

const Whyus = () => {
  return (
    <section className={styles.pf_section}>
      <div className={styles.pf_container}>
        {/* HEADER */}
        <div className={styles.pf_header}>
          <h2>
            Take Your Business{" "}
            <span className={styles.pf_accent}>to the Next Level</span>
          </h2>
          <p>
            Why Join The RIM Global Partner Programs — unlock premium tools,
            ultra-low spreads, and daily commissions
          </p>
        </div>

        {/* GRID */}
        <div className={styles.pf_grid}>
          <FeatureCard
            icon={faBriefcase}
            title="Partners Program"
            items={[
              <>
                Partner with a{" "}
                <strong className={styles.pf_green}>
                  trusted and regulated broker
                </strong>
              </>,
              "Simple application process and easy-to-follow guide",
              "Multiple commission-paying trading accounts",
            ]}
          />

          <FeatureCard
            icon={faWallet}
            title="Rewards & Withdrawals"
            items={[
              <>
                Highly competitive, <strong>volume-based payments</strong>
              </>,
              "Fast profit withdrawals & multiple payment options",
              "Real-time referral commission dashboard",
            ]}
          />

          <FeatureCard
            icon={faChalkboardUser}
            title="Extensive Dashboard"
            items={[
              "Real-time referral commission & advanced monitoring system",
              "24/7 multi-lingual support",
              "Custom performance insights & daily stats",
            ]}
          />

          <FeatureCard
            icon={faChargingStation}
            title="Ultra Low Spreads"
            items={[
              "Multiple trading platforms & fast execution",
              "Servers in USA & India → low latency",
              "Transparent pricing model",
            ]}
          />

          <FeatureCard
            icon={faRocket}
            title="Easy To Get Started"
            items={[
              "Zero sign-up fees & simple set-up process",
              "Marketing tools + unique referral link",
              "Personalized partner onboarding",
            ]}
          />

          <FeatureCard
            icon={faInfinity}
            title="Unlimited Commissions"
            items={[
              <>
                Earn{" "}
                <strong className={styles.pf_green}>
                  0.4 pips per standard lot
                </strong>
              </>,
              "Daily commissions + extra rebates",
              "No earning caps — scale infinitely",
            ]}
          />
        </div>

        <hr className={styles.pf_divider} />

        {/* FOOTER BADGES */}
        <div className={styles.pf_badges}>
          <span>
            <FontAwesomeIcon icon={faChartLine} /> Multiple trading platforms
            (MT4/5)
          </span>
          <span>
            <FontAwesomeIcon icon={faBolt} /> Fast execution & high liquidity
          </span>
          <span>
            <FontAwesomeIcon icon={faHeadset} /> Dedicated partner support 24/7
          </span>
          <span>
            <FontAwesomeIcon icon={faPaintBrush} /> Marketing banners & creative
            assets
          </span>
        </div>
      </div>
    </section>
  );
};

/* CARD COMPONENT */
const FeatureCard = ({ icon, title, items }) => {
  return (
    <div className={styles.pf_card}>
      <div className={styles.pf_cardTitle}>
        <div className={styles.pf_icon}>
          <FontAwesomeIcon icon={icon} />
        </div>
        {title}
      </div>

      <ul className={styles.pf_list}>
        {items.map((item, i) => (
          <li key={i}>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.pf_check} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Whyus;
