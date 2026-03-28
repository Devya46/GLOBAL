import React, { useState } from "react";
import {
  Landmark,
  Bot,
  TrendingUp,
  Shield,
  Fuel,
  Bitcoin,
  ChevronRight,
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
} from "lucide-react";
import "./ForexLandscape.css";

const ForexLandscape = () => {
  const [aiTipRevealed, setAiTipRevealed] = useState(false);

  // Define insights array
  const insights = [
    "📊 Monitor central bank divergence – the key to 2026 trends.",
    "🤖 Use AI tools for pattern recognition, but trust your risk management.",
    "🌍 Safe havens (USD/JPY/CHF) shine during geopolitical uncertainty.",
    "⚡ Flash volatility is real – always set protective stops.",
    "📈 Emerging markets: high yield but high care – watch fundamentals.",
    "💡 Commodity correlations: oil up = CAD up, gold up = AUD momentum.",
    "🏦 CBDCs are coming: prepare for lower transaction costs & new flows.",
    "🎯 Diversify strategies: combine carry trades with technical confirmations.",
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
    <section className="forex-landscape">
      <div className="container">
        {/* Header Section */}
        <div className="section-header">
          <div className="header-badge">
            <Sparkles size={16} />
            <span>2026 Outlook</span>
          </div>
          <h1 className="section-title">
            The Evolving
            <span className="title-gradient"> Forex Landscape</span>
          </h1>
          <p className="subhead">
            <Globe size={18} />
            Monetary shifts · AI evolution · Geopolitical currents · Strategic
            edge
          </p>
        </div>

        {/* Card 1: Central Bank Policy Divergence */}
        <div className="topic-card">
          <div className="card-header">
            <div className="icon-wrapper">
              <Landmark size={28} strokeWidth={1.5} />
            </div>
            <h2>Central Bank Policy Divergence</h2>
          </div>
          <p className="card-description">
            The most significant driver of forex movements in 2026 is the
            divergence in central bank monetary policies across major economies.
            The Federal Reserve has entered a prolonged easing cycle — gradual
            rate cuts creating{" "}
            <strong className="highlight">dollar weakness</strong> against
            currencies with tighter stances. Meanwhile, the ECB balances growth
            & inflation, the
            <strong> Bank of Japan</strong> abandoned ultra-loose policy,
            strengthening the yen.
          </p>
          <ul className="insight-list">
            <li>
              <ChartLine size={18} />
              <span>
                <strong>Carry trades shine:</strong> widening rate differentials
                offer fresh yield opportunities.
              </span>
            </li>
            <li>
              <Library size={18} />
              <span>
                Focus on central bank minutes, inflation reports & forward
                guidance — anticipate shifts early.
              </span>
            </li>
          </ul>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Fed easing</span>
              <span className="stat-value">~125bps projected</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">BoJ pivot</span>
              <span className="stat-value">first hike in 17y</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">DXY index</span>
              <span className="stat-value">downside bias</span>
            </div>
          </div>
        </div>

        {/* Card 2: AI & Algorithmic Trading */}
        <div className="topic-card">
          <div className="card-header">
            <div className="icon-wrapper">
              <Bot size={28} strokeWidth={1.5} />
            </div>
            <h2>AI & Algorithmic Trading</h2>
          </div>
          <p className="card-description">
            Machine learning algorithms now execute a significant portion of
            daily forex volume — creating more efficient markets but also new
            risks. <strong>Flash volatility events</strong> have evolved from
            rare to periodic reality as algorithms react simultaneously to data.
          </p>
          <ul className="insight-list">
            <li>
              <Zap size={18} />
              <span>
                <strong>Flash crash ready:</strong> always use stop-loss
                strategies in this environment.
              </span>
            </li>
            <li>
              <Brain size={18} />
              <span>
                Competitive edge = speed of{" "}
                <strong>information processing & execution</strong>.
              </span>
            </li>
          </ul>
          <div className="ai-tip-container">
            <div className="tip-content">
              <Lightbulb size={18} />
              <span className="tip-text">
                🤖 <strong>AI insight:</strong> sentiment analysis can detect
                early shifts from news.
              </span>
            </div>
            <button
              className="tip-button"
              onClick={() => setAiTipRevealed(!aiTipRevealed)}
            >
              {aiTipRevealed ? "✨ Tip shown" : "Pro tip"}
            </button>
          </div>
          {aiTipRevealed && (
            <div className="expanded-tip">
              <Zap size={16} />
              <span>
                🔥 Advanced AI edge: Use correlation matrix tools & real-time
                news sentiment to anticipate algo-driven moves before volume
                spikes.
              </span>
            </div>
          )}
        </div>

        {/* Card 3: Emerging Market Opportunities */}
        <div className="topic-card">
          <div className="card-header">
            <div className="icon-wrapper">
              <TrendingUp size={28} strokeWidth={1.5} />
            </div>
            <h2>Emerging Market Opportunities</h2>
          </div>
          <p className="card-description">
            As developed market rates decline, capital flows into EM currencies
            with superior yields. The Brazilian real, Indian rupee, and Mexican
            peso are benefiting, though volatility is higher.
          </p>
          <ul className="insight-list">
            <li>
              <BarChart3 size={18} />
              <span>
                Monitor{" "}
                <strong>
                  credit ratings, debt-to-GDP, current accounts & foreign
                  reserves
                </strong>
                .
              </span>
            </li>
            <li>
              <AlertTriangle size={18} />
              <span>
                Risk-reward compelling — but political stability & capital
                controls require strict risk management.
              </span>
            </li>
          </ul>
          <div className="trend-badges">
            <span className="trend-badge">
              <ArrowUpRight size={12} /> BRL · INR · MXN
            </span>
            <span className="trend-badge">
              <Fuel size={12} /> CAD, NOK
            </span>
          </div>
          <div className="pro-tip-card">
            <Lightbulb size={16} />
            <span>
              💡 Friendly pro tip: Track EM central bank reserve changes weekly
              — rising reserves often signal stability and currency strength.
            </span>
          </div>
        </div>

        {/* Card 4: Geopolitical Tensions & Safe Havens */}
        <div className="topic-card">
          <div className="card-header">
            <div className="icon-wrapper">
              <Shield size={28} strokeWidth={1.5} />
            </div>
            <h2>Geopolitics & Safe Havens</h2>
          </div>
          <p className="card-description">
            Geopolitical uncertainty remains elevated in 2026: trade
            negotiations, regional conflicts, shifting alliances create risk-off
            episodes. <strong>USD, JPY, CHF</strong> experience inflows during
            turbulence.
          </p>
          <ul className="insight-list">
            <li>
              <TrendingUp size={18} />
              <span>
                Build positions in safe havens ahead of crises, or fade strength
                after resolution.
              </span>
            </li>
            <li>
              <Globe size={18} />
              <span>
                Maintain awareness of geopolitical calendars and central bank
                rhetoric shifts.
              </span>
            </li>
          </ul>
        </div>

        {/* Card 5: Commodity Prices & Currency Correlations */}
        <div className="topic-card">
          <div className="card-header">
            <div className="icon-wrapper">
              <Fuel size={28} strokeWidth={1.5} />
            </div>
            <h2>Commodity Prices & Currency Links</h2>
          </div>
          <p className="card-description">
            Oil prices strengthen CAD, NOK, RUB. Gold influences AUD & ZAR.
            Agricultural goods impact NZD & BRL.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">WTI ~$82</span>
              <span className="stat-value">supports loonie</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Gold ~$2,150</span>
              <span className="stat-value">boosts AUD</span>
            </div>
          </div>
        </div>

        {/* Card 6: Digital Assets & CBDCs */}
        <div className="topic-card">
          <div className="card-header">
            <div className="icon-wrapper">
              <Bitcoin size={28} strokeWidth={1.5} />
            </div>
            <h2>Digital Assets & CBDCs</h2>
          </div>
          <p className="card-description">
            Cryptocurrencies influence sentiment and capital flows, especially
            among younger traders. Several nations are piloting Central Bank
            Digital Currencies (CBDCs), which may reduce forex transaction costs
            and reshape international payments.
          </p>
          <ul className="insight-list">
            <li>
              <Globe size={18} />
              <span>
                CBDC interoperability could reshape cross-border settlements by
                2027-28.
              </span>
            </li>
            <li>
              <Bitcoin size={18} />
              <span>
                Bitcoin & crypto correlation with risk assets still matters for
                forex sentiment.
              </span>
            </li>
          </ul>
        </div>

        {/* Positioning for Success Card */}
        <div className="topic-card featured-card">
          <div className="card-header">
            <div className="icon-wrapper featured-icon">
              <Sparkles size={28} strokeWidth={1.5} />
            </div>
            <h2>🎯 Positioning for Success</h2>
          </div>
          <p className="card-description">
            Navigating the 2026 forex landscape requires combining traditional
            analysis with awareness of these emerging themes.{" "}
            <strong>
              Focus on central bank policy divergence for directional bias
            </strong>
            , use technical analysis for precise entry and exit timing, and
            maintain flexibility to adapt as new information emerges.
          </p>
          <ul className="insight-list">
            <li>
              <ChartLine size={18} />
              <span>
                <strong>Strategy:</strong> Diversify across themes — carry
                trades, AI signals, safe-haven hedges.
              </span>
            </li>
            <li>
              <Smile size={18} />
              <span>
                <strong>Friendly reminder:</strong> always practice disciplined
                risk management (1-2% rule).
              </span>
            </li>
          </ul>
        </div>

        {/* Dynamic Insight Bar */}
        <div className="dynamic-insight-bar">
          <Lightbulb size={18} />
          <span className="insight-message">
            {insights[currentMessageIndex]}
          </span>
          <button className="refresh-button" onClick={refreshInsight}>
            <RefreshCw size={16} />
            <span>Insight</span>
          </button>
        </div>

        <footer className="section-footer">
          <BarChart3 size={14} />
          <span>Data-driven perspectives 2026 | Macro + AI + Geopolitics</span>
        </footer>
      </div>
    </section>
  );
};

export default ForexLandscape;
