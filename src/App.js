import React, { useEffect } from "react";
import Ballpit from "./components/Ballpit";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return (
    <>
      <div className="ballpit-bg">
<Ballpit
  count={80}
  gravity={0.25}
  friction={0.997}
  wallBounce={0.9}
  followCursor={false}
  colors={[0x6c63ff, 0x9f94ff, 0xbab4ff]}
/>
      </div>

      <div className="app-content">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;