import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* LEFT SECTION */}
        <div className="footer-about">
          <img src="/logo.svg" alt="RIM Global" className="footer-logo" />

          <p>
            With over many years of experience and a remarkable legacy in the
            financial market, we are unarguably one of the most trusted and
            transparent brokers in the forex industry and other trading markets.
          </p>

          <div className="Footer-social-icons">
            <a
              href="https://www.facebook.com/people/RIM-Global/61584644503217/"
              target="_blank"
            >
              <FaFacebookF />
            </a>

            <a href="https://x.com/rimglobaltrade" target="_blank">
              <FaXTwitter />
            </a>

            <a
              href="https://www.linkedin.com/company/rim-global/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>

            <a href="https://www.youtube.com/@RIM_Global" target="_blank">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Link</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/accounts">Accounts</a>
          <a href="/partners">Partners</a>
          <a href="/contact">Contact</a>
        </div>

        {/* USEFUL LINKS */}
        <div className="footer-links">
          <h3>Useful Links</h3>

          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>
            <FaEnvelope className="icon" />
            support@rimglobal.trade
          </p>

          <p>
            <FaPhone className="icon" />
            +995706070453
          </p>
        </div>

        {/* BUTTON */}
        <div className="footer-btn">
          <button>OPEN ACCOUNT</button>
        </div>
      </div>

      {/* LEGAL */}
      <div className="footer-legal">
        <p>
          <strong>Legal :</strong> RIM Global Ltd is incorporated in St. Lucia
          as an International Business Company with registration number
          2025-00403.
        </p>

        <p>
          <strong>Risk Warning :</strong> Risk Warning : An investment in
          derivatives may mean investors may lose an amount even greater than
          their original investment. Anyone wishing to invest in any of the
          products mentioned in www.rimglobal.trade should seek their own
          financial or professional advice. Trading of securities, forex, stock
          market, commodities, options and futures may not be suitable for
          everyone and involves the risk of losing part or all of your money.
          Trading in the financial markets has large potential rewards, but also
          large potential risk. You must be aware of the risks and be willing to
          accept them in order to invest in the markets. Don't invest and trade
          with money which you can't afford to lose. Forex Trading are not
          allowed in some countries, before investing your money, make sure
          whether your country is allowing this or not. You are strongly advised
          to obtain independent financial, legal and tax advice before
          proceeding with any currency or spot metals trade. Nothing in this
          site should be read or construed as constituting advice on the part of
          RIM Global Limited or any of its affiliates, directors, officers or
          employees. The services of RIM Global Limited are not intended for
          distribution to, or use by, any person in any country or jurisdiction
          where such distribution or use would be contrary to local law or
          regulation. Please read the full{" "}
          <a
            className="RiskDisclosure"
            href="https://rimglobal.trade/legal-risk-disclosure"
          >
            Risk Disclosure
          </a>
          .
        </p>

        <p className="copyright">
          © 2025 - 2026 All Rights Reserved. By : RIM Global Ltd
        </p>
      </div>
    </footer>
  );
}
