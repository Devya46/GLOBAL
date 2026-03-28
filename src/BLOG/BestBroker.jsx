import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import BlogSlider from "../BlogSlider";

// ✅ IMPORT YOUR COMPONENT
import BrokerSelectionSection from "./BrokerSelectionSection"; // adjust path if needed

export default function BestBroker() {
  return (
    <div className="account-page">
      <Header />

      <main className="account-page-content">
        {/* ✅ ADD THIS */}
        <BrokerSelectionSection />
        <BlogSlider />

        <Footer />
      </main>
    </div>
  );
}
