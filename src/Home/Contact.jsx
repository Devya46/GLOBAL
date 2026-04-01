import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [toast, setToast] = useState({
    show: false,
    message: "",
    error: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  const showNotification = (message, isError = false) => {
    setToast({ show: true, message, error: isError });
    setTimeout(() => {
      setToast({ show: false, message: "", error: false });
    }, 3000);
  };

  const isValidPhone = (phone) => {
    const digits = phone.replace(/[\s\-\(\)\+\.]/g, "");
    const count = (digits.match(/\d/g) || []).length;
    return count >= 5 && count <= 15;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(email);
  };

  const notEmpty = (val) => val.trim().length > 0;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, phone, email, subject, message } = formData;

    if (!notEmpty(fullName))
      return showNotification("Please enter your full name", true);
    if (!isValidPhone(phone))
      return showNotification("Please enter a valid phone number", true);
    if (!isValidEmail(email))
      return showNotification("Please enter a valid email address", true);
    if (!notEmpty(subject))
      return showNotification("Please enter a subject", true);
    if (message.length < 5)
      return showNotification("Message must be at least 5 characters", true);

    setIsSubmitting(true);

    try {
      await new Promise((res) => setTimeout(res, 1200));
      showNotification("Message sent successfully! We'll connect soon.");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      showNotification("Something went wrong. Please try again.", true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="verde-contact-section" ref={formRef}>
      <div className="contact-showcase">
        <div className="glass-split">
          {/* LEFT - Form Container */}
          <div className="form-container">
            <div className="form-header">
              <div className="accent-line"></div>
              <span className="form-badge">Get in touch</span>
              <h2>
                Let's create
                <br />
                <span className="gradient-text">something extraordinary</span>
              </h2>
              <p>Share your vision with us — we respond within hours</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid-modern">
                <div
                  className={`input-modern full-span ${
                    focusedField === "fullName" ? "focused" : ""
                  }`}
                >
                  <label>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Full name
                  </label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onFocus={() => handleFocus("fullName")}
                    onBlur={handleBlur}
                    placeholder="Emily Rodriguez"
                  />
                </div>

                <div
                  className={`input-modern ${
                    focusedField === "phone" ? "focused" : ""
                  }`}
                >
                  <label>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus("phone")}
                    onBlur={handleBlur}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div
                  className={`input-modern ${
                    focusedField === "email" ? "focused" : ""
                  }`}
                >
                  <label>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Email
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    placeholder="hello@company.com"
                  />
                </div>

                <div
                  className={`input-modern full-span ${
                    focusedField === "subject" ? "focused" : ""
                  }`}
                >
                  <label>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus("subject")}
                    onBlur={handleBlur}
                    placeholder="Project inquiry / Collaboration"
                  />
                </div>

                <div
                  className={`input-modern full-span ${
                    focusedField === "message" ? "focused" : ""
                  }`}
                >
                  <label>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    placeholder="Tell us about your project..."
                    rows="4"
                  />
                </div>
              </div>

              <button
                className={`btn-radiant ${isSubmitting ? "submitting" : ""}`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            <div className="form-footer">
              <div className="trust-badge">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Your data is secure</span>
              </div>
              <div className="response-time">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Avg response: &lt;2 hours</span>
              </div>
            </div>
          </div>

          {/* RIGHT - Visual Container with Image */}
          <div className="visual-container">
            <div className="visual-content">
              <div className="floating-elements">
                <div className="float-element elem-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M21 16v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2M7 10l5 5 5-5" />
                    <path d="M12 15V3" />
                  </svg>
                </div>
                <div className="float-element elem-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <div className="float-element elem-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              </div>

              {/* Beautiful Image Section */}
              <div className="image-container">
                <div className="image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop"
                    alt="Team collaboration"
                    className="feature-image"
                  />
                  <div className="image-overlay"></div>
                  <div className="image-glow"></div>
                </div>
                <div className="image-badge">
                  {/* <span className="badge-icon">✨</span> */}
                  <span>Creative Team</span>
                </div>
              </div>

              <div className="mascot-icon">
                <div className="icon-caption">
                  <span className="pulse-dot"></span>
                  lightning fast replies
                </div>
              </div>
              <div className="contact-stats">
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Response rate</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TOAST NOTIFICATION */}
      <div
        className={`toast-premium ${toast.show ? "show" : ""} ${toast.error ? "error" : "success"}`}
      >
        <div className="toast-icon">
          {toast.error ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          )}
        </div>
        <span>{toast.message}</span>
      </div>
    </section>
  );
}
