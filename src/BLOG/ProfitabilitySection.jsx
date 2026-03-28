import React, { useState } from "react";
import {
  TrendingUp,
  AlertTriangle,
  Brain,
  BookOpen,
  Target,
  BarChart3,
  Clock,
  Shield,
  Zap,
  LineChart,
  Users,
  DollarSign,
  PieChart,
  GitBranch,
  GraduationCap,
  Eye,
  Activity,
  CheckCircle,
  XCircle,
  Calculator,
  TrendingDown,
  Award,
  Rocket,
  Settings,
  ExternalLink,
  Lightbulb,
  RefreshCw,
  Smile,
} from "lucide-react";
import "./ProfitabilitySection.css";

const ProfitabilitySection = () => {
  const [activeTab, setActiveTab] = useState("metrics");
  const [calculatorInput, setCalculatorInput] = useState({
    accountSize: 10000,
    riskPercent: 2,
    monthlyReturn: 3,
  });
  const [calculatorResult, setCalculatorResult] = useState({
    riskPerTrade: 200,
    yearlyReturn: 4258,
    yearlyPercent: 42.58,
  });

  const updateCalculator = (field, value) => {
    const numValue = parseFloat(value) || 0;
    const updated = { ...calculatorInput, [field]: numValue };
    setCalculatorInput(updated);

    const riskPerTrade = (updated.accountSize * updated.riskPercent) / 100;
    const monthlyFactor = 1 + updated.monthlyReturn / 100;
    const yearlyMultiplier = Math.pow(monthlyFactor, 12);
    const yearlyReturn = updated.accountSize * (yearlyMultiplier - 1);
    const yearlyPercent = (yearlyReturn / updated.accountSize) * 100;

    setCalculatorResult({
      riskPerTrade: riskPerTrade,
      yearlyReturn: yearlyReturn,
      yearlyPercent: yearlyPercent,
    });
  };

  const failureStats = [
    { label: "Retail traders lose money", percentage: 75, icon: TrendingDown },
    { label: "Emotional trading failures", percentage: 68, icon: Brain },
    { label: "Poor risk management", percentage: 82, icon: AlertTriangle },
    { label: "Undercapitalization", percentage: 71, icon: DollarSign },
  ];

  const successPrinciples = [
    {
      title: "Education First",
      desc: "Invest time in learning before risking capital",
      icon: GraduationCap,
    },
    {
      title: "Risk Management",
      desc: "Never risk more than 1-2% per trade",
      icon: Shield,
    },
    {
      title: "Trading Journal",
      desc: "Document and review every trade",
      icon: BookOpen,
    },
    {
      title: "Emotional Discipline",
      desc: "Stick to your strategy regardless of outcomes",
      icon: Brain,
    },
  ];

  const techTools = [
    {
      name: "AI Analytics",
      benefit: "Pattern recognition & sentiment analysis",
      icon: Brain,
    },
    {
      name: "Algorithmic Execution",
      benefit: "Eliminates emotional interference",
      icon: Zap,
    },
    {
      name: "Advanced Charting",
      benefit: "Multi-timeframe analysis tools",
      icon: LineChart,
    },
    {
      name: "Risk Management Software",
      benefit: "Automated position sizing",
      icon: Calculator,
    },
  ];

  return (
    <section className="profitability-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="header-badge">
            <TrendingUp size={16} />
            <span>2026 Profitability Analysis</span>
          </div>
          <h1 className="section-title">
            The Profitability
            <span className="title-gradient"> Question</span>
          </h1>
          <p className="subhead">
            <DollarSign size={18} />
            What separates winners from losers · Realistic expectations · The
            path to consistency
          </p>
        </div>

        {/* Hero Stat Card */}
        <div className="hero-stat-card">
          <div className="hero-stat-content">
            <div className="hero-stat-icon">
              <TrendingUp size={32} />
            </div>
            <div className="hero-stat-numbers">
              <div className="hero-stat-value">70-80%</div>
              <div className="hero-stat-label">
                of retail traders lose money
              </div>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-numbers">
              <div className="hero-stat-value success">20-30%</div>
              <div className="hero-stat-label">
                achieve consistent profitability
              </div>
            </div>
          </div>
          <p className="hero-stat-quote">
            The difference isn't luck or insider access—it's{" "}
            <strong>
              education, discipline, risk management, and realistic expectations
            </strong>
          </p>
        </div>

        {/* Why Most Traders Fail */}
        <div className="topic-card fail-card">
          <div className="card-header">
            <div className="icon-wrapper warning">
              <AlertTriangle size={28} strokeWidth={1.5} />
            </div>
            <h2>Why Most Traders Fail</h2>
          </div>
          <div className="stats-grid failure-stats">
            {failureStats.map((stat, idx) => (
              <div key={idx} className="stat-item failure-stat">
                <stat.icon size={20} />
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value-large">{stat.percentage}%</span>
              </div>
            ))}
          </div>
          <div className="failure-reasons">
            <div className="reason-card">
              <AlertTriangle size={20} />
              <div>
                <h4>Inadequate Risk Management</h4>
                <p>
                  New traders risk excessive percentages on single trades,
                  leading to rapid account depletion. Overleveraging (up to
                  500:1) virtually guarantees loss.
                </p>
              </div>
            </div>
            <div className="reason-card">
              <Brain size={20} />
              <div>
                <h4>Emotional Trading</h4>
                <p>
                  Abandoning strategies after losses, chasing prices, revenge
                  trading—fear and greed override rational decision-making.
                </p>
              </div>
            </div>
            <div className="reason-card">
              <BookOpen size={20} />
              <div>
                <h4>Lack of Proper Education</h4>
                <p>
                  Entering without understanding technical analysis,
                  fundamentals, or position sizing. Following social media
                  'gurus' instead of genuine education.
                </p>
              </div>
            </div>
            <div className="reason-card">
              <Target size={20} />
              <div>
                <h4>Unrealistic Expectations</h4>
                <p>
                  Expecting to turn small accounts into fortunes quickly leads
                  to excessive risk-taking and eventual failure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Path to Consistent Profitability */}
        <div className="topic-card success-card">
          <div className="card-header">
            <div className="icon-wrapper success-icon">
              <CheckCircle size={28} strokeWidth={1.5} />
            </div>
            <h2>The Path to Consistent Profitability</h2>
          </div>
          <div className="principles-grid">
            {successPrinciples.map((principle, idx) => (
              <div key={idx} className="principle-card">
                <div className="principle-icon">
                  <principle.icon size={24} />
                </div>
                <h4>{principle.title}</h4>
                <p>{principle.desc}</p>
              </div>
            ))}
          </div>
          <div className="golden-rule">
            <Shield size={24} />
            <div>
              <strong>The Golden Rule:</strong> Never risk more than 1-2% of
              account capital on any single trade
              <div className="rule-example">
                $10,000 account → max risk $100-200 per trade
              </div>
            </div>
          </div>
          <div className="journal-section">
            <BookOpen size={20} />
            <div>
              <strong>Trading Journal Required</strong>
              <p>
                Document entry reasoning, exit strategy, results, and emotional
                state. Regular review reveals patterns for continuous
                improvement.
              </p>
            </div>
          </div>
        </div>

        {/* Realistic Profitability Expectations with Calculator */}
        <div className="topic-card expectations-card">
          <div className="card-header">
            <div className="icon-wrapper">
              <Calculator size={28} strokeWidth={1.5} />
            </div>
            <h2>Realistic Profitability Expectations</h2>
          </div>
          <div className="expectations-grid">
            <div className="expectations-text">
              <p>
                Professional traders typically target monthly returns of{" "}
                <strong>2-5%</strong> with consistent risk management. This
                compounds substantially over time.
              </p>
              <div className="compound-example">
                <TrendingUp size={18} />
                <span>
                  3% monthly returns → $10,000 → $14,000+ in one year (40%
                  annual return)
                </span>
              </div>
              <p className="journey-note">
                The journey to profitability typically takes{" "}
                <strong>1-3 years</strong> of dedicated practice. Most
                successful traders lost money initially—view it as tuition.
              </p>
            </div>

            <div className="calculator-card">
              <h4>📊 Profitability Calculator</h4>
              <div className="calculator-inputs">
                <div className="input-group">
                  <label>Account Size ($)</label>
                  <input
                    type="number"
                    value={calculatorInput.accountSize}
                    onChange={(e) =>
                      updateCalculator("accountSize", e.target.value)
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Risk per Trade (%)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={calculatorInput.riskPercent}
                    onChange={(e) =>
                      updateCalculator("riskPercent", e.target.value)
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Target Monthly Return (%)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={calculatorInput.monthlyReturn}
                    onChange={(e) =>
                      updateCalculator("monthlyReturn", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="calculator-results">
                <div className="result-item">
                  <span>Risk per Trade:</span>
                  <strong>${calculatorResult.riskPerTrade.toFixed(2)}</strong>
                </div>
                <div className="result-item">
                  <span>Yearly Return:</span>
                  <strong className="profit-value">
                    ${calculatorResult.yearlyReturn.toFixed(2)}
                  </strong>
                </div>
                <div className="result-item">
                  <span>Yearly Percentage:</span>
                  <strong className="profit-value">
                    {calculatorResult.yearlyPercent.toFixed(2)}%
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology and Profitability */}
        <div className="topic-card tech-card">
          <div className="card-header">
            <div className="icon-wrapper">
              <Zap size={28} strokeWidth={1.5} />
            </div>
            <h2>Technology and Profitability in 2026</h2>
          </div>
          <p>
            Advanced charting, algorithmic systems, and AI-powered analytics
            offer advantages unavailable to previous generations. However,
            institutional algorithms execute trades in milliseconds—success
            requires focusing on strategies where human judgment excels.
          </p>
          <div className="tech-grid">
            {techTools.map((tool, idx) => (
              <div key={idx} className="tech-item">
                <tool.icon size={20} />
                <div>
                  <strong>{tool.name}</strong>
                  <span>{tool.benefit}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="best-approach">
            <Lightbulb size={20} />
            <span>
              The most profitable approach combines human strategic thinking
              with technological execution. Use AI for data analysis, but make
              final decisions based on comprehensive analysis.
            </span>
          </div>
        </div>

        {/* Choosing the Right Broker */}
        <div className="topic-card broker-card">
          <div className="card-header">
            <div className="icon-wrapper">
              <Settings size={28} strokeWidth={1.5} />
            </div>
            <h2>Choosing the Right Broker & Setup</h2>
          </div>
          <div className="broker-grid">
            <div className="broker-tips">
              <h4>Essential Criteria</h4>
              <ul>
                <li>
                  <CheckCircle size={16} /> Competitive spreads & commissions
                </li>
                <li>
                  <CheckCircle size={16} /> Reliable execution with minimal
                  slippage
                </li>
                <li>
                  <CheckCircle size={16} /> Robust regulation (FCA, ASIC, CySEC,
                  etc.)
                </li>
                <li>
                  <CheckCircle size={16} /> Negative balance protection
                </li>
              </ul>
            </div>
            <div className="capital-requirements">
              <h4>Capital Requirements</h4>
              <div className="req-item">
                <span className="req-type">Day Traders:</span>
                <span className="req-amount">$5,000 - $10,000 minimum</span>
              </div>
              <div className="req-item">
                <span className="req-type">Swing Traders:</span>
                <span className="req-amount">$2,000 - $5,000 recommended</span>
              </div>
              <div className="warning-note">
                <AlertTriangle size={14} />
                <small>
                  Undercapitalization causes failure even with sound strategies
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* The Verdict */}
        <div className="topic-card verdict-card">
          <div className="card-header">
            <div className="icon-wrapper verdict-icon">
              <Award size={28} strokeWidth={1.5} />
            </div>
            <h2>The Verdict</h2>
          </div>
          <div className="verdict-content">
            <div className="verdict-positive">
              <CheckCircle size={28} />
              <div>
                <strong>Yes, forex trading is profitable in 2026</strong>
                <p>
                  — for traders who approach it professionally. Those who invest
                  in education, practice disciplined risk management, maintain
                  realistic expectations, and persist through the learning curve
                  can achieve consistent returns.
                </p>
              </div>
            </div>
            <div className="verdict-negative">
              <XCircle size={28} />
              <div>
                <strong>However, those expecting quick riches</strong>
                <p>
                  trading emotionally, or neglecting proper preparation will
                  likely join the majority who fail. The choice between these
                  outcomes lies entirely within your control through the
                  decisions you make about education, discipline, and risk
                  management.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway Bar */}
        <div className="key-takeaway">
          <Rocket size={20} />
          <span>
            The difference between profitable and unprofitable traders isn't
            luck—it's the decisions you make about education, discipline, and
            risk management.
          </span>
        </div>

        <footer className="section-footer">
          <BarChart3 size={14} />
          <span>
            Data-driven profitability insights 2026 | Education + Discipline =
            Success
          </span>
        </footer>
      </div>
    </section>
  );
};

export default ProfitabilitySection;
