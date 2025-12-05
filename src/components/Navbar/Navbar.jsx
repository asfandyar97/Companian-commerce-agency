import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* === Top Contact Bar === */}
      <div className="top-contact-bar">
        <div className="left-contact">
          <div className="contact-item">
            <FaEnvelope />{" "}
            <a href="mailto:info@companiancommerce.com">info@companiancommerce.com</a>
          </div>
          <div className="contact-item">
            <FaPhoneAlt />{" "}
            <a href="tel:+923155513063">+92 3155513063</a>
          </div>
        </div>

        <div className="right-contact">
          <div className="contact-item">
            <FaMapMarkerAlt /> Islamabad, Pakistan
          </div>
        </div>
      </div>

      {/* === Main Navbar === */}
      <nav className="navbar default-navbar">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src="/logo-new.png" alt="Companian Commerce Agency" />
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>

        {/* Navbar links */}
        <ul className={`navbar-menu ${menuOpen ? "show-menu" : ""}`}>
          {["/", "/about", "/amazon", "/ebay", "/shopify", "/tiktokshop"].map((path, i) => {
            const labels = ["Home", "About", "Amazon", "eBay", "Shopify", "TikTok Shop"];
            return (
              <li key={i}>
                <NavLink
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {labels[i]}
                </NavLink>
              </li>
            );
          })}
          <li className="mobile-contact-link">
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop contact button */}
        <div className="contact-link">
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
