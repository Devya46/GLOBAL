import React from "react";
import Header from "../Header";
import AccountHero from "./AccountHero";
// import "./Account_type.css";
import Pricing from "../Pricing";
import AccountSecurity from "./AccountSecurity";
import RiskSection from "./RiskSection";
import Footer from "../Footer";

export default function AccountType() {
  return (
    <div className="account-page">
      {" "}
      {/* ✅ IMPORTANT WRAPPER */}
      <Header />
      <main className="account-page-content">
        <AccountHero />
        <Pricing />
        <AccountSecurity />
        <RiskSection />
        <Footer />
      </main>
    </div>
  );
}
