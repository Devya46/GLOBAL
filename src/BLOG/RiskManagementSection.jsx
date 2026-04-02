import React, { useState } from "react";
import {
  Shield,
  Calculator,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BarChart3,
  Brain,
  Target,
  Zap,
  DollarSign,
  Scale,
  Percent,
  Layers,
  Lock,
  Activity,
  Timer,
} from "lucide-react";
import "./RiskManagementSection.css";

const RiskManagementSection = () => {
  const [positionCalculator, setPositionCalculator] = useState({
    accountSize: 10000,
    riskPercent: 1,
    stopLossPips: 50,
    pipValue: 10,
  });
  const [calcResult, setCalcResult] = useState({
    riskAmount: 100,
    positionSize: 0.2,
  });

  const updateCalculator = (field, value) => {
    const numValue = parseFloat(value) || 0;
    const updated = { ...positionCalculator, [field]: numValue };
    setPositionCalculator(updated);

    const riskAmount = (updated.accountSize * updated.riskPercent) / 100;
    const positionSize = riskAmount / (updated.stopLossPips * updated.pipValue);

    setCalcResult({
      riskAmount: riskAmount,
      positionSize: positionSize,
    });
  };

  const riskComparison = [
    {
      risk: "1%",
      maxLosses: "100",
      description: "Can survive 100 consecutive losses",
    },
    {
      risk: "2%",
      maxLosses: "50",
      description: "Survives 50 losses before depletion",
    },
    {
      risk: "5%",
      maxLosses: "20",
      description: "Only 20 losses to wipe out account",
    },
    {
      risk: "10%",
      maxLosses: "10",
      description: "10 losses = account destroyed",
    },
  ];

  return (
    <section className="risk-management-section">
      <div className="container">
        {/* Header - Centered */}
        <div className="section-header">
          <h1 className="section-title">
            Why Risk Management <br />
            <span className="title-gradient">Trumps Strategy</span>
          </h1>
        </div>

        {/* Hero Statement */}
        <div className="hero-statement">
          <Shield size={28} />
          <p>
            The difference between profitable traders and those who blow their
            accounts isn't strategy—it's <strong>risk management</strong>.
            Mediocre strategies with excellent risk management outperform great
            strategies with poor risk controls.
          </p>
        </div>

        {/* The 1-2% Rule */}
        <div className="topic-block">
          <div className="block-header">
            <Percent size={24} />
            <h2>The 1-2% Rule: Your Account's Safety Net</h2>
          </div>
          <p className="block-description">
            Never risk more than <strong>1-2%</strong> of your total account
            capital on any single trade. This protects you from catastrophic
            losses and ensures survival through extended losing streaks.
          </p>

          <div className="risk-comparison">
            {riskComparison.map((item, idx) => (
              <div
                key={idx}
                className={`risk-item ${item.risk === "1%" ? "highlight" : ""}`}
              >
                <div className="risk-percent">{item.risk}</div>
                <div className="risk-metrics">
                  <span className="risk-losses">{item.maxLosses} losses</span>
                  <span className="risk-desc">{item.description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="example-box">
            <DollarSign size={18} />
            <span>
              <strong>Example:</strong> $10,000 account × 1% = $100 risk per
              trade. With 50-pip stop, trade 0.2 lots.
            </span>
          </div>
        </div>

        {/* Position Sizing Calculator */}
        <div className="topic-block">
          <div className="block-header">
            <Calculator size={24} />
            <h2>Position Sizing Calculator</h2>
          </div>

          <div className="calculator-grid">
            <div className="calculator-inputs">
              <div className="input-field">
                <label>Account Size ($)</label>
                <input
                  type="number"
                  value={positionCalculator.accountSize}
                  onChange={(e) =>
                    updateCalculator("accountSize", e.target.value)
                  }
                />
              </div>
              <div className="input-field">
                <label>Risk per Trade (%)</label>
                <input
                  type="number"
                  step="0.5"
                  value={positionCalculator.riskPercent}
                  onChange={(e) =>
                    updateCalculator("riskPercent", e.target.value)
                  }
                />
              </div>
              <div className="input-field">
                <label>Stop Loss (pips)</label>
                <input
                  type="number"
                  value={positionCalculator.stopLossPips}
                  onChange={(e) =>
                    updateCalculator("stopLossPips", e.target.value)
                  }
                />
              </div>
              <div className="input-field">
                <label>Pip Value ($ per lot)</label>
                <input
                  type="number"
                  value={positionCalculator.pipValue}
                  onChange={(e) => updateCalculator("pipValue", e.target.value)}
                />
              </div>
            </div>

            <div className="calculator-results">
              <div className="result-item">
                <span className="result-label">Risk Amount</span>
                <span className="result-value">
                  ${calcResult.riskAmount.toFixed(2)}
                </span>
              </div>
              <div className="result-item highlight">
                <span className="result-label">Position Size</span>
                <span className="result-value-large">
                  {calcResult.positionSize.toFixed(2)} lots
                </span>
              </div>
            </div>
          </div>

          <div className="formula-note">
            <span className="formula">
              Position Size = (Account × Risk%) ÷ (Stop Loss × Pip Value)
            </span>
          </div>
        </div>

        {/* Stop-Loss Orders */}
        <div className="topic-block">
          <div className="block-header">
            <Lock size={24} />
            <h2>Stop-Loss Orders: Non-Negotiable</h2>
          </div>
          <p>
            Every trade must have a stop-loss order placed immediately upon
            entry. Never move stops further away—this violates risk management
            and increases losses.
          </p>

          <div className="stop-loss-guide">
            <div className="guide-item">
              <CheckCircle size={16} />
              <span>Below recent swing lows (long trades)</span>
            </div>
            <div className="guide-item">
              <CheckCircle size={16} />
              <span>Above recent swing highs (short trades)</span>
            </div>
            <div className="guide-item">
              <CheckCircle size={16} />
              <span>Beyond support/resistance zones</span>
            </div>
            <div className="guide-item warning">
              <XCircle size={16} />
              <span>Never: "I'll manually exit" — emotions override logic</span>
            </div>
          </div>
        </div>

        {/* Risk-to-Reward Ratios */}
        <div className="topic-block">
          <div className="block-header">
            <Target size={24} />
            <h2>Risk-to-Reward: Trading the Odds</h2>
          </div>

          <div className="rrr-comparison">
            <div className="rrr-item">
              <div className="rrr-stats">
                <span className="win-rate">40% Win Rate</span>
                <span className="rrr-value">1:3</span>
              </div>
              <div className="rrr-result">+$60 per 100 trades</div>
              <div className="rrr-explanation">
                Lower win rate, higher profitability
              </div>
            </div>
            <div className="rrr-item">
              <div className="rrr-stats">
                <span className="win-rate">60% Win Rate</span>
                <span className="rrr-value">1:1</span>
              </div>
              <div className="rrr-result">+$20 per 100 trades</div>
              <div className="rrr-explanation">
                Higher win rate, lower overall profit
              </div>
            </div>
          </div>

          <div className="rrr-principle">
            <AlertTriangle size={18} />
            <span>
              Target minimum <strong>1:2</strong> risk-to-reward, preferably{" "}
              <strong>1:3</strong>. This allows profitability even with win
              rates below 50%.
            </span>
          </div>
        </div>

        {/* Correlation Risk */}
        <div className="topic-block">
          <div className="block-header">
            <Layers size={24} />
            <h2>Correlation Risk & Portfolio Management</h2>
          </div>
          <p>
            Taking multiple positions in highly correlated pairs multiplies risk
            rather than diversifying it.
          </p>

          <div className="correlation-example">
            <div className="correlation-bad">
              <TrendingDown size={20} />
              <div>
                <strong>EUR/USD + GBP/USD (0.85 correlation)</strong>
                <span>Same risk exposure—both move together</span>
              </div>
            </div>
            <div className="correlation-good">
              <TrendingUp size={20} />
              <div>
                <strong>EUR/USD + USD/JPY (-0.70 correlation)</strong>
                <span>True diversification—often move opposite</span>
              </div>
            </div>
          </div>

          <div className="portfolio-limit">
            <Shield size={18} />
            <span>
              Limit total portfolio risk to <strong>3-5%</strong> across all
              open positions.
            </span>
          </div>
        </div>

        {/* Leverage */}
        <div className="topic-block">
          <div className="block-header">
            <Zap size={24} />
            <h2>Leverage: The Double-Edged Sword</h2>
          </div>
          <div className="leverage-grid">
            <div className="leverage-warning">
              <AlertTriangle size={24} />
              <div>
                <strong>500:1 Leverage</strong>
                <span>0.2% adverse move = account wiped out</span>
              </div>
            </div>
            <div className="leverage-safe">
              <CheckCircle size={24} />
              <div>
                <strong>Conservative: 5:1 - 10:1</strong>
                <span>Professional traders use low effective leverage</span>
              </div>
            </div>
          </div>
          <div className="leverage-formula">
            <span>
              Effective Leverage = Total Position Size ÷ Account Equity
            </span>
          </div>
        </div>

        {/* Emotional Discipline */}
        <div className="topic-block">
          <div className="block-header">
            <Brain size={24} />
            <h2>Emotional Discipline</h2>
          </div>

          <div className="emotional-pitfalls">
            <div className="pitfall">
              <TrendingDown size={18} />
              <div>
                <strong>Revenge Trading</strong>
                <span>
                  Attempting to recover losses quickly → cascading losses
                </span>
              </div>
            </div>
            <div className="pitfall">
              <Zap size={18} />
              <div>
                <strong>FOMO (Fear of Missing Out)</strong>
                <span>Entering without confirmation → poor entries</span>
              </div>
            </div>
            <div className="pitfall">
              <TrendingUp size={18} />
              <div>
                <strong>Overconfidence</strong>
                <span>After winning streaks → increased position sizes</span>
              </div>
            </div>
          </div>

          <div className="discipline-tip">
            <Timer size={18} />
            <span>
              After losing trades: <strong>take a break</strong>. After winning
              streaks: <strong>maintain consistency</strong>.
            </span>
          </div>
        </div>

        {/* Practical Implementation */}
        <div className="topic-block">
          <div className="block-header">
            <Activity size={24} />
            <h2>Practical Implementation</h2>
          </div>

          <div className="implementation-grid">
            <div className="impl-item">
              <CheckCircle size={16} />
              <span>Written trading plan with risk rules</span>
            </div>
            <div className="impl-item">
              <CheckCircle size={16} />
              <span>Daily loss limit: stop trading after X% loss</span>
            </div>
            <div className="impl-item">
              <CheckCircle size={16} />
              <span>Risk management calculators for position sizing</span>
            </div>
            <div className="impl-item">
              <CheckCircle size={16} />
              <span>Weekly review: risk adherence & max drawdown</span>
            </div>
          </div>

          <div className="tracking-metrics">
            <BarChart3 size={18} />
            <span>
              Track: Actual risk per trade | Avg R:R | Largest loss % | Max
              drawdown
            </span>
          </div>
        </div>

        {/* Conclusion */}
        <div className="topic-block verdict-block">
          <div className="block-header">
            <Shield size={24} />
            <h2>Risk Management = Competitive Advantage</h2>
          </div>
          <p className="block-description">
            While novice traders chase the perfect entry strategy, professionals
            focus on <strong>surviving bad periods</strong> and{" "}
            <strong>protecting capital</strong> for high-probability
            opportunities. Your ability to manage risk determines your ultimate
            success far more than any specific strategy.
          </p>
          <div className="conclusion-quote">
            <Target size={18} />
            <span>
              Master risk management. Implement with discipline. Join the
              minority who achieve consistent profitability.
            </span>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="key-takeaway">
          <Shield size={20} />
          <span>
            The 1-2% rule + proper position sizing + stop-losses = foundation of
            trading success
          </span>
        </div>

        <footer className="section-footer">
          <BarChart3 size={14} />
          <span>
            Risk management 2026 | Protect capital · Compound consistently ·
            Survive to thrive
          </span>
        </footer>
      </div>
    </section>
  );
};

export default RiskManagementSection;
