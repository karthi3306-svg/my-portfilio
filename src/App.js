import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div id="root">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
