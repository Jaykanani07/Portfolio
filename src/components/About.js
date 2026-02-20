import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

function About() {
  const ref = useScrollReveal();

  return (
    <section className="section reveal" id="about" ref={ref}>
      <h2 className="section-title">About Me</h2>
      <div className="divider"></div>

      <p className="section-text">
I build modern web experiences that feel premium, responsive, and alive.

As a Frontend Developer, I specialize in crafting visually rich, high-performance applications using React and modern UI technologies. My work focuses on smooth animations, scalable architecture, and intuitive user flows.

I don’t just build websites — I engineer digital experiences designed to convert, engage, and perform.
      </p>
    </section>
  );
}

export default About;
