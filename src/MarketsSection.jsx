import React from "react";
import "./markets.css";

export default function MarketsSection() {
  return (
    <section className="rgm-markets">
      <div className="rgm-container">
        {/* CARDS */}

        <div className="rgm-grid">
          {/* CARD */}

          <div className="rgm-card">
            <div className="rgm-inner">
              <div className="rgm-front">
                <img src="https://cdn-icons-png.flaticon.com/128/8631/8631970.png" />
                <h4>Bond CFDs</h4>
                <p>9 Products</p>
              </div>

              <div className="rgm-back">
                <h4>Bond CFDs</h4>
                <p>
                  Trade government and corporate bonds with stable market
                  exposure and diversify your portfolio with reliable
                  fixed-income assets.
                </p>
              </div>
            </div>
          </div>

          {/* CARD */}

          <div className="rgm-card">
            <div className="rgm-inner">
              <div className="rgm-front">
                <img src="https://cdn-icons-png.flaticon.com/128/8631/8631927.png" />
                <h4>Cryptocurrency CFDs</h4>
                <p>21 Products</p>
              </div>

              <div className="rgm-back">
                <h4>Cryptocurrency CFDs</h4>
                <p>
                  Trade Bitcoin, Ethereum and leading digital assets with high
                  liquidity and ultra-fast market execution.
                </p>
              </div>
            </div>
          </div>

          {/* CARD */}

          <div className="rgm-card">
            <div className="rgm-inner">
              <div className="rgm-front">
                <img src="https://cdn-icons-png.flaticon.com/128/8632/8632149.png" />
                <h4>Forex CFDs</h4>
                <p>61 Products</p>
              </div>

              <div className="rgm-back">
                <h4>Forex CFDs</h4>
                <p>
                  Access the world’s largest financial market and trade major,
                  minor and exotic currency pairs.
                </p>
              </div>
            </div>
          </div>

          {/* CARD */}

          <div className="rgm-card">
            <div className="rgm-inner">
              <div className="rgm-front">
                <img src="https://cdn-icons-png.flaticon.com/128/5180/5180831.png" />
                <h4>Commodities CFDs</h4>
                <p>24 Products</p>
              </div>

              <div className="rgm-back">
                <h4>Commodities CFDs</h4>
                <p>
                  Trade global commodities including gold, oil and silver with
                  competitive spreads and flexible leverage.
                </p>
              </div>
            </div>
          </div>

          {/* CARD */}

          <div className="rgm-card">
            <div className="rgm-inner">
              <div className="rgm-front">
                <img src="https://cdn-icons-png.flaticon.com/128/5137/5137215.png" />
                <h4>Stocks CFDs</h4>
                <p>2100+ Products</p>
              </div>

              <div className="rgm-back">
                <h4>Stocks CFDs</h4>
                <p>
                  Invest in leading global companies and trade shares from major
                  stock exchanges around the world.
                </p>
              </div>
            </div>
          </div>

          {/* CARD */}

          <div className="rgm-card">
            <div className="rgm-inner">
              <div className="rgm-front">
                <img src="https://cdn-icons-png.flaticon.com/128/4051/4051341.png" />
                <h4>Index CFDs</h4>
                <p>25 Products</p>
              </div>

              <div className="rgm-back">
                <h4>Index CFDs</h4>
                <p>
                  Track global economic performance by trading indices like
                  NASDAQ, S&P500 and Dow Jones.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT TEXT */}

        <div className="rgm-text">
          <span className="rgm-tag">MULTI-ASSET TRADING</span>

          <h2>
            Trade Global Markets <br />
            <span>With Confidence</span>
          </h2>

          <p>
            RIM Global provides traders access to a wide range of global
            financial markets through one powerful and intuitive platform.
          </p>

          <p>
            Our advanced trading technology, real-time data feeds and
            professional trading tools empower traders to identify opportunities
            and execute strategies with confidence.
          </p>

          <a href="#" className="rgm-btn">
            Explore All Markets
          </a>
        </div>
      </div>
    </section>
  );
}
