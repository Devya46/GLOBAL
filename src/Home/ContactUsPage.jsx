import React, { useState, useEffect } from "react";
import "./ContactUsPage.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../Layout/Header";
import ContactHero from "./ContactHero"; // Fixed import (capital H)
import Contact from "./Contact";
import Footer from "../Layout/Footer";

// ✅ HOME COMPONENT - All sections combined
function ContactUsPage() {
  return (
    <>
      <Header />
      <ContactHero /> {/* Use the Hero component instead of duplicating code */}
      <Contact />
      <Footer />
    </>
  );
}
export default ContactUsPage;
