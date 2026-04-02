import React, { useEffect, useRef, useState, useCallback } from "react";
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
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);
  const [wrapperWidth, setWrapperWidth] = useState(0);

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
    if (hasMoved) {
      e?.stopPropagation();
      return;
    }
    window.location.href = `/BLOG/${slug}`;
  };

  const updateMetrics = useCallback(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    const firstCard = track.children[0];
    if (!firstCard) return;

    const cardFullWidth = firstCard.offsetWidth + gap;
    setCardWidth(cardFullWidth);

    const wrapperWidthValue = wrapper.offsetWidth;
    setWrapperWidth(wrapperWidthValue);

    let newSlidesToShow = 1;
    if (wrapperWidthValue >= 1200) newSlidesToShow = 3;
    else if (wrapperWidthValue >= 900) newSlidesToShow = 2.5;
    else if (wrapperWidthValue >= 768) newSlidesToShow = 2;
    else if (wrapperWidthValue >= 560) newSlidesToShow = 1.2;
    else newSlidesToShow = 1;
    setSlidesToShow(newSlidesToShow);

    // Calculate max scroll based on visible cards
    const totalWidth = cards.length * cardFullWidth;
    let visibleWidth = wrapperWidthValue;

    // For responsive, adjust visible width based on slidesToShow
    if (newSlidesToShow < 2) {
      // When showing 1 card, we want to center it
      visibleWidth = cardFullWidth;
    }

    const max = Math.max(0, totalWidth - visibleWidth);
    setMaxScroll(max);

    // Adjust current index if out of bounds
    const maxIndex = Math.ceil(max / cardFullWidth);
    if (currentIndex > maxIndex && maxIndex >= 0) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [cards.length, gap, currentIndex]);

  const getTranslateX = useCallback(() => {
    let target = currentIndex * cardWidth;

    // For mobile (showing 1 card), we need to center the card
    if (slidesToShow <= 1.2 && wrapperWidth > 0) {
      // Center the current card by adding offset
      const centerOffset = (wrapperWidth - cardWidth) / 2;
      target = currentIndex * cardWidth - centerOffset;
    }

    target = Math.min(Math.max(target, 0), maxScroll);
    return target;
  }, [currentIndex, cardWidth, maxScroll, slidesToShow, wrapperWidth]);

  const next = useCallback(() => {
    setAutoSlideEnabled(true);
    let nextIndex = currentIndex + 1;
    const maxIndex = Math.ceil(maxScroll / cardWidth);
    if (nextIndex > maxIndex) {
      nextIndex = 0;
    }
    setCurrentIndex(nextIndex);
  }, [currentIndex, maxScroll, cardWidth]);

  const prev = useCallback(() => {
    setAutoSlideEnabled(true);
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      const maxIndex = Math.ceil(maxScroll / cardWidth);
      prevIndex = maxIndex > 0 ? maxIndex : 0;
    }
    setCurrentIndex(prevIndex);
  }, [currentIndex, maxScroll, cardWidth]);

  // Drag handlers
  const handleDragStart = (e) => {
    if (e.target.closest("button") || e.target.closest(".arrow")) {
      return;
    }
    setAutoSlideEnabled(true);
    setIsDragging(true);
    setHasMoved(false);
    const startX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
    setDragStartX(startX);
    setDragStartTranslate(getTranslateX());
    setDragOffset(0);
  };

  const handleDragMove = useCallback(
    (e) => {
      if (!isDragging) return;

      const currentX =
        e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
      const diff = currentX - dragStartX;

      if (Math.abs(diff) > 5) {
        setHasMoved(true);
      }

      const newOffset = dragStartTranslate - diff;
      setDragOffset(diff);

      if (trackRef.current) {
        let newTranslate = Math.min(Math.max(newOffset, 0), maxScroll);
        trackRef.current.style.transform = `translateX(-${newTranslate}px)`;
        trackRef.current.style.transition = "none";
      }
    },
    [isDragging, dragStartX, dragStartTranslate, maxScroll],
  );

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragDistance = Math.abs(dragOffset);
    if (dragDistance > 50) {
      if (dragOffset > 0) {
        next();
      } else if (dragOffset < 0) {
        prev();
      }
    }

    if (trackRef.current) {
      trackRef.current.style.transition = "";
      trackRef.current.style.transform = `translateX(-${getTranslateX()}px)`;
    }
    setDragOffset(0);

    setTimeout(() => {
      setHasMoved(false);
    }, 100);
  }, [isDragging, dragOffset, next, prev, getTranslateX]);

  useEffect(() => {
    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, [updateMetrics]);

  useEffect(() => {
    if (trackRef.current && !isDragging) {
      trackRef.current.style.transform = `translateX(-${getTranslateX()}px)`;
    }
  }, [
    currentIndex,
    cardWidth,
    maxScroll,
    isDragging,
    getTranslateX,
    slidesToShow,
    wrapperWidth,
  ]);

  // Auto-slide with hover pause
  useEffect(() => {
    if (!autoSlideEnabled) return;
    const interval = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(interval);
  }, [next, autoSlideEnabled]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => setAutoSlideEnabled(false);
  const handleMouseLeave = () => setAutoSlideEnabled(true);

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
  }, [isDragging, handleDragMove, handleDragEnd]);

  // Calculate pagination dots based on actual number of slides
  const getPaginationCount = () => {
    if (slidesToShow >= 2) {
      return Math.ceil(cards.length / Math.floor(slidesToShow));
    }
    return cards.length;
  };

  const getActiveDotIndex = () => {
    if (slidesToShow >= 2) {
      return Math.floor(currentIndex / Math.floor(slidesToShow));
    }
    return currentIndex;
  };

  const handleDotClick = (idx) => {
    setAutoSlideEnabled(true);
    if (slidesToShow >= 2) {
      setCurrentIndex(idx * Math.floor(slidesToShow));
    } else {
      setCurrentIndex(idx);
    }
  };

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

        <div
          className="blog-slider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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
                cursor: isDragging ? "grabbing" : "grab",
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
            {Array.from({ length: getPaginationCount() }).map((_, idx) => (
              <button
                key={idx}
                className={`pagination-dot ${getActiveDotIndex() === idx ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDotClick(idx);
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
