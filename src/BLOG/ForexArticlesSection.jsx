import React from "react";
import "./ForexArticlesSection.css";

const ForexArticlesSection = () => {
  // Article data array for easy maintenance
  const articles = [
    {
      id: 1,
      date: "January 7, 2026",
      title: "Top Forex Trading Strategies for 2026",
      excerpt:
        "The forex market in 2026 demands adaptive strategies that leverage technology and market insights. With daily trading volumes exceeding $7 trillion, the foreign exchange market offers unprecedented opportunities for traders who embrace algorithmic tools, AI-driven analytics, and flexible position management.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format",
      imageAlt: "Forex trading charts and analysis",
      readMoreLink: "/BLOG/TopForexTrading",
    },
    {
      id: 2,
      date: "January 5, 2026",
      title: "Understanding the Three Types of Forex Market Analysis",
      excerpt:
        "Successful forex trading requires a comprehensive understanding of market analysis. Unlike gambling, profitable trading is built on informed decision-making using three distinct analytical approaches: technical analysis, fundamental analysis, and sentiment analysis — each offering a unique lens into currency movements.",
      image:
        "https://images.unsplash.com/photo-1719381565370-86f9d7a9fc34?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Market analysis graphs and indicators",
      readMoreLink: "/BLOG/MarketAnalysis",
    },
    {
      id: 3,
      date: "January 3, 2026",
      title: "What Will Drive Forex Markets in 2026?",
      excerpt:
        "The forex market in 2026 is being shaped by a unique combination of monetary policy shifts, technological advancement, and geopolitical realignment. Understanding these driving forces is essential for navigating volatility and capturing sustained trends in major and exotic pairs.",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format",
      imageAlt: "Global financial markets concept",
      readMoreLink: "/BLOG/DriveMarket",
    },
    {
      id: 4,
      date: "December 30, 2025",
      title: "Is Forex Trading Profitable in 2026?",
      excerpt:
        "Forex trading remains profitable in 2026, but not for everyone. Statistics consistently show that approximately 70-80% of retail forex traders lose money, while a dedicated minority achieves consistent returns through disciplined execution, robust risk parameters, and continuous adaptation.",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format",
      imageAlt: "Profit growth chart and coins",
      readMoreLink: "/BLOG/Profitable",
    },
    {
      id: 5,
      date: "December 28, 2025",
      title: "How to Choose the Best Forex Broker in 2026",
      excerpt:
        "Your forex broker serves as your gateway to currency markets, executing your trades and holding your capital. Choosing the wrong broker can sabotage even the best trading strategies through poor execution, hidden fees, or unreliable platforms. Regulation, spreads, and trading conditions matter more than ever.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
      imageAlt: "Broker comparison and financial decision",
      readMoreLink: "/BLOG/BestBroker",
    },
    {
      id: 6,
      date: "December 15, 2025",
      title: "Mastering Risk Management: The Key to Forex Trading Success",
      excerpt:
        "The difference between profitable traders and those who blow their accounts isn't strategy selection — it's risk management. You can have the world's best trading strategy, but without proper risk controls, position sizing, and emotional discipline, long-term survival remains out of reach.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format",
      imageAlt: "Risk management concept with shield and charts",
      readMoreLink: "/BLOG/RiskManagement",
    },
  ];

  return (
    <section className="forex-section-navy">
      <div className="container-navy">
        {/* Section Header */}
        <div className="section-header-navy">
          <h2> Forex Intelligence 2026</h2>
          <div className="badge-date-navy">
            📅 Latest insights · Updated weekly
          </div>
          <p className="section-subtitle-navy">
            Expert analysis, proven strategies, and market forecasts for the new
            era of currency trading
          </p>
        </div>

        {/* Articles Grid */}
        <div className="articles-grid-navy">
          {articles.map((article) => (
            <article key={article.id} className="article-card-navy">
              {/* Image Container */}
              <div className="card-image-navy">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x500/0B2B3F/4A9FCC?text=Forex+Insight";
                  }}
                />
                <div className="image-overlay-navy"></div>
              </div>

              {/* Card Content */}
              <div className="card-content-navy">
                <span className="article-date-navy">{article.date}</span>
                <h3 className="article-title-navy">{article.title}</h3>
                <p className="article-excerpt-navy">{article.excerpt}</p>
                <div className="card-footer-navy">
                  <div className="card-divider-navy"></div>
                  <a href={article.readMoreLink} className="read-more-navy">
                    Read full article
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div className="footer-note-navy">
          <span>
            📈 2026 forex insights — Adaptive strategies, market analysis &
            institutional-grade risk wisdom
          </span>
        </div>
      </div>
    </section>
  );
};

export default ForexArticlesSection;
