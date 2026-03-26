import React from "react";
import Header from "../Header";
import BlogHero from "./BlogHero";
import Footer from "../Footer";
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
