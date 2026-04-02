import React, { useState } from "react";
import {
  Landmark,
  Bot,
  TrendingUp,
  Shield,
  Fuel,
  Bitcoin,
  Lightbulb,
  Sparkles,
  Globe,
  BarChart3,
  AlertTriangle,
  Zap,
  Brain,
  ChartLine,
  ArrowUpRight,
  RefreshCw,
  Smile,
  Library,
  Eye,
} from "lucide-react";
import "./ForexLandscape.css";

const ForexLandscape = () => {
  const [aiTipRevealed, setAiTipRevealed] = useState(false);

  // Define insights array
  const insights = [
    "Monitor central bank divergence – the key to 2026 trends.",
    "Use AI tools for pattern recognition, but trust your risk management.",
    "Safe havens (USD/JPY/CHF) shine during geopolitical uncertainty.",
    "Flash volatility is real – always set protective stops.",
    "Emerging markets: high yield but high care – watch fundamentals.",
    "Commodity correlations: oil up = CAD up, gold up = AUD momentum.",
    "CBDCs are coming: prepare for lower transaction costs & new flows.",
    "Diversify strategies: combine carry trades with technical confirmations.",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(
    Math.floor(Math.random() * insights.length),
  );

  const refreshInsight = () => {
    let newIndex = Math.floor(Math.random() * insights.length);
    while (newIndex === currentMessageIndex && insights.length > 1) {
      newIndex = Math.floor(Math.random() * insights.length);
    }
    setCurrentMessageIndex(newIndex);
  };

  return (
    <section className="forex-blog">
      <div className="blog-container">
        {/* Header Section - Centered */}
        <div className="blog-header">
          <div className="header-badge">
            <Sparkles size={16} />
            <span>2026 Outlook</span>
          </div>
          <h1 className="blog-title">
            The Evolving <br />
            <span className="title-gradient">Forex Landscape</span>
          </h1>
          <div className="header-divider"></div>
        </div>

        {/* Blog Content - No Cards, Clean Typography */}
        <div className="blog-content">
          {/* Section 1: Central Bank Policy Divergence */}
          <article className="blog-article">
            <div className="article-icon">
              <Landmark size={32} strokeWidth={1.5} />
            </div>
            <h2>Central Bank Policy Divergence</h2>
            <p className="article-lead">
              The most significant driver of forex movements in 2026 is the
              divergence in central bank monetary policies across major
              economies.
            </p>
            <p>
              The Federal Reserve has entered a prolonged easing cycle — gradual
              rate cuts creating{" "}
              <strong className="highlight-blue">dollar weakness</strong>{" "}
              against currencies with tighter stances. Meanwhile, the ECB
              balances growth and inflation, while the{" "}
              <strong>Bank of Japan</strong> has abandoned its ultra-loose
              policy, strengthening the yen.
            </p>
            <div className="insight-block">
              <ChartLine size={20} />
              <p>
                <strong className="highlight-green">Carry trades shine:</strong>{" "}
                widening rate differentials offer fresh yield opportunities.
              </p>
            </div>
            <div className="insight-block">
              <Library size={20} />
              <p>
                Focus on central bank minutes, inflation reports & forward
                guidance — anticipate shifts early.
              </p>
            </div>
            <div className="stats-row">
              <div className="stat-badge">
                <span className="stat-label">Fed easing</span>
                <span className="stat-value">~125bps projected</span>
              </div>
              <div className="stat-badge">
                <span className="stat-label">BoJ pivot</span>
                <span className="stat-value">first hike in 17y</span>
              </div>
              <div className="stat-badge">
                <span className="stat-label">DXY index</span>
                <span className="stat-value">downside bias</span>
              </div>
            </div>
          </article>

          <div className="blog-divider"></div>

          {/* Section 2: AI & Algorithmic Trading */}
          <article className="blog-article">
            <div className="article-icon">
              <Bot size={32} strokeWidth={1.5} />
            </div>
            <h2>AI & Algorithmic Trading</h2>
            <p>
              Machine learning algorithms now execute a significant portion of
              daily forex volume — creating more efficient markets but also new
              risks.
              <strong> Flash volatility events</strong> have evolved from rare
              to periodic reality as algorithms react simultaneously to data.
            </p>
            <div className="insight-block warning">
              <Zap size={20} />
              <p>
                <strong className="highlight-green">Flash crash ready:</strong>{" "}
                always use stop-loss strategies in this environment.
              </p>
            </div>
            <div className="insight-block">
              <Brain size={20} />
              <p>
                Competitive edge = speed of{" "}
                <strong className="highlight-blue">
                  information processing & execution
                </strong>
                .
              </p>
            </div>

            <div className="ai-section">
              <div className="ai-prompt">
                <Lightbulb size={18} />
                <span>
                  AI insight: sentiment analysis can detect early shifts from
                  news.
                </span>
                <button
                  className="ai-reveal-btn"
                  onClick={() => setAiTipRevealed(!aiTipRevealed)}
                >
                  {aiTipRevealed ? "Tip shown" : "Pro tip"}
                </button>
              </div>
              {aiTipRevealed && (
                <div className="ai-expanded">
                  <Zap size={16} />
                  <span>
                    Advanced AI edge: Use correlation matrix tools & real-time
                    news sentiment to anticipate algo-driven moves before volume
                    spikes.
                  </span>
                </div>
              )}
            </div>
          </article>

          <div className="blog-divider"></div>

          {/* Section 3: Emerging Market Opportunities */}
          <article className="blog-article">
            <div className="article-icon">
              <TrendingUp size={32} strokeWidth={1.5} />
            </div>
            <h2>Emerging Market Opportunities</h2>
            <p>
              As developed market rates decline, capital flows into EM
              currencies with superior yields. The Brazilian real, Indian rupee,
              and Mexican peso are benefiting, though volatility is higher.
            </p>
            <div className="insight-block">
              <BarChart3 size={20} />
              <p>
                Monitor{" "}
                <strong className="highlight-blue">
                  credit ratings, debt-to-GDP, current accounts & foreign
                  reserves
                </strong>
                .
              </p>
            </div>
            <div className="insight-block warning">
              <AlertTriangle size={20} />
              <p>
                Risk-reward compelling — but political stability & capital
                controls require strict risk management.
              </p>
            </div>
            <div className="trend-tags">
              <span className="trend-tag">
                <ArrowUpRight size={12} /> BRL · INR · MXN
              </span>
              <span className="trend-tag">
                <Fuel size={12} /> CAD, NOK
              </span>
            </div>
            <div className="pro-tip">
              <Lightbulb size={16} />
              <p>
                <strong className="highlight-green">Pro tip:</strong> Track EM
                central bank reserve changes weekly — rising reserves often
                signal stability and currency strength.
              </p>
            </div>
          </article>

          <div className="blog-divider"></div>

          {/* Section 4: Geopolitical Tensions & Safe Havens */}
          <article className="blog-article">
            <div className="article-icon">
              <Shield size={32} strokeWidth={1.5} />
            </div>
            <h2>Geopolitics & Safe Havens</h2>
            <p>
              Geopolitical uncertainty remains elevated in 2026: trade
              negotiations, regional conflicts, shifting alliances create
              risk-off episodes.
              <strong className="highlight-blue"> USD, JPY, CHF</strong>{" "}
              experience inflows during turbulence.
            </p>
            <div className="insight-block">
              <TrendingUp size={20} />
              <p>
                Build positions in safe havens ahead of crises, or fade strength
                after resolution.
              </p>
            </div>
            <div className="insight-block">
              <Globe size={20} />
              <p>
                Maintain awareness of geopolitical calendars and central bank
                rhetoric shifts.
              </p>
            </div>
          </article>

          <div className="blog-divider"></div>

          {/* Section 5: Commodity Prices & Currency Correlations */}
          <article className="blog-article">
            <div className="article-icon">
              <Fuel size={32} strokeWidth={1.5} />
            </div>
            <h2>Commodity Prices & Currency Links</h2>
            <p>
              Oil prices strengthen CAD, NOK, RUB. Gold influences AUD & ZAR.
              Agricultural goods impact NZD & BRL.
            </p>
            <div className="stats-row">
              <div className="stat-badge">
                <span className="stat-label">WTI ~$82</span>
                <span className="stat-value">supports loonie</span>
              </div>
              <div className="stat-badge">
                <span className="stat-label">Gold ~$2,150</span>
                <span className="stat-value">boosts AUD</span>
              </div>
            </div>
          </article>

          <div className="blog-divider"></div>

          {/* Section 6: Digital Assets & CBDCs */}
          <article className="blog-article">
            <div className="article-icon">
              <Bitcoin size={32} strokeWidth={1.5} />
            </div>
            <h2>Digital Assets & CBDCs</h2>
            <p>
              Cryptocurrencies influence sentiment and capital flows, especially
              among younger traders. Several nations are piloting Central Bank
              Digital Currencies (CBDCs), which may reduce forex transaction
              costs and reshape international payments.
            </p>
            <div className="insight-block">
              <Globe size={20} />
              <p>
                CBDC interoperability could reshape cross-border settlements by
                2027-28.
              </p>
            </div>
            <div className="insight-block">
              <Bitcoin size={20} />
              <p>
                Bitcoin & crypto correlation with risk assets still matters for
                forex sentiment.
              </p>
            </div>
          </article>

          <div className="blog-divider"></div>

          {/* Section 7: Positioning for Success - Featured */}
          <article className="blog-article featured-article">
            <div className="article-icon featured-icon">
              <Sparkles size={32} strokeWidth={1.5} />
            </div>
            <h2>Positioning for Success</h2>
            <p>
              Navigating the 2026 forex landscape requires combining traditional
              analysis with awareness of these emerging themes.
              <strong className="highlight-blue">
                {" "}
                Focus on central bank policy divergence for directional bias
              </strong>
              , use technical analysis for precise entry and exit timing, and
              maintain flexibility to adapt as new information emerges.
            </p>
            <div className="insight-block">
              <ChartLine size={20} />
              <p>
                <strong className="highlight-green">Strategy:</strong> Diversify
                across themes — carry trades, AI signals, safe-haven hedges.
              </p>
            </div>
            <div className="insight-block">
              <Smile size={20} />
              <p>
                <strong className="highlight-blue">Friendly reminder:</strong>{" "}
                always practice disciplined risk management (1-2% rule).
              </p>
            </div>
          </article>
        </div>

        {/* Dynamic Insight Bar */}
        <div className="insight-bar">
          <Eye size={18} />
          <span className="insight-text">{insights[currentMessageIndex]}</span>
          <button className="insight-refresh" onClick={refreshInsight}>
            <RefreshCw size={14} />
            <span>Refresh</span>
          </button>
        </div>

        <footer className="blog-footer">
          <BarChart3 size={14} />
          <span>Data-driven perspectives 2026 | Macro + AI + Geopolitics</span>
        </footer>
      </div>
    </section>
  );
};

export default ForexLandscape;
