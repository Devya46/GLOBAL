import React from "react";
import Header from "../Layout/Header";
import AccountSteps from "../Home/AccountSteps";
import Contact from "../Home/Contact";
import Whyus from "./Whyus";
import Footer from "../Layout/Footer";
import PartnersScreen from "./PartnersScreen";

export default function BecomePartner() {
  return (
    <div className="accountX-page">
      <Header />

      <main className="accountX-content">
        <PartnersScreen />
        <AccountSteps />
        <Contact />
        <Whyus />
        <Footer />
      </main>
    </div>
  );
}
