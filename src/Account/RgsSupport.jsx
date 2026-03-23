import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./RgsSupport.css";

export default function RgsSupport() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 30,
      duration: 700,
      easing: "ease-out-cubic",
    });

    const section = sectionRef.current;
    const bgMesh = bgRef.current;

    const moveHandler = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      bgMesh.style.background = `radial-gradient(ellipse at ${
        x * 100
      }% ${y * 70}%, rgba(51, 209, 122, 0.12), transparent 65%),
      radial-gradient(ellipse at ${100 - x * 70}% ${
        100 - y * 60
      }%, rgba(0, 200, 255, 0.07), transparent 55%)`;
    };

    section.addEventListener("mousemove", moveHandler);
    return () => section.removeEventListener("mousemove", moveHandler);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".rgs_card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", function (e) {
        const ripple = document.createElement("span");

        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.backgroundColor = "rgba(51, 209, 122, 0.2)";
        ripple.style.transform = "scale(0)";
        ripple.style.transition = "transform 0.5s ease, opacity 0.4s";
        ripple.style.pointerEvents = "none";
        ripple.style.zIndex = "1";

        card.style.position = "relative";
        card.style.overflow = "hidden";

        card.appendChild(ripple);

        requestAnimationFrame(() => {
          ripple.style.transform = "scale(1)";
          ripple.style.opacity = "0";
        });

        setTimeout(() => ripple.remove(), 500);
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="rgs_support_section">
      <div ref={bgRef} className="rgs_bg_mesh"></div>

      <div className="rgs_floating rgs_float1"></div>
      <div className="rgs_floating rgs_float2"></div>

      <div className="rgs_container">
        {/* LEFT */}
        <div className="rgs_left" data-aos="fade-right" data-aos-duration="800">
          <div className="rgs_tag">
            <i className="fa-regular fa-life-ring"></i>
            <span>24/7 ELITE SUPPORT · REAL-TIME ASSIST</span>
          </div>

          <h1>
            Anytime Our <span>Team Support</span> Provide
          </h1>

          <p className="rgs_desc">
            At Trade Mastery, greatness is forged through precision tools,
            world-class education, and concierge-level assistance. We empower
            your journey with institutional-grade infrastructure and
            human-centric care — available around the clock.
          </p>

          {/* CARD 1 */}
          <div className="rgs_card" data-aos="fade-up" data-aos-delay="100">
            <div className="rgs_icon">
              <i className="fa-solid fa-bolt-lightning"></i>
            </div>
            <div>
              <h3>
                Lightning <span>Payment Process</span>
                <i className="fa-regular fa-clock rgs_small_icon SMALL"></i>
              </h3>
              <p>
                Experience ultra-fast deposits directly from your Secure Client
                Area...
              </p>
              <div className="rgs_card_meta">
                <span>
                  <i className="fa-regular fa-circle-check"></i> 98% instant
                  approval rate
                </span>
                <span>
                  <i className="fa-regular fa-credit-card"></i> 20+ payment
                  methods
                </span>
                <span>
                  <i className="fa-regular fa-gem"></i> Zero processing fees
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rgs_card" data-aos="fade-up" data-aos-delay="200">
            <div className="rgs_icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <h3>
                Military-Grade <span>Funds Security</span>
                <i className="fa-solid fa-lock rgs_small_icon SMALL"></i>
              </h3>
              <p>
                Your capital is safeguarded in Segregated Client Trust
                Accounts...
              </p>
              <div className="rgs_card_meta">
                <span>
                  <i className="fa-regular fa-building-columns"></i> Tier-1
                  Banks
                </span>
                <span>
                  <i className="fa-regular fa-shield"></i> Lloyd's Insurance
                  Backed
                </span>
                <span>
                  <i className="fa-regular fa-fingerprint"></i> Biometric 2FA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rgs_right" data-aos="fade-left" data-aos-duration="800">
          {/* CARD 3 */}
          <div className="rgs_card" data-aos="fade-up" data-aos-delay="300">
            <div className="rgs_icon">
              <i className="fa-solid fa-chart-line"></i>
            </div>

            <div>
              <h3>
                Zero <span>Transaction Fees</span>
                <i className="fa-regular fa-circle-check SMALL"></i>
              </h3>

              <p>
                <strong>RIM Global charges absolutely zero fees</strong> on
                deposits or withdrawals. While some international intermediaries
                may apply nominal charges, we partner with premium banking
                corridors to minimize costs. Enjoy complete transparency — what
                you see is what you get.
              </p>

              <div className="rgs_card_meta">
                <span>
                  <i className="fa-regular fa-globe"></i> 150+ countries covered
                </span>
                <span>
                  <i className="fa-regular fa-hand-holding-usd"></i> No hidden
                  markups
                </span>
              </div>

              <div className="rgs_stats">
                <span className="rgs_stat">
                  <i className="fa-regular fa-chart-simple"></i>
                  Avg. transfer: 0.3% (external)
                </span>

                <span className="rgs_stat">
                  <i className="fa-regular fa-clock"></i>
                  Same-day processing
                </span>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="rgs_card" data-aos="fade-up" data-aos-delay="400">
            <div className="rgs_icon">
              <i className="fa-solid fa-handshake"></i>
            </div>

            <div>
              <h3>
                Strict <span>Third-Party Protection</span>
                <i className="fa-solid fa-scale-balanced SMALL"></i>
              </h3>

              <p>
                To ensure regulatory excellence and maximum account security,
                <strong>
                  {" "}
                  RIM Global does not accept third-party payments
                </strong>
                . All deposits must originate from a verified account in your
                legal name. Joint accounts are welcome when you're listed as a
                primary holder — protecting your assets is our highest mandate.
              </p>

              <div className="rgs_card_meta">
                <span>
                  <i className="fa-regular fa-file-shield"></i> FCA / CySEC
                  aligned
                </span>
                <span>
                  <i className="fa-regular fa-user-check"></i> Identity
                  verification required
                </span>
              </div>

              <div className="rgs_stats">
                <span className="rgs_stat">
                  <i className="fa-regular fa-building-columns"></i>
                  Segregated accounts
                </span>

                <span className="rgs_stat">
                  <i className="fa-regular fa-hourglass-half"></i>
                  Fast KYC (≤ 2h)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
