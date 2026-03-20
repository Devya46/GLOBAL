import React from "react";
import "./TradingTerminals.css";

export default function TradingTerminals() {
  return (
    <section className="terminals">
      <div className="terminal-sec">
        <div className="label">TERMINALS</div>

        <h2>
          <span>Powerful</span> Trading Terminals
        </h2>

        <div className="sub">
          MetaTrader <span>5</span>
        </div>

        <div className="platform-box">
          <div className="platforms">
            <div className="platform">
              <i className="fab fa-windows"></i>
              <p>Windows</p>
            </div>

            <div className="platform">
              <i className="fas fa-globe"></i>
              <p>Web Browser</p>
            </div>

            <div className="platform">
              <i className="fab fa-android"></i>
              <p>Android</p>
            </div>

            <div className="platform">
              <div className="mac-text">
                <i className="fab fa-apple"></i>Mac
              </div>
              <p>MAC</p>
            </div>

            <div className="platform">
              <div className="ios-text">iOS</div>
              <p>IOS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
