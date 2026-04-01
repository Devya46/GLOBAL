import React from "react";
import Header from "../Layout/Header";
import PartnerProgramsMain from "./PartnerProgramsMain"; // ✅ FIXED
import Footer from "../Layout/Footer";
import "./PartnerTypes.css";
import Whyus from "./Whyus";

export default function PartnerPrograms() {
  return (
    <div className="accountX-page">
      <Header />

      <main className="accountX-content">
        <PartnerProgramsMain />
        <Whyus />
        <Footer />
      </main>
    </div>
  );
}
