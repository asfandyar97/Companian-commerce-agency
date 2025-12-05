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
    text: "Optimize your listings to boost visibility, sales, and conversions using accurate content and relevant keywords. We ensure your product titles and descriptions follow Amazon’s latest guidelines for maximum performance. Our team conducts in-depth keyword research, writes compelling copy, and aligns every detail with customer search intent. From bullet points to backend search terms, we fine-tune every element to help your products stand out in a competitive marketplace.",
    image: "image1.jpg",
    icon: <FaListUl />,
    benefits: ["Increase Visibility", "Drive Sales", "Boost Conversions"],
    highlightText: "ACCURATE CONTENT",
  },
  {
    id: "amazon-2",
    title: "Amazon SEO",
    tag: "SEO",
    text: "Enhance your product’s discoverability using high-traffic keywords and backend optimization. We target relevant search terms that align with shopper intent and improve organic ranking. Our SEO strategy focuses on both front-end and back-end optimization, ensuring your listings rank higher in search results. From strategic keyword placement to A+ content alignment, we maximize visibility while maintaining brand consistency and conversion.",
    image: "image2.jpg",
    icon: <FaSearch />,
    benefits: ["Keyword Targeting", "Backend Indexing", "Organic Traffic"],
    highlightText: "BETTER RANKING",
  },
  {
    id: "amazon-3",
    title: "Amazon PPC",
    tag: "Ads",
    text: "Launch optimized ad campaigns that drive conversions while minimizing costs and boosting ROAS. We use data-driven strategies to maximize visibility and budget efficiency. Our PPC specialists structure campaigns strategically with precise targeting, keyword bidding, and continuous A/B testing. Whether it’s Sponsored Products, Brands, or Display Ads, we ensure your ad spend delivers measurable results with full performance tracking and adjustment.",
    image: "image3.jpg",
    icon: <FaTags />,
    benefits: ["Increase Reach", "Control ACoS", "Boost ROAS"],
    highlightText: "AD STRATEGY",
  },
  {
    id: "amazon-4",
    title: "FBA Shipment Creation",
    tag: "Shipping",
    text: "Manage your FBA shipments with proper labeling, packaging, and timely delivery setup. We help you avoid common errors that lead to delays or rejections by Amazon. Our team ensures every shipment complies with Amazon's strict FBA requirements from barcode labeling to box content information. We streamline the entire process to reduce hassle, save time, and ensure your inventory reaches Amazon’s fulfillment centers quickly and accurately.",
    image: "image4.jpg",
    icon: <FaTruck />,
    benefits: ["Timely Shipments", "Accurate Labels", "Amazon Compliance"],
    highlightText: "SEAMLESS SHIPPING",
  },
  {
    id: "amazon-5",
    title: "Amazon Account Management",
    tag: "Growth",
    text: "Complete account oversight, customer support, performance improvement, and issue resolution. We monitor performance metrics daily to maintain account health and avoid suspensions. From order management to case handling and customer communication, we provide end-to-end support tailored to your brand’s needs. Our proactive approach ensures your account remains in good standing, enabling long-term success and uninterrupted selling on Amazon.",
    image: "image5.jpg",
    icon: <FaChartLine />,
    benefits: ["Daily Monitoring", "Health Metrics", "Customer Support"],
    highlightText: "TOTAL CONTROL",
  },
  {
    id: "amazon-6",
    title: "Listing Variations",
    tag: "Variants",
    text: "Create and manage parent-child variations for size, color, or other options. This improves catalog structure and enhances the user experience on mobile and desktop. We ensure your variations are correctly structured according to Amazon’s latest guidelines, making it easier for customers to explore different options and make faster purchase decisions. Proper variation setup not only improves navigation but also boosts cross-selling and reduces listing clutter.",
    image: "image6.jpg",
    icon: <FaCogs />,
    benefits: ["Better Catalog", "User Experience", "Cross-Selling"],
    highlightText: "SMART STRUCTURE",
  },
  {
    id: "amazon-7",
    title: "Brand Registry",
    tag: "Protection",
    text: "Secure your brand and access premium content tools like A+ Content and Sponsored Brands. This also protects your listings from hijackers and unauthorized changes. Our team handles the entire Brand Registry process, ensuring you gain full control over your intellectual property on Amazon. With added security, your brand can confidently grow while taking advantage of advanced marketing tools, enhanced listing visuals, and counterfeit protection.",
    image: "image7.jpg",
    icon: <FaShieldAlt />,
    benefits: ["Brand Protection", "Counterfeit Control", "Enhanced Content"],
    highlightText: "SECURE BRAND",
  },
  {
    id: "amazon-8",
    title: "Amazon Storefront",
    tag: "Store",
    text: "Build a custom storefront that highlights your full product range and boosts brand awareness. A strong storefront improves trust, customer navigation, and brand recognition. We design visually appealing, conversion-focused storefronts that tell your brand story, showcase featured collections, and drive customer engagement. With strategic layout, category grouping, and compelling visuals, your Amazon Store becomes the central hub for building loyalty and increasing sales.",
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
