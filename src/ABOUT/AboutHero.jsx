import React, { useEffect, useRef, useState } from "react";
import styles from "./AboutHero.module.css";

const AboutHero = () => {
  const canvasRef = useRef(null);
  const statsRef = useRef(null);
  const [statsAnimated, setStatsAnimated] = useState(false);

  // Particle Animation System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationId = null;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.min(60, Math.floor(window.innerWidth / 25));
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          alpha: Math.random() * 0.25 + 0.08,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
        });
      }
    };

    const drawParticles = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(122, 179, 200, ${particle.alpha})`;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      animationId = requestAnimationFrame(drawParticles);
    };

    const initParticles = () => {
      resizeCanvas();
      createParticles();
      drawParticles();
    };

    initParticles();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Animated counter for statistics
  const animateNumber = (element, target, suffix = "+") => {
    if (!element) return;
    let current = 0;
    const duration = 1500;
    const increment = target / (duration / 30);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + suffix;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + suffix;
      }
    }, 30);
  };

  // Intersection Observer for counter animation
  useEffect(() => {
    const statsElement = statsRef.current;
    if (!statsElement || statsAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimated) {
            const tradersEl = document.getElementById("about-stat-traders");
            const countriesEl = document.getElementById("about-stat-countries");
            const expertsEl = document.getElementById("about-stat-experts");

            if (tradersEl && tradersEl.textContent === "50K+") {
              animateNumber(tradersEl, 50, "K+");
            }
            if (countriesEl && countriesEl.textContent === "120+") {
              animateNumber(countriesEl, 120, "+");
            }
            if (expertsEl && expertsEl.textContent === "25+") {
              animateNumber(expertsEl, 25, "+");
            }
            setStatsAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(statsElement);

    return () => {
      observer.disconnect();
    };
  }, [statsAnimated]);

  // Smooth scroll for scroll indicator
  const handleScrollClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.heroSection}>
      {/* Animated Background Elements */}
      <div className={styles.bgAnimation}>
        <div
          className={`${styles.floatingElement} ${styles.floatingElement1}`}
        ></div>
        <div
          className={`${styles.floatingElement} ${styles.floatingElement2}`}
        ></div>
        <div
          className={`${styles.floatingElement} ${styles.floatingElement3}`}
        ></div>
      </div>
      <canvas ref={canvasRef} className={styles.particleCanvas}></canvas>

      <div className={styles.heroContainer}>
        <div className={styles.badge}>✨ WELCOME TO OUR STORY</div>

        <h1 className={styles.title}>
          About <span className={styles.titleGradient}>Us</span>
        </h1>

        <p className={styles.description}>
          We are a passionate team of forex experts, educators, and
          technologists dedicated to empowering traders worldwide. Our mission
          is to simplify the complexities of currency trading and provide
          actionable insights that drive success. Since our founding, we've
          helped thousands of traders navigate the markets with confidence and
          discipline.
        </p>

        <div ref={statsRef} className={styles.statsContainer}>
          <div className={styles.statItem}>
            <span className={styles.statNumber} id="about-stat-traders">
              50K+
            </span>
            <span className={styles.statLabel}>Traders Empowered</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber} id="about-stat-countries">
              120+
            </span>
            <span className={styles.statLabel}>Countries Served</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber} id="about-stat-experts">
              25+
            </span>
            <span className={styles.statLabel}>Industry Experts</span>
          </div>
        </div>

        {/* <div className={styles.buttonContainer}>
          <a href="#" className={styles.btnPrimary}>
            Get Started
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#" className={styles.btnOutline}>
            Learn More
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      {/* <div className={styles.scrollIndicator} onClick={handleScrollClick}>
        <span>Scroll to discover</span>
        <div className={styles.mouse}>
          <div className={styles.mouseWheel}></div>
        </div>
      </div> */}
    </section>
  );
};

export default AboutHero;
