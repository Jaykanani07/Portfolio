import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

function Experience() {
  const ref = useScrollReveal();

  return (
    <section className="section reveal" id="experience" ref={ref}>
      <h2 className="section-title">Experience</h2>
      <div className="divider"></div>

      <div className="experience-card">
        <h3>Web Developer Intern</h3>
        <span>Webmobi360 · Dec 2025 – Present</span>
        <p>
          Working on an Expense Management Tool focusing on
          frontend UI, performance and UX improvements.
        </p>
      </div>
    </section>
  );
}

export default Experience;
