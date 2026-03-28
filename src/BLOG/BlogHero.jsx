// BlogHero.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  TrendingUp,
  Users,
  BookOpen,
  Sparkles,
  Zap,
  Eye,
  Radio,
  Layers,
  Hash,
  RefreshCw,
  Activity,
  ArrowRight,
  Star,
  Flame,
  Timer,
} from "lucide-react";
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
  const [isStatsPulsing, setIsStatsPulsing] = useState(false);
  const [isTrendingPulsing, setIsTrendingPulsing] = useState(false);

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
    "New essay: 'The Art of Digital Minimalism' just dropped",
    "Hot off the press: 'Scaling Design Systems' guide released",
    "Podcast episode: Future of Creative Coding — listen now",
    "Weekly digest: 5 must-read articles on AI ethics",
    "Community spotlight: 'How I built a second brain' by Mia Chen",
    "Trending: WebAssembly and the edge runtime deep dive",
  ];

  // Helper to format numbers with k
  const formatWithK = useCallback((value) => {
    if (value >= 1000) return (value / 1000).toFixed(1) + "k";
    if (typeof value === "number" && value < 1000 && !Number.isInteger(value)) {
      return value.toFixed(1) + "k";
    }
    return value.toString();
  }, []);

  // Rotate trending topics
  const rotateTrending = useCallback(() => {
    setTrendingIdx((prev) => (prev + 1) % trendingPool.length);
    setIsTrendingPulsing(true);
    setTimeout(() => setIsTrendingPulsing(false), 400);
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
      particle.classList.add("bloghero-particle");
      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 12 + 8}s`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.opacity = Math.random() * 0.5 + 0.2;
      particle.style.background = `rgba(34, 197, 94, ${Math.random() * 0.5 + 0.2})`;
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
      setIsStatsPulsing(true);
      setTimeout(() => setIsStatsPulsing(false), 200);

      // Shimmer effect on trending card
      setIsTrendingPulsing(true);
      setTimeout(() => setIsTrendingPulsing(false), 400);
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
    setSyncMsg(`Last sync: ${timeString} · ${originalMsg.slice(0, 40)}`);
    setShowSyncMsg(true);
    setTimeout(() => {
      setShowSyncMsg(false);
    }, 2500);
  };

  // Current trending topics
  const currentTrending = trendingPool[trendingIdx] || trendingPool[0];

  // Background gradient style
  const heroBackgroundStyle = {
    background: `radial-gradient(ellipse 70% 40% at ${bgPosition.x}% ${bgPosition.y}%, rgba(34, 197, 94, 0.12), transparent 60%), linear-gradient(135deg, #0a0f1f 0%, #0c1222 100%)`,
  };

  return (
    <section className="bloghero" style={heroBackgroundStyle}>
      <div className="bloghero-particles" ref={particlesContainerRef}></div>
      <div className="bloghero-noise"></div>
      <div className="bloghero-container">
        {/* LEFT SIDE: main blog copy */}
        <div className="bloghero-left">
          <div className="bloghero-badge">
            <Radio size={12} className="bloghero-badge-icon" />
            <span>BlogSphere • editorial pulse</span>
            <span className="bloghero-badge-dot"></span>
          </div>
          <h1 className="bloghero-title">
            Where Ideas
            <br />
            Ignite & Stories Evolve
          </h1>
          <p className="bloghero-description">
            Dive into deep conversations about tech, creativity, and the future
            of digital storytelling. Fresh perspectives, weekly.
          </p>
          <div
            className={`bloghero-stats ${isStatsPulsing ? "bloghero-stats-pulse" : ""}`}
          >
            <div className="bloghero-stat">
              <BookOpen size={18} className="bloghero-stat-icon" />
              <div>
                <span className="bloghero-stat-number">{articles}</span>
                <span className="bloghero-stat-label">articles</span>
              </div>
            </div>
            <div className="bloghero-stat">
              <Users size={18} className="bloghero-stat-icon" />
              <div>
                <span className="bloghero-stat-number">{writers}</span>
                <span className="bloghero-stat-label">contributors</span>
              </div>
            </div>
            <div className="bloghero-stat">
              <Timer size={18} className="bloghero-stat-icon" />
              <div>
                <span className="bloghero-stat-number">5min</span>
                <span className="bloghero-stat-label">avg read</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: more elements */}
        <div className="bloghero-right">
          {/* trending topics card */}
          <div
            className={`bloghero-trending ${isTrendingPulsing ? "bloghero-trending-pulse" : ""}`}
          >
            <div className="bloghero-trending-header">
              <Flame size={14} />
              <span>trending now</span>
            </div>
            <div className="bloghero-trending-topics">
              {currentTrending.map((topic, idx) => (
                <span key={idx} className="bloghero-topic">
                  <Hash size={10} />
                  {topic.replace("#", "")}
                </span>
              ))}
            </div>
          </div>

          {/* insight grid */}
          <div className="bloghero-insights">
            <div
              className={`bloghero-insight ${hoveredInsight === "featured" ? "bloghero-insight-hover" : ""}`}
              onMouseEnter={() => setHoveredInsight("featured")}
              onMouseLeave={() => setHoveredInsight(null)}
            >
              <div className="bloghero-insight-header">
                <Star size={12} />
                <span>featured</span>
              </div>
              <div className="bloghero-insight-value">
                {formatWithK(featuredReadsVal)}
              </div>
              <div className="bloghero-insight-desc">reads this week</div>
            </div>
            <div
              className={`bloghero-insight ${hoveredInsight === "series" ? "bloghero-insight-hover" : ""}`}
              onMouseEnter={() => setHoveredInsight("series")}
              onMouseLeave={() => setHoveredInsight(null)}
            >
              <div className="bloghero-insight-header">
                <Layers size={12} />
                <span>new series</span>
              </div>
              <div className="bloghero-insight-value">{newSeriesVal}</div>
              <div className="bloghero-insight-desc">ongoing series</div>
            </div>
            <div
              className={`bloghero-insight ${hoveredInsight === "community" ? "bloghero-insight-hover" : ""}`}
              onMouseEnter={() => setHoveredInsight("community")}
              onMouseLeave={() => setHoveredInsight(null)}
            >
              <div className="bloghero-insight-header">
                <Activity size={12} />
                <span>community</span>
              </div>
              <div className="bloghero-insight-value">
                {formatWithK(communityVal)}
              </div>
              <div className="bloghero-insight-desc">active readers</div>
            </div>
          </div>

          {/* dynamic latest update ticker */}
          <div className="bloghero-update" onClick={handleMarqueeClick}>
            <RefreshCw size={14} className="bloghero-update-icon" />
            <span
              className="bloghero-update-text"
              style={{
                opacity: showSyncMsg ? 0 : 1,
              }}
            >
              {showSyncMsg ? syncMsg : updateMessages[currentUpdateIndex]}
            </span>
            <ArrowRight size={14} className="bloghero-update-arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
