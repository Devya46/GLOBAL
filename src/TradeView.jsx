import React, { useEffect, useRef } from "react";

const TradeView = () => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FX:EURUSD", title: "EUR/USD" },
        { proName: "BITSTAMP:BTCUSD", title: "BTC/USD" },
        { proName: "BITSTAMP:ETHUSD", title: "ETH/USD" },
        { proName: "TVC:GOLD", title: "Gold" },
        { proName: "TVC:SILVER", title: "Silver" },
        { proName: "NASDAQ:AAPL", title: "Apple" },
        { proName: "NASDAQ:TSLA", title: "Tesla" },
        { proName: "BINANCE:XRPUSDT", title: "XRP" },
        { proName: "NSE:NIFTY", title: "Nifty 50" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "compact",
      colorTheme: "light",
      locale: "en",
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div
        ref={container}
        className="tradingview-widget-container__widget"
      ></div>
    </div>
  );
};

export default TradeView;
