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
        <div className="logo">
          <img src="/logo-new.png" alt="Companian Commerce Agency" />
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>

        <ul className={`navbar-menu ${menuOpen ? "show-menu" : ""}`}>
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/amazon"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Amazon
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ebay"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              EBay
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shopify"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Shopify
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tiktokshop"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              TikTok Shop
            </NavLink>
          </li>
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
