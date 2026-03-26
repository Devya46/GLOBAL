import React from "react";
import Header from "../Header";
import AboutHero from "./AboutHero";
import Footer from "../Footer";
import LeadingBroker from "../LeadingBroker";
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
