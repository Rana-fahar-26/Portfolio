import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const csSkills = [
    { name: "FIREBASE", style: "bg-white text-black border-white" },
    { name: "OLLAMA AI", style: "bg-red-600 text-white border-red-500" },
    { name: "GRAPH ALGORITHMS", style: "bg-neutral-900 text-red-500 border-red-600/60" },
    { name: "FULL-STACK DEV", style: "bg-white text-black border-white" },
    { name: "PYTHON", style: "bg-red-600 text-white border-red-500" },
    { name: "REACT.JS", style: "bg-neutral-900 text-white border-neutral-700" },
    { name: "FLASK", style: "bg-white text-black border-white" },
    { name: "MONGODB", style: "bg-red-600 text-white border-red-500" },
    { name: "NEO4J", style: "bg-neutral-900 text-white border-neutral-700" },
    { name: "CISCO PACKET TRACER", style: "bg-white text-black border-white" },
    { name: "C++", style: "bg-red-600 text-white border-red-500" },
    { name: "JAVASCRIPT", style: "bg-white text-black border-white" }
  ];

  const graphicSkills = [
    { name: "PRINT DESIGN", style: "bg-white text-black border-white" },
    { name: "LOGO DESIGN", style: "bg-red-600 text-white border-red-500" },
    { name: "UI/UX PROTOTYPING", style: "bg-neutral-900 text-white border-red-600/60" },
    { name: "VIDEO EDITING", style: "bg-white text-black border-white" },
    { name: "CONCEPT ART", style: "bg-red-600 text-white border-red-500" },
    { name: "MOTION DESIGN", style: "bg-neutral-900 text-white border-neutral-700" },
    { name: "VISUAL ARTS", style: "bg-white text-black border-white" },
    { name: "ADOBE PHOTOSHOP", style: "bg-red-600 text-white border-red-500" },
    { name: "ADOBE ILLUSTRATOR", style: "bg-neutral-900 text-white border-neutral-700" },
    { name: "FIGMA", style: "bg-white text-black border-white" },
    { name: "BRAND IDENTITY", style: "bg-red-600 text-white border-red-500" }
  ];

  // Duplicating for seamless infinite marquee loop
  const csLoop = [...csSkills, ...csSkills, ...csSkills];
  const graphicLoop = [...graphicSkills, ...graphicSkills, ...graphicSkills];

  return (
    <section id="skills" className="relative py-20 bg-neutral-950 text-white font-sans overflow-hidden border-b border-neutral-800">
      
      {/* Soft Ambient Red Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[160px] pointer-events-none rounded-full" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12 relative z-10">
        <div className="flex items-center space-x-4">
          <div className="w-2.5 h-12 bg-red-600 rounded-full" />
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            TECHNICAL & VISUAL EXPERTISE
          </h2>
        </div>
      </div>

      {/* CATEGORY 1: COMPUTER SCIENCE & AI */}
      <div className="space-y-4 mb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-red-500 bg-red-950/40 border border-red-900/60 px-3 py-1 rounded-md">
            COMPUTER SCIENCE & AI ARCHITECTURE
          </span>
        </div>

        {/* Marquee Row 1 (Scrolling Left) */}
        <div className="flex overflow-hidden whitespace-nowrap py-3 bg-neutral-900/60 border-y border-neutral-800 backdrop-blur-sm">
          <motion.div 
            className="flex space-x-4 items-center shrink-0"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {csLoop.map((skill, index) => (
              <div 
                key={index} 
                className={`px-6 py-2.5 rounded-lg border font-mono font-black text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer ${skill.style}`}
              >
                {skill.name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CATEGORY 2: GRAPHICS & VISUAL IDENTITY */}
      <div className="space-y-4 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-red-500 bg-red-950/40 border border-red-900/60 px-3 py-1 rounded-md">
            GRAPHICS & VISUAL IDENTITY
          </span>
        </div>

        {/* Marquee Row 2 (Scrolling Right) */}
        <div className="flex overflow-hidden whitespace-nowrap py-3 bg-neutral-900/60 border-y border-neutral-800 backdrop-blur-sm">
          <motion.div 
            className="flex space-x-4 items-center shrink-0"
            animate={{ x: ["-33.33%", "0%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {graphicLoop.map((skill, index) => (
              <div 
                key={index} 
                className={`px-6 py-2.5 rounded-lg border font-mono font-black text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer ${skill.style}`}
              >
                {skill.name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
