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
          content="Contact Companion Commerce for expert eCommerce services across Amazon, Shopify, eBay, and TikTok Shop."
        />
        <meta property="og:title" content="Contact Companion Commerce" />
        <meta
          property="og:description"
          content="Reach out to us for support, inquiries, or partnerships. We’re here to help your eCommerce business grow."
        />
        <meta property="og:image" content="/contact-og.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="left-panel">
        <img src="lfs image.png" alt="Contact Office" />
      </div>

      <div className="right-panel">
        <h2>Contact us</h2>
        <p>
          Use this form for all general enquiries. We monitor these responses
          constantly during working hours. If you are looking to partner with us,
          please complete the new customer application form instead.
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
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
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
