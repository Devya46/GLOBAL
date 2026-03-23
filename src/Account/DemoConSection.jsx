import React, { useEffect, useRef, useState } from "react";
import "./DemoConSection.css";

export default function DemoSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`rim-demo-section ${visible ? "show" : ""}`}
    >
      <div className="rim-demo-container">
        {/* LEFT IMAGE */}
        <div className="rim-demo-image">
          <img
            src="https://tradersklub.com/wp-content/uploads/2026/03/trading-bull.png"
            alt="Trading Bull"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="rim-demo-content">
          <p className="rim-tag">RIM GLOBAL</p>

          <h1 className="rim-title">
            Get The <span>Confidence To Trade</span>
          </h1>

          <p className="rim-description">
            Learn about the markets and hone your trading skills at your own
            pace, with zero risk. Then, when you're ready, you can easily switch
            to real trading.
          </p>

          <h3 className="rim-subtitle">
            How do I set up my free demo account?
          </h3>

          <ul className="rim-list">
            <li>
              Log in to the RIM Global platform or create an account for free
            </li>
            <li>
              Access the demo account by selecting Virtual Portfolio from the
              menu under your username
            </li>
            <li>
              Practice trading live markets in real time without risking capital
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
