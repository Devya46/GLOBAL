import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import BlogSlider from "../Home/BlogSlider";

// ✅ IMPORT YOUR COMPONENT
import ProfitabilitySection from "./ProfitabilitySection"; // adjust path if needed

export default function Profitable() {
  return (
    <div className="account-page">
      <Header />

      <main className="account-page-content">
        {/* ✅ ADD THIS */}
        <ProfitabilitySection />
        <BlogSlider />

        <Footer />
      </main>
    </div>
  );
}
