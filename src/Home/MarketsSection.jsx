import React from "react";
import "./markets.css";

export default function MarketsSection() {
  const cards = [
    {
      title: "Bond CFDs",
      products: "9 Products",
      img: "https://cdn-icons-png.flaticon.com/128/8631/8631970.png",
      desc: "Trade government and corporate bonds with stable market exposure and diversify your portfolio with reliable fixed-income assets.",
    },
    {
      title: "Cryptocurrency CFDs",
      products: "21 Products",
      img: "https://cdn-icons-png.flaticon.com/128/8631/8631927.png",
      desc: "Trade Bitcoin, Ethereum and leading digital assets with high liquidity and ultra-fast market execution.",
    },
    {
      title: "Forex CFDs",
      products: "61 Products",
      img: "https://cdn-icons-png.flaticon.com/128/8632/8632149.png",
      desc: "Access the world's largest financial market and trade major, minor and exotic currency pairs.",
    },
    {
      title: "Commodities CFDs",
      products: "24 Products",
      img: "https://cdn-icons-png.flaticon.com/128/5180/5180831.png",
      desc: "Trade global commodities including gold, oil and silver with competitive spreads and flexible leverage.",
    },
    {
      title: "Stocks CFDs",
      products: "2100+ Products",
      img: "https://cdn-icons-png.flaticon.com/128/5137/5137215.png",
      desc: "Invest in leading global companies and trade shares from major stock exchanges around the world.",
    },
    {
      title: "Index CFDs",
      products: "25 Products",
      img: "https://cdn-icons-png.flaticon.com/128/4051/4051341.png",
      desc: "Track global economic performance by trading indices like NASDAQ, S&P500 and Dow Jones.",
    },
  ];

  return (
    <section className="markets-premium">
      <div className="markets-container">
        {/* LEFT GRID */}
        <div className="flip-grid">
          {cards.map((card, i) => (
            <div className="flip-card" key={i}>
              <div className="flip-inner">
                {/* FRONT */}
                <div className="flip-front">
                  <img src={card.img} alt={card.title} />
                  <h4>{card.title}</h4>
                  <p>{card.products}</p>
                </div>

                {/* BACK */}
                <div className="flip-back">
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="right-content">
          <span className="accent-tag">MULTI-ASSET TRADING</span>

          <h2>
            Trade Global Markets <br />
            <span>With Confidence</span>
          </h2>

          <p className="right-description">
            RIM Global provides traders access to a wide range of global
            financial markets through one powerful and intuitive platform.
          </p>

          <p>
            Our advanced trading technology, real-time data feeds and
            professional trading tools empower traders to identify opportunities
            and execute strategies with confidence.
          </p>

          <a href="/" className="market-cta">
            Explore All Markets
          </a>
        </div>
      </div>
    </section>
  );
}
