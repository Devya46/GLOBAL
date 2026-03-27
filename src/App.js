import React, { useState, useEffect } from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Hero from "./hero"; // Fixed import (capital H)
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
import ContactUsPage from "./ContactUsPage";

// ✅ HOME COMPONENT - All sections combined
function Home() {
  return (
    <>
      <Hero /> {/* Use the Hero component instead of duplicating code */}
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
    </>
  );
}

// ✅ MAIN APP
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account-type" element={<AccountType />} />
        <Route path="/demo-account" element={<DEMOAccount />} />
        <Route path="/WithdrawalDeposist" element={<WithdrawalDeposit />} />
        <Route path="/PartnerTypes" element={<PatnerTYPES />} />
        <Route path="/partners" element={<PartnerPrograms />} />
        <Route path="/Investor" element={<Investor />} />
        <Route path="/BecomePartner" element={<BecomePartner />} />
        <Route path="/BLOGS" element={<BLOGS />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUsPage" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}
