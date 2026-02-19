import React, { useEffect, useState } from 'react';

const roles = [
  "Frontend Developer",
  "UI / UX Enthusiast",
  "React & Next.js Developer"
];

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!deleting && charIndex === roles[roleIndex].length) {
      // Pause before deleting
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIndex === 0) {
      // Move to next role
      setDeleting(false);
      setRoleIndex(prev => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setCharIndex(prev => prev + (deleting ? -1 : 1));
        setDisplayText(roles[roleIndex].slice(0, charIndex + (deleting ? -1 : 1)));
      }, deleting ? 60 : 100);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <span className="pill">👋 Hello, I'm Jay</span>

        <h1>Jay <span>Kanani</span></h1>
        <h2>{displayText}<span className="cursor">|</span></h2>

        <p>
          Frontend Developer &amp; UI/UX enthusiast crafting modern,
          responsive and interactive web experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a
            href="https://drive.google.com/file/d/15HHP30g2TOsvmCU1zt4TDLN_tnUJbVUG/view"
            target="_blank"
            rel="noreferrer"
            className="btn outline"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="photo-wrapper">
          <div className="photo-glow"></div>
          <img
            src="https://res.cloudinary.com/dxrphjzgq/image/upload/v1766566060/IMG_4221_1_-modified_ldxyqt.png"
            alt="Jay Kanani"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
