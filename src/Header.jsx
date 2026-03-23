import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate(); // ✅ FIXED (inside component)

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    accounts: false,
    partners: false,
  });

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!menuOpen) {
        setScrolled(window.scrollY > 80);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Lock body scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* HEADER */}
      <header className={scrolled ? "header scrolled" : "header"}>
        <img
          src="https://rimglobal.trade/assets/logo/logo.svg"
          className="logo"
          alt="logo"
        />

        {/* DESKTOP NAV */}
        <nav className="nav">
          <button className="nav-item">Home</button>
          <button className="nav-item">About</button>

          <div className="dropdown nav-item">
            <span className="dropdown-trigger">
              Accounts <span className="arrow">▾</span>
            </span>
            <div className="dropdown-menu">
              <button onClick={() => navigate("/account-type")}>
                Account Type
              </button>
              <button onClick={() => navigate("/DEMO-Account")}>
                Demo Account
              </button>
              <button onClick={() => navigate("/Withdrawal&Deposit")}>
                Withdrawal & Deposits
              </button>
            </div>
          </div>

          <div className="dropdown nav-item">
            <span className="dropdown-trigger">
              Partners <span className="arrow">▾</span>
            </span>
            <div className="dropdown-menu">
              <button>Partner Types</button>
              <button>Partner Program</button>
              <button>Investor</button>
              <button>Become a Partner</button>
            </div>
          </div>

          <button className="nav-item">Blogs</button>
        </nav>

        {/* BUTTONS */}
        <div className="buttons">
          <button className="login">LOG IN</button>
          <button className="contact">CONTACT US</button>
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* MOBILE NAV */}
      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={() => setMenuOpen(false)}>
          &times;
        </span>

        <button onClick={() => setMenuOpen(false)}>Home</button>
        <button onClick={() => setMenuOpen(false)}>About</button>

        <div className="mobile-dropdown">
          <span onClick={() => toggleDropdown("accounts")}>
            Accounts {dropdowns.accounts ? "▴" : "▾"}
          </span>

          <div
            className={`mobile-dropdown-menu ${
              dropdowns.accounts ? "show" : ""
            }`}
          >
            <button onClick={() => navigate("/account-type")}>
              Account Type
            </button>
            <button onClick={() => navigate("/DEMO-Account")}>
              Demo Account
            </button>
            <button>Withdrawal & Deposits</button>
          </div>
        </div>

        <div className="mobile-dropdown">
          <span onClick={() => toggleDropdown("partners")}>
            Partners {dropdowns.partners ? "▴" : "▾"}
          </span>

          <div
            className={`mobile-dropdown-menu ${
              dropdowns.partners ? "show" : ""
            }`}
          >
            <button>Partner Types</button>
            <button>Partner Program</button>
            <button>Investor</button>
            <button>Become a Partner</button>
          </div>
        </div>

        <button>Blogs</button>

        <div className="buttons">
          <button className="login">LOG IN</button>
          <button className="contact">CONTACT US</button>
        </div>
      </div>
    </>
  );
}
