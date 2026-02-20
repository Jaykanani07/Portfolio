import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);

      const sections = navLinks.map(link => link.href.replace("#", ""));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="logo">Jay.</div>

      <nav className={menuOpen ? "active" : ""}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={
              activeSection === link.href.replace("#", "") ? "active" : ""
            }
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Navbar;