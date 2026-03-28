import React, { useEffect, useRef, useState } from "react";
import "./BlogSlider.css";

export default function BlogSlider() {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartTranslate, setDragStartTranslate] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const gap = 24;

  const cards = [
    {
      id: "top-forex-strategies-2026",
      img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80&auto=format&fit=crop",
      title: "Top Forex Strategies 2026",
      desc: "Adaptive algorithms & macro shifts — new playbook for volatile pairs.",
      date: "2026-02-10",
      slug: "TopForexTrading",
    },
    {
      id: "forex-deep-analysis",
      img: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&q=80&auto=format&fit=crop",
      title: "Forex Deep Analysis",
      desc: "Beyond indicators: order flow, sentiment & central bank narratives.",
      date: "2026-02-05",
      slug: "MarketAnalysis",
    },
    {
      id: "macro-drivers-2026",
      img: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=400&q=80&auto=format&fit=crop",
      title: "2026 Macro Drivers",
      desc: "Rate divergence, commodity flows & election impacts on majors.",
      date: "2026-01-28",
      slug: "DriveMarket",
    },
    {
      id: "is-forex-still-profitable",
      img: "https://images.unsplash.com/photo-1707902665498-a202981fb5ac?q=80&w=1170&auto=format&fit=crop",
      title: "Is Forex Still Profitable?",
      desc: "Retail edge: automation & discipline matter more than ever.",
      date: "2026-01-20",
      slug: "Profitable",
    },
    {
      id: "choose-right-broker",
      img: "https://images.unsplash.com/photo-1724482606633-fa74fe4f5de1?q=80&w=1170&auto=format&fit=crop",
      title: "Choose the Right Broker",
      desc: "Spreads, execution, regulation — what really counts in 2026.",
      date: "2026-01-15",
      slug: "BestBroker",
    },
    {
      id: "risk-first-always",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80&auto=format&fit=crop",
      title: "Risk First, Always",
      desc: "Position sizing, correlation & drawdown control — the real edge.",
      date: "2026-01-08",
      slug: "RiskManagement",
    },
  ];

  const handleCardClick = (slug, e) => {
    // Don't navigate if this was a drag/swipe
    if (hasMoved) {
      e?.stopPropagation();
      return;
    }

    // Navigate to blog page
    window.location.href = `/BLOG/${slug}`;
  };

  const updateMetrics = () => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;

    if (!track || !wrapper) return;

    const firstCard = track.children[0];
    if (!firstCard) return;

    const width = firstCard.offsetWidth + gap;
    setCardWidth(width);

    const max = track.scrollWidth - wrapper.offsetWidth;
    setMaxScroll(max > 0 ? max : 0);
  };

  const getTranslateX = () => {
    let target = currentIndex * cardWidth;
    if (target > maxScroll) target = maxScroll;
    if (target < 0) target = 0;
    return target;
  };

  const next = () => {
    if (currentIndex * cardWidth >= maxScroll) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex <= 0) {
      const maxIndex = Math.ceil(maxScroll / cardWidth);
      setCurrentIndex(maxIndex > 0 ? maxIndex : 0);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Drag handlers
  const handleDragStart = (e) => {
    // Only start drag on slider wrapper, not on buttons or links
    if (e.target.closest("button") || e.target.closest(".arrow")) {
      return;
    }

    setIsDragging(true);
    setHasMoved(false);
    const startX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
    setDragStartX(startX);
    setDragStartTranslate(getTranslateX());
    setDragOffset(0);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    const currentX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
    const diff = currentX - dragStartX;

    // Mark as moved if drag distance is significant
    if (Math.abs(diff) > 5) {
      setHasMoved(true);
    }

    const newOffset = dragStartTranslate - diff;
    setDragOffset(diff);

    // Apply temporary transform during drag
    if (trackRef.current) {
      let newTranslate = newOffset;
      if (newTranslate > maxScroll) newTranslate = maxScroll;
      if (newTranslate < 0) newTranslate = 0;
      trackRef.current.style.transform = `translateX(-${newTranslate}px)`;
      trackRef.current.style.transition = "none";
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Calculate new index based on drag distance
    const dragDistance = Math.abs(dragOffset);
    if (dragDistance > 50) {
      if (dragOffset > 0) {
        // Swipe left -> next
        next();
      } else if (dragOffset < 0) {
        // Swipe right -> prev
        prev();
      }
    }

    // Reset track transition and position
    if (trackRef.current) {
      trackRef.current.style.transition = "";
      trackRef.current.style.transform = `translateX(-${getTranslateX()}px)`;
    }
    setDragOffset(0);

    // Reset moved flag after a short delay
    setTimeout(() => {
      setHasMoved(false);
    }, 100);
  };

  useEffect(() => {
    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, []);

  useEffect(() => {
    // Update track position when index changes
    if (trackRef.current && !isDragging) {
      trackRef.current.style.transform = `translateX(-${getTranslateX()}px)`;
    }
  }, [currentIndex, cardWidth, maxScroll, isDragging]);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, next]);

  // Add/remove drag event listeners
  useEffect(() => {
    const handleMouseMove = (e) => handleDragMove(e);
    const handleMouseUp = () => handleDragEnd();
    const handleTouchMove = (e) => handleDragMove(e);
    const handleTouchEnd = () => handleDragEnd();

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, dragStartX, dragStartTranslate, dragOffset, hasMoved]);

  return (
    <section className="blog-section-wrapper">
      <div className="blog-section">
        <div className="blog-left">
          <span className="blog-label">BLOGS</span>
          <h2 className="blog-title">
            <span className="green">Forex &</span>
            <br />
            <span className="green">Markets</span>
            <br />
            <span className="sky">Learning Hub</span>
          </h2>
        </div>

        <div className="blog-slider">
          <button
            className="slider-arrow arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className="slider-arrow arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className="slider-wrapper"
            ref={wrapperRef}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            <div
              className="blog-track"
              ref={trackRef}
              style={{
                transform: `translateX(-${getTranslateX()}px)`,
                cursor: isDragging ? "grabbing" : "grab",
                transition: isDragging ? "none" : "transform 0.3s ease-out",
              }}
            >
              {cards.map((card, i) => (
                <a
                  className="blog-card"
                  key={card.id}
                  href={`/BLOG/${card.slug}`}
                  onClick={(e) => {
                    if (hasMoved) {
                      e.preventDefault();
                      e.stopPropagation();
                    }
                  }}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  <img src={card.img} alt={card.title} loading="lazy" />
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <div className="card-footer">
                    <span>{card.date}</span>
                    <div className="arrow">↗</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Pagination indicators */}
          <div className="slider-pagination">
            {cards.map((_, idx) => (
              <button
                key={idx}
                className={`pagination-dot ${Math.round(getTranslateX() / cardWidth) === idx ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
