import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

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

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false); // close mobile menu automatically
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
        {/* LOGO CLICKABLE */}
        <img
          src="https://rimglobal.trade/assets/logo/logo.svg"
          className="logo"
          alt="logo"
          onClick={() => handleNav("/")}
          style={{ cursor: "pointer" }}
        />

        {/* DESKTOP NAV */}
        <nav className="nav">
          <button className="nav-item" onClick={() => handleNav("/App.js")}>
            Home
          </button>

          <button className="nav-item" onClick={() => handleNav("/about")}>
            About
          </button>

          {/* ACCOUNTS */}
          <div className="dropdown nav-item">
            <span className="dropdown-trigger">
              Accounts <span className="arrow">▾</span>
            </span>

            <div className="dropdown-menu">
              <button onClick={() => handleNav("/account-type")}>
                Account Type
              </button>

              <button onClick={() => handleNav("/demo-account")}>
                Demo Account
              </button>

              <button onClick={() => handleNav("/WithdrawalDeposist")}>
                Withdrawal & Deposits
              </button>
            </div>
          </div>

          {/* PARTNERS */}
          <div className="dropdown nav-item">
            <span className="dropdown-trigger">
              Partners <span className="arrow">▾</span>
            </span>

            <div className="dropdown-menu">
              <button onClick={() => handleNav("/PartnerTypes")}>
                Partner Types
              </button>

              <button onClick={() => handleNav("/partners")}>
                Partner Program
              </button>

              <button onClick={() => handleNav("/Investor")}>Investor</button>

              <button onClick={() => handleNav("/BecomePartner")}>
                Become a Partner
              </button>
            </div>
          </div>

          <button className="nav-item" onClick={() => handleNav("/blogs")}>
            Blogs
          </button>
        </nav>

        {/* BUTTONS */}
        <div className="buttons">
          <button className="login" onClick={() => handleNav("/login")}>
            LOG IN
          </button>

          <button className="contact" onClick={() => handleNav("/contact")}>
            CONTACT US
          </button>
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

        <button onClick={() => handleNav("/")}>Home</button>
        <button onClick={() => handleNav("/about")}>About</button>

        {/* MOBILE ACCOUNTS */}
        <div className="mobile-dropdown">
          <span onClick={() => toggleDropdown("accounts")}>
            Accounts {dropdowns.accounts ? "▴" : "▾"}
          </span>

          <div
            className={`mobile-dropdown-menu ${
              dropdowns.accounts ? "show" : ""
            }`}
          >
            <button onClick={() => handleNav("/account-type")}>
              Account Type
            </button>

            <button onClick={() => handleNav("/demo-account")}>
              Demo Account
            </button>

            <button onClick={() => handleNav("/withdrawal-deposit")}>
              Withdrawal & Deposits
            </button>
          </div>
        </div>

        {/* MOBILE PARTNERS */}
        <div className="mobile-dropdown">
          <span onClick={() => toggleDropdown("partners")}>
            Partners {dropdowns.partners ? "▴" : "▾"}
          </span>

          <div
            className={`mobile-dropdown-menu ${
              dropdowns.partners ? "show" : ""
            }`}
          >
            <button onClick={() => handleNav("/partner-types")}>
              Partner Types
            </button>

            <button onClick={() => handleNav("/partners")}>
              Partner Program
            </button>

            <button onClick={() => handleNav("/investor")}>Investor</button>

            <button onClick={() => handleNav("/become-partner")}>
              Become a Partner
            </button>
          </div>
        </div>

        <button onClick={() => handleNav("/blogs")}>Blogs</button>

        <div className="buttons">
          <button className="login" onClick={() => handleNav("/login")}>
            LOG IN
          </button>

          <button className="contact" onClick={() => handleNav("/contact")}>
            CONTACT US
          </button>
        </div>
      </div>
    </>
  );
}
