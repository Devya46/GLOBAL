import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  LogIn,
  Mail,
  Home,
  Info,
  BookOpen,
  User,
  Users,
  Briefcase,
  Handshake,
  CreditCard,
  Wallet,
  Rocket,
  TrendingUp,
} from "lucide-react";

// Mobile Dropdown Item Component
const MobileDropdownItem = ({ item, handleNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const icons = {
    home: Home,
    info: Info,
    user: User,
    handshake: Handshake,
    book: BookOpen,
    creditcard: CreditCard,
    rocket: Rocket,
    wallet: Wallet,
    users: Users,
    briefcase: Briefcase,
    trendingup: TrendingUp,
  };

  const Icon = icons[item.icon];
  const hasDropdown = item.dropdown && item.dropdown.length > 0;

  if (hasDropdown) {
    return (
      <div className="mobile-dropdown">
        <button
          className="mobile-dropdown-trigger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="mobile-dropdown-left">
            <Icon size={20} />
            <span>{item.label}</span>
          </span>
          <ChevronDown size={18} className={isOpen ? "rotated" : ""} />
        </button>
        <div className={`mobile-dropdown-menu ${isOpen ? "show" : ""}`}>
          {item.dropdown.map((subItem) => {
            const SubIcon = icons[subItem.icon];
            return (
              <button
                key={subItem.path}
                className="mobile-dropdown-item"
                onClick={() => handleNav(subItem.path)}
              >
                <SubIcon size={18} />
                <span>{subItem.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <button className="mobile-nav-link" onClick={() => handleNav(item.path)}>
      <Icon size={20} />
      <span>{item.label}</span>
    </button>
  );
};

export default function Header() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const handleDropdownEnter = (dropdown) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const icons = {
    home: Home,
    info: Info,
    user: User,
    handshake: Handshake,
    book: BookOpen,
    creditcard: CreditCard,
    rocket: Rocket,
    wallet: Wallet,
    users: Users,
    briefcase: Briefcase,
    trendingup: TrendingUp,
  };

  const navItems = [
    { label: "Home", path: "/", icon: "home" },
    { label: "About", path: "/About", icon: "info" },
    {
      label: "Accounts",
      icon: "user",
      dropdown: [
        { label: "Account Types", path: "/account-type", icon: "creditcard" },
        { label: "Demo Account", path: "/demo-account", icon: "rocket" },
        {
          label: "Withdrawal & Deposits",
          path: "/WithdrawalDeposist",
          icon: "wallet",
        },
      ],
    },
    {
      label: "Partners",
      icon: "handshake",
      dropdown: [
        { label: "Partner Types", path: "/PartnerTypes", icon: "users" },
        { label: "Partner Program", path: "/partners", icon: "briefcase" },
        { label: "Investor", path: "/Investor", icon: "trendingup" },
        {
          label: "Become a Partner",
          path: "/BecomePartner",
          icon: "handshake",
        },
      ],
    },
    { label: "Blogs", path: "/BLOGS", icon: "book" },
  ];

  const getIcon = (iconName) => {
    const Icon = icons[iconName];
    return Icon ? <Icon size={18} /> : null;
  };

  return (
    <>
      <div
        className={`menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <div className="logo-wrapper">
            <img
              src="https://rimglobal.trade/assets/logo/logo.svg"
              className="logo"
              alt="RIM Global"
              onClick={() => handleNav("/")}
            />
          </div>
          <nav className="nav-desktop">
            {navItems.map((item) => {
              const hasDropdown = item.dropdown?.length > 0;
              const isActive = activeDropdown === item.label;
              if (hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className={`dropdown-wrapper ${isActive ? "active" : ""}`}
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button className="nav-link dropdown-trigger">
                      {getIcon(item.icon)}
                      <span>{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`dropdown-arrow ${isActive ? "rotated" : ""}`}
                      />
                    </button>
                    <div
                      className={`dropdown-menu-custom ${isActive ? "show" : ""}`}
                    >
                      <div className="dropdown-inner">
                        {item.dropdown.map((subItem) => (
                          <button
                            key={subItem.path}
                            className="dropdown-item"
                            onClick={() => handleNav(subItem.path)}
                          >
                            {getIcon(subItem.icon)}
                            <span>{subItem.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <button
                  key={item.label}
                  className="nav-link"
                  onClick={() => handleNav(item.path)}
                >
                  {getIcon(item.icon)}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
          <div className="header-buttons">
            <button className="btn-login" onClick={() => handleNav("/login")}>
              <LogIn size={18} />
              <span>LOG IN</span>
            </button>
            <button
              className="btn-contact"
              onClick={() => handleNav("/ContactUsPage")}
            >
              <Mail size={18} />
              <span>CONTACT US</span>
            </button>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </header>
      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <div className="mobile-nav-header">
          <img
            src="https://rimglobal.trade/assets/logo/logo.svg"
            className="mobile-logo"
            alt="RIM Global"
            onClick={() => handleNav("/")}
          />
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <MobileDropdownItem
              key={item.label}
              item={item}
              handleNav={handleNav}
            />
          ))}
        </div>
        <div className="mobile-buttons">
          <button
            className="mobile-btn-login"
            onClick={() => handleNav("/login")}
          >
            <LogIn size={18} />
            <span>LOG IN</span>
          </button>
          <button
            className="mobile-btn-contact"
            onClick={() => handleNav("/ContactUsPage")}
          >
            <Mail size={18} />
            <span>CONTACT US</span>
          </button>
        </div>
      </div>
    </>
  );
}
