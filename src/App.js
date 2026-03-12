import React, { useEffect, useState } from "react";
import "./style.css";
import MarketsSection from "./MarketsSection";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: (
        <>
          New to Trading? We're Here
          <br />
          Learn-Trade-Grow
        </>
      ),
      desc: "Start with a demo account and explore the markets risk-free while learning how trading works in real market conditions.",
      btn: "Try Now",
    },
    {
      title: "Essential Tools for Every Trader's Success",
      desc: "Access advanced charts, real-time market insights and powerful tools designed to help you analyse trends and trade smarter.",
      btn: "Start Now",
    },
    {
      title: "Fast, Secure & Transparent Trading",
      desc: "Trade global markets with lightning-fast execution, secure transactions and a transparent trading environment.",
      btn: "Start Trading",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

          <div key={index} className="flip-box">
            <h1>{slides[index].title}</h1>

            <p className="desc">{slides[index].desc}</p>

            <button className="cta">{slides[index].btn}</button>
          </div>
        </div>
      </div>

      {/* NEXT SECTION */}

      <MarketsSection />
    </div>
  );
}
