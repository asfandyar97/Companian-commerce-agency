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
    text: "CompanianCommerce sets up your Shopify store from scratch custom layouts, responsive themes, migration from WooCommerce/Magento. Theme selection, essential pages, navigation menus, store settings tailored to your brand. Fast launch with SEO foundation, dropshipping ready, mobile-optimized for seamless ecommerce success",
    image: "image1.jpg",
    icon: <FaStore />,
    benefits: ["Custom Layouts", "Complete Setup", "Responsive Design"],
    highlightText: "FULLY CUSTOMIZED",
  },
  {
    id: "shopify-2",
    title: "Product Listing & SEO",
    text: "We delivers SEO-optimized product listings with high-volume keywords. Professional titles, descriptions, metadata boost Google ranking & discoverability. Keyword strategy ensures top positions, higher traffic, better conversions for your store. Rank higher than competitors effortlessly with proven optimization techniques",
    image: "image2.jpg",
    icon: <FaTags />,
    benefits: ["SEO Optimized", "High Discoverability", "Keyword Strategy"],
    highlightText: "RANK HIGHER",
  },
  {
    id: "shopify-3",
    title: "Theme Design & Branding",
    text: "Custom Shopify theme design reflects your brand identity  elegant UI/UX, mobile-responsive, consistent branding for professional experience. CompanianCommerce creates compelling visuals, easy navigation that reduce bounce rates. Stand out from competition with brand-centric themes that build trust",
    image: "image3.jpg",
    icon: <FaPalette />,
    benefits: ["Brand Identity", "Elegant Design", "Consistent UI"],
    highlightText: "STRONG BRANDING",
  },
  {
    id: "shopify-4",
    title: "Payment & Shipping Integration",
    text: "We offers Seamless PayPal & bank transfer integration  fast checkout, secure transactions. Configure shipping zones, rates, rules, tracking for smooth delivery. Multiple payment options ensure customer satisfaction, higher conversions, uninterrupted ecommerce flow every time you process orders",
    image: "image4.jpg",
    icon: <FaShippingFast />,
    benefits: ["Fast Checkout", "Multiple Gateways", "Shipping Zones"],
    highlightText: "SEAMLESS FLOW",
  },
  {
    id: "shopify-5",
    title: "Shopify Apps Configuration",
    text: "Smart apps configuration boosts functionality  reviews, upsells, chat, dropshipping tools, 3rd-party integrations. Enhance sales with review apps, abandoned cart recovery, email marketing. Essential apps improve conversion rates, customer experience, store performance dramatically",
    image: "image5.jpg",
    icon: <FaCogs />,
    benefits: ["Enhanced Features", "Sales Tools", "3rd-Party Integrations"],
    highlightText: "SMART APPS",
  },
  {
    id: "shopify-6",
    title: "Marketing & Automation",
    text: "Automated growth tools  email campaigns, cart recovery, lead generation for maximum retention. Set up flows for welcome series, abandoned carts, post-purchase upsells. Personalized marketing recovers lost sales, builds customer loyalty, drives repeat business profitably",
    image: "image6.jpg",
    icon: <FaBullhorn />,
    benefits: ["Email Campaigns", "Lead Generation", "Cart Recovery"],
    highlightText: "AUTOMATED GROWTH",
  },
  {
    id: "shopify-7",
    title: "Shopify Analytics & Reporting",
    text: "Complete data insights  traffic tracking, sales analytics, behavior analysis dashboards for smart decisions. Monitor customer journey, conversion funnels, top products. Optimize store performance, identify growth opportunities, scale business profitably with real-time insights",
    image: "image7.jpg",
    icon: <FaChartLine />,
    benefits: ["Traffic Tracking", "Sales Insights", "Behavior Analysis"],
    highlightText: "DATA INSIGHTS",
  },
  {
    id: "shopify-8",
    title: "Store Maintenance & Support",
    text: "24/7 maintenance & support  bug fixes, theme updates, performance optimization, regular security checks. Ensure 99.9% uptime, handle peak traffic, fix issues instantly. Ongoing support keeps your Shopify investment secure, performing at peak efficiency always.",
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
  {/* ✅ Page Title & Description */}
  <title>Shopify Services | Companian Commerce Agency | Store Setup, SEO & Marketing</title>
  <meta
    name="description"
    content="Grow your Shopify store with Companian Commerce Agency. Expert store setup, theme customization, product SEO, app configuration, marketing, and long-term support to increase sales and revenue."
  />
  <link rel="canonical" href="https://www.companiancommerce.com/shopify" />
  <meta name="robots" content="index, follow" />

  {/* ✅ Open Graph / Social Sharing */}
  <meta property="og:title" content="Shopify Services — Companian Commerce Agency" />
  <meta
    property="og:description"
    content="Professional Shopify services including store setup, theme customization, product SEO, app configuration, marketing & analytics — grow your Shopify store today."
  />
  <meta property="og:image" content="https://www.companiancommerce.com/images/about-og.png" />
  <meta property="og:url" content="https://www.companiancommerce.com/shopify" />
  <meta property="og:type" content="website" />

  {/* ✅ Publisher & Author */}
  <meta property="article:publisher" content="https://www.facebook.com/share/14UF1Vx9iZu/" />
  <meta property="article:author" content="https://www.linkedin.com/company/companian-commerce-agency/" />

  {/* ✅ Keywords (Optional) */}
  <meta
    name="keywords"
    content="Shopify services, Shopify store setup, Shopify SEO, theme customization, product optimization, app configuration, Shopify marketing"
  />

  {/* ✅ Breadcrumb Schema */}
  <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem","position":1,"name":"Home","item":"https://www.companiancommerce.com/"},
      {"@type": "ListItem","position":2,"name":"Shopify Services","item":"https://www.companiancommerce.com/shopify"}
    ]
  }
  `}</script>

  {/* ✅ WebPage Schema */}
  <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Shopify Services | Companian Commerce Agency",
    "url": "https://www.companiancommerce.com/shopify",
    "description": "Grow your Shopify store with expert store setup, theme customization, product SEO, app configuration, marketing, and long-term support from Companian Commerce Agency."
  }
  `}</script>
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
