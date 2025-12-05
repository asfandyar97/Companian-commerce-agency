import React, { useState } from "react";
import "./Shopify.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  FaStore,
  FaTags,
  FaPalette,
  FaShippingFast,
  FaCogs,
  FaBullhorn,
  FaChartLine,
  FaTools,
  FaCheckCircle,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const shopifyServices = [
  // ---- SAME AS YOUR ORIGINAL ARRAY ----
  {
    id: "shopify-1",
    title: "Shopify Store Setup & Customization",
    text: "We set up your Shopify store from scratch including theme selection, essential pages, navigation menus, and store settings tailored specifically to your brand.",
    image: "image1.jpg",
    icon: <FaStore />,
    benefits: ["Custom Layouts", "Complete Setup", "Responsive Design"],
    highlightText: "FULLY CUSTOMIZED",
  },
  {
    id: "shopify-2",
    title: "Product Listing & SEO",
    text: "Get your products listed with professionally written titles, descriptions, and SEO-optimized metadata for higher search visibility.",
    image: "image2.jpg",
    icon: <FaTags />,
    benefits: ["SEO Optimized", "High Discoverability", "Keyword Strategy"],
    highlightText: "RANK HIGHER",
  },
  {
    id: "shopify-3",
    title: "Theme Design & Branding",
    text: "We customize your store theme to reflect your brand identity and create a professional, trust-building shopping experience.",
    image: "image3.jpg",
    icon: <FaPalette />,
    benefits: ["Brand Identity", "Elegant Design", "Consistent UI"],
    highlightText: "STRONG BRANDING",
  },
  {
    id: "shopify-4",
    title: "Payment & Shipping Integration",
    text: "We integrate secure payment gateways and configure shipping zones, rates, rules, and tracking for a smooth checkout flow.",
    image: "image4.jpg",
    icon: <FaShippingFast />,
    benefits: ["Fast Checkout", "Multiple Gateways", "Shipping Zones"],
    highlightText: "SEAMLESS FLOW",
  },
  {
    id: "shopify-5",
    title: "Shopify Apps Configuration",
    text: "We install and configure apps for reviews, upsells, chat, and more to improve functionality and conversion rates.",
    image: "image5.jpg",
    icon: <FaCogs />,
    benefits: ["Enhanced Features", "Sales Tools", "3rd-Party Integrations"],
    highlightText: "SMART APPS",
  },
  {
    id: "shopify-6",
    title: "Marketing & Automation",
    text: "We set up automated email flows, cart recovery, and lead-generation tools to maximize customer retention.",
    image: "image6.jpg",
    icon: <FaBullhorn />,
    benefits: ["Email Campaigns", "Lead Generation", "Cart Recovery"],
    highlightText: "AUTOMATED GROWTH",
  },
  {
    id: "shopify-7",
    title: "Shopify Analytics & Reporting",
    text: "Track sales, traffic, and user behavior to make smart data-driven decisions using detailed analytics dashboards.",
    image: "image7.jpg",
    icon: <FaChartLine />,
    benefits: ["Traffic Tracking", "Sales Insights", "Behavior Analysis"],
    highlightText: "DATA INSIGHTS",
  },
  {
    id: "shopify-8",
    title: "Store Maintenance & Support",
    text: "We provide ongoing maintenance, theme updates, bug fixes, and performance optimizations.",
    image: "image8.jpg",
    icon: <FaTools />,
    benefits: ["24/7 Support", "Bug Fixing", "Store Uptime"],
    highlightText: "RELIABLE SUPPORT",
  },
];

// ---------------- FAQ DATA ----------------
const shopifyFaqsLeft = [
  {
    q: "How long does it take to build a Shopify store?",
    a: "Usually 3–7 days depending on design, pages, apps, and customization required.",
  },
  {
    q: "Will you create product descriptions?",
    a: "Yes, we write SEO-optimized titles, descriptions, meta tags, and alt texts.",
  },
  {
    q: "Do you also handle branding and theme design?",
    a: "Yes, we fully customize themes for consistent brand identity and professional UI.",
  },
    {
    q: "Do you provide Shopify marketing and automation setup?",
    a: "Yes, we set up email flows, abandoned cart recovery, popups, and automation tools.",
  },
];

