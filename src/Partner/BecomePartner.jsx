import React from "react";
import Header from "../Header";
import AccountSteps from "../AccountSteps";
import Contact from "../Contact";
import Whyus from "./Whyus";
import Footer from "../Footer";

export default function BecomePartner() {
  return (
    <div className="accountX-page">
      <Header />

      <main className="accountX-content">
        <AccountSteps />
        <Contact />
        <Whyus />
        <Footer />
      </main>
    </div>
  );
}
