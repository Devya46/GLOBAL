import React from "react";
import Header from "../Layout/Header";
import AboutHero from "./AboutHero";
import Footer from "../Layout/Footer";
import LeadingBroker from "../Home/LeadingBroker";
import MissionVission from "./MissionVission";
import RimGlobalSection from "./RimGlobalSection";

export default function AccountType() {
  return (
    <div className="account-page">
      {" "}
      <Header />
      <main className="account-page-content">
        <AboutHero />
        <LeadingBroker />
        <MissionVission />
        <RimGlobalSection />
        {/* <BlogHero /> */}
        {/* <ForexArticlesSection /> */}
        <Footer />
      </main>
    </div>
  );
}
