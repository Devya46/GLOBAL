import React from "react";
import Header from "../Layout/Header";
import "./hero.css";

export default function MainHome() {
  const desc =
    "A refined trading experience with secure access, responsive execution, and tools built for confident market decisions.";

  const btn = "Start Trading";
  const trustPoints = ["Fast onboarding", "Secure withdrawals", "Market-focused tools"];

  return (
    <div>
      <div className="hero">
        <div className="gradient-overlay"></div>
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="hero-grid"></div>
        <div className="hero-image-glow"></div>

        <Header />

        <div className="hero-content">
          <p className="tag">SMART TRADING SOLUTION</p>

          <div className="flip-box">
            <h1 className="cube-text">
              The world's <span className="hero-accent">#1</span> broker
              <br />
              for modern trading
            </h1>

            <p className="desc">{desc}</p>
            <div className="hero-actions">
              <button className="cta">{btn}</button>
            </div>

            <div className="hero-trust-row">
              {trustPoints.map((point) => (
                <span key={point} className="trust-pill">
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
