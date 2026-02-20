import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const educationData = [
  {
    degree: 'B.E in IT',
    institute: 'LDRP-ITR, Kadi Sarva Vishwavidyalaya',
    year: '2023 – 2026',
  },
  {
    degree: 'Diploma in IT',
    institute: 'Government Polytechnic Gandhinagar',
    year: '2020 – 2023',
  },
];

function Education() {
  const ref = useScrollReveal();

  return (
    <section className="section reveal" id="education" ref={ref}>
      <h2 className="section-title">Education</h2>
      <div className="divider"></div>

      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.degree}</h3>
            <span>{edu.institute}</span>
            <p>{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
