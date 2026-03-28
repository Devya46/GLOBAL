import React, { useEffect } from "react";
import {
  TrendingUp,
  ChartLine,
  Brain,
  Crown,
  Quote,
  Gem,
  ArrowDown,
  Bolt,
  CheckCircle,
  Feather,
  Key,
  ChartNoAxesCombined,
  ChartScatter,
  Percent,
  ChartColumn,
  Landmark,
  Globe2,
  FileText,
  Users,
  Gauge,
  Sparkles,
  Target,
  BarChart3,
  Activity,
  CircleDollarSign,
  Waves, // Replace Waveform with Waves
  ActivitySquare, // Alternative for MACD
} from "lucide-react";
import "./ForexAnalysis.css";

// Premium Analysis Card Component
const AnalysisCard = ({
  title,
  icon: Icon,
  gradient,
  accentColor,
  children,
  delay,
}) => {
  return (
    <div
      className="premium-card"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "backwards",
        "--card-accent": accentColor,
      }}
    >
      <div className="premium-card-glow"></div>
      <div className="premium-card-header">
        <div className={`premium-card-icon ${gradient}`}>
          <Icon size={28} strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="premium-card-title">{title}</h3>
          <div className="premium-card-divider"></div>
        </div>
      </div>
      <div className="premium-card-content">{children}</div>
    </div>
  );
};

