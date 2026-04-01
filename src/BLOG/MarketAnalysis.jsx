import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import BlogSlider from "../Home/BlogSlider";

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
