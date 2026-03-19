import React from "react";
import "./AutoTrading.css";

export default function AutoTrading() {
  return (
    <section className="auto-trading">
      {/* LEFT SIDE */}
      <div className="auto-left">
        <img
          className="bg-img"
          src="https://images.unsplash.com/photo-1658243762621-95b2c50e9683?q=80&w=1198&auto=format&fit=crop"
          alt="trading floor"
          loading="lazy"
        />

        <div className="stats">
          <div className="stat-card">
            <h3>$1.39T</h3>
            <p>Trading Volume</p>
          </div>

          <div className="stat-card">
            <h3>200K+</h3>
            <p>Active Clients</p>
          </div>

          <div className="stat-card">
            <h3>300K</h3>
            <p>Trades / Day</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="auto-right">
        <span className="label">AUTOMATED TRADING</span>

        <h2>
          Give Your <span>Automated</span>
          <br />
          Trading System The Edge
        </h2>

        <p>
          RIM Global is the one of the top choices for automated traders. Our
          order matching engine located in the New York Equinix NY4 data centre
          processes over 300,000 trades per day with over two thirds of all
          trades coming from Automated Trading Systems.
        </p>
      </div>
    </section>
  );
}
