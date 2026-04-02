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
  ChartScatter,
  Percent,
  ChartColumn,
  Landmark,
  Globe2,
  FileText,
  Users,
  Gauge,
  BarChart3,
  Activity,
  Waves,
} from "lucide-react";
import "./ForexAnalysis.css";

// Blog Section Component
const BlogSection = ({ title, icon: Icon, children, delay }) => {
  return (
    <article
      className="fx-blog-article"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "backwards",
      }}
    >
      <div className="fx-article-header">
        <div className="fx-article-icon-wrapper">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <h2 className="fx-article-title">{title}</h2>
        <div className="fx-article-divider"></div>
      </div>
      <div className="fx-article-content">{children}</div>
    </article>
  );
};

// Blog Indicator Component
const IndicatorItem = ({ title, description, icon: Icon }) => {
  return (
    <div className="fx-blog-indicator">
      <div className="fx-indicator-icon">
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <div className="fx-indicator-text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

// Pattern Component
const PatternItem = ({ name, description, type }) => {
  return (
    <div className={`fx-blog-pattern fx-pattern-${type}`}>
      <span className="fx-pattern-bullet"></span>
      <div className="fx-pattern-info">
        <strong>{name}</strong>
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
    <main className="fx-forex-blog">
      {/* Hero Section */}
      <div className="fx-blog-hero">
        <div className="fx-hero-ornament"></div>
        <div className="fx-blog-container">
          <div className="fx-hero-meta">
            <span className="fx-hero-badge">
              <Crown size={14} strokeWidth={1.5} />
              The Art of Market Analysis
            </span>
            <div className="fx-hero-stats">
              <span>
                $7.5T <em>Daily Volume</em>
              </span>
              <span>
                24/5 <em>Global Markets</em>
              </span>
              <span>
                3 <em>Analysis Pillars</em>
              </span>
            </div>
          </div>
          <h1 className="fx-hero-title">
            The Foundation of
            <span className="fx-hero-glow"> Forex Analysis</span>
          </h1>
          <p className="fx-hero-description">
            Successful forex trading transcends speculation—it's a disciplined
            pursuit of understanding. Master the three pillars of market
            analysis to transform uncertainty into strategic advantage.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="fx-blog-container">
        <div className="fx-blog-main">
          {/* Technical Analysis */}
          <BlogSection title="Technical Analysis" icon={TrendingUp} delay={50}>
            <p className="fx-blog-lead">
              <Quote size={14} className="fx-lead-quote" />
              History repeats itself—patterns in price reflect the timeless
              psychology of markets.
            </p>

            <h3 className="fx-section-title">Essential Indicators</h3>
            <div className="fx-indicators-list">
              <IndicatorItem
                title="Moving Averages"
                description="The 50 & 200-period MAs define trend DNA. Price above = momentum ascendant, below = gravity's pull."
                icon={ChartLine}
              />
              <IndicatorItem
                title="Relative Strength Index (RSI)"
                description="Momentum's thermometer: above 70 signals exhaustion, below 30 whispers opportunity."
                icon={Waves}
              />
              <IndicatorItem
                title="MACD"
                description="The convergence of forces. Cross above signals the bulls are charging; below warns of retreat."
                icon={Activity}
              />
              <IndicatorItem
                title="Bollinger Bands"
                description="Volatility's embrace. Price touching the outer bands reveals market's emotional extremes."
                icon={ChartScatter}
              />
            </div>

            <h3 className="fx-section-title">Sacred Geometry of Markets</h3>
            <div className="fx-patterns-list">
              <PatternItem
                name="Head & Shoulders"
                description="The reversal herald. A crowned peak signals trend's final breath."
                type="reversal"
              />
              <PatternItem
                name="Double Top/Bottom"
                description="Resistance's last stand. Two attempts, two failures—trend yields."
                type="reversal"
              />
              <PatternItem
                name="Triangles & Flags"
                description="Consolidation's pause before the storm. Energy compressed, ready to explode."
                type="continuation"
              />
            </div>

            <div className="fx-blog-footnote">
              <span>✦ Technical Insight</span>
              <p>
                Price action is the ultimate truth. Indicators are tools, not
                masters.
              </p>
            </div>
          </BlogSection>

          {/* Fundamental Analysis */}
          <BlogSection
            title="Fundamental Analysis"
            icon={BarChart3}
            delay={100}
          >
            <p className="fx-blog-lead">
              <Quote size={14} className="fx-lead-quote" />
              Beneath every price move lies the engine of economic reality.
            </p>

            <div className="fx-fundamental-list">
              <div className="fx-fundamental-item">
                <div className="fx-fundamental-number">01</div>
                <div className="fx-fundamental-content">
                  <h4>
                    <Percent size={16} /> Interest Rates
                  </h4>
                  <p>
                    The gravitational force of currency markets. Higher rates
                    attract capital like a lodestar; differentials chart the
                    course.
                  </p>
                </div>
              </div>
              <div className="fx-fundamental-item">
                <div className="fx-fundamental-number">02</div>
                <div className="fx-fundamental-content">
                  <h4>
                    <ChartColumn size={16} /> Economic Data
                  </h4>
                  <p>
                    GDP whispers of prosperity, NFP speaks of employment's
                    pulse, CPI reveals inflation's shadow. Each release a
                    chapter in the story.
                  </p>
                </div>
              </div>
              <div className="fx-fundamental-item">
                <div className="fx-fundamental-number">03</div>
                <div className="fx-fundamental-content">
                  <h4>
                    <Landmark size={16} /> Central Bank Policy
                  </h4>
                  <p>
                    Hawks versus doves—their words move mountains. Every
                    statement a clue to tomorrow's monetary direction.
                  </p>
                </div>
              </div>
              <div className="fx-fundamental-item">
                <div className="fx-fundamental-number">04</div>
                <div className="fx-fundamental-content">
                  <h4>
                    <Globe2 size={16} /> Geopolitical Forces
                  </h4>
                  <p>
                    Elections, trade wars, conflicts—uncertainty finds refuge in
                    safe havens (USD, JPY, CHF).
                  </p>
                </div>
              </div>
            </div>

            <div className="fx-blog-quote">
              <Gem size={18} />
              <p>
                "Interest rates are to currencies what gravity is to the
                physical world."
              </p>
            </div>
          </BlogSection>

          {/* Sentiment Analysis */}
          <BlogSection title="Sentiment Analysis" icon={Brain} delay={150}>
            <p className="fx-blog-lead">
              <Quote size={14} className="fx-lead-quote" />
              Markets are driven by two emotions: fear and greed. Master them
              both.
            </p>

            <div className="fx-sentiment-meter">
              <span className="fx-meter-label fx-fear">Fear</span>
              <div className="fx-meter-track">
                <div className="fx-meter-fill"></div>
              </div>
              <span className="fx-meter-label fx-greed">Greed</span>
            </div>

            <div className="fx-sentiment-list">
              <div className="fx-sentiment-item">
                <div className="fx-sentiment-icon">
                  <FileText size={20} />
                </div>
                <div className="fx-sentiment-text">
                  <h4>COT Report</h4>
                  <p>
                    Weekly positioning intelligence. Extreme readings signal
                    crowded trades—the herd's last stand before reversal.
                  </p>
                  <span className="fx-sentiment-source">CFTC Data</span>
                </div>
              </div>
              <div className="fx-sentiment-item">
                <div className="fx-sentiment-icon">
                  <Users size={20} />
                </div>
                <div className="fx-sentiment-text">
                  <h4>Retail Positioning</h4>
                  <p>
                    The wisdom of crowds? Often not. Contrarian edges appear
                    when retail traders align unanimously.
                  </p>
                  <span className="fx-sentiment-source">Broker Analytics</span>
                </div>
              </div>
              <div className="fx-sentiment-item">
                <div className="fx-sentiment-icon">
                  <Gauge size={20} />
                </div>
                <div className="fx-sentiment-text">
                  <h4>Fear & Greed Index</h4>
                  <p>
                    Market's emotional thermometer. Extreme fear? Time to buy.
                    Extreme greed? Prepare for the unwind.
                  </p>
                  <span className="fx-sentiment-source">Volatility Gauge</span>
                </div>
              </div>
            </div>
          </BlogSection>

          {/* Integration Section - Enhanced */}
          <section className="fx-blog-integration">
            <div className="fx-integration-header">
              <div className="fx-integration-badge">
                <Crown size={14} />
                <span>The Synergy Principle</span>
              </div>
              <h2 className="fx-integration-title">When Three Become One</h2>
              <p className="fx-integration-text">
                The alchemy of trading happens at the intersection. Like a
                master craftsman, the elite trader weaves together the threads
                of technical precision, fundamental wisdom, and psychological
                insight into a tapestry of strategic clarity.
              </p>
            </div>

            <div className="fx-integration-flow">
              <div className="fx-flow-card">
                <div className="fx-flow-number">01</div>
                <div className="fx-flow-icon">🔭</div>
                <h4>Fundamental Vision</h4>
                <p>
                  Understand the macroeconomic narrative. Which economies are
                  strengthening? Where is policy diverging?
                </p>
              </div>
              <div className="fx-flow-arrow">
                <ArrowDown size={20} />
              </div>
              <div className="fx-flow-card">
                <div className="fx-flow-number">02</div>
                <div className="fx-flow-icon">🎭</div>
                <h4>Sentiment Gauge</h4>
                <p>
                  Measure market psychology. Has the narrative been priced in?
                  Is the crowd positioned for continuation or exhaustion?
                </p>
              </div>
              <div className="fx-flow-arrow">
                <ArrowDown size={20} />
              </div>
              <div className="fx-flow-card">
                <div className="fx-flow-number">03</div>
                <div className="fx-flow-icon">⚡</div>
                <h4>Technical Precision</h4>
                <p>
                  Execute with surgical accuracy. Identify key levels, confirm
                  with confluence, and manage risk with discipline.
                </p>
              </div>
            </div>

            <div className="fx-confluence-box">
              <div className="fx-confluence-header">
                <Bolt size={18} />
                <span>High-Probability Setup: The Confluence Trade</span>
              </div>
              <div className="fx-confluence-grid">
                <div className="fx-confluence-card fx-confluence-fundamental">
                  <div className="fx-card-tag">Fundamental</div>
                  <p>Fed signals rate hikes → USD bullish bias</p>
                </div>
                <div className="fx-confluence-card fx-confluence-sentiment">
                  <div className="fx-card-tag">Sentiment</div>
                  <p>Retail traders heavily short USD → contrarian fuel</p>
                </div>
                <div className="fx-confluence-card fx-confluence-technical">
                  <div className="fx-card-tag">Technical</div>
                  <p>Breakout above resistance + RSI in neutral zone</p>
                </div>
              </div>
              <div className="fx-confluence-conclusion">
                <CheckCircle size={18} />
                <strong>RESULT:</strong> Triple confluence creates
                high-probability long USD opportunity
              </div>
            </div>
          </section>

          {/* Footer Wisdom */}
          <footer className="fx-blog-footer">
            <div className="fx-footer-quote">
              <Feather size={28} />
              <blockquote>
                "The market is a device for transferring money from the
                impatient to the patient. Master the analysis, and patience
                becomes your greatest ally."
              </blockquote>
              <cite>— Market Wisdom</cite>
            </div>
            <div className="fx-footer-takeaway">
              <Key size={24} />
              <div>
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
          </footer>
        </div>
      </div>
    </main>
  );
};

export default ForexAnalysis;
