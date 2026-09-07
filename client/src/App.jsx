import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Design from './components/Design';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-red-600 selection:text-white font-sans">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Design />
      <Contact />
    </div>
  );
}
