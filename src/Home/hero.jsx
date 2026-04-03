import React from "react";
import Header from "../Layout/Header";
import "./hero.css";

export default function MainHome() {
  const desc =
    "A refined trading experience with secure access, responsive execution, and tools built for confident market decisions.";

  const btn = "Start Trading";
  const trustPoints = [
    "Fast onboarding",
    "Secure withdrawals",
    "Market-focused tools",
  ];

  return (
    <div className="trading-home">
      <div className="trading-hero">
        <div className="trading-hero__gradient-overlay"></div>
        <div className="trading-hero__floating trading-hero__floating--1"></div>
        <div className="trading-hero__floating trading-hero__floating--2"></div>
        <div className="trading-hero__grid"></div>
        <div className="trading-hero__image-glow"></div>

        <Header />

        <div className="trading-hero__content">
          <p className="trading-hero__tag">SMART TRADING SOLUTION</p>

          <div className="trading-hero__flip-box">
            <h1 className="trading-hero__title">
              The world's <span className="trading-hero__accent">#1</span>{" "}
              Broker
              <br />
              for Modern Trading
            </h1>

            <p className="trading-hero__desc">{desc}</p>
            <div className="trading-hero__actions">
              <button className="trading-hero__cta">{btn}</button>
            </div>

            <div className="trading-hero__trust-row">
              {trustPoints.map((point) => (
                <span key={point} className="trading-hero__trust-pill">
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
