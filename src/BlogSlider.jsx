import React, { useEffect, useRef, useState } from "react";
import "./BlogSlider.css";

export default function BlogSlider() {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const gap = 24;

  const cards = [
    {
      img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80&auto=format&fit=crop",
      title: "Top Forex Strategies 2026",
      desc: "Adaptive algorithms & macro shifts — new playbook for volatile pairs.",
      date: "2026-02-10",
    },
    {
      img: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&q=80&auto=format&fit=crop",
      title: "Forex Deep Analysis",
      desc: "Beyond indicators: order flow, sentiment & central bank narratives.",
      date: "2026-02-05",
    },
    {
      img: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=400&q=80&auto=format&fit=crop",
      title: "2026 Macro Drivers",
      desc: "Rate divergence, commodity flows & election impacts on majors.",
      date: "2026-01-28",
    },
    {
      img: "https://images.unsplash.com/photo-1707902665498-a202981fb5ac?q=80&w=1170&auto=format&fit=crop",
      title: "Is Forex Still Profitable?",
      desc: "Retail edge: automation & discipline matter more than ever.",
      date: "2026-01-20",
    },
    {
      img: "https://images.unsplash.com/photo-1724482606633-fa74fe4f5de1?q=80&w=1170&auto=format&fit=crop",
      title: "Choose the Right Broker",
      desc: "Spreads, execution, regulation — what really counts in 2026.",
      date: "2026-01-15",
    },
    {
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80&auto=format&fit=crop",
      title: "Risk First, Always",
      desc: "Position sizing, correlation & drawdown control — the real edge.",
      date: "2026-01-08",
    },
  ];

  const updateMetrics = () => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;

    if (!track || !wrapper) return;

    const firstCard = track.children[0];
    if (!firstCard) return;

    const width = firstCard.offsetWidth + gap;
    setCardWidth(width);

    const max = track.scrollWidth - wrapper.offsetWidth;
    setMaxScroll(max);
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
      setCurrentIndex(Math.ceil(maxScroll / cardWidth));
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="blog-section-wrapper">
      <div className="blog-section">
        <div className="blog-left">
          <span className="blog-label">BLOGS</span>
          <h2 className="blog-title">
            <span className="green">Forex &</span>
            <br />
            <span className="orange">Markets</span>
            <br />
            <span className="sky">Learning Hub</span>
          </h2>
        </div>

        <div className="blog-slider">
          <button className="slider-arrow arrow-left" onClick={prev}>
            ‹
          </button>

          <button className="slider-arrow arrow-right" onClick={next}>
            ›
          </button>

          <div className="slider-wrapper" ref={wrapperRef}>
            <div
              className="blog-track"
              ref={trackRef}
              style={{ transform: `translateX(-${getTranslateX()}px)` }}
            >
              {cards.map((card, i) => (
                <div className="blog-card" key={i}>
                  <img src={card.img} alt="" />
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <div className="card-footer">
                    <span>{card.date}</span>
                    <div className="arrow">↗</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
