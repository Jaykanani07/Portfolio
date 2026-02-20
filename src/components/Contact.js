import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

function Contact() {
  const ref = useScrollReveal();

  return (
  <section className="section reveal" id="contact" ref={ref}>
  <h2 className="section-title">Contact</h2>
  <div className="divider"></div>

  <div className="contact-wrapper">
    <p>
      Open to internships and full-time roles.
    </p>

    <div className="contact-links">
      <a href="mailto:jaykanani07@gmail.com">
        jaykanani07@gmail.com
      </a>
      <a href="http://www.linkedin.com/in/jay-kanani-31b53a305" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a href="https://github.com/Jaykanani07" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  </div>
</section>
  );
}

export default Contact;
