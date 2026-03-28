import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import BlogSlider from "../BlogSlider";

// ✅ IMPORT YOUR COMPONENT
import ForexAnalysis from "./ForexAnalysis"; // adjust path if needed

export default function MarketAnalysis() {
  return (
    <div className="account-page">
      <Header />

      <main className="account-page-content">
        {/* ✅ ADD THIS */}
        <ForexAnalysis />
        <BlogSlider />

        <Footer />
      </main>
    </div>
  );
}
