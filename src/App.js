import React, { useEffect, useState } from "react";
import "./style.css";
import MarketsSection from "./MarketsSection";
import TradeView from "./TradeView";
import LeadingBroker from "./LeadingBroker";
import Features from "./Features";
import Pricing from "./Pricing";
import AccountSteps from "./AccountSteps";
import AutoTrading from "./AutoTrading";
import Footer from "./Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    accounts: false,
    partners: false,
  });

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

  // 🔹 Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!menuOpen) {
        setScrolled(window.scrollY > 80);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // 🔹 Title rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 🔹 Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div>
      {/* OVERLAY */}
      <div
        className={`menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* HERO SECTION */}
      <div className="hero">
        {/* HEADER */}
        <header className={scrolled ? "header scrolled" : "header"}>
          <img
            src="https://rimglobal.trade/assets/logo/logo.svg"
            className="logo"
            alt="logo"
          />

          {/* DESKTOP NAV */}
          <nav className="nav">
            <a className="nav-item">Home</a>
            <a className="nav-item">About</a>

            <div className="dropdown nav-item">
              <span className="dropdown-trigger">
                Accounts <span className="arrow">▾</span>
              </span>
              <div className="dropdown-menu">
                <a>Account Type</a>
                <a>Demo Account</a>
                <a>Withdrawal & Deposits</a>
              </div>
            </div>

            <div className="dropdown nav-item">
              <span className="dropdown-trigger">
                Partners <span className="arrow">▾</span>
              </span>
              <div className="dropdown-menu">
                <a>Partner Types</a>
                <a>Partner Program</a>
                <a>Investor</a>
                <a>Become a Partner</a>
              </div>
            </div>

            <a className="nav-item">Blogs</a>
          </nav>

          {/* BUTTONS */}
          <div className="buttons">
            <button className="login">LOG IN</button>
            <button className="contact">CONTACT US</button>
          </div>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        {/* MOBILE NAV */}
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <span className="close-btn" onClick={() => setMenuOpen(false)}>
            &times;
          </span>

          <a onClick={() => setMenuOpen(false)}>Home</a>
          <a onClick={() => setMenuOpen(false)}>About</a>

          {/* Accounts */}
          <div className="mobile-dropdown">
            <span onClick={() => toggleDropdown("accounts")}>
              Accounts {dropdowns.accounts ? "▴" : "▾"}
            </span>

            <div
              className={`mobile-dropdown-menu ${
                dropdowns.accounts ? "show" : ""
              }`}
            >
              <a onClick={() => setMenuOpen(false)}>Account Type</a>
              <a onClick={() => setMenuOpen(false)}>Demo Account</a>
              <a onClick={() => setMenuOpen(false)}>Withdrawal & Deposits</a>
            </div>
          </div>

          {/* Partners */}
          <div className="mobile-dropdown">
            <span onClick={() => toggleDropdown("partners")}>
              Partners {dropdowns.partners ? "▴" : "▾"}
            </span>

            <div
              className={`mobile-dropdown-menu ${
                dropdowns.partners ? "show" : ""
              }`}
            >
              <a onClick={() => setMenuOpen(false)}>Partner Types</a>
              <a onClick={() => setMenuOpen(false)}>Partner Program</a>
              <a onClick={() => setMenuOpen(false)}>Investor</a>
              <a onClick={() => setMenuOpen(false)}>Become a Partner</a>
            </div>
          </div>

          <a onClick={() => setMenuOpen(false)}>Blogs</a>

          <div className="buttons">
            <button className="login">LOG IN</button>
            <button className="contact">CONTACT US</button>
          </div>
        </div>

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

      {/* NEXT SECTIONS */}
      <TradeView />
      <MarketsSection />
      <LeadingBroker />
      <Features />
      <Pricing />
      <AccountSteps />
      <AutoTrading />
      <Footer />
    </div>
  );
}
