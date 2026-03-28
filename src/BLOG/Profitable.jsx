import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import BlogSlider from "../BlogSlider";

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
