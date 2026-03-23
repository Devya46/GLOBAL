import React from "react";
import Header from "../Header";
import FWHero from "./FundsHub";
import RgsSupport from "./RgsSupport";
// import "./Account_type.css";
import Marketing from "../MarketsSection";
import WithdrawalGuidelines from "./WithdrawalGuidelines";
// import RiskSection from "./RiskSection";
import Footer from "../Footer";

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
