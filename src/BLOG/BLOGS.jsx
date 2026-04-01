import React from "react";
import Header from "../Layout/Header";
import BlogHero from "./BlogHero";
import Footer from "../Layout/Footer";
import ForexArticlesSection from "./ForexArticlesSection";

export default function AccountType() {
  return (
    <div className="account-page">
      {" "}
      <Header />
      <main className="account-page-content">
        <BlogHero />
        <ForexArticlesSection />
        <Footer />
      </main>
    </div>
  );
}
