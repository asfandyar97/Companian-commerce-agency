import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutPage.css';
import HeroBg from '../assets/hero-bg.jpg';
import WhyUsCircle from '../assets/why-us-circle.png';
import { FaRocket } from 'react-icons/fa';
import { Helmet } from 'react-helmet'; // ✅ Helmet import added

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-page">
      <Helmet>
        <title>About Us | Companian Commerce Agency</title>

        <meta
          name="description"
          content="Learn about Companian Commerce Agency — expert eCommerce team helping brands scale on Amazon, eBay, Shopify, and TikTok Shop through advanced seller services, PPC marketing, and catalog optimization."
        />

        <link rel="canonical" href="https://www.companiancommerce.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Companian Commerce Agency" />
        <meta
          property="og:description"
          content="Meet the expert team behind Companian Commerce — dedicated to scaling Amazon, eBay, Shopify & TikTok Shop brands."
        />
        <meta property="og:image" content="https://www.companiancommerce.com/og-image.png" />
        <meta property="og:url" content="https://www.companiancommerce.com/about" />
        <meta property="og:type" content="website" />

        <meta name="robots" content="index, follow" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Companian Commerce, About Companian Commerce Agency, Amazon management team, eCommerce experts, Shopify specialists, TikTok Shop agency, eBay account management team"
        />
      </Helmet>


      {/* HERO SECTION */}
      <section className="about-hero" style={{ backgroundImage: `url(${HeroBg})` }}>
        <h1 data-aos="zoom-in">About Companian Commerce</h1>
      </section>

      {/* INTRO SECTION */}
      <section className="about-intro">
        <div className="container">
          <h2 data-aos="fade-up">Your Trusted Partner in eCommerce Growth</h2>
          <p data-aos="fade-up">
            We’re a passionate team helping brands grow on Amazon, Shopify, TikTok Shop, and eBay with data-driven strategies and hands-on expertise.
          </p>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="why-us-section">
        <div className="container">
          <h2 data-aos="fade-up">Why Choose Companian Commerce?</h2>
          <div className="why-us-content">
            <div className="why-us-left" data-aos="fade-right">
              <img src={WhyUsCircle} alt="Why Us" />
            </div>
            <div className="why-us-right" data-aos="fade-left">
              {[
                { title: 'Specialized Teams', text: 'Platform-specific experts who understand each marketplace deeply.' },
                { title: 'Custom Solutions', text: 'No templates. Everything is tailored to your goals and market.' },
                { title: 'Performance First', text: 'We focus on what matters most visibility, conversions, and ROI.' },
                { title: 'Transparent Process', text: 'We believe in honest work, clear updates, and no surprises.' },
                { title: 'Global Reach', text: 'Serving clients across the US, UK, UAE, Canada and more.' },
              ].map((item, i) => (
                <div className="why-point" key={i}>
                  <div className="why-icon-text">
                    <span className="why-icon">✔</span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-content" data-aos="fade-up">
            <div className="mission-box">
              <h3>🌟 Our Mission</h3>
              <p>
                To empower brands with intelligent digital strategies that scale eCommerce growth and unlock full marketplace potential.
              </p>
            </div>
            <div className="vision-box">
              <h3>🚀 Our Vision</h3>
              <p>
                To be the most trusted growth partner for eCommerce brands around the globe, delivering real results not promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="values-section" data-aos="fade-up">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-box">
              <i className="fas fa-handshake icon"></i>
              <h4>Integrity</h4>
              <p>We believe in honest communication, transparency, and always delivering what we promise.</p>
            </div>
            <div className="value-box">
              <i className="fas fa-lightbulb icon"></i>
              <h4>Innovation</h4>
              <p>We push boundaries using cutting-edge strategies and tech to help clients stay ahead.</p>
            </div>
            <div className="value-box">
              <i className="fas fa-chart-line icon"></i>
              <h4>Customer Success</h4>
              <p>Your growth is our mission we’re invested in helping you succeed long term.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section" data-aos="fade-up">
        <div className="container cta-container">
          <div className="cta-icon">
            <FaRocket />
          </div>
          <h2>Let’s Grow Together</h2>
          <p>
            Ready to take your eCommerce brand to the next level?<br />
            Let’s build something amazing with Companian Commerce.
          </p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;