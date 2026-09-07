import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white text-black font-sans overflow-hidden border-b border-neutral-200">
      
      {/* Soft Ambient Red Background Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-red-500/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Extra Curved Floating Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex justify-center md:justify-start"
          >
            {/* Enhanced Floating Motion */}
            <motion.div 
              animate={{ y: [0, -22, 0] }}
              transition={{ 
                duration: 3.8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[4/5] rounded-[2.5rem] p-1.5 bg-gradient-to-b from-red-600 via-red-500 to-red-700 shadow-2xl shadow-red-600/30"
            >
              <div className="w-full h-full bg-black rounded-[2.2rem] overflow-hidden relative border border-neutral-800 p-1 flex items-center justify-center">
                
                {/* Full Image Box */}
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-neutral-900">
                  <motion.img 
                    src="/profile.jpg" 
                    alt="Fahar Inam Rana" 
                    className="w-full h-full object-cover object-top"
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "/profile.png";
                    }}
                  />
                </div>

              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Red Heading & Black Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 space-y-6 text-left"
          >
            {/* Red Heading */}
            <h2 className="text-5xl sm:text-7xl font-black text-red-600 tracking-tight leading-none">
              Hello!
            </h2>

            {/* Main Black Text with Red Highlights */}
            <div className="space-y-4 text-black text-lg sm:text-xl leading-relaxed font-normal">
              <p>
                Hi, my name is <strong className="font-extrabold text-black">Fahar Inam Rana</strong>. I’m a Computer Science student and multidisciplinary creative focused on <span className="text-red-600 font-bold">Graphic Design</span>, <span className="text-red-600 font-bold">Front-End Development</span>, and <span className="text-red-600 font-bold">AI</span>.
              </p>
              <p className="text-neutral-800 text-base sm:text-lg">
                I combine technical problem-solving with a strong visual sense to build modern web applications, digital products, and distinctive visual identities—turning complex ideas into <span className="text-red-600 font-bold">clean, functional solutions</span>.
              </p>
            </div>

            {/* Location & Specialization Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t-2 border-red-600">
              <div>
                <span className="block text-xs font-mono font-black uppercase tracking-widest text-red-600 mb-1">
                  PRIMARY LOCATION
                </span>
                <span className="text-lg font-black text-black uppercase">
                  PAKISTAN
                </span>
              </div>
              <div>
                <span className="block text-xs font-mono font-black uppercase tracking-widest text-red-600 mb-1">
                  SPECIALIZATION
                </span>
                <span className="text-sm font-black text-black uppercase block leading-snug">
                  Graphic Design <span className="text-red-600">•</span> Front-End <span className="text-red-600">•</span> AI
                </span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
