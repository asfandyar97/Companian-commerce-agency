import React, { useState } from 'react';
import './Ebay.css';

import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  FaListUl,
  FaPaintBrush,
  FaSearch,
  FaUsers,
  FaBullhorn,
  FaBoxes,
  FaAd,
  FaChartBar,
  FaCheckCircle,
} from 'react-icons/fa';

const ebayServices = [
  {
    id: 'ebay-1',
    title: 'Product Listing & SEO',
    text: 'We create SEO‑friendly eBay listings with clear titles, compelling descriptions, and optimized backend keywords to boost search visibility and clicks. Listings are aligned with real buyer search behavior so your products appear in front of the right audience and generate more sales. Our team focuses on high‑traffic, low‑competition long‑tail keywords and mobile‑friendly copy to help your listings stand out, rank higher, and convert better',
    image: 'image1.jpg',
    icon: <FaListUl />,
    benefits: ['High Visibility', 'Improved Rankings', 'SEO Friendly'],
    highlightText: 'OPTIMIZED LISTINGS',
  },
  {
    id: 'ebay-2',
    title: 'eBay Store Design & Branding',
    text: 'We design professional, branded eBay storefronts that build trust and make your business look established. Custom banners, clean layouts, and consistent branding help buyers recognize your store and feel confident to purchase. A well‑structured store makes it easier for shoppers to find products, stay longer, and come back again, turning casual visitors into repeat customers',
    image: 'image2.jpg',
    icon: <FaPaintBrush />,
    benefits: ['Branded Design', 'Professional Look', 'Repeat Buyers'],
    highlightText: 'TRUSTED STORE',
  },
  {
    id: 'ebay-3',
    title: 'Keyword Targeting & Research',
    text: 'We perform in‑depth eBay keyword research to find the exact terms your buyers are searching for. By targeting high‑traffic, low‑competition keywords, we help your listings rank higher and attract more qualified visitors. Every keyword strategy is tailored to your niche and eBay’s algorithm, so your products stay visible, relevant, and ready to convert',
    image: 'image3.jpg',
    icon: <FaSearch />,
    benefits: ['Relevant Keywords', 'Better Visibility', 'Targeted Search'],
    highlightText: 'KEYWORD STRATEGY',
  },
  {
    id: 'ebay-4',
    title: 'Competitor Analysis & Strategy',
    text: 'We analyze competing eBay listings, pricing, and offers to see exactly how your rivals sell. Using these insights, we refine your pricing, offers, and positioning so your products stand out and win more clicks and sales in your category',
    image: 'image4.jpg',
    icon: <FaUsers />,
    benefits: ['Market Advantage', 'Price Strategy', 'Competitive Edge'],
    highlightText: 'SMART POSITIONING',
  },
  {
    id: 'ebay-5',
    title: 'Campaign Manager & Promotions',
    text: 'We set up and manage eBay promotions like coupons, markdown sales, and promoted listings to drive more traffic to your products. Every campaign is optimized for your goals so you get better visibility, higher click‑through rates, and more conversions',
    image: 'image5.jpg',
    icon: <FaBullhorn />,
    benefits: ['Sales Boost', 'Traffic Growth', 'Targeted Offers'],
    highlightText: 'PROMOTION TOOLS',
  },
  {
    id: 'ebay-6',
    title: 'Order & Inventory Management',
    text: 'We help you keep inventory and orders in sync so you avoid overselling and stockouts. With accurate stock tracking and smooth order handling, your buyers get their products on time and your seller performance stays strong',
    image: 'image6.jpg',
    icon: <FaBoxes />,
    benefits: ['Stock Accuracy', 'Efficient Orders', 'No Overselling'],
    highlightText: 'INVENTORY CONTROL',
  },
  {
    id: 'ebay-7',
    title: 'Ads Setup & Performance Reporting',
    text: 'We create and optimize eBay ad campaigns that put your products in front of the right shoppers. Regular reports show what’s working so we can adjust bids, keywords, and budgets to improve ROI over time',
    image: 'image7.jpg',
    icon: <FaAd />,
    benefits: ['Ad Insights', 'Better ROI', 'Campaign Scaling'],
    highlightText: 'AD MANAGEMENT',
  },
  {
    id: 'ebay-8',
    title: 'Store & Listing Analytics',
    text: 'We track key metrics like impressions, clicks, and conversions to understand how your eBay store is performing. Using this data, we make smart changes to listings and store layout to keep improving sales and long‑term growth',
    image: 'image8.jpg',
    icon: <FaChartBar />,
    benefits: ['Data Insights', 'Performance Tracking', 'Growth Focus'],
    highlightText: 'DATA-DRIVEN',
  },
];

