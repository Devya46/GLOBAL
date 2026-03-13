import React, { useEffect, useRef, useState } from "react";
import "./LeadingBroker.css";

export default function LeadingBroker() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState({ traders: 0, volume: 0, countries: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          startCounter();
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const startCounter = () => {
    let traders = 0;
    let volume = 0;
    let countries = 0;

    const interval = setInterval(() => {
      traders += 20000;
      volume += 5;
      countries += 1;

      if (traders >= 1000000) traders = 1000000;
      if (volume >= 120) volume = 120;
      if (countries >= 190) countries = 190;

      setCount({ traders, volume, countries });

      if (traders === 1000000) clearInterval(interval);
    }, 20);
  };

  return (
    <section ref={ref} className={`rim-section ${visible ? "rim-show" : ""}`}>
      {/* Liquidity lines */}
      {/* <div className="liquidity-lines"></div> */}

      <div className="rim-container">
        {/* LEFT */}

        <div className="rim-left">
          <span className="rim-tag">RIM GLOBAL</span>

          <h2>
            Start Trading With A <span>Leading Broker</span>
          </h2>

          <p>
            RIM Global gives traders direct access to global financial markets
            with ultra-fast execution and institutional grade liquidity.
          </p>

          <div className="rim-stats">
            <div>
              <h3>{(count.traders / 1000000).toFixed(1)}M+</h3>
              <span>Active Traders</span>
            </div>

            <div>
              <h3>${count.volume}B+</h3>
              <span>Monthly Volume</span>
            </div>

            <div>
              <h3>{count.countries}+</h3>
              <span>Countries</span>
            </div>
          </div>
          <h4 class="rim-highlight">
            Gain Your Trading Advantage With Rim Global
          </h4>

          <a href="#" className="rim-btn">
            Start Trading
          </a>
        </div>

        {/* RIGHT */}

        <div className="rim-right">
          <img
            src="https://plus.unsplash.com/premium_vector-1737030151718-dab6096b5fcc?w=600&auto=format&fit=crop&q=60"
            alt="market"
          />
        </div>
      </div>
    </section>
  );
}
