// BlogHero.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import "./BlogHero.css";

const BlogHero = () => {
  // State for dynamic stats
  const [articles, setArticles] = useState(248);
  const [writers, setWriters] = useState(34);
  const [featuredReadsVal, setFeaturedReadsVal] = useState(2.4);
  const [newSeriesVal, setNewSeriesVal] = useState(7);
  const [communityVal, setCommunityVal] = useState(12.8);
  const [currentUpdateIndex, setCurrentUpdateIndex] = useState(0);
  const [trendingIdx, setTrendingIdx] = useState(0);
  const [hoveredInsight, setHoveredInsight] = useState(null);
  const [bgPosition, setBgPosition] = useState({ x: 20, y: 40 });
  const [showSyncMsg, setShowSyncMsg] = useState(false);
  const [syncMsg, setSyncMsg] = useState("");

  // Refs for intervals cleanup
  const intervalsRef = useRef([]);
  const particlesContainerRef = useRef(null);

  // Trending topics pool (rotating)
  const trendingPool = [
    ["#AI frontiers", "#design systems", "#future of work", "#web3 culture"],
    ["#prompt engineering", "#UX ethics", "#climate tech", "#indie dev"],
    ["#generative AI", "#design tokens", "#remote culture", "#startup life"],
    ["#neural networks", "#motion design", "#blockchain", "#productivity"],
  ];

  // Blog update messages (rotating)
  const updateMessages = [
    "✨ New essay: 'The Art of Digital Minimalism' just dropped",
    "📖 Hot off the press: 'Scaling Design Systems' guide released",
    "🎙️ Podcast episode: Future of Creative Coding — listen now",
    "📊 Weekly digest: 5 must-read articles on AI ethics",
    "💡 Community spotlight: 'How I built a second brain' by Mia Chen",
    "🚀 Trending: WebAssembly and the edge runtime deep dive",
  ];

  // Helper to format numbers with k
  const formatWithK = useCallback((value) => {
    if (value >= 1000) return (value / 1000).toFixed(1) + "k";
    if (typeof value === "number" && value < 1000 && !Number.isInteger(value)) {
      return value.toFixed(1) + "k";
    }
    return value.toString();
  }, []);

  // Update all stats display
  const updateAllStats = useCallback(() => {
    // State updates will trigger re-render
  }, []);

  // Rotate trending topics
  const rotateTrending = useCallback(() => {
    setTrendingIdx((prev) => (prev + 1) % trendingPool.length);
  }, [trendingPool.length]);

  // Rotate update message
  const rotateUpdateMessage = useCallback(() => {
    setCurrentUpdateIndex((prev) => (prev + 1) % updateMessages.length);
  }, [updateMessages.length]);

  // Create particles
  useEffect(() => {
    if (!particlesContainerRef.current) return;

    const container = particlesContainerRef.current;
    const particleCount = 35;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 12 + 8}s`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.opacity = Math.random() * 0.5 + 0.2;
      particle.style.background = `rgba(100, 170, 250, ${Math.random() * 0.5 + 0.2})`;
      container.appendChild(particle);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  // Growth interval - simulates micro growth
  useEffect(() => {
    const growthInterval = setInterval(() => {
      setArticles((prev) => {
        const newVal = prev + Math.floor(Math.random() * 3) + 1;
        return Math.min(newVal, 1050);
      });

      setWriters((prev) => {
        if (Math.random() > 0.7) {
          return Math.min(prev + 1, 58);
        }
        return prev;
      });

      setFeaturedReadsVal((prev) => {
        let newVal = prev + Math.random() * 0.3;
        if (newVal > 4.5) newVal = 2.1;
        return newVal;
      });

      setNewSeriesVal((prev) => {
        if (Math.random() > 0.8) {
          let newVal = prev + 1;
          if (newVal > 14) newVal = 7;
          return newVal;
        }
        return prev;
      });

      setCommunityVal((prev) => {
        let newVal = prev + Math.random() * 0.25;
        if (newVal > 19) newVal = 12.2;
        return Math.min(newVal, 24);
      });

      // Pulse effect on stats row
      const statsRow = document.querySelector(".hero-stats-row");
      if (statsRow) {
        statsRow.style.transform = "scale(1.01)";
        setTimeout(() => {
          if (statsRow) statsRow.style.transform = "";
        }, 200);
      }

      // Shimmer effect on trending card
      const trendingCard = document.querySelector(".trending-card");
      if (trendingCard) {
        trendingCard.style.borderColor = "rgba(100, 170, 255, 0.7)";
        trendingCard.style.boxShadow = "0 0 8px rgba(70, 130, 255, 0.3)";
        setTimeout(() => {
          if (trendingCard) {
            trendingCard.style.borderColor = "rgba(80, 140, 210, 0.35)";
            trendingCard.style.boxShadow = "";
          }
        }, 400);
      }
    }, 9500);

    intervalsRef.current.push(growthInterval);

    return () => clearInterval(growthInterval);
  }, []);

  // Rotate topics interval
  useEffect(() => {
    const topicInterval = setInterval(rotateTrending, 11000);
    intervalsRef.current.push(topicInterval);
    return () => clearInterval(topicInterval);
  }, [rotateTrending]);

  // Rotate messages interval
  useEffect(() => {
    const msgInterval = setInterval(rotateUpdateMessage, 8000);
    intervalsRef.current.push(msgInterval);
    return () => clearInterval(msgInterval);
  }, [rotateUpdateMessage]);

  // Background gradient shift effect
  useEffect(() => {
    const bgInterval = setInterval(() => {
      const randomX = Math.sin(Date.now() * 0.0005) * 10 + 20;
      const randomY = Math.cos(Date.now() * 0.0007) * 15 + 40;
      setBgPosition({ x: randomX, y: randomY });
    }, 5000);

    intervalsRef.current.push(bgInterval);
    return () => clearInterval(bgInterval);
  }, []);

  // Initial rotation
  useEffect(() => {
    rotateTrending();
    rotateUpdateMessage();
  }, [rotateTrending, rotateUpdateMessage]);

  // Cleanup all intervals on unmount
  useEffect(() => {
    return () => {
      intervalsRef.current.forEach((interval) => clearInterval(interval));
    };
  }, []);

  // Handle update marquee click
  const handleMarqueeClick = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const originalMsg = updateMessages[currentUpdateIndex];
    setSyncMsg(`🕒 Last sync: ${timeString} · ${originalMsg.slice(0, 40)}`);
    setShowSyncMsg(true);
    setTimeout(() => {
      setShowSyncMsg(false);
    }, 2500);
  };

  // Current trending topics
  const currentTrending = trendingPool[trendingIdx] || trendingPool[0];

  // Background gradient style
  const heroBackgroundStyle = {
    background: `radial-gradient(ellipse 70% 40% at ${bgPosition.x}% ${bgPosition.y}%, rgba(40, 100, 170, 0.2), transparent 60%), #0a0f1f`,
  };

  return (
    <section className="hero-fullwidth" style={heroBackgroundStyle}>
      <div className="particles-bg" ref={particlesContainerRef}></div>
      <div className="noise-overlay"></div>
      <div className="hero-container">
        {/* LEFT SIDE: main blog copy */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="live-indicator"></span>
            <span>BlogSphere • editorial pulse</span>
          </div>
          <h1>
            Where Ideas
            <br />
            Ignite & Stories evolve
          </h1>
          <p className="hero-description">
            Dive into deep conversations about tech, creativity, and the future
            of digital storytelling. Fresh perspectives, weekly.
          </p>
          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-number">{articles}</span>
              <span>articles</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{writers}</span>
              <span>contributors</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5min</span>
              <span>avg read</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: more elements */}
        <div className="hero-right">
          {/* trending topics card */}
          <div className="trending-card">
            <div className="trending-header">
              <span>🔥</span> <span>trending now</span>
            </div>
            <div className="trending-topics">
              {currentTrending.map((topic, idx) => (
                <span key={idx} className="topic-tag">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* insight grid */}
          <div className="insight-grid">
            <div
              className={`insight-item ${hoveredInsight === "featured" ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredInsight("featured")}
              onMouseLeave={() => setHoveredInsight(null)}
            >
              <div className="insight-label">⭐ featured</div>
              <div className="insight-value">
                {formatWithK(featuredReadsVal)}
              </div>
              <div className="insight-desc">reads this week</div>
            </div>
            <div
              className={`insight-item ${hoveredInsight === "series" ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredInsight("series")}
              onMouseLeave={() => setHoveredInsight(null)}
            >
              <div className="insight-label">📚 new series</div>
              <div className="insight-value">{newSeriesVal}</div>
              <div className="insight-desc">ongoing series</div>
            </div>
            <div
              className={`insight-item ${hoveredInsight === "community" ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredInsight("community")}
              onMouseLeave={() => setHoveredInsight(null)}
            >
              <div className="insight-label">⚡ community</div>
              <div className="insight-value">{formatWithK(communityVal)}</div>
              <div className="insight-desc">active readers</div>
            </div>
          </div>

          {/* dynamic latest update ticker */}
          <div className="update-marquee" onClick={handleMarqueeClick}>
            <span className="spark">✨</span>
            <span
              className="update-text"
              style={{
                opacity: showSyncMsg ? 0 : 1,
                transition: "opacity 0.1s",
              }}
            >
              {showSyncMsg ? syncMsg : updateMessages[currentUpdateIndex]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
