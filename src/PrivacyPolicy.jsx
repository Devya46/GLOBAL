import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {
  ShieldCheck,
  TrendingUp,
  Wallet,
  Bitcoin,
  Globe,
  FileCheck,
  Building2,
  PhoneCall,
  Database,
  Mail,
  MessageSquare,
  Scale,
} from "lucide-react";

// ✅ PRIVACY POLICY COMPONENT - Simple, no cards, dark navy blue, blue/green highlights only
export function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div style={styles.container}>
        <div style={styles.privacySection}>
          {/* main header with lucide icon */}
          <div style={styles.sectionTitle}>
            <div style={styles.iconWrap}>
              <ShieldCheck size={28} color="#2dd4bf" strokeWidth={1.8} />
            </div>
            <h1 style={styles.h1}>Privacy Policy</h1>
          </div>

          {/* intro paragraph */}
          <div style={styles.policyText}>
            <p>
              This privacy policy (the{" "}
              <span style={styles.highlightGreen}>“Policy”</span>) explains how
              the RIM Global group (collectively{" "}
              <span style={styles.highlightGreen}>“RIM Global”</span>,{" "}
              <span style={styles.highlightGreen}>“we”</span> or{" "}
              <span style={styles.highlightGreen}>“us”</span> and each member of
              the RIM Global group for whose services you registered, the{" "}
              <span style={styles.highlightGreen}>“RIM Global Entity”</span>)
              collects, uses and discloses personal information through its
              websites, mobile applications, and other online products and
              services that link to this Policy, including any of the products
              and services detailed in the following paragraph (collectively,
              the <span style={styles.highlightGreen}>“Services”</span>) or when
              you otherwise interact with us.
            </p>
          </div>

          {/* Services list - simple, no cards, inline icons */}
          <div style={styles.servicesList}>
            <div style={styles.serviceItem}>
              <TrendingUp
                size={18}
                color="#2dd4bf"
                style={styles.serviceIcon}
              />
              <span>
                <strong style={styles.highlightGreen}>(i)</strong> the RIM
                Global social trading platform for investing in stocks & ETFs,
                cryptocurrencies and for CFDs trading which users can sign up
                for an account with;
              </span>
            </div>
            <div style={styles.serviceItem}>
              <Wallet size={18} color="#0ea5e9" style={styles.serviceIcon} />
              <span>
                <strong style={styles.highlightGreen}>(ii)</strong> the RIM
                Global Money App which facilitates the RIM Global Money services
                (e-money account servicing payments and debit card) and RIM
                Global Money Crypto Wallet services;
              </span>
            </div>
            <div style={styles.serviceItem}>
              <Bitcoin size={18} color="#2dd4bf" style={styles.serviceIcon} />
              <span>
                <strong style={styles.highlightGreen}>(iii)</strong> RIM Global
                Digital Assets Exchange Services;
              </span>
            </div>
            <div style={styles.serviceItem}>
              <Globe size={18} color="#5bc0ff" style={styles.serviceIcon} />
              <span>
                <strong style={styles.highlightGreen}>(iv)</strong> any other
                site, web platform, mobile application or other service
                facilitated by any RIM Global Entity (any account described in
                (i)-(iv) being an{" "}
                <span style={styles.highlightBlue}>“RIM Global Account”</span>{" "}
                for the purpose of this Policy).
              </span>
            </div>
          </div>

          {/* Acceptance & Authority block */}
          <div style={styles.policyBlock}>
            <div style={styles.blockHeader}>
              <FileCheck size={20} color="#0ea5e9" />
              <h2 style={styles.h2}>Acceptance & Authority</h2>
            </div>
            <div style={styles.simpleText}>
              <p>
                We encourage you to read the Policy carefully as it forms part
                of the relevant RIM Global Entity's terms and conditions, terms
                of business, agreement with you and/or terms of use, as the case
                may be.
              </p>
              <p>
                If you accept or agree to this Policy on behalf of a company or
                other legal entity, you represent and warrant that you have the
                authority to bind that company or other legal entity to the
                Privacy Policy and, in such event,{" "}
                <span style={styles.highlightGreen}>“you”</span> and{" "}
                <span style={styles.highlightGreen}>“your”</span> will refer and
                apply to that company or other legal entity.
              </p>
            </div>
          </div>

          {/* Application of this Policy */}
          <div style={styles.policyBlock}>
            <div style={styles.blockHeader}>
              <Building2 size={20} color="#0ea5e9" />
              <h2 style={styles.h2}>Application of this Policy</h2>
            </div>
            <div style={styles.simpleText}>
              <p>
                For the purposes of applicable state and/or international data
                protection laws, the respective{" "}
                <span style={styles.highlightBlue}>RIM Global Entity</span> with
                whom you have registered is the{" "}
                <span style={styles.highlightGreen}>“controller”</span> of
                personal information collected through www.rimglobal.trade,
                other RIM Global group entities' websites, widgets, mobile
                applications (including the RIM Global Money App) and other
                platforms (together the{" "}
                <span style={styles.highlightGreen}>“Site”</span>), and is the
                company to contact if you have questions about the use of your
                personal information (see the{" "}
                <span style={styles.highlightBlue}>“Contact Us”</span> section
                below). The Policy also applies to personal data about each
                authorized representative of a client and about other persons or
                entities where this personal data is collected in the course of
                providing the Services (such as directors of corporate clients).
              </p>
            </div>
          </div>

          {/* When You Contact Us section */}
          <div style={styles.policyBlock}>
            <div style={styles.blockHeader}>
              <PhoneCall size={20} color="#0ea5e9" />
              <h2 style={styles.h2}>When You Contact Us</h2>
            </div>
            <div style={styles.simpleText}>
              <p>
                If you contact us by telephone, email, post or use another
                function offered by RIM Global, such as the chat feature, we
                will collect any information about the communication and any
                additional information that you choose to give us. We will use
                this information to review, investigate and respond to any
                comment or question that you may raise.
              </p>
              <p>
                <span style={styles.highlightGreen}>Please note:</span> we
                record and retain all telephone calls and other communication
                with us and may use it in our dealings with you, including any
                dispute resolution or legal proceedings.
              </p>
            </div>
          </div>

          {/* Data Processing & Your Rights */}
          <div style={styles.policyBlock}>
            <div style={styles.blockHeader}>
              <Database size={20} color="#0ea5e9" />
              <h2 style={styles.h2}>Data Processing & Your Rights</h2>
            </div>
            <div style={styles.simpleText}>
              <p>
                As part of the Services, the RIM Global Entity processes
                personal data to operate the social trading platform, digital
                asset exchange, RIM Global Money App, and to comply with
                regulatory obligations (including KYC, AML, fraud prevention).
                We rely on legitimate interests, contractual necessity, and
                legal requirements. You may have rights to access, rectify, or
                erase your personal data under applicable laws. For any
                requests, contact us using the details below.
              </p>
            </div>
          </div>

          {/* Contact info simple line */}
          <div style={styles.contactLine}>
            <Mail size={20} color="#2dd4bf" />
            <span style={styles.contactText}>
              Questions about personal information or this Policy?
            </span>
            <a
              href="#"
              style={styles.contactEmail}
              onClick={(e) => e.preventDefault()}
            >
              privacy@rimglobal.trade
            </a>
            <MessageSquare size={18} color="#0ea5e9" />
            <span style={styles.supportText}>support chat available</span>
          </div>

          {/* footer legal note */}
          <div style={styles.legalNote}>
            <Scale size={14} color="#6f8fbb" />
            <span>
              © RIM Global — controller details available upon request. This
              Policy forms part of your agreement with the relevant RIM Global
              Entity.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// ============================================
