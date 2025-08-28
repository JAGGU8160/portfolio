// ContactUs.jsx
import React, { useState } from "react";
import axios from "axios";
import { Element } from "react-scroll";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "", // textarea instead of time/date
  });
  const [serverMsg, setServerMsg] = useState(null);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setServerMsg(null);
    setError(null);

    // Auto timestamp (client-side). Also set timestamps in backend for reliability.
    const payload = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    try {
      const response =await axios.post('http://localhost:4000/api/v1/profile', payload, { headers: { 'Content-Type': 'application/json' } });

      setServerMsg(response?.data?.message || "Submitted successfully.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Element className="cmn-sec contact-wrapper" name="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-left">
          <h2 className="section-title mb-lg-3 mb-2">CONTACT ME</h2>
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <input className="input-field"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              minLength={3}
              maxLength={30}
            />
            <input className="input-field"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              minLength={3}
              maxLength={30}
            />
            <input className="input-field"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input className="input-field"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone (10 digits)"
              required
              pattern="\d{10}"
              maxLength={10}
              minLength={10}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={3}
              required
            />
            <button type="submit" disabled={submitting} className="comman-btn w-100">
              {submitting ? "Sending..." : "Send"}
            </button>
          </form>

          {serverMsg && <p className="success-msg">{serverMsg}</p>}
          {error && <p className="error-msg">{error}</p>}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-right">
              <iframe title="Google Map"width="100%"height="100%" style={{ border: 0 }} loading="lazy" allowFullScreenreferrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4728336297144!2d72.58942689999999!3d23.043120500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e846aecbb4b6f%3A0xe9f9cbb412568fbb!2sBAPS%20Cir%2C%20Ahmedabad%2C%20Gujarat%20380004!5e0!3m2!1sen!2sin!4v1755930641600!5m2!1sen!2sin"/>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default ContactUs;
