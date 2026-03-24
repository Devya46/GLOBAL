import React from "react";
import Header from "../Header";
import InvestorsSection from "./InvestorsSection"; // ✅ FIXED
import Footer from "../Footer";
import "./PartnerTypes.css";
// import Whyus from "./Whyus";
import KeepGrowing from "./KeepGrowing";
import OurInvestors from "./OurInvestors";

export default function PartnerPrograms() {
  return (
    <div className="accountX-page">
      <Header />

      <main className="accountX-content">
        <InvestorsSection />
        <KeepGrowing />
        <OurInvestors />
        <Footer />
      </main>
    </div>
  );
}
