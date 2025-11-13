import React, { useState } from "react";
import "./FAQSection.css";

const FAQSection = () => {
  const [leftActive, setLeftActive] = useState(null);
  const [rightActive, setRightActive] = useState(null);

  const leftFAQs = [
    {
      question: "What services does Companian Commerce offer?",
      answer: "We provide complete eCommerce solutions including Amazon account management, eBay optimization, Shopify store setup and optimization, TikTok Shop Services, PPC advertising, catalog management, and brand growth strategy.",
    },
    {
      question: "Do you work with new or established sellers?",
      answer: "Yes! We work with both whether you’re just launching your store or managing an existing business, our experts help you grow from any stage.",
    },
    {
      question: "How soon can I start seeing results?",
      answer: "While timelines depend on the service, most clients start seeing performance improvements and growth within the first 30–60 days of collaboration.",
    },
    {
      question: "Do you offer full-store management or specific services only?",
      answer: "We offer both. You can choose full-service management or select specific areas like product listings, PPC advertising, or content creation as per your needs.",
    },
  ];

  const rightFAQs = [
    {
      question: "What makes Companian Commerce different from others?",
      answer: "We combine data-driven marketing with deep eCommerce expertise. Our approach is transparent, personalized, and designed for long-term scalability no hidden contracts or false promises.",
    },
    {
      question: "How can I get a free audit for my store?",
      answer: "Simply visit our Contact page and request a free audit. Our team will analyze your store, ads, and competitor strategy, then share a detailed growth plan within 48 hours.",
    },
    {
      question: "Do you provide advertising and PPC management?",
      answer: "Yes, we manage advertising across Amazon, eBay, TikTok, and Shopify.",
    },
    {
      question: "Is there any long-term contract required?",
      answer: "No. We believe in flexible, performance-based partnerships you can cancel anytime without hidden fees or commitments.",
    },
  ];

  const toggleLeft = (index) => {
    setLeftActive(leftActive === index ? null : index);
  };

  const toggleRight = (index) => {
    setRightActive(rightActive === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-header">
        <h2 className="faq-title">
          Frequently Asked <span>Questions</span>
        </h2>
        <p className="faq-subtitle">
          Get quick answers about how Companian Commerce helps brands grow faster across major marketplaces.
        </p>
      </div>

      <div className="faq-list">
        <div>
          {leftFAQs.map((item, index) => (
            <div key={index} className={`faq-item ${leftActive === index ? "active" : ""}`}>
              <button className="faq-question" onClick={() => toggleLeft(index)}>
                {item.question}
                <span className="faq-icon">{leftActive === index ? "−" : "+"}</span>
              </button>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>

        <div>
          {rightFAQs.map((item, index) => (
            <div key={index} className={`faq-item ${rightActive === index ? "active" : ""}`}>
              <button className="faq-question" onClick={() => toggleRight(index)}>
                {item.question}
                <span className="faq-icon">{rightActive === index ? "−" : "+"}</span>
              </button>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
