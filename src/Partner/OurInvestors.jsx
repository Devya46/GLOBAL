import React, { useState, useEffect, useRef } from "react";
import "./OurInvestors.css";

const InvestorsShowcase = () => {
  const investors = [
    {
      id: 1,
      name: "Joe A. Logan",
      role: "Fin Investor",
      image:
        "https://tradersklub.com/wp-content/uploads/2026/03/investor-1.png",
    },
    {
      id: 2,
      name: "Reva Turner",
      role: "Tech-Investor",
      image: "https://tradersklub.com/wp-content/uploads/2026/03/Reva.png",
    },
    {
      id: 3,
      name: "Karon J. Marsh",
      role: "Fin-Fin Investor",
      image: "https://tradersklub.com/wp-content/uploads/2026/03/Karon.png",
    },
    {
      id: 4,
      name: "Sam A. Helton",
      role: "Main Investor",
      image: "https://tradersklub.com/wp-content/uploads/2026/03/Sam.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  // Check screen size for mobile/tablet view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      if (window.innerWidth > 900) {
        setCurrentIndex(0);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextInvestor = () => {
    if (isAnimating || !isMobile) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % investors.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevInvestor = () => {
    if (isAnimating || !isMobile) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + investors.length) % investors.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isMobile) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextInvestor();
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevInvestor();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Auto-slide every 5 seconds (only on mobile/tablet)
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      nextInvestor();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isMobile]);

  return (
    <section className="investors-showcase">
      <div className="showcase-bg-overlay"></div>
      <div className="showcase-container">
        <div className="showcase-header">
          <span className="showcase-badge">RIM GLOBAL INVESTORS</span>
          <h2 className="showcase-title">
            Our <span className="highlight">Investors</span>
          </h2>
          <p className="showcase-description">
            Backed by industry leaders shaping the future of global trading
          </p>
        </div>

        {/* Desktop Grid View */}
        {!isMobile && (
          <div className="investors-grid">
            {investors.map((investor, index) => (
              <div
                key={investor.id}
                className="investor-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="investor-image-wrapper">
                  <img
                    src={investor.image}
                    alt={investor.name}
                    className="investor-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%232d2d4a"/><text x="50" y="67" text-anchor="middle" fill="%2360ce80" font-size="40">👤</text></svg>';
                    }}
                  />
                  <div className="investor-overlay">
                    <div className="status-badge">Active</div>
                  </div>
                </div>
                <div className="investor-info">
                  <h3 className="investor-name">{investor.name}</h3>
                  <p className="investor-role">{investor.role}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile/Tablet Carousel View */}
        {isMobile && (
          <>
            <div className="investors-carousel">
              <button
                className="carousel-nav carousel-prev"
                onClick={prevInvestor}
                aria-label="Previous investor"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className="carousel-viewport"
                ref={carouselRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className={`carousel-track ${isAnimating ? "animating" : ""}`}
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {investors.map((investor) => (
                    <div key={investor.id} className="carousel-slide">
                      <div className="investor-card">
                        <div className="investor-image-wrapper">
                          <img
                            src={investor.image}
                            alt={investor.name}
                            className="investor-image"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%232d2d4a"/><text x="50" y="67" text-anchor="middle" fill="%2360ce80" font-size="40">👤</text></svg>';
                            }}
                          />
                          <div className="investor-overlay">
                            <div className="status-badge">Active</div>
                          </div>
                        </div>
                        <div className="investor-info">
                          <h3 className="investor-name">{investor.name}</h3>
                          <p className="investor-role">{investor.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="carousel-nav carousel-next"
                onClick={nextInvestor}
                aria-label="Next investor"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="carousel-dots">
              {investors.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  aria-label={`Go to investor ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default InvestorsShowcase;
