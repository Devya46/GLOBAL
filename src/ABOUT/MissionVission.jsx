import React from "react";

const MissionVisionPage = () => {
  return (
    <div className="global-container">
      {/* background image exactly as required: aboutbg.png on top of dark navy blue, full width */}
      <img
        className="bg-texture"
        src="https://tradersklub.com/wp-content/uploads/2026/03/aboutbg.png"
        alt="global markets texture"
        loading="eager"
      />

      <div className="content-wrapper">
        {/* heading */}
        <div className="hero-heading">
          <h1>Mission & Vision</h1>
        </div>

        {/* MISSION SECTION: image on right side, outside text block, full width */}
        <div className="mission-full">
          <div className="section-inner">
            <div className="text-block">
              <div className="section-label">Mission</div>
              <div className="mission-content">
                <p className="lead-statement">
                  To open the global markets, connect you to leading investors
                  and give you the tools you need to grow your knowledge and
                  wealth.
                </p>
                <p>
                  Our mission is to provide comprehensive and reliable trading
                  solutions that cater to the diverse needs of traders.
                </p>
                <p>
                  Through cutting-edge educational content, expert insights, and
                  user-friendly platforms.
                </p>
                <p>
                  We are committed to fostering a trading environment that
                  promotes growth, learning, and sustainable success.
                </p>
                <div className="accent-badge">
                  ⚡ Bridging ambition with opportunity — globally.
                </div>
              </div>
            </div>
            <div className="image-block">
              {/* mission image: Goal.png, placed outside text block on right side */}
              <img
                className="feature-image"
                src="https://tradersklub.com/wp-content/uploads/2026/03/Goal.png"
                alt="Mission Goal - Global Trading Target"
              />
            </div>
          </div>
        </div>

        {/* subtle divider for elegance */}
        <div className="divider-glow"></div>

        {/* VISION SECTION: image on left side, outside text block, full width */}
        <div className="vision-full">
          <div className="section-inner">
            <div className="image-block-bulb">
              {/* vision image: bulb.png, placed outside text block on left side */}
              <img
                className="feature-image-bulb"
                src="https://tradersklub.com/wp-content/uploads/2026/03/bulb.png"
                alt="Vision Bulb - Bright Ideas & Future"
              />
            </div>
            <div className="text-block">
              <div className="section-label">Vision</div>
              <div className="vision-content">
                <p className="lead-statement">
                  Be a successful trading, lean, flexible and capable of
                  providing total integrated services to the customers in the
                  changing environment.
                </p>
                <ul className="vision-list">
                  <li>
                    Empower traders of all levels with the knowledge & tools
                    they need to navigate the world of financial markets
                    successfully.
                  </li>
                  <li>
                    We envision a global community of informed and confident
                    traders who can make well-informed decisions.
                  </li>
                  <li>
                    Achieve their financial goals, and thrive in the
                    ever-changing landscape of trading.
                  </li>
                </ul>
                <div className="accent-badge">
                  💡 Illuminating the path to financial mastery & sustainable
                  growth.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #020617;
          font-family:
            "Inter",
            "Poppins",
            system-ui,
            -apple-system,
            "Segoe UI",
            "Roboto",
            sans-serif;
          line-height: 1.5;
          min-height: 100vh;
        }

        /* main container - full width, dark navy blue background */
        .global-container {
          width: 100%;
          background: #0a0f1f;
          position: relative;
          overflow-x: clip;
        }

        /* background overlay image (aboutbg.png) on top of navy - full width */
        .bg-texture {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.28;
          pointer-events: none;
          z-index: 0;
          mix-blend-mode: overlay;
        }

        /* content wrapper - 100% width, no inner constraints */
        .content-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 100%;
          padding: 0;
          overflow: visible;
        }

        /* heading section with full width background */
        .hero-heading {
          text-align: center;
          padding: 4rem 2rem 3rem 2rem;
          background: linear-gradient(
            180deg,
            rgba(10, 15, 31, 0.95) 0%,
            rgba(10, 15, 31, 0.85) 100%
          );
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
        }

        .hero-heading h1 {
          font-size: 4.2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff, #b9d5ff, #7cabff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
          animation: titleFloat 0.8s ease-out;
        }

        .hero-heading h1::after {
          content: "";
          display: block;
          width: 120px;
          height: 5px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd);
          margin: 1.2rem auto 0;
          border-radius: 4px;
        }

        /* mission & vision sections - each full width, images outside text blocks */
        .mission-full,
        .vision-full {
          width: 100%;
          position: relative;
          padding: 2rem 2rem;
        }

        /* alternating subtle background for depth */
        .mission-full {
          background: radial-gradient(
            circle at 0% 30%,
            rgba(59, 130, 246, 0.03),
            transparent 70%
          );
        }
        .vision-full {
          background: radial-gradient(
            circle at 100% 30%,
            rgba(96, 165, 250, 0.03),
            transparent 70%
          );
        }

        /* inner container for content alignment - but images can extend */
        .section-inner {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 4rem;
          position: relative;
        }

        /* text block styling */
        .text-block {
          flex: 1.2;
          padding: 1rem;
        }

        /* image block styling - separate from text block */
        .image-block {
          flex: 0.9;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .image-block-bulb {
          flex: 0.9;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translateY(-8%) rotate(-32deg);
        }

        /* big realistic images */
        .feature-image {
          width: 104%;
          margin-left: 332px;
          margin-top: 163px;
          max-width: 588px;
          height: auto;
          filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.5));
          transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          animation: gentleFloat 4s infinite alternate ease-in-out;
        }
        .feature-image-bulb {
          width: 100%;
          transform: translateX(-125px);
          overflow: hidden;
          margin-top: auto;
          max-width: 588px;
          height: auto;
          filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.5));
          transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .mission-full:hover .feature-image,
        .vision-full:hover .feature-image-bulb {
          transform: scale(1.03);
          filter: drop-shadow(0 28px 40px rgba(59, 130, 246, 0.3));
        }
        .vision-full:hover .feature-image-bulb {
          transform: translateX(-125px) scale(1.03);
        }

        /* section titles */
        .section-label {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(120deg, #ffffff, #aac9ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1.5rem;
          display: inline-block;
          letter-spacing: -0.01em;
          border-left: 5px solid #3b82f6;
          padding-left: 1.2rem;
        }

        /* content typography */
        .mission-content p,
        .vision-content p {
          color: #e9f0ff;
          font-size: 1.08rem;
          line-height: 1.65;
          margin-bottom: 1.2rem;
        }

        .lead-statement {
          font-weight: 700;
          font-size: 1.2rem;
          color: #ffffff;
          background: linear-gradient(
            90deg,
            rgba(59, 130, 246, 0.2),
            transparent
          );
          padding: 0.75rem 1rem;
          border-radius: 1rem;
          margin: 1rem 0 1.2rem 0;
          border-left: 3px solid #60a5fa;
        }

        .vision-list {
          list-style: none;
          margin-top: 0.8rem;
        }

        .vision-list li {
          color: #e9f0ff;
          margin-bottom: 1rem;
          padding-left: 1.8rem;
          position: relative;
          font-size: 1.05rem;
          line-height: 1.5;
        }

        .vision-list li::before {
          content: "✦";
          position: absolute;
          left: 0;
          color: #60a5fa;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .accent-badge {
          margin-top: 1.2rem;
          display: inline-block;
          background: rgba(59, 130, 246, 0.18);
          backdrop-filter: blur(4px);
          padding: 0.5rem 1.2rem;
          border-radius: 2rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: #bbd6ff;
          border: 1px solid rgba(96, 165, 250, 0.3);
        }

        /* mission layout: image on right side */
        .mission-full .section-inner {
          flex-direction: row;
        }
        .mission-full .image-block {
          order: 2;
        }
        .mission-full .text-block {
          order: 1;
          background: #0b0b724d;
          border-radius: 10px;
          padding: 30px 41px 40px 101px;
          margin: 10px -50px;
          margin-right: -472px;
        }

        /* vision layout: image on left side */
        .vision-full .section-inner {
          flex-direction: row;
        }
        .vision-full .image-block-bulb {
          order: 1;
        }
        .vision-full .text-block {
          order: 2;
          background: #0b0b724d;
          border-radius: 10px;
          padding: 27px 72px 40px 82px;
          margin: 10px -50px;
          margin-left: -400px;
        }

        /* ===== RESPONSIVE STYLES - Mobile & Tablet (no changes to desktop) ===== */
        @media (max-width: 1100px) {
          .feature-image {
            margin-left: 200px;
            margin-top: 100px;
            max-width: 420px;
          }
          .feature-image-bulb {
            transform: translateX(-80px);
            max-width: 420px;
          }
          .vision-full:hover .feature-image-bulb {
            transform: translateX(-80px) scale(1.03);
          }
          .mission-full .text-block {
            padding: 25px 35px 35px 70px;
            margin-right: -300px;
          }
          .vision-full .text-block {
            padding: 25px 50px 35px 60px;
            margin-left: -280px;
          }
        }

        @media (max-width: 950px) {
          .hero-heading h1 {
            font-size: 3rem;
          }
          .section-label {
            font-size: 2.4rem;
          }
          .feature-image {
            margin-left: 120px;
            margin-top: 60px;
            max-width: 340px;
          }
          .feature-image-bulb {
            transform: translateX(-50px);
            max-width: 340px;
          }
          .vision-full:hover .feature-image-bulb {
            transform: translateX(-50px) scale(1.03);
          }
          .mission-full .text-block {
            padding: 20px 30px 30px 50px;
            margin-right: -200px;
          }
          .vision-full .text-block {
            padding: 20px 40px 30px 50px;
            margin-left: -180px;
          }
          .mission-content p,
          .vision-content p,
          .vision-list li {
            font-size: 0.95rem;
          }
          .lead-statement {
            font-size: 1rem;
          }
        }

        /* Mobile breakpoint - switches to column layout */
        @media (max-width: 768px) {
          .hero-heading {
            padding: 2.5rem 1rem 2rem 1rem;
          }
          .hero-heading h1 {
            font-size: 2.2rem;
          }
          .hero-heading h1::after {
            width: 80px;
            height: 3px;
            margin: 0.8rem auto 0;
          }

          .mission-full,
          .vision-full {
            padding: 1.5rem 1rem;
          }

          /* Stack both sections vertically */
          .mission-full .section-inner,
          .vision-full .section-inner {
            flex-direction: column;
            gap: 1.5rem;
          }

          /* Reset image positioning for mobile */
          .feature-image {
            margin-left: 0;
            margin-top: 0;
            max-width: 260px;
            width: 100%;
          }
          .feature-image-bulb {
            transform: translateX(0) rotate(-15deg);
            max-width: 240px;
            width: 100%;
          }
          .vision-full:hover .feature-image-bulb {
            transform: translateX(0) rotate(-15deg) scale(1.03);
          }

          /* Reset text block margins and ordering */
          .mission-full .text-block,
          .vision-full .text-block {
            order: 2;
            margin: 0;
            padding: 1.5rem;
            background: rgba(11, 11, 114, 0.3);
            border-radius: 16px;
            width: 100%;
          }

          .mission-full .image-block,
          .vision-full .image-block-bulb {
            order: 1;
            margin: 0 auto;
          }

          /* Center section label for mobile */
          .section-label {
            font-size: 1.8rem;
            text-align: center;
            border-left: none;
            border-bottom: 3px solid #3b82f6;
            padding-left: 0;
            padding-bottom: 0.5rem;
            display: block;
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
          }

          .lead-statement {
            text-align: left;
            font-size: 0.95rem;
            padding: 0.6rem 0.8rem;
          }

          .vision-list li {
            text-align: left;
            font-size: 0.9rem;
            padding-left: 1.5rem;
          }

          .mission-content p,
          .vision-content p {
            font-size: 0.9rem;
          }

          .accent-badge {
            font-size: 0.8rem;
            display: block;
            text-align: center;
          }

          .divider-glow {
            width: 90%;
          }

          /* Adjust animation for smoother mobile */
          .feature-image,
          .feature-image-bulb {
            animation: gentleFloatMobile 3s infinite alternate ease-in-out;
          }
        }

        /* Small mobile devices */
        @media (max-width: 480px) {
          .hero-heading h1 {
            font-size: 1.8rem;
          }
          .section-label {
            font-size: 1.5rem;
          }
          .mission-full .text-block,
          .vision-full .text-block {
            padding: 1.2rem;
          }
          .lead-statement {
            font-size: 0.85rem;
          }
          .mission-content p,
          .vision-content p,
          .vision-list li {
            font-size: 0.85rem;
          }
          .accent-badge {
            font-size: 0.75rem;
            padding: 0.4rem 0.8rem;
          }
          .feature-image {
            max-width: 200px;
          }
          .feature-image-bulb {
            max-width: 180px;
          }
          .vision-list li {
            padding-left: 1.2rem;
          }
          .vision-list li::before {
            font-size: 1rem;
          }
        }

        /* animations */
        @keyframes titleFloat {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gentleFloat {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-8px);
          }
        }

        @keyframes gentleFloatMobile {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-5px);
          }
        }

        /* fade-in on scroll */
        .mission-full,
        .vision-full {
          animation: sectionReveal 0.7s ease-out forwards;
        }

        @keyframes sectionReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* decorative divider */
        .divider-glow {
          width: 80%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #3b82f6,
            #60a5fa,
            #3b82f6,
            transparent
          );
          margin: 0 auto;
        }

        /* overall smoothness */
        .global-container {
          animation: bgFade 0.5s ease;
        }
        @keyframes bgFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export { MissionVisionPage };
export default MissionVisionPage;
