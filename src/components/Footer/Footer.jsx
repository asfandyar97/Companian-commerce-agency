import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // 👈 Required for routing

const Footer = () => {
  const navigate = useNavigate();

  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Left Side: Logo + Text + Social */}
          <div className="footer-left">
            <img className="footer-logo" src="/logo-new.png" alt="Companion Commerce Logo" />
            <p className="footer-text">
              Helping brands grow faster on Amazon, eBay, Shopify, and TiktokShop & more. Your trusted ecommerce partner.
            </p>
            <ul className="footer-social">
              <li>
                <a href="https://web.whatsapp.com/send?phone=03155513063" target="_blank" rel="noreferrer">
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/muhammad-adnan-919685289/" target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-link-block">
            <p className="footer-heading">Contact Us</p>
            <ul>
              <li><a href="mailto:Zmarayalkhan@gmail.com">Email: Zmarayalkhan@gmail.com</a></li>
              <li><a href="tel:+923155513063">Phone: +92 3155513063</a></li>
              <p>Location: Islamabad, Pakistan</p>
            </ul>
          </div>

          {/* Quick Links with Routing */}
          <div className="footer-link-block">
            <p className="footer-heading">Quick Links</p>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/amazon">Amazon Services</Link></li>
              <li><Link to="/ebay">Ebay Services</Link></li>
              <li><Link to="/shopify">Shopify Services</Link></li>
              <li><Link to="/tiktokShop">Tiktok Shop</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Replaced Newsletter with CTA */}
          <div className="footer-cta-block">
            <p className="footer-heading">Have a Project in Mind?</p>
            <p>Let’s talk and see how Companion Commerce can help your business grow.</p>
            <button className="footer-cta-button" onClick={() => navigate("/contact")}>
              Get in Touch
            </button>
          </div>
        </div>

        <hr className="footer-divider" />
        <p className="footer-bottom">© {new Date().getFullYear()} Companion Commerce Agency. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