// STYLES - Dark navy blue, blue/green highlights only
// ============================================
const styles = {
  container: {
    background: "#0a0e17",
    fontFamily:
      "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, sans-serif",
    lineHeight: 1.55,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "6rem 1rem",
  },
  privacySection: {
    maxWidth: "1000px",
    width: "100%",
    background: "#0B1120",
    borderRadius: "1.5rem",
    padding: "2.5rem 2rem",
    boxShadow: "0 20px 35px -12px rgba(0, 0, 0, 0.4)",
  },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "1.5rem",
    borderBottom: "2px solid #2dd4bf",
    paddingBottom: "0.75rem",
  },
  iconWrap: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: "2rem",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    color: "white",
    margin: 0,
  },
  h2: {
    fontSize: "1.3rem",
    fontWeight: 600,
    color: "#eef4ff",
    margin: 0,
  },
  policyText: {
    color: "#d1e2ff",
    fontSize: "0.95rem",
    marginBottom: "1.5rem",
  },
  highlightGreen: {
    color: "#2dd4bf",
    fontWeight: 500,
  },
  highlightBlue: {
    color: "#5bc0ff",
    fontWeight: 500,
  },
  servicesList: {
    margin: "1.25rem 0 1.5rem 0",
    background: "rgba(45, 212, 191, 0.03)",
    borderLeft: "3px solid #2dd4bf",
    padding: "0.75rem 0 0.75rem 1rem",
  },
  serviceItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.7rem",
    marginBottom: "0.9rem",
    color: "#cae0ff",
    fontSize: "0.92rem",
  },
  serviceIcon: {
    flexShrink: 0,
    marginTop: "0.1rem",
  },
  policyBlock: {
    marginTop: "1.8rem",
    borderTop: "1px solid rgba(45, 212, 191, 0.2)",
    paddingTop: "1.5rem",
  },
  blockHeader: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    marginBottom: "1rem",
  },
  simpleText: {
    color: "#c6daff",
    fontSize: "0.94rem",
    lineHeight: 1.6,
  },
  contactLine: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    flexWrap: "wrap",
    background: "rgba(14, 165, 233, 0.05)",
    padding: "0.8rem 1rem",
    borderRadius: "0.75rem",
    margin: "1.8rem 0 0.5rem",
    border: "1px solid rgba(45, 212, 191, 0.25)",
  },
  contactText: {
    color: "#cfe3ff",
  },
  contactEmail: {
    color: "#5ee0fa",
    textDecoration: "none",
    fontWeight: 500,
    borderBottom: "1px dotted #2dd4bf",
    cursor: "pointer",
  },
  supportText: {
    fontSize: "0.85rem",
    color: "#cfe3ff",
  },
  legalNote: {
    marginTop: "2rem",
    fontSize: "0.7rem",
    textAlign: "center",
    color: "#6f8fbb",
    borderTop: "1px solid rgba(45, 212, 191, 0.2)",
    paddingTop: "1.2rem",
    display: "flex",
    justifyContent: "center",
    gap: "0.4rem",
    alignItems: "center",
  },
};
export default PrivacyPolicy;
