import React from "react";
import "./DEMOHeroSection.css";

export default function HeroSection() {
  return (
    <section className="rim-hero">
      <div className="rim-hero-container">
        <div className="rim-demo-badge">
          ✨ <span>Demo Account</span> • RIM Global
        </div>

        <h1 className="rim-hero-headline">
          Practice investing <br />
          with <span className="rim-hero-highlight">zero risk,</span> real
          markets
        </h1>

        <p className="rim-hero-description">
          We provide our Customers with the Highest level of Financial
          Confidence and Investment Protection.
        </p>

        <div className="rim-button-group">
          <button className="rim-btn-primary">✨ Create An Account</button>

          <button className="rim-btn-secondary">📈 Practice Investing</button>
        </div>

        <div className="rim-demo-note">
          <span>🔹 Demo Account • RIM Global</span>
          <span className="rim-dot"></span>
          <span>⚡ Practice investing — zero risk, real markets</span>
          <span className="rim-dot"></span>
          <span>✅ Create An Account.</span>
        </div>

        <div className="rim-bottom-note">
          <span>Demo Account • RIM Global</span>
          <span>•</span>
          <span>Practice investing | zero risk, real markets</span>
          <span>•</span>
          <span>Create An Account.</span>
        </div>
      </div>
    </section>
  );
}
