import React from 'react';
import './Shopify.css'; // same styling as ebay.css or amazon.css
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
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
} from 'react-icons/fa';

const shopifyServices = [
  {
    id: 'shopify-1',
    title: 'Shopify Store Setup & Customization',
    text: 'We set up your Shopify store from scratch including theme selection, essential pages, navigation menus, and store settings tailored specifically to your brand. Our team ensures that your store is mobile-optimized, professionally configured, and ready for seamless shopping across all devices.',
    image: 'image1.jpg',
    icon: <FaStore />,
    benefits: ['Custom Layouts', 'Complete Setup', 'Responsive Design'],
    highlightText: 'FULLY CUSTOMIZED',
  },
  {
    id: 'shopify-2',
    title: 'Product Listing & SEO',
    text: 'Get your products listed with professionally written titles, descriptions, tags, and metadata. We follow SEO best practices to help your products rank better in search engines and Shopify internal search. This results in higher traffic, better discoverability, and increased conversions.',
    image: 'image2.jpg',
    icon: <FaTags />,
    benefits: ['SEO Optimized', 'High Discoverability', 'Keyword Strategy'],
    highlightText: 'RANK HIGHER',
  },
  {
    id: 'shopify-3',
    title: 'Theme Design & Branding',
    text: 'We customize your store theme to reflect your brand identity with consistency across all pages. From logo placement to typography, colors, and design layout we ensure your store not only looks professional but also builds customer trust at every step.',
    image: 'image3.jpg',
    icon: <FaPalette />,
    benefits: ['Brand Identity', 'Elegant Design', 'Consistent UI'],
    highlightText: 'STRONG BRANDING',
  },
  {
    id: 'shopify-4',
    title: 'Payment & Shipping Integration',
    text: 'We integrate multiple payment gateways such as PayPal, Stripe, and local options, along with dynamic shipping setups. This includes shipping zones, rates, rules, and delivery tracking, ensuring your checkout process is seamless and trusted by customers worldwide.',
    image: 'image4.jpg',
    icon: <FaShippingFast />,
    benefits: ['Fast Checkout', 'Multiple Gateways', 'Shipping Zones'],
    highlightText: 'SEAMLESS FLOW',
  },
  {
    id: 'shopify-5',
    title: 'Shopify Apps Configuration',
    text: 'Extend your store’s functionality using trusted apps for reviews, upsells, loyalty programs, live chat, and more. We handpick, install, and configure apps that align with your business goals enhancing both user experience and conversion potential.',
    image: 'image5.jpg',
    icon: <FaCogs />,
    benefits: ['Enhanced Features', 'Sales Tools', 'Third-Party Integrations'],
    highlightText: 'SMART APPS',
  },
  {
    id: 'shopify-6',
    title: 'Marketing & Automation',
    text: 'We implement email marketing, welcome series, cart recovery, lead capture forms, and more to drive repeat purchases. Automation ensures you engage with customers at the right time even while you sleep and build long-term loyalty.',
    image: 'image6.jpg',
    icon: <FaBullhorn />,
    benefits: ['Email Campaigns', 'Lead Generation', 'Cart Recovery'],
    highlightText: 'AUTOMATED GROWTH',
  },
  {
    id: 'shopify-7',
    title: 'Shopify Analytics & Reporting',
    text: 'Gain deep insights into your store performance using analytics dashboards and reports. From real-time traffic monitoring to product performance, sales trends, and user behavior we help you make data-driven decisions that boost your ROI.',
    image: 'image7.jpg',
    icon: <FaChartLine />,
    benefits: ['Traffic Tracking', 'Sales Insights', 'Behavior Analysis'],
    highlightText: 'DATA INSIGHTS',
  },
  {
    id: 'shopify-8',
    title: 'Store Maintenance & Support',
    text: 'We provide ongoing support and maintenance including bug fixing, theme updates, and performance optimizations. Our proactive monitoring ensures your Shopify store remains stable, fast, and secure giving you peace of mind and your customers a smooth shopping experience.',
    image: 'image8.jpg',
    icon: <FaTools />,
    benefits: ['24/7 Support', 'Bug Fixing', 'Store Uptime'],
    highlightText: 'RELIABLE SUPPORT',
  },
];

const Shopify = () => {
  return (
    <div className="services-wrapper">
    <Helmet>
      {/* Page Title */}
      <title>Shopify Services | Companian Commerce Agency | Custom Store Setup & SEO</title>

      {/* Meta Description */}
      <meta
        name="description"
        content="Get expert Shopify store creation, custom theme design, SEO optimization, app setup, shipping & payment integration and long-term eCommerce support."
      />

      {/* Canonical & Robots */}
      <link rel="canonical" href="https://www.companiancommerce.com/shopify" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Social Media */}
      <meta property="og:title" content="Shopify Services — Companian Commerce Agency" />
      <meta
        property="og:description"
        content="Shopify theme customization, SEO, apps integration, checkout setup, product listings and full Shopify store management."
      />
      <meta property="og:image" content="https://www.companiancommerce.com/images/about-og.png" />
      <meta property="og:url" content="https://www.companiancommerce.com/shopify" />
      <meta property="og:type" content="website" />

      {/* Facebook & LinkedIn */}
      <meta property="article:publisher" content="https://www.facebook.com/share/14UF1Vx9iZu/" />
      <meta property="article:author" content="https://www.linkedin.com/company/companian-commerce-agency/" />

      {/* Keywords */}
      <meta
        name="keywords"
        content="Shopify services, Shopify experts, custom Shopify store, Shopify SEO, Shopify app setup"
      />

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
          "description": "Get expert Shopify store creation, custom theme design, SEO optimization, app setup, shipping & payment integration and long-term eCommerce support."
        }
        `}
      </script>
    </Helmet>



      <div className="services-container">
        <h2 className="services-title">Shopify Services</h2>
        {shopifyServices.map((service, index) => (
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
    </div>
  );
};

export default Shopify;
