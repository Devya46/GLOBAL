import React, { useEffect, useState } from "react";
import "./style.css";
import MarketsSection from "./MarketsSection";
import TradeView from "./TradeView";
import Footer from "./Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [index, setIndex] = useState(0);

  const titles = [
    <>
      New to Trading? We're Here
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero">
        {/* HEADER */}
        <header className={scrolled ? "header scrolled" : "header"}>
          <img
            src="https://rimglobal.trade/assets/logo/logo.svg"
            className="logo"
            alt="logo"
          />

          <nav className="nav">
            <a className="nav-item" href="#">
              Home
            </a>
            <a className="nav-item" href="#">
              About
            </a>

            <div className="dropdown nav-item">
              <span className="dropdown-trigger">
                Accounts <span className="arrow">▾</span>
              </span>
              <div className="dropdown-menu">
                <a href="#">Account Type</a>
                <a href="#">Demo Account</a>
                <a href="#">Withdrawal & Deposits</a>
              </div>
            </div>

            <div className="dropdown nav-item">
              <span className="dropdown-trigger">
                Partners <span className="arrow">▾</span>
              </span>
              <div className="dropdown-menu">
                <a href="#">Partner Types</a>
                <a href="#">Partner Program</a>
                <a href="#">Investor</a>
                <a href="#">Become a Partner</a>
              </div>
            </div>

            <a className="nav-item" href="#">
              Blogs
            </a>
          </nav>

          <div className="buttons">
            <button className="login">LOG IN</button>
            <button className="contact">CONTACT US</button>
          </div>
        </header>

        {/* HERO CONTENT */}
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

      {/* NEXT SECTION */}
      <TradeView />
      <MarketsSection />
      <Footer />
    </div>
  );
}
