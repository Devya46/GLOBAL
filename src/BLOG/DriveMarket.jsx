import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import BlogSlider from "../BlogSlider";

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
