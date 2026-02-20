import React, { useEffect } from 'react';
import Ballpit from "./components/Ballpit";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  // Always force dark mode
  useEffect(() => {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <div className="app-wrapper">

      {/* 🔥 BALLPIT BACKGROUND */}
<div className="background-layer">
<Ballpit
  count={160}
  gravity={0.6}
  friction={0.995}
  wallBounce={0.95}
  followCursor={true}
  colors={[0x6c63ff, 0x9f94ff, 0xbab4ff]}
/>
</div>

      {/* 🌐 WEBSITE CONTENT */}
      <div className="content-layer">
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

    </div>
  );
}

export default App;
