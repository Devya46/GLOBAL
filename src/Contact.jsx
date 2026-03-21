import React, { useState } from "react";
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

  const showNotification = (message, isError = false) => {
    setToast({ show: true, message, error: isError });
    setTimeout(() => {
      setToast({ show: false, message: "", error: false });
    }, 2800);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, phone, email, subject, message } = formData;

    if (!notEmpty(fullName))
      return showNotification("❌ Enter full name", true);
    if (!isValidPhone(phone))
      return showNotification("📱 Invalid phone number", true);
    if (!isValidEmail(email)) return showNotification("📧 Invalid email", true);
    if (!notEmpty(subject))
      return showNotification("📌 Subject required", true);
    if (message.length < 5)
      return showNotification("✏️ Message too short", true);

    try {
      showNotification("Sending...", false);

      await new Promise((res) => setTimeout(res, 800));

      showNotification("🎉 Message sent successfully! We'll connect soon.");

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      showNotification("⚠️ Something went wrong", true);
    }
  };

  return (
    <section className="verde-contact-section">
      <div className="contact-showcase">
        <div className="glass-split">
          {/* LEFT */}
          <div className="form-container">
            <div className="form-header">
              <h2>
                Let's connect <br />
                with vision
              </h2>
              <p>Share your ideas — we respond within hours</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid-modern">
                <div className="input-modern full-span">
                  <label>Full name</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Emily Rodriguez"
                  />
                </div>

                <div className="input-modern">
                  <label>Phone</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                  />
                </div>

                <div className="input-modern">
                  <label>Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@email.com"
                  />
                </div>

                <div className="input-modern full-span">
                  <label>Subject</label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-modern full-span">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button className="btn-radiant">Send Message ✨</button>
            </form>
          </div>

          {/* RIGHT */}
          <div className="visual-container">
            <div className="mascot-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                alt="icon"
              />
              <div className="icon-caption">⚡ lightning fast replies</div>
            </div>
          </div>
        </div>
      </div>

      {/* TOAST */}
      {toast.show && (
        <div
          className={`toast-premium ${toast.show ? "show" : ""}`}
          style={{
            borderLeftColor: toast.error ? "#ff7a5c" : "#4aa393",
          }}
        >
          {toast.message}
        </div>
      )}
    </section>
  );
}
