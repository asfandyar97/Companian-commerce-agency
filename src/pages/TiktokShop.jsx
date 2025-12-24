import React, { useState } from "react";
import './TiktokShop.css';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  FaListAlt,
  FaSearch,
  FaBullseye,
  FaFireAlt,
  FaStar,
  FaUserFriends,
  FaSync,
  FaChartBar,
  FaCheckCircle,
  FaPlus,
  FaMinus
} from 'react-icons/fa';

const tiktokServices = [
  {
    id: 'tiktok-1',
    title: 'Product Listing',
    text: 'Attractive TikTok Shop product listings with scroll stopping visuals, persuasive copy, and mobile-friendly layouts. Optimized for clicks, conversions, and TikTok mobile-first experience win more sales with click-worthy designs',
    image: 'image1.jpg',
    icon: <FaListAlt />,
    benefits: ['Attractive Layouts', 'Mobile Friendly', 'Click-Worthy'],
    highlightText: 'LIST TO WIN',
  },
  {
    id: 'tiktok-2',
    title: 'SEO Optimization',
    text: 'Boost TikTok Shop visibility with keyword-rich titles, backend tags, smart categorization, and SEO techniques. Rank higher in shop search and Google for organic traffic and better discoverability',
    image: 'image2.jpg',
    icon: <FaSearch />,
    benefits: ['Keyword Rich', 'Better Visibility', 'Shop Search Boost'],
    highlightText: 'SEARCH BOOST',
  },
  {
    id: 'tiktok-3',
    title: 'TikTok Ads',
    text: 'ROI focused TikTok ads with precise targeting, eye-catching creatives, bidding strategies, and performance tracking. Drive high engagement and conversions efficiently for real business results',
    image: 'image3.jpg',
    icon: <FaBullseye />,
    benefits: ['Precise Targeting', 'High Engagement', 'ROI Focused'],
    highlightText: 'PERFORMANCE ADS',
  },
  {
    id: 'tiktok-4',
    title: 'TikTok Campaigns',
    text: 'Trend driven TikTok Shop campaigns using current sounds, challenges, and seasonal launches. Go viral, expand reach, and increase sales with creative concepts tailored to TikTok user behavior',
    image: 'image4.jpg',
    icon: <FaFireAlt />,
    benefits: ['Trend-Driven', 'Creative Concepts', 'Customer Reach'],
    highlightText: 'TREND SYNC',
  },
  {
    id: 'tiktok-5',
    title: 'Spark Ads',
    text: 'Boost UGC and organic TikTok content into high-trust Spark Ads. Identify top-performing posts for authentic paid reach, better engagement, and superior ROI while preserving influencer authenticity',
    image: 'image5.jpg',
    icon: <FaStar />,
    benefits: ['Boost UGC', 'More Trust', 'Better ROI'],
    highlightText: 'BOOST ORGANIC',
  },
  {
    id: 'tiktok-6',
    title: 'Influencer Marketing',
    text: 'Niche TikTok influencers for trusted promotions. Full campaign planning, execution, and collaborations to build loyalty, generate buzz, and drive conversions seamlessly',
    image: 'image6.jpg',
    icon: <FaUserFriends />,
    benefits: ['Influencer Reach', 'Trust Building', 'Audience Expansion'],
    highlightText: 'TRUSTED INFLUENCE',
  },
  {
    id: 'tiktok-7',
    title: 'Real-time Order Sync',
    text: 'Hassle-free real-time order sync for TikTok Shop with Shopify integration. Accurate inventory mapping, no errors, fast fulfillment streamline operations and boost customer satisfaction',
    image: 'image7.jpg',
    icon: <FaSync />,
    benefits: ['Live Sync', 'No Errors', 'Fast Fulfillment'],
    highlightText: 'LIVE SYNC',
  },
  {
    id: 'tiktok-8',
    title: 'Performance Reporting',
    text: 'Data-driven TikTok Shop insights on ads, conversions, engagement, and ROI. Clear reporting and analysis for smarter decisions, continuous optimization, and confident growth',
    image: 'image8.jpg',
    icon: <FaChartBar />,
    benefits: ['Smart Insights', 'Campaign Analysis', 'Better Decisions'],
    highlightText: 'DATA DRIVEN',
  },
];

