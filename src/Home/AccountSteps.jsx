import React, { useEffect, useRef } from "react";
import "./AccountSteps.css";
import accountImg from "../assets/AccountSteps2.png";
import {
  FaFileLines,
  FaUserCheck,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa6";

const stepsData = [
  {
    name: "REGISTER",
    icon: <FaFileLines />,
    text: "Choose An Account And Complete Our Fast And Easy Application Form",
  },
  {
    name: "VERIFY",
    icon: <FaUserCheck />,
    text: "Use Our Digital Onboarding System For Fast Verification",
  },
  {
    name: "FUND",
    icon: <FaDollarSign />,
    text: "Open Trading Account Using A Wide Range Of Funding Methods",
  },
  {
    name: "TRADE",
    icon: <FaChartLine />,
    text: "Start Trading On Your Live Account And Access +1100 Instruments",
  },
];

export default function AccountSteps() {
  const stepsRef = useRef(null);

  useEffect(() => {
    const container = stepsRef.current;
    if (!container) return;

    const steps = container.querySelectorAll(".step");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add("reveal-step");
              }, index * 120);
            });
            observer.unobserve(container);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20px 0px" },
    );

    observer.observe(container);

    // fallback
    if (container.getBoundingClientRect().top < window.innerHeight - 100) {
      setTimeout(() => {
        steps.forEach((step, idx) => {
          setTimeout(() => {
            step.classList.add("reveal-step");
          }, idx * 120);
        });
      }, 200);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="account-section">
      <div className="account-container">
        {/* LEFT */}
        <div className="account-left">
          <span className="account-tag">ACCOUNT OPENING</span>

          <h2>
            Open An Account <br />
            In - <span>4 Simple Steps</span>
          </h2>

          <p>Instant account opening & funding. Trade within minutes!</p>

          <div className="steps" ref={stepsRef}>
            {stepsData.map((step, index) => (
              <div className="step" key={index}>
                <div className="step-name">{step.name}</div>

                <div className="step-center">
                  <div className="step-icon">{step.icon}</div>
                </div>

                <div className="step-text">{step.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="account-right">
          <img src={accountImg} alt="financial district" />
        </div>
      </div>
    </section>
  );
}
