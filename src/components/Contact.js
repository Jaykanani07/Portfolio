import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

function Contact() {
  const ref = useScrollReveal();

  return (
    <section className="section reveal" id="contact" ref={ref}>
      <h2 className="section-title">Contact</h2>
      <div className="divider"></div>

      <div className="contact-wrapper">
        <p className="section-text">
          I’m currently open to frontend development opportunities, freelance projects, and collaborative work.
        </p>

        <p className="section-text" style={{ marginTop: "16px" }}>
          If you’re building something exciting or looking for a developer who cares about performance and design — let’s connect.
        </p>

        <div style={{ marginTop: "24px", lineHeight: "1.8" }}>
          <p>📍 Based in India</p>
          <p>💼 Open to remote opportunities</p>
          <p>🚀 Actively looking for frontend roles</p>
        </div>

        <div style={{ marginTop: "28px", display: "grid", gap: "6px", fontWeight: 500 }}>
          <p>✔ 3+ Major Projects</p>
          <p>✔ 1+ Years Learning & Building</p>
          <p>✔ 100% Responsive Designs</p>
          <p>✔ Focused on Performance & UX</p>
        </div>

        <div className="contact-links" style={{ marginTop: "32px" }}>
          <a href="mailto:jaykanani07@gmail.com">📧 Email</a>
          <a
            href="https://www.linkedin.com/in/jay-kanani-31b53a305"
            target="_blank"
            rel="noreferrer"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/Jaykanani07"
            target="_blank"
            rel="noreferrer"
          >
            🐙 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;