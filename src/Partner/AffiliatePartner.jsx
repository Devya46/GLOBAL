import React, { useEffect, useRef, useState } from "react";
import "./AffiliatePartner.css";

import {
  FaMicrochip,
  FaHandshake,
  FaGlobe,
  FaGraduationCap,
  FaChartPie,
  FaHeadset,
  FaRocket,
  FaCoins,
  FaBullhorn,
  FaChalkboardUser,
  FaPhone,
  FaChevronLeft,
  FaChevronRight,
  FaCrown,
  FaPercent,
  FaTrophy,
  FaBookOpen,
  FaChartSimple,
  FaBolt,
  FaChartLine,
  FaGem,
  FaLanguage,
  FaDatabase,
  FaPeopleArrows,
} from "react-icons/fa6";

export default function AffiliatePartner() {
  const trackRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const slides = [
    {
      icon: <FaHeadset />,
      title: "Call Center Pro",
      desc: "Own support & marketing teams? RIM Global extends your reach with expert knowledge as a springboard to success — high-intent lead handling & co-marketing.",
      tags: [
        { icon: <FaChartLine />, text: "conversion tools" },
        { icon: null, text: "24/7 campaigns" },
      ],
    },
    {
      icon: <FaDatabase />,
      title: "Lead Gen Boost",
      desc: "Leverage our conversion-focused CRM & data-driven marketing. Lower acquisition cost, real-time dashboards, smart routing for your call center.",
      tags: [
        { icon: <FaDatabase />, text: "smart routing" },
        { icon: <FaChartSimple />, text: "advanced analytics" },
      ],
    },
    {
      icon: <FaPeopleArrows />,
      title: "White Glove Service",
      desc: "Dedicated account managers, custom scripts, multilingual support.",
      tags: [
        { icon: <FaLanguage />, text: "20+ languages" },
        { icon: <FaChartLine />, text: "volume bonuses" },
      ],
    },
    {
      icon: <FaRocket />,
      title: "Springboard Success",
      desc: "Turn your call center into a profit hub with infrastructure & bonuses.",
      tags: [
        { icon: <FaGem />, text: "tiered bonus" },
        { icon: <FaChartLine />, text: "volume incentives" },
      ],
    },
  ];

  useEffect(() => {
    const update = () => {
      const width = trackRef.current?.parentElement?.clientWidth || 500;
      trackRef.current.style.transform = `translateX(-${currentIdx * width}px)`;
    };

    update();

    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slides.length);
    }, 5500);

    window.addEventListener("resize", update);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", update);
    };
  }, [currentIdx]);

  const next = () => setCurrentIdx((p) => (p + 1) % slides.length);
  const prev = () =>
    setCurrentIdx((p) => (p - 1 + slides.length) % slides.length);

  const cards = [
    {
      icon: <FaMicrochip />,
      title: "Service Provider",
      tagline: "Tech innovators",
      desc: "New technology, innovative platform, signal provider — join this unique plan for tech pioneers.",
      badge: (
        <>
          <FaCrown /> Premium revenue share
        </>
      ),
      backTitle: (
        <>
          <FaRocket /> More Benefits
        </>
      ),
      backDesc:
        "Dedicated API access & co-branding opportunities. Early access to liquidity bridges.",
      features: ["API integration", "White-label UI", "Signal provider tools"],
      highlight: (
        <>
          <FaChartLine /> Up to 80% revshare
        </>
      ),
    },
    {
      icon: <FaHandshake />,
      title: "Introducing Broker",
      tagline: "Refer & Earn",
      desc: "Introduce clients, we handle the rest. Generous revenue based on performance & trades.",
      badge: (
        <>
          <FaPercent /> Lifetime revshare
        </>
      ),
      backTitle: (
        <>
          <FaCoins /> IB Privileges
        </>
      ),
      backDesc:
        "Up to 70% commission rebate • Real-time dashboard • Sub-IB tools.",
      features: ["Multi-tier IB", "Daily reports", "Custom spreads"],
      highlight: (
        <>
          <FaChartSimple /> Volume bonuses
        </>
      ),
    },
    {
      icon: <FaGlobe />,
      title: "Online Affiliate",
      tagline: "Digital reach",
      desc: "Promotional materials, expand traffic & refer traders. Highest commissions.",
      badge: (
        <>
          <FaTrophy /> Top-tier CPA
        </>
      ),
      backTitle: (
        <>
          <FaBullhorn /> Affiliate Edge
        </>
      ),
      backDesc:
        "Custom landing pages • CPA & hybrid models • AI creative tools.",
      features: ["Hybrid CPA", "Smart links", "Seasonal promos"],
      highlight: (
        <>
          <FaChartLine /> High-conversion funnels
        </>
      ),
    },
    {
      icon: <FaGraduationCap />,
      title: "Trading Academy",
      tagline: "Empower traders",
      desc: "Focus on education? RIM Global platforms prepare clients confidently.",
      badge: (
        <>
          <FaBookOpen /> Certified partner
        </>
      ),
      backTitle: (
        <>
          <FaChalkboardUser /> Academy Perks
        </>
      ),
      backDesc: "White-label educational hubs • Webinars & certified programs.",
      features: ["LMS integration", "Live trading rooms", "Mentorship tools"],
      highlight: (
        <>
          <FaChartPie /> Recurring income
        </>
      ),
    },
    {
      icon: <FaChartPie />,
      title: "Money Manager",
      tagline: "Multi-Asset Pro",
      desc: "Advanced MAM platform, customize conditions, grow client base.",
      badge: (
        <>
          <FaChartSimple /> Performance bonus
        </>
      ),
      backTitle: (
        <>
          <FaChartLine /> Manager Suite
        </>
      ),
      backDesc: "MAM/PAMM software • flexible leverage & fee structures.",
      features: ["PAMM/MAM", "Allocation models", "Risk management"],
      highlight: (
        <>
          <FaCoins /> Management fee + incentives
        </>
      ),
    },
    {
      icon: <FaHeadset />,
      title: "Call Center",
      tagline: "Outreach experts",
      desc: "Extend your reach with marketing & support infrastructure.",
      badge: (
        <>
          <FaBolt /> Rapid scaling
        </>
      ),
      backTitle: (
        <>
          <FaPhone /> Call Center Boost
        </>
      ),
      backDesc:
        "Co-branded campaigns • CRM integration • multilingual support.",
      features: ["Lead routing", "Analytics suite", "Training modules"],
      highlight: (
        <>
          <FaChartLine /> Higher conversion rates
        </>
      ),
    },
  ];

  return (
    <section className="partnerX-section">
      <div className="partnerX-container">
        <div className="partnerX-header">
          <h2>Affiliate Partner Types</h2>
          <p>Become Our Partner — Flip to discover exclusive benefits</p>
        </div>

        {/* CARDS */}
        <div className="partnerX-grid">
          {cards.map((card, i) => (
            <div key={i} className="partnerX-flip">
              <div className="partnerX-inner">
                <div className="partnerX-front">
                  <div className="partnerX-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <div className="partnerX-tag">{card.tagline}</div>
                  <p>{card.desc}</p>
                  <div className="partnerX-badge">{card.badge}</div>
                </div>

                <div className="partnerX-back">
                  <h4>{card.backTitle}</h4>
                  <p>{card.backDesc}</p>
                  <div className="partnerX-features">
                    {card.features.map((f, idx) => (
                      <span key={idx}>{f}</span>
                    ))}
                  </div>
                  <div className="partnerX-highlight">{card.highlight}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SLIDER */}
        <div className="partnerX-carousel">
          <button onClick={prev}>
            <FaChevronLeft />
          </button>

          <div className="partnerX-track-wrap">
            <div ref={trackRef} className="partnerX-track">
              {slides.map((s, i) => (
                <div key={i} className="partnerX-slide">
                  <div>{s.icon}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <div>
                    {s.tags.map((t, idx) => (
                      <span key={idx}>
                        {t.icon} {t.text}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={next}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
