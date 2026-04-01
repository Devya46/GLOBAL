import React, { useEffect, useRef } from "react";
import {
  ChartLine,
  Globe,
  Bot,
  Earth,
  Zap,
  Users,
  Activity,
} from "lucide-react";
import "./StatsSection.css";

export default function StatsSection() {
  const sectionRef = useRef(null);
  const progressRefs = useRef([]);

  const countersData = [
    { value: 500000, label: "TRADES PER DAY", icon: ChartLine },
    {
      value: 4,
      label: "TRADING HUB AT NEW YORK (Equinix NY4)",
      icon: Globe,
    },
    { value: 60, label: "ALGO TRADES (% OF ALL TRADES)", icon: Bot },
    { value: 100, label: "GLOBAL PRESENCE", icon: Earth },
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "m+";
    if (num >= 1000) return Math.floor(num / 1000) + "k+";
    return Math.floor(num) + "+";
  };

  const runCounter = (el, target) => {
    let count = 0;
    const duration = 1200;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const update = () => {
      count += increment;

      if (count < target) {
        el.innerText = formatNumber(count);
        requestAnimationFrame(update);
      } else {
        el.innerText = formatNumber(target);
      }
    };

    update();
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const counters = section.querySelectorAll(".rim-counter");

    // Set up refs for progress fills
    const progressFills = progressRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters
            counters.forEach((el) => {
              const target = +el.dataset.target;
              if (target && !el.dataset.animated) {
                el.dataset.animated = "true";
                runCounter(el, target);
              }
            });

            // Animate progress bars
            progressFills.forEach((fill, index) => {
              if (fill && !fill.style.width) {
                const width = fill.dataset.width;
                if (width) {
                  // Small delay for better visual effect
                  setTimeout(() => {
                    fill.style.width = width + "%";
                  }, index * 100);
                }
              }
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const LeftIcon = countersData[0].icon;
  const LeftIcon2 = countersData[1].icon;
  const RightIcon1 = countersData[2].icon;
  const RightIcon2 = countersData[3].icon;

  const progressItems = [
    { title: "Platform Stability", label: "99.9%", width: 90, icon: Activity },
    { title: "Execution Speed", label: "Fast", width: 85, icon: Zap },
    { title: "Client Satisfaction", label: "95%", width: 88, icon: Users },
  ];

  return (
    <section className="rim-stats-wrapper" ref={sectionRef}>
      <div className="rim-stats-container">
        {/* LEFT */}
        <div className="rim-stats-side">
          <div className="rim-stats-card">
            <div
              className="rim-stats-big rim-counter"
              data-target={countersData[0].value}
            >
              0
            </div>
            <div className="rim-stats-small">{countersData[0].label}</div>
            <div className="rim-stats-footer">
              <LeftIcon size={20} />
              <span>Strength</span>
            </div>
          </div>

          <div className="rim-stats-card">
            <div
              className="rim-stats-big rim-counter"
              data-target={countersData[1].value}
            >
              0
            </div>
            <div className="rim-stats-small">{countersData[1].label}</div>
            <div className="rim-stats-footer">
              <LeftIcon2 size={20} />
              <span>Infrastructure</span>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="rim-stats-center">
          <div className="rim-stats-tag">STRENGTH TRADING</div>
          <h2 className="rim-stats-title">Our Strength Is In The Numbers</h2>

          <p className="rim-stats-desc">
            RIM Global is one of the largest Forex CFD providers in the world by
            trading volume.
          </p>

          {progressItems.map((item, i) => (
            <div className="rim-progress-item" key={i}>
              <div className="rim-progress-header">
                <item.icon size={18} />
                <h4>{item.title}</h4>
              </div>
              <div className="rim-progress-bar">
                <div className="rim-progress-label">{item.label}</div>
                <div
                  className="rim-progress-fill"
                  ref={(el) => (progressRefs.current[i] = el)}
                  data-width={item.width}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="rim-stats-side">
          <div className="rim-stats-card">
            <div
              className="rim-stats-big rim-counter"
              data-target={countersData[2].value}
            >
              0
            </div>
            <div className="rim-stats-small">{countersData[2].label}</div>
            <div className="rim-stats-footer">
              <RightIcon1 size={20} />
              <span>Automation</span>
            </div>
          </div>

          <div className="rim-stats-card">
            <div className="rim-stats-big rim-equinix">Equinix NY4</div>
            <div className="rim-stats-small">TRADING HUB AT NEW YORK</div>
            <div className="rim-stats-footer">
              <RightIcon2 size={20} />
              <span>Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