const faqs = [
  {
    question: "How does Companian Commerce optimize eBay listings?",
    answer:
      "We enhance eBay listings with optimized titles, descriptions, backend keywords, and high-quality images to improve visibility, conversions, and alignment with buyer search behavior.",
  },
  {
    question: "What strategies are used for eBay SEO?",
    answer:
      "Our SEO strategy includes keyword research, optimized titles and descriptions, detailed item specifics, and structured data to ensure listings rank higher on eBay search results.",
  },
  {
    question: "How can eBay Store Design & Branding benefit my business?",
    answer:
      "We create a professional, branded storefront with banners, category layouts, and cohesive branding to build trust, encourage repeat buyers, and increase customer engagement.",
  },
  {
    question: "How does keyword targeting work on eBay?",
    answer:
      "We conduct targeted keyword research based on eBay’s algorithm, competitor analysis, and buyer behavior to increase visibility, attract relevant traffic, and drive more sales.",
  },
  {
    question: "What kind of campaigns and promotions do you manage?",
    answer:
      "We manage promotional tools including time-limited offers, coupons, markdowns, and promoted listings to boost traffic, increase sales, and maximize ROI.",
  },
  {
    question: "How is inventory and order management handled?",
    answer:
      "We streamline stock management and order fulfillment to reduce delays, prevent overselling, and ensure a smooth buyer experience with accurate real-time inventory tracking.",
  },
  {
    question: "How do you manage eBay ads and performance reporting?",
    answer:
      "We set up and optimize promoted listings, track performance with analytics, and adjust campaigns for better reach, higher click-through rates, and improved ROI.",
  },
  {
    question: "How do you use analytics to improve eBay store performance?",
    answer:
      "We track store and listing metrics such as impressions, clicks, sales, and buyer behavior to provide insights and implement data-driven improvements for sustained growth.",
  },
];

const Ebay = () => {
  const [leftActive, setLeftActive] = useState(null);
  const [rightActive, setRightActive] = useState(null);

  return (
    <div className="services-wrapper">
      {/* ===== Helmet & SEO ===== */}
     <Helmet>
  {/* ✅ Page Title & Description */}
  <title>eBay Services | Companian Commerce Agency | Listing SEO & Store Management</title>
  <meta
    name="description"
    content="Grow your eBay sales with Companian Commerce Agency. Expert eBay listing optimization, store design, keyword research, PPC ads, competitor analysis, and complete eBay store management services."
  />
  <link rel="canonical" href="https://www.companiancommerce.com/ebay" />
  <meta name="robots" content="index, follow" />

  {/* ✅ Open Graph / Social Sharing */}
  <meta property="og:title" content="eBay Services — Companian Commerce Agency" />
  <meta
    property="og:description"
    content="Professional eBay services including listing SEO, store branding, keyword research, PPC ads, product optimization & full account management — grow your eBay business today."
  />
  <meta property="og:image" content="https://www.companiancommerce.com/images/about-og.png" />
  <meta property="og:url" content="https://www.companiancommerce.com/ebay" />
  <meta property="og:type" content="website" />

  {/* ✅ Publisher & Author */}
  <meta property="article:publisher" content="https://www.facebook.com/share/14UF1Vx9iZu/" />
  <meta property="article:author" content="https://www.linkedin.com/company/companian-commerce-agency/" />

  {/* ✅ Keywords (Optional) */}
  <meta
    name="keywords"
    content="eBay services, eBay SEO, eBay listing optimization, eBay store management, eBay PPC ads, eBay marketing, eBay product optimization"
  />

  {/* ✅ Breadcrumb Schema */}
  <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem","position":1,"name":"Home","item":"https://www.companiancommerce.com/"},
      {"@type": "ListItem","position":2,"name":"eBay Services","item":"https://www.companiancommerce.com/ebay"}
    ]
  }
  `}</script>

  {/* ✅ WebPage Schema */}
  <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "eBay Services | Companian Commerce Agency",
    "url": "https://www.companiancommerce.com/ebay",
    "description": "Grow your eBay sales with expert listing optimization, store design, keyword research, PPC ads, competitor analysis & complete eBay store management from Companian Commerce Agency."
  }
  `}</script>
</Helmet>

      {/* ===== Services Section ===== */}
      <div className="services-container">
        <h2 className="services-title">eBay Services</h2>
        {ebayServices.map((service, index) => (
          <motion.div
            key={service.id}
            className={`service-section ${index % 2 !== 0 ? 'reverse' : ''}`}
            initial={{ opacity: 0, x: index % 2 !== 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
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

      {/* ===== FAQ Section ===== */}
      <div className="faq-container">
        <h2 className="faq-title">
          Frequently Asked <span>Questions</span>
        </h2>
        <p className="faq-subtitle">
          Get quick answers about how Companian Commerce helps brands grow faster on eBay.
        </p>

        <div className="faq-grid">
          {/* Left Column */}
          <div>
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${leftActive === index ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setLeftActive(leftActive === index ? null : index)
                  }
                >
                  {faq.question}
                  <span className="faq-icon">
                    {leftActive === index ? '−' : '+'}
                  </span>
                </button>
                <div className="faq-answer">
                  {leftActive === index && <p>{faq.answer}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${rightActive === index ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setRightActive(rightActive === index ? null : index)
                  }
                >
                  {faq.question}
                  <span className="faq-icon">
                    {rightActive === index ? '−' : '+'}
                  </span>
                </button>
                <div className="faq-answer">
                  {rightActive === index && <p>{faq.answer}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ebay;
