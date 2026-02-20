import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

function Experience() {
  const ref = useScrollReveal();

  return (
    <section className="section reveal" id="experience" ref={ref}>
      <h2 className="section-title">Experience</h2>
      <div className="divider"></div>

      <div className="experience-card">
        <h3>Web Developer Intern</h3>
        <span>Webmobi360 · Dec 2025 – Present</span>

        <ul style={{ marginTop: "18px", lineHeight: "1.8", paddingLeft: "18px" }}>
          <li>Developed responsive UI components using React and modern CSS</li>
          <li>Improved application performance by optimizing render cycles and state management</li>
          <li>Collaborated with backend team to integrate REST APIs</li>
          <li>Built reusable component systems to accelerate development</li>
          <li>Participated in code reviews and UI/UX refinement discussions</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;