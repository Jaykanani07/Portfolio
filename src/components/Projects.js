import React, { useState, useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import Stack from "./Stack";

const projectsData = [
  {
    title: "Student Attendance Management System",
    tagline: "Digital academic record management",
    image: `${process.env.PUBLIC_URL}/images/attendance.png`,
    tech: ["PHP", "MySQL", "JavaScript"],
    details: `
This web-based academic system was built using PHP and MySQL to manage structured student records efficiently.
It includes full CRUD operations for attendance tracking, subject management, and student record updates.

I designed the backend architecture to ensure clean database relations and optimized queries.
The frontend was developed with responsive layouts for smooth usability across devices.

The system improves data accuracy, reduces paperwork, and provides centralized academic management.
    `,
  },
  {
    title: "IoT Smart Attendance System",
    tagline: "Automated biometric attendance system",
    image: `${process.env.PUBLIC_URL}/images/IOT-Biometric-Fingerprint-Attend.png`,
    tech: ["C++", "Firebase", "IoT Concepts"],
    details: `
This IoT-based system automates biometric attendance using fingerprint authentication hardware.
I programmed the microcontroller in C++ for real-time biometric capture and validation.

Firebase was integrated for cloud-based storage and live synchronization.
The system minimizes manual errors and enhances attendance accuracy.

This project strengthened my embedded systems, hardware integration, and real-time data handling skills.
    `,
  },
  {
    title: "Expense Management Tool",
    tagline: "Smart finance tracking for individuals & teams",
    image: `${process.env.PUBLIC_URL}/images/EMT.png`,
    tech: ["React", "Node.js", "Express", "MongoDB", "Google Auth"],
    details: `
The Expense Management Tool is a full-stack web application developed for structured financial tracking.
It includes secure Google OAuth authentication and protected API routes.

Users can categorize expenses, track spending trends, and view dashboard analytics.
The backend uses Node.js and Express with MongoDB for scalable data storage.

The UI is responsive and built with modern UX principles for intuitive financial management.
    `,
    liveLink: "https://expense-tool-orpin.vercel.app/",
  },
  {
    title: "F1 Legends",
    tagline: "Interactive Formula 1 experience",
    image: `${process.env.PUBLIC_URL}/images/F1.png`,
    tech: ["HTML", "CSS", "JavaScript"],
    details: `
F1 Legends is a visually immersive multi-page motorsport website.
It features structured storytelling about legendary drivers, teams, and iconic rivalries.

I implemented smooth scroll animations and responsive layouts.
The design focuses on strong visual hierarchy and performance optimization.

This project demonstrates strong front-end structuring and UI consistency.
    `,
    liveLink: "https://iridescent-elf-9a4025.netlify.app/",
  },
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

  return (
    <section className="section reveal" id="projects" ref={ref}>
      <h2 className="section-title">Projects</h2>
      <div className="divider"></div>

      <div className="projects-stack-wrapper">
        <Stack
          cards={projectsData.map((project, index) => (
            <img
              key={index}
              src={project.image}
              alt={project.title}
              className="card-image"
            />
          ))}
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
            <p className="modal-description" style={{ whiteSpace: "pre-line" }}>
              {activeProject.details}
            </p>

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
    </section>
  );
}

export default Projects;