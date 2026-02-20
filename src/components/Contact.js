import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

function Contact() {
  const ref = useScrollReveal();

  return (
<<<<<<< HEAD
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
=======
    <section className="section reveal" id="contact" ref={ref}>
      <h2 className="section-title">Contact</h2>
      <div className="divider"></div>

      <p className="section-text">
        I'm open to internships, freelance projects, and full-time opportunities.
        Feel free to reach out!
      </p>

      <div className="contact-links" style={{ marginTop: '28px' }}>
        <a href="mailto:jayprakashsingh2003@gmail.com">📧 Email</a>
        <a href="https://linkedin.com/in/jay-prakash-singh-b7b8b5253" target="_blank" rel="noreferrer">💼 LinkedIn</a>
        <a href="https://github.com/jayprakash07" target="_blank" rel="noreferrer">🐙 GitHub</a>
      </div>
    </section>
>>>>>>> a1ca7f7c61deb8971e07ded44acf075827082bf3
  );
}

export default Contact;
