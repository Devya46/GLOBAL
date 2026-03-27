import React, { useEffect, useRef } from "react";
import "./Testimonials.css";

export default function RimTestimonials() {
  const sliderRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const dotsRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const prevBtn = prevRef.current;
    const nextBtn = nextRef.current;
    const dotsContainer = dotsRef.current;

    let currentIndex = 0;
    let cardElements = Array.from(slider.querySelectorAll(".rimt-card"));
    let totalCards = cardElements.length;

    let slidesPerView = getSlidesPerView();
    let maxIndex = Math.max(0, totalCards - slidesPerView);

    let autoPlayInterval;

    function getSlidesPerView() {
      const width = window.innerWidth;
      if (width <= 680) return 1;
      if (width <= 1100) return 2;
      return 3;
    }

    function getCardWidthWithGap() {
      if (!cardElements.length) return 300;
      const card = cardElements[0];
      const style = window.getComputedStyle(slider);
      const gap = parseFloat(style.gap) || 28;
      return card.offsetWidth + gap;
    }

    function updateMaxIndex() {
      slidesPerView = getSlidesPerView();
      maxIndex = Math.max(0, totalCards - slidesPerView);
      if (currentIndex > maxIndex) currentIndex = maxIndex;
      applyTransform(false);
      updateDots();
    }

    function applyTransform(withTransition = true) {
      const cardWidthWithGap = getCardWidthWithGap();
      let translateX = currentIndex * cardWidthWithGap;

      if (withTransition) {
        slider.style.transition =
          "transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94)";
      } else {
        slider.style.transition = "none";
      }

      slider.style.transform = `translateX(-${translateX}px)`;
    }

    function moveSlide(direction) {
      if (direction === "next") {
        if (currentIndex < maxIndex) currentIndex++;
      } else {
        if (currentIndex > 0) currentIndex--;
      }
      applyTransform(true);
      updateDots();
      resetAutoPlay();
    }

    function goToSlide(index) {
      currentIndex = index;
      applyTransform(true);
      updateDots();
      resetAutoPlay();
    }

    function updateDots() {
      dotsContainer.innerHTML = "";
      for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement("button");
        dot.className = "rimt-dot";
        if (i === currentIndex) dot.classList.add("active");

        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
      }
    }

    function resetAutoPlay() {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(() => {
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        applyTransform(true);
        updateDots();
      }, 5200);
    }

    prevBtn.addEventListener("click", () => moveSlide("prev"));
    nextBtn.addEventListener("click", () => moveSlide("next"));
    window.addEventListener("resize", updateMaxIndex);

    updateMaxIndex();
    updateDots();
    resetAutoPlay();

    return () => {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
    };
  }, []);

  return (
    <section className="rimt-section">
      <h2 className="rimt-title">Public Cheers For Us!</h2>

      <div className="rimt-sub-wrap">
        <div className="rimt-sub">Trusted by elite traders worldwide ★</div>
      </div>

      <div className="rimt-wrapper">
        <button
          ref={prevRef}
          className="rimt-nav rimt-prev"
          aria-label="Previous testimonial"
        >
          <svg
            className="rimt-nav-icon"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path
              fill="currentColor"
              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
            />
          </svg>
        </button>

        <div className="rimt-container">
          <div ref={sliderRef} className="rimt-slider">
            {/* CARD 1 */}
            <div className="rimt-card" style={{ "--order": 0 }}>
              <div className="rimt-avatar-row">
                <img
                  src="https://i.pravatar.cc/80?img=1"
                  className="rimt-avatar"
                  alt="Daniel M."
                />
                <div className="rimt-rating">★★★★★</div>
              </div>
              <div className="rimt-google-verified">
                <svg
                  className="rimt-google-icon"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="rimt-verified-text">
                  Google Verified Review
                </span>
              </div>
              <p className="rimt-comment">
                RIM Global has impressed our desk mainly with the quality of
                their market preparation. Their daily levels and directional
                bias help reduce hesitation before entering a session.
              </p>
              <div className="rimt-signature">Daniel M.</div>
              <div className="rimt-name">London, UK • Dec 10, 2024</div>
            </div>

            {/* CARD 2 */}
            <div className="rimt-card" style={{ "--order": 1 }}>
              <div className="rimt-avatar-row">
                <img
                  src="https://i.pravatar.cc/80?img=2"
                  className="rimt-avatar"
                  alt="Sofia Hernandez"
                />
                <div className="rimt-rating">★★★★★</div>
              </div>
              <div className="rimt-google-verified">
                <svg
                  className="rimt-google-icon"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="rimt-verified-text">
                  Google Verified Review
                </span>
              </div>
              <p className="rimt-comment">
                The biggest differentiator for me is the structured trade
                planning. Instead of reacting to volatility, we already have
                scenarios to follow.
              </p>
              <div className="rimt-signature">Sofia Hernandez</div>
              <div className="rimt-name">Spain • June 6, 2024</div>
            </div>

            {/* CARD 3 */}
            <div className="rimt-card" style={{ "--order": 2 }}>
              <div className="rimt-avatar-row">
                <img
                  src="https://i.pravatar.cc/80?img=3"
                  className="rimt-avatar"
                  alt="Mark O'Reilly"
                />
                <div className="rimt-rating">★★★★★</div>
              </div>
              <div className="rimt-google-verified">
                <svg
                  className="rimt-google-icon"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="rimt-verified-text">
                  Google Verified Review
                </span>
              </div>
              <p className="rimt-comment">
                The approach is academic and backed by actual reasoning.
                Suitable for serious traders building discipline.
              </p>
              <div className="rimt-signature">Mark O'Reilly</div>
              <div className="rimt-name">Ireland • July 24, 2024</div>
            </div>

            {/* CARD 4 */}
            <div className="rimt-card" style={{ "--order": 3 }}>
              <div className="rimt-avatar-row">
                <img
                  src="https://i.pravatar.cc/80?img=4"
                  className="rimt-avatar"
                  alt="Rassmus Lind"
                />
                <div className="rimt-rating">★★★★★</div>
              </div>
              <div className="rimt-google-verified">
                <svg
                  className="rimt-google-icon"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="rimt-verified-text">
                  Google Verified Review
                </span>
              </div>
              <p className="rimt-comment">
                Sessions are well organized. Risk parameters make sense and
                reports are easy to digest.
              </p>
              <div className="rimt-signature">Rassmus Lind</div>
              <div className="rimt-name">Sweden • Dec 10, 2024</div>
            </div>

            {/* CARD 5 */}
            <div className="rimt-card" style={{ "--order": 4 }}>
              <div className="rimt-avatar-row">
                <img
                  src="https://i.pravatar.cc/80?img=12"
                  className="rimt-avatar"
                  alt="Elena K."
                />
                <div className="rimt-rating">★★★★★</div>
              </div>
              <div className="rimt-google-verified">
                <svg
                  className="rimt-google-icon"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="rimt-verified-text">
                  Google Verified Review
                </span>
              </div>
              <p className="rimt-comment">
                Game-changer! The daily briefings are crisp and the technical
                levels have improved my win rate by 32% in just 3 months. Highly
                recommended for serious capital growth.
              </p>
              <div className="rimt-signature">Elena K.</div>
              <div className="rimt-name">Dubai, UAE • Jan 18, 2025</div>
            </div>

            {/* CARD 6 */}
            <div className="rimt-card" style={{ "--order": 5 }}>
              <div className="rimt-avatar-row">
                <img
                  src="https://i.pravatar.cc/80?img=27"
                  className="rimt-avatar"
                  alt="James Whitmore"
                />
                <div className="rimt-rating">★★★★★</div>
              </div>
              <div className="rimt-google-verified">
                <svg
                  className="rimt-google-icon"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="rimt-verified-text">
                  Google Verified Review
                </span>
              </div>
              <p className="rimt-comment">
                I've been a member of multiple trading groups, but RIM Global's
                risk framework is second to none. Real edge with data-driven
                analysis. Premium service!
              </p>
              <div className="rimt-signature">James Whitmore</div>
              <div className="rimt-name">Sydney, AU • March 2, 2025</div>
            </div>

            {/* CARD 7 */}
            <div className="rimt-card" style={{ "--order": 6 }}>
              <div className="rimt-avatar-row">
                <img
                  src="https://i.pravatar.cc/80?img=32"
                  className="rimt-avatar"
                  alt="Priya Mehta"
                />
                <div className="rimt-rating">★★★★★</div>
              </div>
              <div className="rimt-google-verified">
                <svg
                  className="rimt-google-icon"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="rimt-verified-text">
                  Google Verified Review
                </span>
              </div>
              <p className="rimt-comment">
                World-class market psychology insights + precise entry zones.
                The team's dedication shows in every report. Feels like having a
                institutional desk mentor.
              </p>
              <div className="rimt-signature">Priya Mehta</div>
              <div className="rimt-name">Singapore • Feb 14, 2025</div>
            </div>

            {/* CARD 8 */}
            <div className="rimt-card" style={{ "--order": 7 }}>
              <div className="rimt-avatar-row">
                <img
                  src="https://i.pravatar.cc/80?img=45"
                  className="rimt-avatar"
                  alt="Lucas Fontaine"
                />
                <div className="rimt-rating">★★★★★</div>
              </div>
              <div className="rimt-google-verified">
                <svg
                  className="rimt-google-icon"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="rimt-verified-text">
                  Google Verified Review
                </span>
              </div>
              <p className="rimt-comment">
                Finally a service that bridges gap between technical analysis
                and macro flows. The level of preparation saves hours of chart
                time. Worth every penny.
              </p>
              <div className="rimt-signature">Lucas Fontaine</div>
              <div className="rimt-name">Paris, France • April 5, 2025</div>
            </div>
          </div>
        </div>

        <button
          ref={nextRef}
          className="rimt-nav rimt-next"
          aria-label="Next testimonial"
        >
          <svg
            className="rimt-nav-icon"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path
              fill="currentColor"
              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
            />
          </svg>
        </button>
      </div>

      <div ref={dotsRef} className="rimt-pagination"></div>
    </section>
  );
}