const shopifyFaqsRight = [
  {
    q: "Can you integrate payment gateways?",
    a: "Yes, we integrate debit/credit cards, PayPal, Stripe, COD (if available), and local gateways.",
  },
  {
    q: "Do you offer store maintenance?",
    a: "Yes, we offer monthly store updates, bug fixes, and performance monitoring.",
  },
  {
    q: "Will you install and configure Shopify apps?",
    a: "Absolutely  reviews, upsells, chatbots, tracking, marketing apps, everything!",
  },
   {
    q: "Do you provide long-term maintenance?",
    a: "Yes, we offer monthly store maintenance, bug fixing, updates, and performance checks.",
  },
];

const Shopify = () => {
  const [leftActive, setLeftActive] = useState(null);
  const [rightActive, setRightActive] = useState(null);

  return (
    <div className="services-wrapper">
      <Helmet>
  {/* Page Title */}
  <title>Shopify Services | Companian Commerce Agency | Store Setup, SEO & Marketing</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Professional Shopify store setup, theme customization, product SEO, app configuration, marketing, and long-term support from Companian Commerce Agency."
  />

  {/* Canonical & Robots */}
  <link rel="canonical" href="https://www.companiancommerce.com/shopify" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph / Social Media */}
  <meta property="og:title" content="Shopify Services — Companian Commerce Agency" />
  <meta
    property="og:description"
    content="Shopify store setup, theme customization, SEO, app configuration, marketing & analytics to grow your online store efficiently."
  />
  <meta property="og:image" content="https://www.companiancommerce.com/images/about-og.png" />
  <meta property="og:url" content="https://www.companiancommerce.com/shopify" />
  <meta property="og:type" content="website" />

  {/* Facebook & LinkedIn */}
  <meta property="article:publisher" content="https://www.facebook.com/share/14UF1Vx9iZu/" />
  <meta property="article:author" content="https://www.linkedin.com/company/companian-commerce-agency/" />

  {/* ⭐ Breadcrumb Schema ⭐ */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.companiancommerce.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Shopify Services",
          "item": "https://www.companiancommerce.com/shopify"
        }
      ]
    }
    `}
  </script>

  {/* ⭐ WebPage Schema ⭐ */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Shopify Services | Companian Commerce Agency",
      "url": "https://www.companiancommerce.com/shopify",
      "description": "Professional Shopify store setup, theme customization, product SEO, app configuration, marketing, and long-term support from Companian Commerce Agency."
    }
    `}
  </script>
</Helmet>


      {/* -------------------- SERVICES SECTION -------------------- */}
      <div className="services-container">
        <h2 className="services-title">Shopify Services</h2>

        {shopifyServices.map((service, index) => (
          <motion.div
            key={service.id}
            className={`service-section ${index % 2 !== 0 ? "reverse" : ""}`}
            initial={{ opacity: 0, x: index % 2 !== 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="service-text">
              <div className="step-circle">{index + 1}</div>

              <h3 className="icon-title">
                {service.icon} {service.title}
              </h3>

              <ul className="benefit-list">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <FaCheckCircle className="benefit-icon" /> {benefit}
                  </li>
                ))}
              </ul>

              <div className="highlight-box">{service.highlightText}</div>

              <p>{service.text}</p>
            </div>

            <div className="service-image">
              <div className="image-box">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* -------------------- FAQ SECTION -------------------- */}
      <div className="faq-container">
        <h2 className="faq-main-title">Frequently Asked Questions</h2>

        <div className="faq-grid">
          {/* LEFT COLUMN */}
          <div className="faq-column">
            {shopifyFaqsLeft.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${leftActive === index ? "active" : ""}`}
                onClick={() =>
                  setLeftActive(leftActive === index ? null : index)
                }
              >
                <div className="faq-question">
                  {item.q}
                  <span className="faq-icon">
                    {leftActive === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {leftActive === index && (
                  <div className="faq-answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="faq-column">
            {shopifyFaqsRight.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${rightActive === index ? "active" : ""}`}
                onClick={() =>
                  setRightActive(rightActive === index ? null : index)
                }
              >
                <div className="faq-question">
                  {item.q}
                  <span className="faq-icon">
                    {rightActive === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {rightActive === index && (
                  <div className="faq-answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopify;
