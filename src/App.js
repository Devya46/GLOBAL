import React, { useEffect, useState } from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import MarketsSection from "./MarketsSection";
import TradeView from "./TradeView";
import LeadingBroker from "./LeadingBroker";
import Features from "./Features";
import Pricing from "./Pricing";
import AccountSteps from "./AccountSteps";
import AutoTrading from "./AutoTrading";
import BlogSlider from "./BlogSlider";
import TradingTerminals from "./TradingTerminals";
import StatsSection from "./StatsSection";
import Testimonials from "./Testimonials";
import VideoGallery from "./VideoGallery";
import Contact from "./Contact";
import Footer from "./Footer";
import AccountType from "./Account/Account_type";
import DEMOAccount from "./Account/DEMO-Account";
import WithdrawalDeposit from "./Account/Withdrawal&Deposist";
import PatnerTYPES from "./Partner/PatnerTYPES";
import PartnerPrograms from "./Partner/PartnerPROGRAM";
import Investor from "./Partner/Invertor";
import BecomePartner from "./Partner/BecomePartner";
import BLOGS from "./BLOG/BLOGS";
import About from "./ABOUT/About";

// 👉 CREATE TEMP PAGES (or import real ones)
function Home() {
  return (
    <>
      <MainHome />
    </>
  );
}

// 👉 YOUR MAIN HOME CONTENT MOVED HERE
function MainHome() {
  const [index, setIndex] = useState(0);

  const titles = [
    <>
      New to Trading?
      <br /> We're Here
      <br />
      Learn-Trade-Grow
    </>,
    "Essential Tools for Every Trader's Success",
    "Fast, Secure & Transparent Trading",
  ];

  const desc =
    "Start with a demo account and explore global markets risk-free. Access advanced charts, real-time market insights and powerful tools designed to help you analyse trends and trade smarter.";

  const btn = "Start Trading";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div>
      <div className="hero">
        <Header />

        <div className="hero-content">
          <p className="tag">SMART TRADING SOLUTION</p>

          <div className="flip-box">
            <h1 key={index} className="cube-text">
              {titles[index]}
            </h1>

            <p className="desc">{desc}</p>
            <button className="cta">{btn}</button>
          </div>
        </div>
      </div>

      <TradeView />
      <MarketsSection />
      <LeadingBroker />
      <Features />
      <Pricing />
      <AccountSteps />
      <AutoTrading />
      <BlogSlider />
      <TradingTerminals />
      <StatsSection />
      <Testimonials />
      <VideoGallery />
      <Contact />
      <Footer />
    </div>
  );
}

// ✅ MAIN APP
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account-type" element={<AccountType />} />
        <Route path="/DEMO-Account" element={<DEMOAccount />} />
        <Route path="/Withdrawal&Deposit" element={<WithdrawalDeposit />} />
        <Route path="/PatnerTYPES" element={<PatnerTYPES />} />
        <Route path="/partners" element={<PartnerPrograms />} />
        <Route path="/Investor" element={<Investor />} />
        <Route path="/BecomePartner" element={<BecomePartner />} />
        <Route path="/BLOGS" element={<BLOGS />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}
