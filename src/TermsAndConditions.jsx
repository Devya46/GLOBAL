import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  FileText,
  Copyright,
  ExternalLink,
  AlertTriangle,
  Shield,
  Scale,
  Gavel,
  Globe,
  Lock,
  BookOpen,
  CheckCircle,
  XCircle,
} from "lucide-react";

export function TermsAndConditions() {
  return (
    <>
      <Header />
      <div style={styles.container}>
        <div style={styles.termsSection}>
          {/* main header */}
          <div style={styles.sectionTitle}>
            <div style={styles.iconWrap}>
              <FileText size={28} color="#2dd4bf" strokeWidth={1.8} />
            </div>
            <h1 style={styles.h1}>Terms & Conditions</h1>
          </div>

          <div style={styles.subtitle}>
            <p>Website terms of use — Last updated: March 2026</p>
          </div>

          {/* 1. Website Terms of Use */}
          <div style={styles.termsBlock}>
            <div style={styles.blockHeader}>
              <Copyright size={20} color="#0ea5e9" />
              <h2 style={styles.h2}>Website Terms of Use</h2>
            </div>
            <div style={styles.simpleText}>
              <p>
                This website and the copyright in all text, graphics, images,
                software and any other materials on this website is owned by RIM
                Global Ltd (<span style={styles.highlightGreen}>'RIM'</span>) or
                its licensors. You may only use the materials on this website
                solely for your own personal use and non-commercial purposes.
              </p>
              <p>
                You may display on a computer screen or print extracts from this
                website for the above-stated purpose only and without
                alteration, addition or deletion. Except as expressly stated
                herein, you may not without RIM Global's prior written
                permission alter, modify, reproduce, distribute or commercially
                exploit any materials from the website.
              </p>
              <p>
                You acknowledge that{" "}
                <span style={styles.highlightGreen}>'RIM Global'</span> and the
                RIM Global logo are trademarks of RIM Global Ltd. You may
                reproduce such trademarks without alteration on material
                downloaded from this website to the extent authorized above, but
                you may not otherwise use, copy, adapt or erase them without RIM
                Global's prior written permission.
              </p>
              <p>
                The names and logos of other companies appearing on this website
                may be the trademarks of third parties and are used by RIM
                Global with the permission of their respective owners.
              </p>
            </div>
          </div>

          {/* 2. Third parties materials and websites */}
          <div style={styles.termsBlock}>
            <div style={styles.blockHeader}>
              <Globe size={20} color="#0ea5e9" />
              <h2 style={styles.h2}>Third Parties Materials and Websites</h2>
            </div>
            <div style={styles.simpleText}>
              <p>
                This website may contain materials produced by third parties or
                links to other websites. Such materials and websites are
                provided by third parties and are not under RIM Global's direct
                control and RIM Global accepts no responsibility or liability in
                respect of any such third party materials or for the operation
                or content of other websites (whether or not linked to this
                website). You acknowledge that RIM Global shall be entitled to
                require you to remove any link from another website to this
                website which you install without obtaining RIM Global's prior
                written consent.
              </p>
            </div>
          </div>

          {/* 3. RIM Global's liability */}
          <div style={styles.termsBlock}>
            <div style={styles.blockHeader}>
              <AlertTriangle size={20} color="#0ea5e9" />
              <h2 style={styles.h2}>RIM Global's Liability</h2>
            </div>
            <div style={styles.simpleText}>
              <p>
                Although RIM Global updates the website on a regular basis, it
                does not warrant that the information or materials contained in
                the website are current or accurate or that any of products or
                services featured on the website are available. RIM Global may
                change the materials appearing on this website at any time
                without notice.
              </p>
              <p>
                Save as stated above in respect of the services, this website
                and all software and other materials on this website is provided
                to you on an <span style={styles.highlightGreen}>'as is'</span>{" "}
                and <span style={styles.highlightGreen}>'as available'</span>{" "}
                basis without warranty as to accuracy, timeliness or
                completeness. To the maximum extent permitted by law, all
                representations and warranties, whether express, implied,
                statutory or otherwise, including without limitation any
                warranties or conditions of or related to accuracy, currency,
                merchantability, satisfactory quality or fitness for a
                particular or any purpose are hereby excluded.
              </p>
              <p>
                Except in respect of our liability for fraud and injury or death
                of any person resulting from our negligence, RIM Global shall
                not be liable to you, whether in contract, tort (including
                negligence and breach of statutory duty), strict liability, or
                otherwise for any damage to your computer or computer system or
                settings, loss of data, revenue or profits, or for any indirect,
                special, incidental or consequential damages of any nature
                whatsoever which you may suffer arising out of your use, delay
                in using, or inability to access this website, or in any other
                way connected with this website, including without limitation
                from the downloading of any software from this website. RIM
                Global disclaims any representation or warranty that the website
                or materials will meet your requirements or that the website or
                any software will be uninterrupted, secure or free from errors
                or viruses.
              </p>
            </div>
          </div>

          {/* 4. Indemnity */}
          <div style={styles.termsBlock}>
            <div style={styles.blockHeader}>
              <Shield size={20} color="#0ea5e9" />
              <h2 style={styles.h2}>Indemnity</h2>
            </div>
            <div style={styles.simpleText}>
              <p>
                You agree to indemnify, defend and hold RIM Global, its parents,
                subsidiaries, affiliates, officers and employees harmless from
                any loss, cost, damage, claim or demand, including reasonable
                legal fees, made by any third party or incurred or suffered by
                RIM Global or its parents, subsidiaries, affiliates, officers or
                employees in connection with your use of the website (including
                use of our trading platform via a demo account) in breach of
                these terms of use or negligence.
              </p>
            </div>
          </div>

          {/* 5. Entire agreement */}
          <div style={styles.termsBlock}>
            <div style={styles.blockHeader}>
              <Scale size={20} color="#0ea5e9" />
              <h2 style={styles.h2}>Entire Agreement</h2>
            </div>
            <div style={styles.simpleText}>
              <p>
                These terms of use (and for live account holders the Terms of
                Business) contain the entire agreement between you and us
                relating to your access and use of this website. RIM Global may
                change these terms of use at any time and will notify you of
                such changes by posting an updated version of these terms of use
                on this website. You are responsible for regularly reviewing
                these terms of use and if you use this website (including using
                the trading platform via a demo account) after any such changes
                are published, such use shall constitute your agreement to such
                changes.
              </p>
            </div>
          </div>

          {/* Important Notice Box */}
          <div style={styles.noticeBox}>
            <div style={styles.noticeHeader}>
              <Gavel size={18} color="#2dd4bf" />
              <span style={styles.noticeTitle}>Important Legal Notice</span>
            </div>
            <p style={styles.noticeText}>
              By accessing and using this website, you acknowledge that you have
              read, understood, and agree to be bound by these Terms &
              Conditions. If you do not agree with any part of these terms,
              please do not use this website.
            </p>
          </div>

          {/* Contact info */}
          <div style={styles.contactLine}>
            <BookOpen size={20} color="#2dd4bf" />
            <span style={styles.contactText}>
              Questions about these Terms & Conditions?
            </span>
            <a
              href="#"
              style={styles.contactEmail}
              onClick={(e) => e.preventDefault()}
            >
              legal@rimglobal.trade
            </a>
            <Lock size={18} color="#0ea5e9" />
            <span style={styles.supportText}>legal team available</span>
          </div>

          {/* footer legal note */}
          <div style={styles.legalNote}>
            <CheckCircle size={14} color="#2dd4bf" />
            <span>
              © 2024 RIM Global Ltd — All rights reserved. These Terms &
              Conditions govern your use of our website and services.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// ============================================
// STYLES - Same dark navy blue theme
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
  termsSection: {
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
    marginBottom: "0.75rem",
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
  subtitle: {
    color: "#6f8fbb",
    fontSize: "0.85rem",
    marginBottom: "2rem",
    paddingBottom: "0.5rem",
    borderBottom: "1px solid rgba(45, 212, 191, 0.15)",
  },
  h2: {
    fontSize: "1.3rem",
    fontWeight: 600,
    color: "#eef4ff",
    margin: 0,
  },
  highlightGreen: {
    color: "#2dd4bf",
    fontWeight: 500,
  },
  termsBlock: {
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
  noticeBox: {
    marginTop: "2rem",
    background: "rgba(45, 212, 191, 0.08)",
    borderLeft: "4px solid #2dd4bf",
    padding: "1.2rem 1.5rem",
    borderRadius: "0.75rem",
  },
  noticeHeader: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    marginBottom: "0.75rem",
  },
  noticeTitle: {
    color: "#2dd4bf",
    fontWeight: 600,
    fontSize: "0.95rem",
  },
  noticeText: {
    color: "#c6daff",
    fontSize: "0.9rem",
    lineHeight: 1.6,
    margin: 0,
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
