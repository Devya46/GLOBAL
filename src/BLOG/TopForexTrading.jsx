import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import BlogSlider from "../BlogSlider";

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
