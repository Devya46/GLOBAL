import React from "react";
import "./TradingTerminals.css";
import { Monitor, Globe, Smartphone, Apple, Tablet } from "lucide-react";

export default function TradingTerminals() {
  return (
    <section className="terminals">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source
            src="https://tradersklub.com/wp-content/uploads/2026/03/248691.mp4"
            type="video/mp4"
          />
        </video>
        <div className="overlay"></div>
      </div>

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
              <div className="icon-wrapper">
                <Monitor size={72} strokeWidth={1.2} />
              </div>
              <p>Windows</p>
            </div>

            <div className="platform">
              <div className="icon-wrapper">
                <Globe size={72} strokeWidth={1.2} />
              </div>
              <p>Web Browser</p>
            </div>

            <div className="platform">
              <div className="icon-wrapper">
                <Smartphone size={72} strokeWidth={1.2} />
              </div>
              <p>Android</p>
            </div>

            <div className="platform">
              <div className="icon-wrapper mac-icon">
                <Apple size={68} strokeWidth={1.2} />
              </div>
              <p>MAC</p>
            </div>

            <div className="platform">
              <div className="icon-wrapper ios-icon">
                <Tablet size={72} strokeWidth={1.2} />
              </div>
              <p>IOS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
