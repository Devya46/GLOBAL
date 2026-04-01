import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import BlogSlider from "../Home/BlogSlider";

// ✅ IMPORT YOUR COMPONENT
import RiskManagementSection from "./RiskManagementSection"; // adjust path if needed

export default function RiskManagement() {
  return (
    <div className="account-page">
      <Header />

      <main className="account-page-content">
        {/* ✅ ADD THIS */}
        <RiskManagementSection />
        <BlogSlider />

        <Footer />
      </main>
    </div>
  );
}
