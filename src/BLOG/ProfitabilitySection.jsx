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
  ArrowRight,
} from "lucide-react";
import "./ProfitabilitySection.css";

const ProfitabilitySection = () => {
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
    <article className="profitability-blog">
      <div className="blog-container">
        {/* Header */}
        <header className="blog-header">
          <div className="header-meta">
            <TrendingUp size={14} />
            <span>2026 Profitability Analysis</span>
          </div>
          <h1 className="blog-title">
            The Profitability
            <span className="title-gradient"> Question</span>
          </h1>
          <p className="blog-subhead">
            What separates winners from losers · Realistic expectations · The
            path to consistency
          </p>
        </header>

        {/* Hero Stat Section */}
        <div className="stat-highlight">
          <div className="stat-row">
            <div className="stat-badge">
              <TrendingUp size={24} />
            </div>
            <div className="stat-numbers">
              <div className="stat-value">70-80%</div>
              <div className="stat-label">of retail traders lose money</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-numbers">
              <div className="stat-value success">20-30%</div>
              <div className="stat-label">achieve consistent profitability</div>
            </div>
          </div>
          <p className="stat-quote">
            The difference isn't luck or insider access—it's{" "}
            <strong>
              education, discipline, risk management, and realistic expectations
            </strong>
          </p>
        </div>

        {/* Why Most Traders Fail */}
        <section className="blog-section">
          <div className="section-heading warning">
            <AlertTriangle size={28} />
            <h2>Why Most Traders Fail</h2>
          </div>
          <div className="stats-list">
            {failureStats.map((stat, idx) => (
              <div key={idx} className="stat-item-horizontal">
                <stat.icon size={20} />
                <span className="stat-label-text">{stat.label}</span>
                <span className="stat-percentage">{stat.percentage}%</span>
              </div>
            ))}
          </div>
          <div className="reasons-list">
            <div className="reason-item">
              <AlertTriangle size={20} />
              <div>
                <h3>Inadequate Risk Management</h3>
                <p>
                  New traders risk excessive percentages on single trades,
                  leading to rapid account depletion. Overleveraging (up to
                  500:1) virtually guarantees loss.
                </p>
              </div>
            </div>
            <div className="reason-item">
              <Brain size={20} />
              <div>
                <h3>Emotional Trading</h3>
                <p>
                  Abandoning strategies after losses, chasing prices, revenge
                  trading—fear and greed override rational decision-making.
                </p>
              </div>
            </div>
            <div className="reason-item">
              <BookOpen size={20} />
              <div>
                <h3>Lack of Proper Education</h3>
                <p>
                  Entering without understanding technical analysis,
                  fundamentals, or position sizing. Following social media
                  'gurus' instead of genuine education.
                </p>
              </div>
            </div>
            <div className="reason-item">
              <Target size={20} />
              <div>
                <h3>Unrealistic Expectations</h3>
                <p>
                  Expecting to turn small accounts into fortunes quickly leads
                  to excessive risk-taking and eventual failure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Path to Consistent Profitability */}
        <section className="blog-section">
          <div className="section-heading success">
            <CheckCircle size={28} />
            <h2>The Path to Consistent Profitability</h2>
          </div>
          <div className="principles-list">
            {successPrinciples.map((principle, idx) => (
              <div key={idx} className="principle-item">
                <div className="principle-icon">
                  <principle.icon size={24} />
                </div>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="golden-rule-block">
            <Shield size={24} />
            <div>
              <strong>The Golden Rule:</strong> Never risk more than 1-2% of
              account capital on any single trade
              <div className="rule-example">
                $10,000 account → max risk $100-200 per trade
              </div>
            </div>
          </div>
          <div className="journal-block">
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
        </section>

        {/* Realistic Profitability Expectations with Calculator */}
        <section className="blog-section">
          <div className="section-heading">
            <Calculator size={28} />
            <h2>Realistic Profitability Expectations</h2>
          </div>
          <div className="expectations-content">
            <p>
              Professional traders typically target monthly returns of{" "}
              <strong>2-5%</strong> with consistent risk management. This
              compounds substantially over time.
            </p>
            <div className="compound-note">
              <TrendingUp size={18} />
              <span>
                3% monthly returns → $10,000 → $14,000+ in one year (40% annual
                return)
              </span>
            </div>
            <p className="journey-note">
              The journey to profitability typically takes{" "}
              <strong>1-3 years</strong> of dedicated practice. Most successful
              traders lost money initially—view it as tuition.
            </p>
          </div>

          <div className="calculator-blog">
            <h3>Profitability Calculator</h3>
            <div className="calculator-grid">
              <div className="calc-inputs">
                <div className="input-row">
                  <label>Account Size ($)</label>
                  <input
                    type="number"
                    value={calculatorInput.accountSize}
                    onChange={(e) =>
                      updateCalculator("accountSize", e.target.value)
                    }
                  />
                </div>
                <div className="input-row">
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
                <div className="input-row">
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
              <div className="calc-results">
                <div className="result-row">
                  <span>Risk per Trade:</span>
                  <strong>${calculatorResult.riskPerTrade.toFixed(2)}</strong>
                </div>
                <div className="result-row">
                  <span>Yearly Return:</span>
                  <strong className="profit-highlight">
                    ${calculatorResult.yearlyReturn.toFixed(2)}
                  </strong>
                </div>
                <div className="result-row">
                  <span>Yearly Percentage:</span>
                  <strong className="profit-highlight">
                    {calculatorResult.yearlyPercent.toFixed(2)}%
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology and Profitability */}
        <section className="blog-section">
          <div className="section-heading">
            <Zap size={28} />
            <h2>Technology and Profitability in 2026</h2>
          </div>
          <p>
            Advanced charting, algorithmic systems, and AI-powered analytics
            offer advantages unavailable to previous generations. However,
            institutional algorithms execute trades in milliseconds—success
            requires focusing on strategies where human judgment excels.
          </p>
          <div className="tech-list">
            {techTools.map((tool, idx) => (
              <div key={idx} className="tech-item-blog">
                <tool.icon size={20} />
                <div>
                  <strong>{tool.name}</strong>
                  <span>{tool.benefit}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="best-approach-block">
            <Lightbulb size={20} />
            <span>
              The most profitable approach combines human strategic thinking
              with technological execution. Use AI for data analysis, but make
              final decisions based on comprehensive analysis.
            </span>
          </div>
        </section>

        {/* Choosing the Right Broker */}
        <section className="blog-section">
          <div className="section-heading">
            <Settings size={28} />
            <h2>Choosing the Right Broker & Setup</h2>
          </div>
          <div className="broker-content">
            <div className="broker-tips-blog">
              <h3>Essential Criteria</h3>
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
            <div className="capital-reqs-blog">
              <h3>Capital Requirements</h3>
              <div className="req-row">
                <span className="req-label">Day Traders:</span>
                <span className="req-value">$5,000 - $10,000 minimum</span>
              </div>
              <div className="req-row">
                <span className="req-label">Swing Traders:</span>
                <span className="req-value">$2,000 - $5,000 recommended</span>
              </div>
              <div className="warning-note-blog">
                <AlertTriangle size={14} />
                <small>
                  Undercapitalization causes failure even with sound strategies
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* The Verdict */}
        <section className="blog-section">
          <div className="section-heading verdict">
            <Award size={28} />
            <h2>The Verdict</h2>
          </div>
          <div className="verdict-blocks">
            <div className="verdict-positive-block">
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
            <div className="verdict-negative-block">
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
        </section>

        {/* Key Takeaway Bar */}
        <div className="key-takeaway-blog">
          <Rocket size={20} />
          <span>
            The difference between profitable and unprofitable traders isn't
            luck—it's the decisions you make about education, discipline, and
            risk management.
          </span>
        </div>

        <footer className="blog-footer">
          <BarChart3 size={14} />
          <span>
            Data-driven profitability insights 2026 | Education + Discipline =
            Success
          </span>
        </footer>
      </div>
    </article>
  );
};

export default ProfitabilitySection;
