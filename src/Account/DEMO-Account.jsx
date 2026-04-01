import React from "react";
import Header from "../Layout/Header";
import DEMOHero from "./DEMOHeroSection";
import RgsPractice from "./RgsPractice";
import DemoConSection from "./DemoConSection";
import Contact from "../Home/Contact";
import Footer from "../Layout/Footer";

export default function AccountType() {
  return (
    <div className="account-page">
      {" "}
      {/* ✅ IMPORTANT WRAPPER */}
      <Header />
      <main className="account-page-content">
        <DEMOHero />
        <RgsPractice />
        <DemoConSection />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
