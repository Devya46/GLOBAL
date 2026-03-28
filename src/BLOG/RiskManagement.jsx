import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import BlogSlider from "../BlogSlider";

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
