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
    text: 'We create optimized listings with effective titles, descriptions, and backend keywords to improve visibility and conversions on eBay. Listings are crafted to align with buyer search behavior, ensuring discoverability and conversions. Our team conducts keyword research tailored for eBay’s unique algorithm and buyer intent. From detailed item specifics to persuasive copywriting and mobile-friendly formatting, we ensure each listing stands out and drives higher engagement across all devices.',
    image: 'image1.jpg',
    icon: <FaListUl />,
    benefits: ['High Visibility', 'Improved Rankings', 'SEO Friendly'],
    highlightText: 'OPTIMIZED LISTINGS',
  },
  {
    id: 'ebay-2',
    title: 'eBay Store Design & Branding',
    text: 'Design a professional, branded storefront that builds trust and encourages repeat customers. Visual appeal and branding consistency help attract and retain buyers. We create custom store banners, category layouts, and a cohesive brand identity that sets you apart from competitors. A well-designed store enhances buyer confidence, improves navigation, and increases the likelihood of repeat purchases making your eBay store a true brand destination.',
    image: 'image2.jpg',
    icon: <FaPaintBrush />,
    benefits: ['Branded Design', 'Professional Look', 'Repeat Buyers'],
    highlightText: 'TRUSTED STORE',
  },
  {
    id: 'ebay-3',
    title: 'Keyword Targeting & Research',
    text: 'Conduct targeted keyword research for your products to help them rank higher in eBay search results, increasing visibility and sales potential. We analyze top-performing keywords based on eBay’s unique algorithm, competitor insights, and real buyer behavior. Our approach ensures that your listings are matched with the most relevant and high-traffic terms leading to stronger search performance and more qualified traffic.',
    image: 'image3.jpg',
    icon: <FaSearch />,
    benefits: ['Relevant Keywords', 'Better Visibility', 'Targeted Search'],
    highlightText: 'KEYWORD STRATEGY',
  },
  {
    id: 'ebay-4',
    title: 'Competitor Analysis & Strategy',
    text: 'We evaluate your competitors and craft strategies to out-rank and out-sell them effectively. Stay ahead with smart pricing, positioning, and promotions. Our team conducts in-depth analysis of competing listings, pricing patterns, shipping options, and buyer feedback trends. Based on this data, we implement actionable strategies that give you a competitive edge helping your products stand out and dominate high-converting categories.',
    image: 'image4.jpg',
    icon: <FaUsers />,
    benefits: ['Market Advantage', 'Price Strategy', 'Competitive Edge'],
    highlightText: 'SMART POSITIONING',
  },
  {
    id: 'ebay-5',
    title: 'Campaign Manager & Promotions',
    text: 'Manage eBay promotional tools and campaigns to boost traffic and increase sales. We use eBay’s internal tools to drive visibility and conversion. From creating time-limited offers and coupons to managing markdown sales and promoted listings, we implement targeted campaigns that attract more buyers. Our promotion strategies are tailored to your product goals, ensuring maximum ROI and sustainable growth.',
    image: 'image5.jpg',
    icon: <FaBullhorn />,
    benefits: ['Sales Boost', 'Traffic Growth', 'Targeted Offers'],
    highlightText: 'PROMOTION TOOLS',
  },
  {
    id: 'ebay-6',
    title: 'Order & Inventory Management',
    text: 'Streamline operations with systems that manage stock levels and order fulfillment efficiently, reducing delays and improving buyer experience. We implement tools and processes that ensure accurate inventory tracking, prevent overselling, and enable timely order dispatch. By keeping your listings in sync with real-time stock levels, we help you maintain seller performance metrics and avoid costly out-of-stock situations.',
    image: 'image6.jpg',
    icon: <FaBoxes />,
    benefits: ['Stock Accuracy', 'Efficient Orders', 'No Overselling'],
    highlightText: 'INVENTORY CONTROL',
  },
  {
    id: 'ebay-7',
    title: 'Ads Setup & Performance Reporting',
    text: 'Set up and optimize eBay advertising campaigns with detailed performance reports and analytics for continuous improvement and ROI. We manage your promoted listings with data-backed targeting, bid optimization, and keyword refinement. Regular performance tracking and reporting ensures your campaigns are constantly improving, delivering better reach, higher click-through rates, and stronger returns on ad spend.',
    image: 'image7.jpg',
    icon: <FaAd />,
    benefits: ['Ad Insights', 'Better ROI', 'Campaign Scaling'],
    highlightText: 'AD MANAGEMENT',
  },
  {
    id: 'ebay-8',
    title: 'Store & Listing Analytics',
    text: 'Track and analyze your store and listing performance to make data-driven improvements. We help you understand what’s working and what needs refinement. Using eBay’s performance dashboards and third-party tools, we monitor key metrics such as impressions, click-through rates, sales conversions, and buyer behavior. Our insights allow you to fine-tune listings, optimize store layout, and continuously grow your eBay business based on real-time performance data.',
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
        <title>eBay Services | Companian Commerce Agency | Listing SEO & Store Management</title>
        <meta
          name="description"
          content="Professional eBay services including listing SEO, store design, keyword research, PPC ads, optimization, competitor analysis & complete eBay store management."
        />
        <link rel="canonical" href="https://www.companiancommerce.com/ebay" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="eBay Services — Companian Commerce Agency" />
        <meta
          property="og:description"
          content="eBay listing optimization, store branding, SEO, product ranking, ads management & analytics — grow your eBay business professionally."
        />
        <meta property="og:image" content="https://www.companiancommerce.com/images/about-og.png" />
        <meta property="og:url" content="https://www.companiancommerce.com/ebay" />
        <meta property="og:type" content="website" />
        <meta property="article:publisher" content="https://www.facebook.com/share/14UF1Vx9iZu/" />
        <meta property="article:author" content="https://www.linkedin.com/company/companian-commerce-agency/" />
        <meta
          name="keywords"
          content="eBay services, eBay SEO, eBay listing optimization, eBay store management, eBay PPC ads"
        />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">{`
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
              "name": "eBay Services",
              "item": "https://www.companiancommerce.com/ebay"
            }
          ]
        }
        `}</script>

        {/* WebPage Schema */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "eBay Services | Companian Commerce Agency",
          "url": "https://www.companiancommerce.com/ebay",
          "description": "Professional eBay services including listing SEO, store design, keyword research, PPC ads, optimization, competitor analysis & complete eBay store management."
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
