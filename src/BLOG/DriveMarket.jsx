import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import BlogSlider from "../Home/BlogSlider";

// ✅ IMPORT YOUR COMPONENT
import ForexLandscape from "./ForexLandscape";

export default function DriveMarket() {
  return (
    <div className="account-page">
      <Header />

      <main className="account-page-content">
        <ForexLandscape />
        <BlogSlider />

        <Footer />
      </main>
    </div>
  );
}
