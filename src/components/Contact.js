import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

function Contact() {
  const ref = useScrollReveal();

  return (
    <section className="section reveal" id="contact" ref={ref}>
      <h2 className="section-title">Contact</h2>
      <div className="divider"></div>

      <p className="section-text">
        I'm open to internships, freelance projects, and full-time opportunities.
        Feel free to reach out!
      </p>

      <div className="contact-links" style={{ marginTop: '28px' }}>
        <a href="mailto:jaykanani07@gmail.com">📧 Email</a>
        <a href="https://www.linkedin.com/in/jay-kanani-31b53a305" target="_blank" rel="noreferrer">💼 LinkedIn</a>
        <a href="https://github.com/Jaykanani07" target="_blank" rel="noreferrer">🐙 GitHub</a>
      </div>
    </section>
  );
}

export default Contact;
