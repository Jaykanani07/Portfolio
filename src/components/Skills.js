import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React.js',
  'Next.js', 'MongoDB', 'MySQL', 'PHP'
];

function Skills() {
  const ref = useScrollReveal();

  return (
    <section className="section reveal" id="skills" ref={ref}>
      <h2 className="section-title">Skills</h2>
      <div className="divider"></div>

      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill" key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
