import React, { useEffect, useRef } from "react";
import "./AccountSecurity.css";

export default function AccountSecurity() {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) contentRef.current.style.opacity = "1";
    if (imageRef.current) imageRef.current.style.opacity = "1";
  }, []);

  return (
    <>
      {/* Security Section */}
      <section className="security-section">
        <div className="security-container">
          {/* LEFT CONTENT */}
          <div className="security-content" ref={contentRef}>
            <h1>
              <span className="green">Guide</span> To Account Security
            </h1>

            <h3>Avoiding and Reporting Scams</h3>

            <p>
              Here, at RIM Global, security for our clients is a top priority.
              Our goal is to provide you with a secure online space where you
              can feel safe to invest, transact, and connect within our
              community.
            </p>

            <p>
              The nature of the Internet, however, does require some extra
              caution whenever engaging online. In order to help you avoid
              falling prey to phishing attempts, investment scams, and other
              risks, we have put together this guide. In addition, if you are
              ever in doubt as to whether a communication is from us or witness
              any other suspicious activity on the RIM Global platform, please
              do not hesitate to contact us.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="security-image" ref={imageRef}>
            <img
              src="https://tradersklub.com/wp-content/uploads/2026/03/GroupAccountSecurity.png"
              alt="Security Map"
            />
          </div>
        </div>
      </section>
    </>
  );
}
