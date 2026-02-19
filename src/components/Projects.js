import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const projectsData = [
  {
    title: 'F1 Legends',
    descriptions: [
      'A visually rich Formula 1 website designed to showcase the history of F1, legendary teams, iconic drivers, technology evolution and unforgettable winning moments.',
      'The project focuses heavily on UI/UX, smooth animations, structured navigation and responsive layouts to provide an engaging experience for F1 fans.',
      'Currently, the project is under active development with continuous improvements being made to content, animations and performance.',
    ],
    tech: 'HTML • CSS • JavaScript',
    liveLink: 'https://iridescent-elf-9a4025.netlify.app/',
  },
  {
    title: 'IoT Smart Attendance System',
    descriptions: [
      'An academic project aimed at automating the traditional attendance process using IoT-based concepts to reduce manual effort and errors.',
      'The system focuses on capturing attendance data securely and efficiently, while providing a simple and intuitive user interface for monitoring and management.',
      'This project helped strengthen my understanding of system design, data flow, and real-world problem solving.',
    ],
    tech: 'C++ • Firebase • Academic Project',
    liveLink: null,
  },
  {
    title: 'Student Attendance Management System',
    descriptions: [
      'A web-based application developed to manage and track student attendance digitally, replacing manual registers.',
      'The system allows efficient storage, retrieval and management of attendance records using a structured backend and a responsive frontend interface.',
      'Through this project, I gained hands-on experience with backend integration, database management and full CRUD operations.',
    ],
    tech: 'PHP • MySQL • JavaScript • HTML • CSS',
    liveLink: null,
  },
];

function Projects() {
  const ref = useScrollReveal();

  return (
    <section className="section reveal" id="projects" ref={ref}>
      <h2 className="section-title">Projects</h2>
      <div className="divider"></div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            {project.descriptions.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}

            {project.liveLink ? (
              <div className="project-footer">
                <span>{project.tech}</span>
                <div className="project-actions">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Live
                  </a>
                </div>
              </div>
            ) : (
              <div className="project-actions">
                <span>{project.tech}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
