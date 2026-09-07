import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      num: "01",
      title: "Airline Route Graph Explorer",
      category: "GRAPH ALGORITHMS & DATA STRUCTURES",
      description: "Interactive graph-based pathfinder engine built to optimize flight connectivity, analyze shortest routes, and visualize complex network nodes.",
      tags: ["Neo4j", "Python", "Graph Theory", "Algorithms", "React"],
      link: "#"
    },
    {
      num: "02",
      title: "UniPilot AI",
      category: "ARTIFICIAL INTELLIGENCE & LLM",
      description: "Intelligent campus co-pilot integrated with local Ollama LLM models to automate academic queries, schedule tracking, and student task workflows.",
      tags: ["Ollama AI", "Python", "Flask", "React.js", "Tailwind CSS"],
      link: "#"
    },
    {
      num: "03",
      title: "Cloud-Based Esports Network",
      category: "NETWORKING & CLOUD INFRASTRUCTURE",
      description: "High-bandwidth multi-tier network architecture designed in Cisco Packet Tracer with VLAN segmentation, dynamic routing, and redundant failover.",
      tags: ["Cisco Packet Tracer", "VLAN", "Routing Protocols", "Network Security"],
      link: "#"
    },
    {
      num: "04",
      title: "QR Attendance System",
      category: "FULL-STACK WEB APPLICATION",
      description: "Automated attendance tracking portal featuring dynamic QR code generation, real-time database synchronization, and administrative report analytics.",
      tags: ["React.js", "Firebase", "Tailwind CSS", "QR Engine"],
      link: "#"
    },
    {
      num: "05",
      title: "Lost & Found Management System",
      category: "DATABASE & UI/UX DESIGN",
      description: "Centralized web platform for reporting and recovering lost items, featuring category filtering, image uploads, and automated matching notifications.",
      tags: ["React.js", "MongoDB", "Node.js", "UI/UX Design"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-red-600 text-white font-sans overflow-hidden border-b border-red-700">
      
      {/* Ambient Dark Backdrop Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-black/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex items-center space-x-4">
          <div className="w-2.5 h-12 bg-black rounded-full" />
          <div>
            <span className="text-xs font-mono font-black uppercase tracking-widest text-black/80 block">
              // PORTFOLIO
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
              FEATURED PROJECTS
            </h2>
          </div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-neutral-950 text-white rounded-3xl p-8 border-2 border-black shadow-2xl flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle Red Accent Corner Bar */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-600/20 to-transparent pointer-events-none rounded-tr-3xl" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-black text-red-600">
                    {project.num}
                  </span>
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-red-500 bg-red-950/60 border border-red-900/60 px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white group-hover:text-red-500 transition-colors leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-neutral-300 text-sm leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              <div className="pt-6 space-y-6">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a 
                  href={project.link} 
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-neutral-800 text-xs font-mono font-black uppercase tracking-widest text-white group-hover:text-red-500 transition-colors"
                >
                  <span>VIEW DETAILS</span>
                  <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
