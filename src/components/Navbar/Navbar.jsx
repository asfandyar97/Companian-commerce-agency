import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isHome ? "home-navbar" : "default-navbar"}`}>
      <div className="logo">
        <img src="/logoo.png" alt="Logo" />
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>

      <ul className={`navbar-menu ${menuOpen ? "show-menu" : ""}`}>
        <li>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/amazon" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
            Amazon
          </NavLink>
        </li>
        <li>
          <NavLink to="/ebay" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
            EBay
          </NavLink>
        </li>
        <li>
          <NavLink to="/shopify" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
            Shopify
          </NavLink>
        </li>
        <li>
          <NavLink to="/tiktokshop" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
            TikTok Shop
          </NavLink>
        </li>
        <li className="mobile-contact-link">
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="contact-link">
        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
