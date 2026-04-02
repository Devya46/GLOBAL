// InvestorsSection.jsx
import React, { useEffect } from "react";
import "./InvestorsSection.css";

const InvestorsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="investors-section">
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>
      <div className="bg-grid"></div>

      <div className="container">
        {/* Header */}
        {/* <div className="header animate-on-scroll">
          <div className="logo">RIHGLOBAL</div>
        </div> */}

        {/* Hero Content - Only Heading & Subheading */}
        <div className="hero-content animate-on-scroll">
          <h1 className="hero-title">
            For <span className="gradient-text">INVESTORS</span>
          </h1>
          <p className="hero-description">
            Scale with elite partner accounts. Unlock institutional-grade
            trading conditions,
            <br />
            white-glove support, and industry-leading rebates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
