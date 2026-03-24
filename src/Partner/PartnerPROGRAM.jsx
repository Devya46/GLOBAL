import React from "react";
import Header from "../Header";
import PartnerProgramsMain from "./PartnerProgramsMain"; // ✅ FIXED
import Footer from "../Footer";
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
