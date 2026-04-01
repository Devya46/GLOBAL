import React, { useState } from "react";
import "./Contact.css";
import contactImg from "../assets/ContactUs.png";

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

  const showNotification = (message, isError = false) => {
    setToast({ show: true, message, error: isError });
    setTimeout(() => {
      setToast({ show: false, message: "", error: false });
    }, 3200);
  };

  const isValidPhone = (phone) => {
    const digits = phone.replace(/[\s\-\(\)\+\.]/g, "");
    const count = (digits.match(/\d/g) || []).length;
    return count >= 5 && count <= 15;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(email);
  };

  const notEmpty = (val) => val && val.trim().length > 0;

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
    if (message.length < 8)
      return showNotification("Message must be at least 8 characters", true);

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
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
    <div className="contact-container">
      <div className="contact-card-wrapper">
        <div className="contact-card">
          {/* Left Side - Image */}
          <div className="card-image-side">
            <div className="image-overlay"></div>
            <img
              className="full-photo"
              src={contactImg}
              alt="Institutional trading floor"
            />
            <div className="image-content">
              <div className="image-badge">✦ Institutional Trading Desk</div>
              <h3>Direct Market Access</h3>
              <p>
                45+ global exchanges • 0.2ms latency • Institutional liquidity
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="card-form-side">
            <div className="form-content">
              <div className="form-header">
                <div className="header-accent"></div>
                <span className="header-badge">Get in touch</span>
                <h2>
                  Let's create
                  <br />
                  <span className="gradient-highlight">
                    something extraordinary
                  </span>
                </h2>
                <p>Share your vision with us — we respond within hours</p>
              </div>

              <form onSubmit={handleSubmit} className="modern-form">
                <div className="form-row">
                  <div
                    className={`form-group ${focusedField === "fullName" ? "focused" : ""}`}
                  >
                    <label>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onFocus={() => handleFocus("fullName")}
                      onBlur={handleBlur}
                      placeholder="John Carter"
                    />
                  </div>

                  <div
                    className={`form-group ${focusedField === "phone" ? "focused" : ""}`}
                  >
                    <label>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus("phone")}
                      onBlur={handleBlur}
                      placeholder="+1 (212) 555-1234"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div
                    className={`form-group ${focusedField === "email" ? "focused" : ""}`}
                  >
                    <label>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      placeholder="john@capital.com"
                    />
                  </div>

                  <div
                    className={`form-group ${focusedField === "subject" ? "focused" : ""}`}
                  >
                    <label>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus("subject")}
                      onBlur={handleBlur}
                      placeholder="Trading Inquiry"
                    />
                  </div>
                </div>

                <div
                  className={`form-group full-width ${focusedField === "message" ? "focused" : ""}`}
                >
                  <label>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
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

                <button
                  type="submit"
                  className={`submit-button ${isSubmitting ? "submitting" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="button-spinner"></span>
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
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              <div className="form-footer">
                <div className="footer-item">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>Your data is secure</span>
                </div>
                <div className="footer-item">
                  <svg
                    width="14"
                    height="14"
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
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div
        className={`toast-notification ${toast.show ? "show" : ""} ${toast.error ? "error" : "success"}`}
      >
        <div className="toast-icon">
          {toast.error ? (
            <svg
              width="18"
              height="18"
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
              width="18"
              height="18"
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
    </div>
  );
}
