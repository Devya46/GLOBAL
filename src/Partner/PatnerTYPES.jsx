import React from "react";
import Header from "../Layout/Header";
import PartnertypeHeader from "./PartnertypeHeader";
import AffiliatePartner from "./AffiliatePartner";
import PartnerFeatures from "./PartnerFeatures";
import Contact from "../Home/Contact";
import Footer from "../Layout/Footer";
import "./PartnerTypes.css";

export default function PartnerTypes() {
  return (
    <div className="accountX-page">
      <Header />

      <main className="accountX-content">
        <PartnertypeHeader />
        <AffiliatePartner />
        <PartnerFeatures />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
