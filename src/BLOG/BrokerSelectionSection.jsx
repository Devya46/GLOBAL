import React, { useState } from "react";
import {
  Shield,
  DollarSign,
  Gauge,
  Monitor,
  Globe,
  Wallet,
  Headphones,
  GraduationCap,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Building2,
  TrendingUp,
  Clock,
  Zap,
  BarChart3,
  Star,
  FileText,
  Users,
  Info,
  ThumbsUp,
  Timer,
  Settings,
} from "lucide-react";
import "./BrokerSelectionSection.css";

const BrokerSelectionSection = () => {
  const [activeRegulator, setActiveRegulator] = useState("fca");
  const [costCalculator, setCostCalculator] = useState({
    tradesPerMonth: 50,
    lotsPerTrade: 1,
    spread: 1.2,
    commission: 5,
  });
  const [costResult, setCostResult] = useState({
    spreadCost: 600,
    commissionCost: 500,
    totalCost: 1100,
  });

  const regulators = {
    fca: {
      name: "FCA",
      full: "Financial Conduct Authority",
      region: "UK",
      rating: "AAA",
      color: "#3b82f6",
    },
    asic: {
      name: "ASIC",
      full: "Australian Securities and Investments Commission",
      region: "Australia",
      rating: "AA",
      color: "#10b981",
    },
    cysec: {
      name: "CySEC",
      full: "Cyprus Securities and Exchange Commission",
      region: "EU",
      rating: "A",
      color: "#f59e0b",
    },
    nfa: {
      name: "NFA/CFTC",
      full: "National Futures Association",
      region: "USA",
      rating: "AAA",
      color: "#ef4444",
    },
  };

  const updateCostCalculator = (field, value) => {
    const numValue = parseFloat(value) || 0;
    const updated = { ...costCalculator, [field]: numValue };
    setCostCalculator(updated);

    const spreadCost =
      updated.tradesPerMonth * updated.lotsPerTrade * updated.spread * 10;
    const commissionCost =
      updated.tradesPerMonth * updated.lotsPerTrade * updated.commission;

    setCostResult({
      spreadCost: spreadCost,
      commissionCost: commissionCost,
      totalCost: spreadCost + commissionCost,
    });
  };

  const executionFactors = [
    {
      icon: Zap,
      label: "Order Fill Speed",
      metric: "< 50ms",
      status: "excellent",
    },
    { icon: Timer, label: "Slippage", metric: "0.1-0.3 pips", status: "good" },
    {
      icon: CheckCircle,
      label: "Fill Rate",
      metric: "99.8%",
      status: "excellent",
    },
    {
      icon: Settings,
      label: "Re-quote Frequency",
      metric: "Rare",
      status: "good",
    },
  ];

  const platformFeatures = [
    "Advanced charting with 50+ indicators",
    "One-click trading execution",
    "Mobile synchronization",
    "Automated trading (EA support)",
    "Economic calendar integration",
    "Sentiment analysis tools",
  ];

  const withdrawalComparisons = [
    { method: "Bank Transfer", time: "1-3 days", fee: "Free", min: "$100" },
    { method: "Credit Card", time: "1-2 days", fee: "Free", min: "$50" },
    { method: "Skrill/Neteller", time: "Same day", fee: "1-2%", min: "$10" },
    { method: "Crypto", time: "1-24 hours", fee: "Network fee", min: "$50" },
  ];

  const redFlags = [
    "Unregulated or offshore license only",
    "Promises of guaranteed profits",
    "Excessive leverage (1000:1+)",
    "Difficult or delayed withdrawals",
    "No negative balance protection",
    "Aggressive bonus terms with volume requirements",
  ];

  return (
    <section className="broker-selection-section">
      <div className="container">
        {/* Header - Centered */}
        <div className="section-header">
          <h1 className="section-title">
            Why Broker Selection
            <span className="title-gradient"> Matters</span>
          </h1>
        </div>

        {/* Hero Quote */}
        <div className="hero-quote">
          <AlertTriangle size={24} />
          <p>
            Your broker is your gateway to currency markets. Choosing the wrong
            broker can sabotage even the best trading strategies through poor
            execution, excessive costs, or inadequate security.
          </p>
        </div>

        {/* Regulatory Compliance */}
        <div className="content-block">
          <div className="block-header">
            <Shield size={28} strokeWidth={1.5} />
            <h2>Regulatory Compliance & Safety</h2>
          </div>
          <p className="block-description">
            Regulatory oversight is your primary protection against fraud and
            broker misconduct. Reputable brokers maintain licenses from
            respected regulatory bodies that enforce strict capital
            requirements, operational standards, and client protection rules.
          </p>

          <div className="regulator-tabs">
            {Object.keys(regulators).map((key) => (
              <button
                key={key}
                className={`regulator-tab ${activeRegulator === key ? "active" : ""}`}
                onClick={() => setActiveRegulator(key)}
                style={{ "--tab-color": regulators[key].color }}
              >
                <span className="regulator-name">{regulators[key].name}</span>
                <span className="regulator-rating">
                  {regulators[key].rating}
                </span>
              </button>
            ))}
          </div>

          <div className="regulator-detail">
            <div className="regulator-header">
              <strong>{regulators[activeRegulator].full}</strong>
              <span className="regulator-region">
                {regulators[activeRegulator].region}
              </span>
            </div>
            <p className="regulator-desc">
              {activeRegulator === "fca" &&
                "One of the world's strictest regulators, requiring segregated client funds, negative balance protection, and comprehensive reporting."}
              {activeRegulator === "asic" &&
                "Enforces robust consumer protection standards and financial stability requirements with strong oversight."}
              {activeRegulator === "cysec" &&
                "EU-based regulator providing MiFID protections across European markets with passporting rights."}
              {activeRegulator === "nfa" &&
                "Highly restrictive but offering maximum client protection for US-based traders with rigorous oversight."}
            </p>
          </div>

          <div className="warning-message">
            <AlertTriangle size={18} />
            <span>
              Verify broker licensing directly on regulator websites. Avoid
              unregulated or offshore-licensed brokers regardless of attractive
              marketing promises.
            </span>
          </div>
        </div>

        {/* Trading Costs Calculator */}
        <div className="content-block">
          <div className="block-header">
            <DollarSign size={28} strokeWidth={1.5} />
            <h2>Trading Costs: Spreads and Commissions</h2>
          </div>

          <div className="costs-layout">
            <div className="costs-text">
              <p>
                Trading costs directly impact profitability. Calculate total
                costs including spreads and commissions for your trading volume.
              </p>
              <div className="cost-types">
                <div className="cost-type">
                  <TrendingUp size={18} />
                  <div>
                    <strong>Spread-Based Pricing</strong>
                    <span>
                      Typical EUR/USD: 0.5-2 pips. Lower spreads benefit
                      frequent traders.
                    </span>
                  </div>
                </div>
                <div className="cost-type">
                  <Zap size={18} />
                  <div>
                    <strong>Commission-Based (ECN/STP)</strong>
                    <span>
                      Raw spreads 0.0-0.2 pips + $3-7 per lot round turn.
                      Cheaper for active traders.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cost-calculator">
              <h4>Cost Calculator</h4>
              <div className="calc-inputs">
                <div className="calc-input">
                  <label>Trades per Month</label>
                  <input
                    type="number"
                    value={costCalculator.tradesPerMonth}
                    onChange={(e) =>
                      updateCostCalculator("tradesPerMonth", e.target.value)
                    }
                  />
                </div>
                <div className="calc-input">
                  <label>Lots per Trade</label>
                  <input
                    type="number"
                    step="0.1"
                    value={costCalculator.lotsPerTrade}
                    onChange={(e) =>
                      updateCostCalculator("lotsPerTrade", e.target.value)
                    }
                  />
                </div>
                <div className="calc-input">
                  <label>Spread (pips)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={costCalculator.spread}
                    onChange={(e) =>
                      updateCostCalculator("spread", e.target.value)
                    }
                  />
                </div>
                <div className="calc-input">
                  <label>Commission ($/lot)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={costCalculator.commission}
                    onChange={(e) =>
                      updateCostCalculator("commission", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="calc-results">
                <div className="calc-result-item">
                  <span>Spread Cost:</span>
                  <strong>${costResult.spreadCost.toFixed(2)}</strong>
                </div>
                <div className="calc-result-item">
                  <span>Commission Cost:</span>
                  <strong>${costResult.commissionCost.toFixed(2)}</strong>
                </div>
                <div className="calc-result-item total">
                  <span>Total Monthly Cost:</span>
                  <strong className="total-amount">
                    ${costResult.totalCost.toFixed(2)}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Execution Quality */}
        <div className="content-block">
          <div className="block-header">
            <Gauge size={28} strokeWidth={1.5} />
            <h2>Execution Quality and Speed</h2>
          </div>
          <p>
            Execution quality determines whether your trades fill at requested
            prices or suffer slippage that erodes profitability. ECN/STP brokers
            typically offer superior execution compared to market maker brokers.
          </p>

          <div className="execution-grid">
            {executionFactors.map((factor, idx) => (
              <div key={idx} className="execution-item">
                <factor.icon size={24} />
                <div>
                  <div className="execution-label">{factor.label}</div>
                  <div className="execution-metric">{factor.metric}</div>
                  <span className={`status-badge ${factor.status}`}>
                    {factor.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="test-tip">
            <Info size={18} />
            <span>
              Test execution on demo accounts during major news releases like
              NFP or central bank decisions to evaluate fill quality.
            </span>
          </div>
        </div>

        {/* Trading Platform */}
        <div className="content-block">
          <div className="block-header">
            <Monitor size={28} strokeWidth={1.5} />
            <h2>Trading Platform and Technology</h2>
          </div>
          <p>
            Your trading platform is your primary interface with markets.
            MT4/MT5 are industry standards, but advanced brokers offer
            proprietary platforms with enhanced AI-powered tools.
          </p>

          <div className="platform-features">
            {platformFeatures.map((feature, idx) => (
              <div key={idx} className="feature-item">
                <CheckCircle size={16} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="ai-feature">
            <Zap size={20} />
            <div>
              <strong>2026 Edge: AI-Powered Tools</strong>
              <span>
                Pattern recognition algorithms, sentiment analysis dashboards,
                and predictive analytics provide competitive advantages.
              </span>
            </div>
          </div>
        </div>

        {/* Currency Pairs and Instruments */}
        <div className="content-block">
          <div className="block-header">
            <Globe size={28} strokeWidth={1.5} />
            <h2>Available Currency Pairs & Instruments</h2>
          </div>
          <div className="instruments-grid">
            <div className="instrument-category">
              <h4>Major Pairs</h4>
              <span>
                EUR/USD, GBP/USD, USD/JPY, USD/CHF, AUD/USD, USD/CAD, NZD/USD
              </span>
            </div>
            <div className="instrument-category">
              <h4>Cross & Exotic</h4>
              <span>EUR/GBP, EUR/JPY, GBP/JPY, USD/TRY, USD/ZAR, USD/SGD</span>
            </div>
            <div className="instrument-category">
              <h4>Multi-Asset CFDs</h4>
              <span>
                Indices, Commodities, Stocks, Cryptocurrencies for
                diversification
              </span>
            </div>
          </div>
        </div>

        {/* Deposit and Withdrawal */}
        <div className="content-block">
          <div className="block-header">
            <Wallet size={28} strokeWidth={1.5} />
            <h2>Deposit and Withdrawal Processes</h2>
          </div>
          <p>
            Efficient funding and withdrawal processing is essential. Top
            brokers support multiple methods with reasonable timeframes.
          </p>

          <div className="withdrawal-table">
            <div className="table-header">
              <span>Method</span>
              <span>Processing Time</span>
              <span>Fee</span>
              <span>Minimum</span>
            </div>
            {withdrawalComparisons.map((method, idx) => (
              <div key={idx} className="table-row">
                <span className="method-name">{method.method}</span>
                <span>
                  <Clock size={12} /> {method.time}
                </span>
                <span>{method.fee}</span>
                <span>{method.min}</span>
              </div>
            ))}
          </div>

          <div className="warning-message warning-yellow">
            <AlertTriangle size={18} />
            <span>
              Watch for withdrawal restrictions, excessive fees, or bonus
              conditions that trap funds until unrealistic volume requirements
              are met.
            </span>
          </div>
        </div>

        {/* Customer Support */}
        <div className="content-block">
          <div className="block-header">
            <Headphones size={28} strokeWidth={1.5} />
            <h2>Customer Support Quality</h2>
          </div>
          <div className="support-layout">
            <div className="support-channels">
              <h4>Available Channels</h4>
              <ul>
                <li>
                  <CheckCircle size={14} /> 24/5 Live Chat
                </li>
                <li>
                  <CheckCircle size={14} /> Phone Support
                </li>
                <li>
                  <CheckCircle size={14} /> Email (24h response)
                </li>
                <li>
                  <CheckCircle size={14} /> Multilingual Support
                </li>
              </ul>
            </div>
            <div className="support-test">
              <h4>Test Before You Trust</h4>
              <p>
                Test support responsiveness before opening accounts. Ask
                specific questions through various channels and evaluate
                knowledge and helpfulness.
              </p>
              <div className="red-flags-list">
                <strong>Red Flags:</strong>
                <span>
                  Unresolved complaints, ignored withdrawal requests, unhelpful
                  responses
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Resources */}
        <div className="content-block">
          <div className="block-header">
            <GraduationCap size={28} strokeWidth={1.5} />
            <h2>Educational Resources & Tools</h2>
          </div>
          <div className="resources-grid">
            <div className="resource-item">
              <FileText size={20} />
              <span>Webinars & Video Tutorials</span>
            </div>
            <div className="resource-item">
              <BarChart3 size={20} />
              <span>Economic Calendars</span>
            </div>
            <div className="resource-item">
              <Users size={20} />
              <span>Trading Guides & E-books</span>
            </div>
            <div className="resource-item">
              <TrendingUp size={20} />
              <span>Daily Market Analysis</span>
            </div>
          </div>
        </div>

        {/* Red Flags to Avoid */}
        <div className="content-block red-flags-block">
          <div className="block-header">
            <AlertTriangle size={28} strokeWidth={1.5} />
            <h2>Red Flags to Avoid</h2>
          </div>
          <div className="red-flags-grid">
            {redFlags.map((flag, idx) => (
              <div key={idx} className="red-flag-item">
                <XCircle size={18} />
                <span>{flag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="key-takeaway">
          <Shield size={20} />
          <span>
            Your broker is your business partner. Choose wisely—the right broker
            provides security, reliability, and a foundation for profitable
            trading.
          </span>
        </div>

        <footer className="section-footer">
          <BarChart3 size={14} />
          <span>
            Broker selection guide 2026 | Security · Costs · Execution
          </span>
        </footer>
      </div>
    </section>
  );
};

export default BrokerSelectionSection;
