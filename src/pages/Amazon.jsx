import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Amazon.css";
import {
  FaListUl,
  FaSearch,
  FaTags,
  FaTruck,
  FaChartLine,
  FaCogs,
  FaShieldAlt,
  FaStore,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const amazonServices = [
  {
    id: "amazon-1",
    title: "Product Listing Optimization",
    tag: "Listing",
    text: "Optimize Amazon listings with high-traffic keywords like product listing optimization and listing optimization for maximum visibility, sales, and conversions. Our experts conduct in-depth keyword research, craft compelling titles, bullet points, and backend search terms aligned with shopper intent. Following Amazon guidelines, we boost organic rankings, enhance discoverability, and drive targeted traffic while ensuring accurate content that stands out in competitive categories",
    image: "image1.jpg",
    icon: <FaListUl />,
    benefits: ["Increase Visibility", "Drive Sales", "Boost Conversions"],
    highlightText: "ACCURATE CONTENT",
  },
  {
    id: "amazon-2",
    title: "Amazon SEO",
    tag: "SEO",
    text: "Elevate organic rankings using Amazon SEO keyword targeting and backend indexing strategies for better visibility and traffic. We integrate high-traffic, long-tail keywords into titles, descriptions, and A+ content to match customer search intent. Our front-end and back-end optimization improves search results, maintains brand consistency, and maximizes conversions through precise keyword placement and ongoing performance tweaks",
    image: "image2.jpg",
    icon: <FaSearch />,
    benefits: ["Keyword Targeting", "Backend Indexing", "Organic Traffic"],
    highlightText: "BETTER RANKING",
  },
  {
    id: "amazon-3",
    title: "Amazon PPC",
    tag: "Ads",
    text: "Launch high-ROAS Amazon PPC campaigns with  Amazon PPC  Sponsored Brands   Sponsored Products  and ACoS control for increased reach and efficiency. Data-driven bid management, keyword research, and A/B testing optimize Sponsored Products, Brands, and Display Ads. We minimize costs, track performance, and scale ad spend to deliver measurable results, lowering Advertising Cost of Sale while boosting sales and market share",
    image: "image3.jpg",
    icon: <FaTags />,
    benefits: ["Increase Reach", "Control ACoS", "Boost ROAS"],
    highlightText: "AD STRATEGY",
  },
  {
    id: "amazon-4",
    title: "FBA Shipment Creation",
    tag: "Shipping",
    text: "Streamline FBA shipments with FBA shipment creation  accurate labels, and Amazon compliance for timely, error-free delivery. We handle packaging, barcode labeling, and box content info to avoid rejections and delays. Our seamless process ensures inventory reaches fulfillment centers quickly, reducing hassle, saving time, and maintaining account health through precise setup and ongoing monitoring for smooth operations",
    image: "image4.jpg",
    icon: <FaTruck />,
    benefits: ["Timely Shipments", "Accurate Labels", "Amazon Compliance"],
    highlightText: "SEAMLESS SHIPPING",
  },
  {
    id: "amazon-5",
    title: "Amazon Account Management",
    tag: "Growth",
    text: "Achieve total control with Amazon account management  daily monitoring, health metrics, and 360 account management  for sustained success. We oversee order management, customer support, performance metrics, and issue resolution to prevent suspensions. Proactive handling of Vendor/Seller Central, case logs, and communications keeps your account thriving, enabling uninterrupted growth and profitability on Amazon",
    image: "image5.jpg",
    icon: <FaChartLine />,
    benefits: ["Daily Monitoring", "Health Metrics", "Customer Support"],
    highlightText: "TOTAL CONTROL",
  },
  {
    id: "amazon-6",
    title: "Listing Variations",
    tag: "Variants",
    text: "Build smart listing variations with parent-child structures for size, color options, enhancing catalog and user experience. Using listing variations  keywords, we follow Amazon guidelines to improve navigation, cross-selling, and mobile/desktop usability. Proper setup reduces clutter, boosts purchase decisions, and increases exposure across product options for higher conversions and streamlined selling",
    image: "image6.jpg",
    icon: <FaCogs />,
    benefits: ["Better Catalog", "User Experience", "Cross-Selling"],
    highlightText: "SMART STRUCTURE",
  },
  {
    id: "amazon-7",
    title: "Brand Registry",
    tag: "Protection",
    text: "Secure your brand via Brand Registry, gaining  counterfeit control, A+ Content, and Sponsored Brands access. We manage enrollment, protect against hijackers, and enable premium tools for enhanced listings. Full IP control unlocks visual branding, marketing features, and protection, empowering confident growth with advanced content and anti-counterfeit measures on Amazon",
    image: "image7.jpg",
    icon: <FaShieldAlt />,
    benefits: ["Brand Protection", "Counterfeit Control", "Enhanced Content"],
    highlightText: "SECURE BRAND",
  },
  {
    id: "amazon-8",
    title: "Amazon Storefront",
    tag: "Store",
    text: "Create a compelling Amazon Storefront as your brand hub with visual branding, navigation, and trust-building features. Incorporating Amazon Storefront and storefront design  keywords, we design conversion-focused layouts showcasing collections and stories. Strategic category grouping drives engagement, loyalty, and sales, turning your storefront into a powerful tool for recognition and revenue",
    image: "image8.jpg",
    icon: <FaStore />,
    benefits: ["Visual Branding", "Better Navigation", "Higher Trust"],
    highlightText: "BRAND HUB",
  },
];

// ✅ FAQ Content
const faqs = [
  {
    question: "How does Companian Commerce optimize Amazon product listings?",
    answer:
      "We enhance your listings by using accurate content, relevant keywords, and compelling copy. This includes titles, descriptions, bullet points, and backend search terms to improve visibility, sales, and conversions while following Amazon’s latest guidelines.",
  },
  {
    question: "What strategies are used for Amazon SEO?",
    answer:
      "Our SEO strategy focuses on high-traffic keywords, front-end and back-end optimization, and alignment with shopper intent. We ensure your listings rank higher in search results while maintaining brand consistency and boosting organic traffic.",
  },
  {
    question: "How can Amazon PPC campaigns help my business?",
    answer:
      "We create optimized ad campaigns, including Sponsored Products, Brands, and Display Ads, to maximize reach and conversions. Our approach focuses on precise targeting, keyword bidding, A/B testing, and performance tracking to ensure your ad spend delivers measurable results.",
  },
  {
    question: "What is included in FBA shipment creation support?",
    answer:
      "We manage your FBA shipments from labeling and packaging to timely delivery setup. Our team ensures compliance with Amazon’s FBA requirements to prevent errors, reduce delays, and make sure your inventory reaches fulfillment centers accurately.",
  },
  {
    question: "What does Amazon account management cover?",
    answer:
      "We provide complete account oversight including performance monitoring, issue resolution, order management, and customer support. This proactive approach ensures your account remains in good standing and enables long-term growth on Amazon.",
  },
  {
    question: "How are listing variations handled?",
    answer:
      "We create and manage parent-child variations for options like size, color, or style. Proper variation setup improves catalog structure, user experience, cross-selling opportunities, and compliance with Amazon guidelines.",
  },
  {
    question: "Why is Brand Registry important?",
    answer:
      "Brand Registry secures your brand, protects against hijackers, and gives access to premium tools like A+ Content and Sponsored Brands. We handle the full registration process so you can maintain control and grow your brand confidently.",
  },
  {
    question: "What benefits does an Amazon Storefront provide?",
    answer:
      "A custom storefront showcases your full product range, strengthens brand awareness, improves navigation, and builds customer trust. We design visually appealing layouts that increase engagement and drive sales.",
  },
];

const Amazon = () => {
 const [leftActive, setLeftActive] = useState(null);
  const [rightActive, setRightActive] = useState(null);

  return (
    <div className="services-wrapper">
      {/* ✅ Helmet SEO Block */}
      <Helmet>
        <title>Amazon Services | Companian Commerce Agency | FBA, PPC & Listing Optimization</title>
        <meta
          name="description"
          content="Boost your Amazon store with expert listing optimization, PPC campaigns, A+ content, SEO, product ranking, FBA support, and full Amazon account management from Companian Commerce Agency."
        />
        <link rel="canonical" href="https://www.companiancommerce.com/amazon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Amazon Services — Companian Commerce Agency" />
        <meta
          property="og:description"
          content="Amazon listing optimization, PPC management, SEO, product launches, A+ content, inventory & FBA management — grow your Amazon business with professionals."
        />
        <meta property="og:image" content="https://www.companiancommerce.com/images/about-og.png" />
        <meta property="og:url" content="https://www.companiancommerce.com/amazon" />
        <meta property="og:type" content="website" />
        <meta property="article:publisher" content="https://www.facebook.com/share/14UF1Vx9iZu/" />
        <meta property="article:author" content="https://www.linkedin.com/company/companian-commerce-agency/" />
        <meta
          name="keywords"
          content="Amazon services, Amazon PPC, Amazon FBA support, listing optimization, A+ content, Amazon SEO, Amazon account management"
        />
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
                "name": "Amazon Services",
                "item": "https://www.companiancommerce.com/amazon"
              }
            ]
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Amazon Services | Companian Commerce Agency",
            "url": "https://www.companiancommerce.com/amazon",
            "description": "Boost your Amazon store with expert listing optimization, PPC campaigns, A+ content, SEO, product ranking, FBA support, and full Amazon account management from Companian Commerce Agency."
          }
        `}</script>
      </Helmet>

      {/* ===== Services Section ===== */}
      <div className="services-container">
        <h2 className="services-title">Amazon Services</h2>
        {amazonServices.map((service, index) => (
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
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

<div className="faq-container">
  <h2 className="faq-title">
    Frequently Asked <span>Questions</span>
  </h2>

  <p className="faq-subtitle">
    Get quick answers about how Companian Commerce helps brands grow faster across major marketplaces.
  </p>

  <div className="faq-grid">
    {/* Left Column */}
    <div>
      {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${leftActive === index ? "active" : ""}`}
        >
          <button
            className="faq-question"
            onClick={() => setLeftActive(leftActive === index ? null : index)}
          >
            {faq.question}
            <span className="faq-icon">{leftActive === index ? "−" : "+"}</span>
          </button>
          <div className="faq-answer">{leftActive === index && <p>{faq.answer}</p>}</div>
        </div>
      ))}
    </div>

    {/* Right Column */}
    <div>
      {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${rightActive === index ? "active" : ""}`}
        >
          <button
            className="faq-question"
            onClick={() =>
              setRightActive(rightActive === index ? null : index)
            }
          >
            {faq.question}
            <span className="faq-icon">{rightActive === index ? "−" : "+"}</span>
          </button>
          <div className="faq-answer">{rightActive === index && <p>{faq.answer}</p>}</div>
        </div>
      ))}
    </div>
  </div>
</div>





</div>

  );
};

export default Amazon;
