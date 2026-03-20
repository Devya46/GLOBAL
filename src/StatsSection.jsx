import React, { useEffect, useRef } from "react";
import "./StatsSection.css";

export default function StatsSection() {
  const sectionRef = useRef(null);

  const countersData = [
    { value: 500000, label: "TRADES PER DAY", icon: "fa-chart-line" },
    {
      value: 4,
      label: "TRADING HUB AT NEW YORK (Equinix NY4)",
      icon: "fa-globe",
    },
    { value: 60, label: "ALGO TRADES (% OF ALL TRADES)", icon: "fa-robot" },
    { value: 100, label: "GLOBAL PRESENCE", icon: "fa-earth-asia" }, // optional filler
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "m+";
    if (num >= 1000) return Math.floor(num / 1000) + "k+";
    return Math.floor(num) + "+";
  };

  const runCounter = (el, target) => {
    let count = 0;
    const duration = 1200;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const update = () => {
      count += increment;

      if (count < target) {
        el.innerText = formatNumber(count);
        requestAnimationFrame(update);
      } else {
        el.innerText = formatNumber(target);
      }
    };

    update();
  };

  useEffect(() => {
    const section = sectionRef.current;
    const counters = section.querySelectorAll(".counter");
    const bars = section.querySelectorAll(".progress-fill");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counters.forEach((el) => {
            const target = +el.dataset.target;
            runCounter(el, target);
          });

          bars.forEach((bar) => {
            bar.style.width = bar.dataset.width + "%";
          });
        }
      });
    });

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-wrapper" ref={sectionRef}>
      <div className="stats-container">
        {/* LEFT */}
        <div className="stats-side">
          {countersData.slice(0, 2).map((item, i) => (
            <div className="stats-card" key={i}>
              <div className="stats-big counter" data-target={item.value}>
                0
              </div>
              <div className="stats-small">{item.label}</div>

              <div className="stats-footer">
                <i className={`fas ${item.icon}`}></i>
                <span>Strength</span>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div className="stats-center">
          <div className="stats-tag">STRENGTH TRADING</div>
          <h2>Our Strength Is In The Numbers</h2>

          <p className="stats-desc">
            RIM Global is one of the largest Forex CFD providers in the world by
            trading volume.
          </p>

          {[
            { title: "Platform Stability", label: "99.9%", width: 90 },
            { title: "Execution Speed", label: "Fast", width: 85 },
            { title: "Client Satisfaction", label: "95%", width: 88 },
          ].map((item, i) => (
            <div className="progress-item" key={i}>
              <h4>{item.title}</h4>

              <div className="progress-bar">
                <div className="progress-label">{item.label}</div>
                <div className="progress-fill" data-width={item.width}></div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        {/* RIGHT */}
        <div className="stats-side">
          {/* ALGO TRADES */}
          <div className="stats-card">
            <div className="stats-big counter" data-target={60}>
              0
            </div>
            <div className="stats-small">ALGO TRADES (% OF ALL TRADES)</div>

            <div className="stats-footer">
              <i className="fas fa-robot"></i>
              <span>Strength</span>
            </div>
          </div>

          {/* EQUINIX NY4 (TEXT CARD) */}
          <div className="stats-card">
            <div className="stats-big" style={{ fontSize: "22px" }}>
              Equinix NY4
            </div>
            <div className="stats-small">TRADING HUB AT NEW YORK</div>

            <div className="stats-footer">
              <i className="fas fa-globe"></i>
              <span>Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
