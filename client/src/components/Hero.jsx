import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = ["Frontend Developer", "Graphic Designer", "AI Engineer"];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden font-sans border-b border-white/20">
      
      {/* Floating Curved Transparent Header */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-8 py-3.5 flex items-center justify-center shadow-2xl">
        <nav className="flex items-center space-x-6 sm:space-x-8 text-xs font-mono uppercase tracking-widest text-gray-300">
          <a href="#about" className="hover:text-red-500 transition-colors">About</a>
          <a href="#experience" className="hover:text-red-500 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-red-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-red-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Standalone Separate "Get In Touch" Button */}
      <a 
        href="#contact" 
        className="fixed top-6 right-6 sm:right-10 z-50 bg-[#800020] hover:bg-red-600 text-white px-5 py-2.5 font-sans text-xs font-extrabold uppercase tracking-widest rounded-full transition-all duration-300 border border-white/30 shadow-2xl hover:scale-105"
      >
        Get In Touch
      </a>

      {/* Left-Side Pure Social Logos */}
      <div className="absolute left-6 sm:left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center space-y-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rana-fahar-inam-156034363/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="text-white hover:text-red-500 transition-colors duration-300"
        >
          <svg className="w-7 h-7 fill-current hover:scale-110 transition-transform" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z"/>
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Rana-fahar-26"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className="text-white hover:text-red-500 transition-colors duration-300"
        >
          <svg className="w-7 h-7 fill-current hover:scale-110 transition-transform" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
          </svg>
        </a>
      </div>

      {/* Right Side Video Container */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 lg:w-7/12 overflow-hidden z-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-[center_15%] translate-y-0 scale-100 opacity-100 block"
        >
          <source src="/fahar-video.mp4" type="video/mp4" />
          <source src="./fahar-video.mp4" type="video/mp4" />
          <source src="fahar-video.mp4" type="video/mp4" />
        </video>

        {/* Left Edge Blending Mask */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none z-10" />

        {/* Bottom Soft Mask */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-20 max-w-6xl w-full mx-auto px-12 sm:px-16 lg:px-20 pt-28 pb-16 text-left space-y-6">
        
        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none max-w-xl"
        >
          Fahar Inam <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent font-black drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]">Rana</span>
        </motion.h1>

        {/* Dynamic Animated Roles Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-12 flex items-center font-sans text-base sm:text-lg font-bold tracking-wide pt-1"
        >
          <div className="inline-flex items-center space-x-3 bg-red-950/40 border border-red-500/40 backdrop-blur-md px-5 py-2.5 rounded-full shadow-[0_0_25px_rgba(220,38,38,0.2)]">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[currentRoleIndex]}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="text-white font-semibold uppercase tracking-widest text-xs sm:text-sm"
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Curved Hero CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-start font-sans pt-4"
        >
          <a
            href="#projects"
            className="bg-[#800020] hover:bg-red-600 text-white px-8 py-3.5 rounded-full border border-red-500/30 font-extrabold text-xs uppercase tracking-widest transition-all duration-300 font-sans shadow-lg shadow-red-950/50 hover:shadow-red-600/30 hover:scale-105"
          >
            View Works
          </a>
          <a
            href="/cv.pdf"
            download="Fahar_Inam_Rana_CV.pdf"
            className="bg-black/60 hover:bg-white/10 backdrop-blur-md text-white px-8 py-3.5 rounded-full border border-white/30 font-extrabold text-xs uppercase tracking-widest transition-all duration-300 font-sans shadow-lg hover:border-red-500/50 hover:scale-105"
          >
            Download CV
          </a>
        </motion.div>

      </div>

    </section>
  );
}
