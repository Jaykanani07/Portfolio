import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

function About() {
  const ref = useScrollReveal();

  return (
    <section className="section reveal" id="about" ref={ref}>
      <h2 className="section-title">About Me</h2>
      <div className="divider"></div>

      <p className="section-text">
        I'm Jay Kanani, a Frontend Developer and IT Engineering student
        currently doing an internship at Webmobi360. I enjoy building
        clean, modern and animated web interfaces with a strong focus
        on UI/UX and performance.
      </p>
    </section>
  );
}

export default About;
