import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./hero.css";

export default function MainHome() {
  const [index, setIndex] = useState(0);

  const titles = [
    <>
      New to Trading?
      <br /> We're Here
      <br />
      Learn-Trade-Grow
    </>,
    "Essential Tools for Every Trader's Success",
    "Fast, Secure & Transparent Trading",
  ];

  const desc =
    "Start with a demo account and explore global markets risk-free. Access advanced charts, real-time market insights and powerful tools designed to help you analyse trends and trade smarter.";

  const btn = "Start Trading";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div>
      <div className="hero">
        <Header />

        <div className="hero-content">
          <p className="tag">SMART TRADING SOLUTION</p>

          <div className="flip-box">
            <h1 key={index} className="cube-text">
              {titles[index]}
            </h1>

            <p className="desc">{desc}</p>
            <button className="cta">{btn}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
