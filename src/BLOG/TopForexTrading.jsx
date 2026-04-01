import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import BlogSlider from "../Home/BlogSlider";

// ✅ IMPORT YOUR COMPONENT
import ForexStrategies from "./ForexStrategies"; // adjust path if needed

export default function TopForexTrading() {
  return (
    <div className="account-page">
      <Header />

      <main className="account-page-content">
        {/* ✅ ADD THIS */}
        <ForexStrategies />
        <BlogSlider />

        <Footer />
      </main>
    </div>
  );
}
