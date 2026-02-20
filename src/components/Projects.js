<<<<<<< HEAD
import React, { useState, useEffect, useMemo } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import Stack from "./Stack";

const projectsData = [
  {
    title: "Student Attendance Management System",
    tagline: "Digital academic record management",
    image: `${process.env.PUBLIC_URL}/images/attendance.png`,
    tech: ["PHP", "MySQL", "JavaScript"],
    details:`
The Expense Management Tool is a full-stack web application developed to simplify personal and organizational financial tracking. 
It features secure authentication using Google OAuth, category-based expense management, and a dynamic dashboard with real-time analytics. 
The backend was built using Node.js and Express with MongoDB for structured data storage and scalability. 

I focused on clean API architecture, protected routes, and optimized database queries for performance efficiency. 

The application is fully responsive and designed with modern UX principles to ensure intuitive financial management.
    `,
  },

  {
    title: "IoT Smart Attendance System",
    tagline: "Automated biometric attendance system",
    image: `${process.env.PUBLIC_URL}/images/IOT-Biometric-Fingerprint-Attend.png`,
    tech: ["C++", "Firebase", "IoT Concepts"],
    details: `
This IoT-based attendance system was developed to automate biometric tracking and eliminate manual attendance errors. 
The project integrates fingerprint sensor hardware with C++ microcontroller programming for real-time biometric capture. 

Firebase was used for centralized cloud-based storage and synchronization of attendance data. 

The system improves accuracy, minimizes fraud, and provides efficient real-time monitoring capabilities. 
This project strengthened my understanding of hardware-software integration, embedded systems logic, and real-time data handling.
    `
  },

  {
    title: "Expense Management Tool",
    tagline: "Smart finance tracking for individuals & teams",
    image: `${process.env.PUBLIC_URL}/images/EMT.png`,
    tech: ["React", "Node.js", "Express", "MongoDB", "Google Auth"],
    details: `
The Expense Management Tool is a full-stack web application developed to simplify personal and organizational financial tracking. 

It features secure authentication using Google OAuth, category-based expense management, and a dynamic dashboard with real-time analytics. 
The backend was built using Node.js and Express with MongoDB for structured data storage and scalability. 

I focused on clean API architecture, protected routes, and optimized database queries for performance efficiency. 

The application is fully responsive and designed with modern UX principles to ensure intuitive financial management.
    `,
    liveLink: "https://expense-tool-orpin.vercel.app/"
  },

  {
    title: "F1 Legends",
    tagline: "Interactive Formula 1 experience",
    image: `${process.env.PUBLIC_URL}/images/F1.png`,
    tech: ["HTML", "CSS", "JavaScript"],
    details: `
    F1 Legends is a visually immersive multi-page motorsport website built to showcase the evolution of Formula 1 through structured storytelling and modern UI principles. 
    The platform includes dedicated sections for legendary drivers, iconic teams, historic rivalries, and winning moments. 

    I implemented smooth scroll animations, interactive content layouts, and responsive design to ensure seamless viewing across devices. 
    Special attention was given to visual hierarchy, layout consistency, and engaging user experience. 

    The project demonstrates strong front-end architecture, clean CSS structuring, and performance-optimized asset handling.
    `,
    liveLink: "https://iridescent-elf-9a4025.netlify.app/"
  }
];


function Projects() {
  const ref = useScrollReveal();
  const [activeProject, setActiveProject] = useState(null);

useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") setActiveProject(null);
  };

  window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
}, []);

  const cards = useMemo(() => {
    return projectsData.map((project, index) => (
      <img
        key={index}
        src={project.image}
        alt={project.title}
        className="card-image"
      />
    ));
  }, []);
=======
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
>>>>>>> a1ca7f7c61deb8971e07ded44acf075827082bf3

  return (
    <section className="section reveal" id="projects" ref={ref}>
      <h2 className="section-title">Projects</h2>
      <div className="divider"></div>

<<<<<<< HEAD
      <div style={{ width: 360, height: 360, margin: "0 auto" }}>
        <Stack
          randomRotation={false}
          sensitivity={150}
          sendToBackOnClick={true}
          cards={cards}
          onCardClick={(index) => setActiveProject(projectsData[index])}
        />
      </div>

      {activeProject && (
        <div
          className="project-modal"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>

            <h3>{activeProject.title}</h3>
            <p className="modal-tagline">{activeProject.tagline}</p>
            <p className="modal-description">{activeProject.details}</p>

            <div className="project-tech">
              {activeProject.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            {activeProject.liveLink && (
              <a
                href={activeProject.liveLink}
                target="_blank"
                rel="noreferrer"
                className="modal-live"
              >
                Visit Live →
              </a>
            )}
          </div>
        </div>
      )}
=======
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
>>>>>>> a1ca7f7c61deb8971e07ded44acf075827082bf3
    </section>
  );
}

export default Projects;
