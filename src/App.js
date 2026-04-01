import React from "react";
import "./Layout/style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Hero from "./Home/hero";
import MarketsSection from "./Home/MarketsSection";
import TradeView from "./Home/TradeView";
import LeadingBroker from "./Home/LeadingBroker";
import Features from "./Home/Features";
import Pricing from "./Home/Pricing";
import AccountSteps from "./Home/AccountSteps";
import AutoTrading from "./Home/AutoTrading";
import BlogSlider from "./Home/BlogSlider";
import TradingTerminals from "./Home/TradingTerminals";
import StatsSection from "./Home/StatsSection";
import Testimonials from "./Home/Testimonials";
import VideoGallery from "./Home/VideoGallery";
import Contact from "./Home/Contact";
import Footer from "./Layout/Footer";
import AccountType from "./Account/Account_type";
import DEMOAccount from "./Account/DEMO-Account";
import WithdrawalDeposit from "./Account/Withdrawal&Deposist";
import PatnerTYPES from "./Partner/PatnerTYPES";
import PartnerPrograms from "./Partner/PartnerPROGRAM";
import Investor from "./Partner/Invertor";
import BecomePartner from "./Partner/BecomePartner";
import BLOGS from "./BLOG/BLOGS";
import About from "./ABOUT/About";
import ContactUsPage from "./Home/ContactUsPage";
import TopForexTrading from "./BLOG/TopForexTrading";
import MarketAnalysis from "./BLOG/MarketAnalysis";
import DriveMarket from "./BLOG/DriveMarket";
import Profitable from "./BLOG/Profitable";
import BestBroker from "./BLOG/BestBroker";
import RiskManagement from "./BLOG/RiskManagement";
import PrivacyPolicy from "./Legal/PrivacyPolicy";
import { TermsAndConditions } from "./Legal/TermsAndConditions";

function Home() {
  return (
    <>
      <Hero />
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
        <Route path="/login" element={<Home />} />
        <Route path="/BLOG/TopForexTrading" element={<TopForexTrading />} />
        <Route path="/BLOG/MarketAnalysis" element={<MarketAnalysis />} />
        <Route path="/BLOG/DriveMarket" element={<DriveMarket />} />
        <Route path="/BLOG/Profitable" element={<Profitable />} />
        <Route path="/BLOG/BestBroker" element={<BestBroker />} />
        <Route path="/BLOG/RiskManagement" element={<RiskManagement />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/GLOBAL" element={<Navigate to="/" replace />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
