import React, { useEffect, useRef, useState } from "react";
import "./VideoGallery.css";

const videoCollection = [
  {
    title: "Global Vision, New Identity",
    videoId: "G953Vnx_UDM",
    desc: "The NEW RIM Global Logo — bold rebranding and future vision.",
    duration: "0:45",
    tag: "Brand",
  },
  {
    title: "Transfer Funds: Wallet to Account",
    videoId: "nUoLLNdz1sg",
    desc: "Step-by-step guide to seamless fund transfers.",
    duration: "2:10",
    tag: "Tutorial",
  },
  {
    title: "IB Dashboard Deep Dive",
    videoId: "Kahu9ncF6EI",
    desc: "Key features, analytics, and usage guide for partners.",
    duration: "3:22",
    tag: "Guide",
  },
  {
    title: "Demo & Live Account Setup",
    videoId: "XJXBoxQhvNA",
    desc: "Complete walkthrough.",
    duration: "1:55",
    tag: "Tutorial",
  },
  {
    title: "Forex Myths Busted",
    videoId: "cZsbMeCcsHk",
    desc: "Debunking misconceptions.",
    duration: "0:30",
    tag: "Insights",
  },
  {
    title: "RIM Global Launch",
    videoId: "9fmwjuCPBMQ",
    desc: "Launch highlights.",
    duration: "1:48",
    tag: "Event",
  },
];

export default function VideoHub() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [activeVideo, setActiveVideo] = useState(null);
  const [modalVideo, setModalVideo] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const trackRef = useRef(null);

  const getEmbedUrl = (id) =>
    `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

  // ✅ Responsive items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 680) setVisibleItems(1);
      else if (window.innerWidth <= 1000) setVisibleItems(2);
      else setVisibleItems(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ FIX: dynamic slide calculation
  useEffect(() => {
    if (!trackRef.current) return;

    const firstCard = trackRef.current.children[0];
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 20; // same as CSS gap

    const move = (cardWidth + gap) * currentIdx;
    setTranslateX(move);
  }, [currentIdx, visibleItems]);

  const maxIndex = Math.max(0, videoCollection.length - visibleItems);

  const nextSlide = () => {
    setCurrentIdx((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="rim-media-gallery">
      {/* Header */}
      <div className="rim-gallery-header">
        <div className="rim-badge-light">
          <i className="fas fa-play-circle"></i>
          <span>WATCH & LEARN</span>
        </div>

        <h2>
          Video <span>Insights</span> Hub
        </h2>

        <div className="rim-header-line"></div>

        <div className="rim-subhead">
          Explore tutorials, platform updates & forex knowledge
        </div>
      </div>

      {/* Controls */}
      <div className="rim-carousel-controls">
        <button
          className={`rim-nav-circle ${currentIdx === 0 ? "disabled" : ""}`}
          onClick={prevSlide}
        >
          ❮
        </button>

        <button
          className={`rim-nav-circle ${
            currentIdx >= maxIndex ? "disabled" : ""
          }`}
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>

      {/* Carousel */}
      <div className="rim-carousel-outer">
        <div
          className="rim-carousel-scroll"
          ref={trackRef}
          style={{
            transform: `translateX(-${translateX}px)`,
          }}
        >
          {videoCollection.map((item, idx) => {
            const thumb = `https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`;

            return (
              <div className="rim-compact-card" key={idx}>
                <div
                  className="rim-video-stage"
                  onClick={() =>
                    setActiveVideo(activeVideo === idx ? null : idx)
                  }
                >
                  {activeVideo === idx ? (
                    <iframe
                      src={getEmbedUrl(item.videoId)}
                      className="rim-inline-frame active"
                      allow="autoplay; encrypted-media"
                    />
                  ) : (
                    <>
                      <img
                        src={thumb}
                        className="rim-stage-thumb"
                        alt={item.title}
                      />
                      <div className="rim-play-badge">▶</div>
                    </>
                  )}
                </div>

                <div className="rim-card-body">
                  <div className="rim-meta-row">
                    <span className="rim-category-tag">{item.tag}</span>
                    <span className="rim-duration-chip">{item.duration}</span>
                  </div>

                  <div className="rim-card-title">{item.title}</div>

                  <div className="rim-card-desc">{item.desc}</div>

                  <div className="rim-card-actions">
                    <button
                      className="rim-showcase-link"
                      onClick={() => setModalVideo(item)}
                    >
                      Showcase
                    </button>

                    <span className="rim-inline-hint">click preview</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {modalVideo && (
        <div
          className="rim-full-modal active"
          onClick={() => setModalVideo(null)}
        >
          <div
            className="rim-modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rim-modal-header">
              <h3>{modalVideo.title}</h3>
              <button onClick={() => setModalVideo(null)}>✕</button>
            </div>

            <div className="rim-modal-video-box">
              <iframe
                src={getEmbedUrl(modalVideo.videoId)}
                allow="autoplay; encrypted-media"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
