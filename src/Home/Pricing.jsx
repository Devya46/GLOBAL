import React, { useEffect, useRef } from "react";
import "./Pricing.css";

const accounts = [
  {
    title: "CLASSIC",
    price: "$100",
    deposit: "CLASSIC ACCOUNT",
    features: [
      "Spread : 2 Pips",
      "Commission : No",
      "Leverage : 1:1000",
      "EA Allowed : No",
      "Swap Charges : No",
    ],
  },
  {
    title: "ECN",
    price: "$500",
    deposit: "ECN ACCOUNT",
    features: [
      "Spread : 1.5 Pips",
      "Commission : No",
      "Leverage : 1:800",
      "EA Allowed : No",
      "Swap Charges : No",
    ],
  },
  {
    title: "STANDARD",
    price: "$2500",
    deposit: "STANDARD ACCOUNT",
    features: [
      "Spread : 1 Pips",
      "Commission : No",
      "Leverage : 1:600",
      "EA Allowed : No",
      "Swap Charges : No",
    ],
  },
  {
    title: "VIP",
    price: "$5000",
    deposit: "VIP ACCOUNT",
    features: [
      "Spread : 0.2 Pips",
      "Commission : No",
      "Leverage : 1:400",
      "EA Allowed : No",
      "Swap Charges : No",
    ],
  },
];

export default function ForexPricing() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll(".account-card");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-in");
              }, index * 120);
            });
            observer.unobserve(grid);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    observer.observe(grid);

    // fallback
    if (grid.getBoundingClientRect().top < window.innerHeight - 80) {
      setTimeout(() => {
        cards.forEach((card, idx) => {
          setTimeout(() => {
            card.classList.add("animate-in");
          }, idx * 120);
        });
      }, 150);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="forex-pricing">
      <div className="section-badge">
        <h2>Start Your Trading Account Now!</h2>
        <p>
          We are equipped with four types of trading accounts to suit the
          different needs and risk tolerances of trader.
        </p>
      </div>

      <div className="cards-grid" ref={gridRef}>
        {accounts.map((acc, index) => (
          <div className="account-card" key={index}>
            <div className="card-title">{acc.title}</div>

            <div className="price">
              {acc.price} <small>/per Min Deposit</small>
            </div>

            <span className="deposit-badge">{acc.deposit}</span>

            <ul className="features">
              {acc.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <a href="/" className="open-btn">
              Open Account
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
