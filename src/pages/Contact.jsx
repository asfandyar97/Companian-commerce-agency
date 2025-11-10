import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      access_key: "21ceb348-dc1c-4e82-8296-e93d5b91c705",
      subject: "New Contact Message from Website",
      from_name: formData.name,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("✅ Thank you for contacting Companion Commerce! Our team will get back to you shortly.");
        setFormData({ name: "", email: "", phone: "", message: "" });

        // ✅ Google Analytics Event Trigger
        if (window.gtag) {
          window.gtag("event", "contact_form_submit", {
            event_category: "Contact Form",
            event_label: "Form Submitted",
            value: 1,
          });
          console.log("GA Event Sent: contact_form_submit");
        } else {
          console.log("gtag not found");
        }

      } else {
        alert("Error: " + (result.message || "Something went wrong."));
      }
    } catch (error) {
      alert("Submission failed. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact Us | Companian Commerce Agency</title>

        <meta
          name="description"
          content="Contact Companian Commerce Agency for expert eCommerce services across Amazon, Shopify, eBay, and TikTok Shop. We help brands scale with professional marketplace management and growth strategies."
        />

        <link rel="canonical" href="https://www.companiancommerce.com/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Companian Commerce Agency" />
        <meta
          property="og:description"
          content="Get in touch with Companian Commerce Agency for Amazon, eBay, Shopify, and TikTok Shop services, support, and business partnerships."
        />
        <meta property="og:image" content="https://www.companiancommerce.com/contact-og.jpg" />
        <meta property="og:url" content="https://www.companiancommerce.com/contact" />
        <meta property="og:type" content="website" />

        <meta name="robots" content="index, follow" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Companian Commerce contact, Amazon agency contact, Shopify experts contact, TikTok Shop agency support, eBay seller services contact"
        />
      </Helmet>


      <div className="left-panel">
        <img src="lfs-image1.png" alt="Contact Office" />
      </div>

      <div className="right-panel">
        <h2>Contact us</h2>
        <p>
          Have a question or need assistance? Fill out the form below and our team will get back to you shortly.
          We also offer a free eCommerce audit simply mention it in your message, and our experts will review your store and share tailored recommendations to help you grow.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number (Optional)"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message *"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Your Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