// Premium Indicator Component
const IndicatorItem = ({ title, description, icon: Icon, color }) => {
  return (
    <div className="premium-indicator" style={{ "--indicator-color": color }}>
      <div className="indicator-icon-wrapper">
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <div className="indicator-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

// Premium Pattern Component
const PatternCard = ({ name, description, type }) => {
  return (
    <div className={`pattern-card pattern-${type}`}>
      <div className="pattern-corner"></div>
      <div className="pattern-content">
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

// Main Component
const ForexAnalysis = () => {
  useEffect(() => {
    // No external dependencies needed
  }, []);

  return (
    <section className="premium-analysis-section">
      {/* Background Ornamentation */}
      <div className="bg-ornament">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="premium-container">
        {/* Section Header */}
        <div className="premium-header">
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-diamond"></div>
            <div className="decoration-line"></div>
          </div>
          <div className="premium-badge">
            <Crown size={14} strokeWidth={1.5} />
            <span>The Art of Market Analysis</span>
          </div>
          <h1 className="premium-title">
            The Foundation of
            <span className="title-glow"> Forex Analysis</span>
          </h1>
          <p className="premium-description">
            Successful forex trading transcends speculation—it's a disciplined
            pursuit of understanding. Master the three pillars of market
            analysis to transform uncertainty into strategic advantage.
          </p>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">$7.5T</span>
              <span className="stat-label">Daily Volume</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">24/5</span>
              <span className="stat-label">Global Markets</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Analysis Pillars</span>
            </div>
          </div>
        </div>

        {/* Premium Analysis Grid */}
        <div className="premium-grid">
          {/* Technical Analysis - Blue Theme */}
          <AnalysisCard
            title="Technical Analysis"
            icon={TrendingUp}
            gradient="gradient-blue"
            accentColor="#2ed18c"
            delay={50}
          >
            <p className="premium-card-intro">
              <Quote size={12} className="quote-icon-left" />
              History repeats itself—patterns in price reflect the timeless
              psychology of markets.
              <Quote size={12} className="quote-icon-right" />
            </p>

            <div className="indicators-section">
              <h4 className="premium-subtitle">
                <span className="subtitle-icon">✦</span>
                Essential Indicators
              </h4>

              <IndicatorItem
                title="Moving Averages"
                description="The 50 & 200-period MAs define trend DNA. Price above = momentum ascendant, below = gravity's pull."
                icon={ChartLine}
                color="#2ed18c"
              />

              <IndicatorItem
                title="Relative Strength Index (RSI)"
                description="Momentum's thermometer: above 70 signals exhaustion, below 30 whispers opportunity."
                icon={Waves}
                color="#2ed18c"
              />

              <IndicatorItem
                title="MACD"
                description="The convergence of forces. Cross above signals the bulls are charging; below warns of retreat."
                icon={Activity}
                color="#2ed18c"
              />

              <IndicatorItem
                title="Bollinger Bands"
                description="Volatility's embrace. Price touching the outer bands reveals market's emotional extremes."
                icon={ChartScatter}
                color="#2ed18c"
              />
            </div>

            <div className="patterns-section">
              <h4 className="premium-subtitle">
                <span className="subtitle-icon">◈</span>
                Sacred Geometry of Markets
              </h4>
              <div className="patterns-grid-premium">
                <PatternCard
                  name="Head & Shoulders"
                  description="The reversal herald. A crowned peak signals trend's final breath."
                  type="reversal"
                />
                <PatternCard
                  name="Double Top/Bottom"
                  description="Resistance's last stand. Two attempts, two failures—trend yields."
                  type="reversal"
                />
                <PatternCard
                  name="Triangles & Flags"
                  description="Consolidation's pause before the storm. Energy compressed, ready to explode."
                  type="continuation"
                />
              </div>
            </div>
          </AnalysisCard>

          {/* Fundamental Analysis - Green Theme */}
          <AnalysisCard
            title="Fundamental Analysis"
            icon={BarChart3}
            gradient="gradient-green"
            accentColor="#2ed18c"
            delay={100}
          >
            <p className="premium-card-intro">
              <Quote size={12} className="quote-icon-left" />
              Beneath every price move lies the engine of economic reality.
              <Quote size={12} className="quote-icon-right" />
            </p>

            <div className="fundamental-grid-premium">
              <div className="fundamental-premium-item">
                <div className="item-number">01</div>
                <div className="item-content">
                  <h4>
                    <Percent size={14} className="inline-icon" /> Interest Rates
                  </h4>
                  <p>
                    The gravitational force of currency markets. Higher rates
                    attract capital like a lodestar; differentials chart the
                    course.
                  </p>
                </div>
              </div>

              <div className="fundamental-premium-item">
                <div className="item-number">02</div>
                <div className="item-content">
                  <h4>
                    <ChartColumn size={14} className="inline-icon" /> Economic
                    Data
                  </h4>
                  <p>
                    GDP whispers of prosperity, NFP speaks of employment's
                    pulse, CPI reveals inflation's shadow. Each release a
                    chapter in the story.
                  </p>
                </div>
              </div>

              <div className="fundamental-premium-item">
                <div className="item-number">03</div>
                <div className="item-content">
                  <h4>
                    <Landmark size={14} className="inline-icon" /> Central Bank
                    Policy
                  </h4>
                  <p>
                    Hawks versus doves—their words move mountains. Every
                    statement a clue to tomorrow's monetary direction.
                  </p>
                </div>
              </div>

              <div className="fundamental-premium-item">
                <div className="item-number">04</div>
                <div className="item-content">
                  <h4>
                    <Globe2 size={14} className="inline-icon" /> Geopolitical
                    Forces
                  </h4>
                  <p>
                    Elections, trade wars, conflicts—uncertainty finds refuge in
                    safe havens (USD, JPY, CHF).
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-quote">
              <Gem size={20} strokeWidth={1.5} />
              <p>
                "Interest rates are to currencies what gravity is to the
                physical world."
              </p>
            </div>
          </AnalysisCard>

          {/* Sentiment Analysis - Blue/Green Theme */}
          <AnalysisCard
            title="Sentiment Analysis"
            icon={Brain}
            gradient="gradient-blue-green"
            accentColor="#2ed18c"
            delay={150}
          >
            <p className="premium-card-intro">
              <Quote size={12} className="quote-icon-left" />
              Markets are driven by two emotions: fear and greed. Master them
              both.
              <Quote size={12} className="quote-icon-right" />
            </p>

            <div className="sentiment-visual">
              <div className="fear-greed-meter">
                <span className="meter-label left">Fear</span>
                <div className="meter-bar">
                  <div className="meter-fill"></div>
                </div>
                <span className="meter-label right">Greed</span>
              </div>
            </div>

            <div className="sentiment-grid-premium">
              <div className="sentiment-premium-card">
                <div className="sentiment-icon-wrap">
                  <FileText size={20} strokeWidth={1.5} />
                </div>
                <h4>COT Report</h4>
                <p>
                  Weekly positioning intelligence. Extreme readings signal
                  crowded trades—the herd's last stand before reversal.
                </p>
                <div className="card-footnote">CFTC Data</div>
              </div>

              <div className="sentiment-premium-card">
                <div className="sentiment-icon-wrap">
                  <Users size={20} strokeWidth={1.5} />
                </div>
                <h4>Retail Positioning</h4>
                <p>
                  The wisdom of crowds? Often not. Contrarian edges appear when
                  retail traders align unanimously.
                </p>
                <div className="card-footnote">Broker Analytics</div>
              </div>

              <div className="sentiment-premium-card">
                <div className="sentiment-icon-wrap">
                  <Gauge size={20} strokeWidth={1.5} />
                </div>
                <h4>Fear & Greed Index</h4>
                <p>
                  Market's emotional thermometer. Extreme fear? Time to buy.
                  Extreme greed? Prepare for the unwind.
                </p>
                <div className="card-footnote">Volatility Gauge</div>
              </div>
            </div>
          </AnalysisCard>
        </div>

        {/* Integration Masterclass */}
        <div className="integration-masterclass">
          <div className="masterclass-badge">
            <Crown size={14} strokeWidth={1.5} />
            <span>The Synergy Principle</span>
          </div>

          <h3 className="masterclass-title">When Three Become One</h3>

          <p className="masterclass-text">
            The alchemy of trading happens at the intersection. Like a master
            craftsman, the elite trader weaves together the threads of technical
            precision, fundamental wisdom, and psychological insight into a
            tapestry of strategic clarity.
          </p>

          <div className="integration-flow">
            <div className="flow-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4>
                  <span className="step-icon">🔭</span> Fundamental Vision
                </h4>
                <p>
                  Understand the macroeconomic narrative. Which economies are
                  strengthening? Where is policy diverging?
                </p>
              </div>
            </div>

            <div className="flow-arrow">
              <ArrowDown size={20} strokeWidth={1.5} />
            </div>

            <div className="flow-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4>
                  <span className="step-icon">🎭</span> Sentiment Gauge
                </h4>
                <p>
                  Measure market psychology. Has the narrative been priced in?
                  Is the crowd positioned for continuation or exhaustion?
                </p>
              </div>
            </div>

            <div className="flow-arrow">
              <ArrowDown size={20} strokeWidth={1.5} />
            </div>

            <div className="flow-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4>
                  <span className="step-icon">⚡</span> Technical Precision
                </h4>
                <p>
                  Execute with surgical accuracy. Identify key levels, confirm
                  with confluence, and manage risk with discipline.
                </p>
              </div>
            </div>
          </div>

          <div className="confluence-example">
            <div className="example-header">
              <Bolt size={18} strokeWidth={1.5} />
              <span>High-Probability Setup: The Confluence Trade</span>
            </div>
            <div className="example-body">
              <div className="example-item">
                <span className="example-tag fundamental">Fundamental</span>
                <p>Fed signals rate hikes → USD bullish bias</p>
              </div>
              <div className="example-item">
                <span className="example-tag sentiment">Sentiment</span>
                <p>Retail traders heavily short USD → contrarian fuel</p>
              </div>
              <div className="example-item">
                <span className="example-tag technical">Technical</span>
                <p>Breakout above resistance + RSI in neutral zone</p>
              </div>
              <div className="example-conclusion">
                <CheckCircle size={16} strokeWidth={1.5} />
                <strong>RESULT:</strong> Triple confluence creates
                high-probability long USD opportunity
              </div>
            </div>
          </div>
        </div>

        {/* Wisdom Footer */}
        <div className="wisdom-footer">
          <div className="wisdom-quote">
            <Feather size={32} strokeWidth={1.5} />
            <blockquote>
              "The market is a device for transferring money from the impatient
              to the patient. Master the analysis, and patience becomes your
              greatest ally."
            </blockquote>
            <div className="quote-author">— Market Wisdom</div>
          </div>

          <div className="takeaway-premium">
            <div className="takeaway-icon">
              <Key size={24} strokeWidth={1.5} />
            </div>
            <div className="takeaway-text">
              <h4>The Elite Trader's Edge</h4>
              <p>
                No single lens reveals the full picture. The consistently
                profitable trader synthesizes technical patterns, fundamental
                drivers, and sentiment extremes into a unified framework. This
                is not analysis for its own sake—it is the architecture of
                informed conviction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForexAnalysis;
