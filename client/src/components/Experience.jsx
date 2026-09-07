import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      id: "01",
      org: "PUNJAB INFORMATION TECHNOLOGY BOARD (PITB)",
      title: "AI ENGINEER INTERN",
      badge: "6-WEEK INTERNSHIP",
      location: "PUNJAB, PAKISTAN",
      description: "Completed an intensive 6-week internship focused on AI engineering workflows, machine learning integrations, system automation, and modern software architectures within public-sector IT infrastructure.",
      tags: [
        "AI ENGINEERING",
        "MACHINE LEARNING WORKFLOWS",
        "SYSTEM AUTOMATION",
        "PITB INFRASTRUCTURE"
      ]
    },
    {
      id: "02",
      org: "RIPHAH INTERNATIONAL UNIVERSITY",
      title: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
      badge: "SAHIWAL CAMPUS",
      location: "SAHIWAL, PAKISTAN",
      description: "Pursuing rigorous academic and practical training in Computer Science, focusing on full-stack web architectures, graph data structures, artificial intelligence systems, network engineering, and visual design.",
      tags: []
    }
  ];

  return (
    <section 
      id="experience" 
      className="relative py-24 bg-red-600 text-white font-sans overflow-hidden w-full"
      style={{ backgroundColor: '#dc2626' }}
    >
      {/* Subtle Ambient Red Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/20 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex items-center space-x-4 mb-12">
          <div className="w-3 h-12 bg-white rounded-full" />
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white font-sans">
            EXPERIENCE & EDUCATION
          </h2>
        </div>

        {/* Experience Cards (Dark Inner Part Preserved) */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-neutral-950/95 border border-neutral-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-red-500 tracking-wider uppercase block mb-1">
                    {exp.id} // {exp.org}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    {exp.title}
                  </h3>
                </div>

                <div className="flex flex-col items-start md:items-end shrink-0">
                  <span className="bg-red-800/90 text-white font-mono text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-1">
                    {exp.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 font-semibold uppercase tracking-wider">
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {exp.description}
              </p>

              {exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-800/60">
                  {exp.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono text-xs px-3 py-1.5 rounded uppercase tracking-wider font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