// ---------------- FAQ DATA FOR TIKTOK SHOP ----------------
const tiktokFaqsLeft = [
  {
    q: "How long does it take to optimize a TikTok Shop listing?",
    a: "Typically 2–5 days depending on product count, media assets, and SEO optimization requirements.",
  },
  {
    q: "Do you create TikTok-friendly product content?",
    a: "Yes, all product descriptions, titles, and visuals are tailored for TikTok’s mobile-first, scroll-driven audience.",
  },
  {
    q: "Can you run TikTok ad campaigns for my store?",
    a: "Absolutely, we design and manage ads from creatives to targeting for maximum ROI.",
  },
  {
    q: "Do you provide influencer marketing services?",
    a: "Yes, we connect your brand with relevant TikTok influencers to boost engagement and sales.",
  },
];

const tiktokFaqsRight = [
  {
    q: "Can you integrate real-time order syncing?",
    a: "Yes, our system keeps inventory updated and tracks orders in real-time for smooth operations.",
  },
  {
    q: "Do you provide performance reporting?",
    a: "Yes, we provide detailed analytics for campaigns, sales, and audience engagement to drive informed decisions.",
  },
  {
    q: "Will you manage Spark Ads campaigns?",
    a: "Absolutely, we optimize your organic content and paid Spark Ads for better reach and conversions.",
  },
  {
    q: "Do you offer long-term TikTok Shop support?",
    a: "Yes, we provide ongoing management including updates, optimizations, and performance tracking.",
  },
];

const TiktokShop = () => {
  const [leftActive, setLeftActive] = useState(null);
  const [rightActive, setRightActive] = useState(null);

  return (
    <div className="services-wrapper">
      <Helmet>
  {/* ✅ Page Title & Description */}
  <title>TikTok Shop Services | Companian Commerce Agency | Listings, Ads & Influencers</title>
  <meta
    name="description"
    content="Grow your TikTok Shop sales with Companian Commerce Agency. Expert SEO listings, viral content strategy, influencer marketing, TikTok ads, and automated order management to boost revenue."
  />
  <link rel="canonical" href="https://www.companiancommerce.com/tiktokshop" />
  <meta name="robots" content="index, follow" />

  {/* ✅ Open Graph / Social Sharing */}
  <meta property="og:title" content="TikTok Shop Services — Companian Commerce Agency" />
  <meta
    property="og:description"
    content="Professional TikTok Shop services including SEO listings, influencer marketing, ads management, content optimization & analytics — grow your TikTok store today."
  />
  <meta property="og:image" content="https://www.companiancommerce.com/images/about-og.png" />
  <meta property="og:url" content="https://www.companiancommerce.com/tiktokshop" />
  <meta property="og:type" content="website" />

  {/* ✅ Publisher & Author */}
  <meta property="article:publisher" content="https://www.facebook.com/share/14UF1Vx9iZu/" />
  <meta property="article:author" content="https://www.linkedin.com/company/companian-commerce-agency/" />

  {/* ✅ Keywords (Optional) */}
  <meta
    name="keywords"
    content="TikTok Shop services, TikTok SEO, TikTok influencer marketing, TikTok ads, TikTok content optimization, automated order management"
  />

  {/* ✅ Breadcrumb Schema */}
  <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem","position":1,"name":"Home","item":"https://www.companiancommerce.com/"},
      {"@type": "ListItem","position":2,"name":"TikTok Shop Services","item":"https://www.companiancommerce.com/tiktokshop"}
    ]
  }
  `}</script>

  {/* ✅ WebPage Schema */}
  <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "TikTok Shop Services | Companian Commerce Agency",
    "url": "https://www.companiancommerce.com/tiktokshop",
    "description": "Grow your TikTok Shop sales with expert SEO listings, viral content strategy, influencer marketing, TikTok ads & automated order management from Companian Commerce Agency."
  }
  `}</script>
</Helmet>


      <div className="services-container">
        <h2 className="services-title">TikTok Shop Services</h2>

        {tiktokServices.map((service, index) => (
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

      {/* -------------------- FAQ SECTION -------------------- */}
      <div className="faq-container">
        <h2 className="faq-main-title">Frequently Asked Questions</h2>

        <div className="faq-grid">
          {/* LEFT COLUMN */}
          <div className="faq-column">
            {tiktokFaqsLeft.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${leftActive === index ? "active" : ""}`}
                onClick={() => setLeftActive(leftActive === index ? null : index)}
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
            {tiktokFaqsRight.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${rightActive === index ? "active" : ""}`}
                onClick={() => setRightActive(rightActive === index ? null : index)}
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

export default TiktokShop;
