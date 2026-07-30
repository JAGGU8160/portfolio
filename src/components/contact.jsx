import { useState, memo, useCallback } from "react";
import { supabase } from "../lib/supabase";
import { motion, useReducedMotion } from "framer-motion";
import { Element } from "react-scroll";
import { HiPaperAirplane } from "react-icons/hi2";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const EASE = [0.16, 1, 0.3, 1];

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const CONTACT_INFO = [
  {
    icon: HiMail,
    label: "Email",
    value: "mishrajagmohan0@gmail.com",
    href: "mailto:mishrajagmohan0@gmail.com",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+91 8160810690",
    href: "tel:+918160810690",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: "Ahmedabad, India",
    href: null,
  },
];

const ContactUs = memo(() => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [serverMsg, setServerMsg] = useState(null);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const prefersReduced = useReducedMotion();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setSubmitting(true);
      setServerMsg(null);
      setError(null);

      try {
        if (import.meta.env.DEV) {
          // Local dev: save directly to Supabase (no email)
          const { error: sbError } = await supabase.from("contacts").insert({
            first_name: formData.firstName.trim(),
            last_name: formData.lastName.trim(),
            email: formData.email.trim().toLowerCase(),
            phone: formData.phone.trim(),
            message: formData.message.trim(),
          });
          if (sbError) throw new Error(sbError.message);
        } else {
          // Production (Vercel): serverless fn saves to Supabase + sends email
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error);
        }
        setServerMsg("Message sent. I'll get back to you soon.");
        setFormData(INITIAL_FORM);
      } catch (err) {
        setError(err.message || "Something went wrong. Try again.");
      } finally {
        setSubmitting(false);
      }
    },
    [formData]
  );

  const anim = (delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.45, delay, ease: EASE },
        };

  return (
    <Element name="contact">
      <section className="contact-section">
        <div className="container">
          {/* Header */}
          <motion.div className="contact-header" {...anim(0)}>
            <span className="contact-label">Contact</span>
            <h2 className="contact-title">
              Let's build something impactful
            </h2>
            <p className="contact-desc">
              Open to freelance projects, full-time roles, and collaboration
              on AI-powered products. If you have an idea worth building — I'm
              ready to ship it.
            </p>
          </motion.div>

          <div className="contact-grid">
            {/* Left: Form */}
            <motion.div className="contact-form-card" {...anim(0.05)}>
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="contact-form-row">
                  <input
                    className="contact-input"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                    minLength={2}
                    maxLength={30}
                  />
                  <input
                    className="contact-input"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                    minLength={2}
                    maxLength={30}
                  />
                </div>
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                />
                <input
                  className="contact-input"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone (optional)"
                  pattern="\d{10}"
                  maxLength={10}
                />
                <textarea
                  className="contact-input contact-textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={4}
                  required
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="contact-submit"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  {!submitting && <HiPaperAirplane />}
                </button>
              </form>

              {serverMsg && (
                <p className="contact-msg contact-msg-success">{serverMsg}</p>
              )}
              {error && (
                <p className="contact-msg contact-msg-error">{error}</p>
              )}
            </motion.div>

            {/* Right: Info cards */}
            <div className="contact-info-col">
              {CONTACT_INFO.map((item, i) => {
                const Icon = item.icon;
                const Tag = item.href ? "a" : "div";
                return (
                  <motion.div key={item.label} {...anim(0.08 + i * 0.06)}>
                    <Tag
                      className="contact-info-card"
                      {...(item.href ? { href: item.href } : {})}
                    >
                      <div className="ci-icon">
                        <Icon />
                      </div>
                      <div>
                        <p className="ci-label">{item.label}</p>
                        <p className="ci-value">{item.value}</p>
                      </div>
                    </Tag>
                  </motion.div>
                );
              })}

              {/* Map */}
              <motion.div className="contact-map" {...anim(0.2)}>
                <iframe
                  title="Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "var(--radius-lg)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4728336297144!2d72.58942689999999!3d23.043120500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e846aecbb4b6f%3A0xe9f9cbb412568fbb!2sBAPS%20Cir%2C%20Ahmedabad%2C%20Gujarat%20380004!5e0!3m2!1sen!2sin!4v1755930641600!5m2!1sen!2sin"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
});

ContactUs.displayName = "ContactUs";
export default ContactUs;
