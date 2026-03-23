import React from "react";
import Header from "../Header";
import DEMOHero from "./DEMOHeroSection";
import RgsPractice from "./RgsPractice";
import DemoConSection from "./DemoConSection";
import Contact from "../Contact";
import Footer from "../Footer";

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
