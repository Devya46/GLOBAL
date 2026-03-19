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

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!menuOpen) {
        setScrolled(window.scrollY > 80);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Title rotation (FIXED)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [titles.length]);

  // Lock body scroll
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

      {/* HERO */}
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
            <button className="nav-item">Home</button>
            <button className="nav-item">About</button>

            <div className="dropdown nav-item">
              <span className="dropdown-trigger">
                Accounts <span className="arrow">▾</span>
              </span>
              <div className="dropdown-menu">
                <button>Account Type</button>
                <button>Demo Account</button>
                <button>Withdrawal & Deposits</button>
              </div>
            </div>

            <div className="dropdown nav-item">
              <span className="dropdown-trigger">
                Partners <span className="arrow">▾</span>
              </span>
              <div className="dropdown-menu">
                <button>Partner Types</button>
                <button>Partner Program</button>
                <button>Investor</button>
                <button>Become a Partner</button>
              </div>
            </div>

            <button className="nav-item">Blogs</button>
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

          <button onClick={() => setMenuOpen(false)}>Home</button>
          <button onClick={() => setMenuOpen(false)}>About</button>

          <div className="mobile-dropdown">
            <span onClick={() => toggleDropdown("accounts")}>
              Accounts {dropdowns.accounts ? "▴" : "▾"}
            </span>

            <div
              className={`mobile-dropdown-menu ${
                dropdowns.accounts ? "show" : ""
              }`}
            >
              <button onClick={() => setMenuOpen(false)}>Account Type</button>
              <button onClick={() => setMenuOpen(false)}>Demo Account</button>
              <button onClick={() => setMenuOpen(false)}>
                Withdrawal & Deposits
              </button>
            </div>
          </div>

          <div className="mobile-dropdown">
            <span onClick={() => toggleDropdown("partners")}>
              Partners {dropdowns.partners ? "▴" : "▾"}
            </span>

            <div
              className={`mobile-dropdown-menu ${
                dropdowns.partners ? "show" : ""
              }`}
            >
              <button onClick={() => setMenuOpen(false)}>Partner Types</button>
              <button onClick={() => setMenuOpen(false)}>
                Partner Program
              </button>
              <button onClick={() => setMenuOpen(false)}>Investor</button>
              <button onClick={() => setMenuOpen(false)}>
                Become a Partner
              </button>
            </div>
          </div>

          <button onClick={() => setMenuOpen(false)}>Blogs</button>

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

      {/* SECTIONS */}
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
