import React from "react";
import Header from "../Layout/Header";
import FWHero from "./FundsHub";
import RgsSupport from "./RgsSupport";
// import "./Account_type.css";
import Marketing from "../Home/MarketsSection";
import WithdrawalGuidelines from "./WithdrawalGuidelines";
// import RiskSection from "./RiskSection";
import Footer from "../Layout/Footer";

export default function AccountType() {
  return (
    <div className="account-page">
      {" "}
      {/* ✅ IMPORTANT WRAPPER */}
      <Header />
      <main className="account-page-content">
        <FWHero />
        <Marketing />
        <WithdrawalGuidelines />
        <RgsSupport />
        <Footer />
      </main>
    </div>
  );
}
