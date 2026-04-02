import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  const handleNav = (path) => {
    window.location.href = path;
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* MAIN GRID */}
        <div className="footer-main">
          {/* LEFT SECTION */}
          <div className="footer-brand">
            <img
              src="https://rimglobal.trade/assets/logo/logo.svg"
              alt="RIM Global"
              className="footer-logo"
            />
            <p>
              With over many years of experience and a remarkable legacy in the
              financial market, we are unarguably one of the most trusted and
              transparent brokers in the forex industry and other trading
              markets.
            </p>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/people/RIM-Global/61584644503217/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/rimglobaltrade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/rim-global/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/@RIM_Global"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <button onClick={() => handleNav("/")}>Home</button>
              </li>
              <li>
                <button onClick={() => handleNav("/about")}>About</button>
              </li>
              <li>
                <button onClick={() => handleNav("/demo-account")}>
                  Accounts
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("/partners")}>Partners</button>
              </li>
              <li>
                <button onClick={() => handleNav("/ContactUsPage")}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* USEFUL LINKS */}
          <div className="footer-links">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <button onClick={() => handleNav("/terms-and-conditions")}>
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("/PrivacyPolicy")}>
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <FaEnvelope className="contact-icon" />
                <a href="mailto:support@rimglobal.trade">
                  support@rimglobal.trade
                </a>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <a href="tel:+995706070453">+995 706 070 453</a>
              </li>
            </ul>
          </div>

          {/* CTA BUTTON */}
          <div className="footer-cta">
            <button
              className="btn-open-account"
              onClick={() => handleNav("/open-account")}
            >
              <ExternalLink size={16} />
              <span>Open Account</span>
            </button>
          </div>
        </div>

        {/* LEGAL SECTION */}
        <div className="footer-legal">
          <div className="legal-line">
            <strong>Legal:</strong> RIM Global Ltd is incorporated in St. Lucia
            as an International Business Company with registration number
            2025-00403.
          </div>
          <div className="legal-line">
            <strong>Risk Warning:</strong> An investment in derivatives may mean
            investors may lose an amount even greater than their original
            investment. Anyone wishing to invest in any of the products
            mentioned in www.rimglobal.trade should seek their own financial or
            professional advice. Trading of securities, forex, stock market,
            commodities, options and futures may not be suitable for everyone
            and involves the risk of losing part or all of your money. Trading
            in the financial markets has large potential rewards, but also large
            potential risk. You must be aware of the risks and be willing to
            accept them in order to invest in the markets. Don't invest and
            trade with money which you can't afford to lose. Forex Trading are
            not allowed in some countries, before investing your money, make
            sure whether your country is allowing this or not. You are strongly
            advised to obtain independent financial, legal and tax advice before
            proceeding with any currency or spot metals trade. Nothing in this
            site should be read or construed as constituting advice on the part
            of RIM Global Limited or any of its affiliates, directors, officers
            or employees. The services of RIM Global Limited are not intended
            for distribution to, or use by, any person in any country or
            jurisdiction where such distribution or use would be contrary to
            local law or regulation. Please read the full{" "}
            <button
              className="risk-link"
              onClick={() =>
                handleNav("https://rimglobal.trade/legal-risk-disclosure")
              }
            >
              Risk Disclosure
            </button>
            .
          </div>
          <div className="copyright">
            © 2025 - 2026 All Rights Reserved. By: RIM Global Ltd
          </div>
        </div>
      </div>
    </footer>
  );
}
