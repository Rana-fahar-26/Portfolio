import React from 'react';
import { motion } from 'framer-motion';

export default function DesignWorks() {
  const uiuxImages = ['/ui1.jpg', '/ui2.jpg', '/ui3.jpg'];
  const posterImages = ['/poster1.jpg', '/poster2.jpg', '/poster3.jpg'];
  const logoImages = ['/logo1.jpg', '/logo2.jpg', '/logo3.jpg'];
  const videoSources = ['/fahar-video.mp4', '/fahar-video.mp4', '/fahar-video.mp4'];

  return (
    <section 
      id="designs" 
      className="relative py-24 bg-white text-black font-sans overflow-hidden border-b border-neutral-200 w-full"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Soft Red Ambient Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-20">
        
        {/* Main Section Header */}
        <div className="flex items-center space-x-4">
          <div className="w-2.5 h-12 bg-red-600 rounded-full" />
          <div>
            <span className="text-xs font-mono font-black uppercase tracking-widest text-red-600 block">
              // CREATIVE PORTFOLIO
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black">
              DESIGN WORK
            </h2>
          </div>
        </div>

        {/* 01. UI / UX DESIGN */}
        <div className="space-y-6">
          <div className="flex justify-between items-end border-b-2 border-red-600 pb-3">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-3">
              <span className="text-red-600 font-mono">01.</span> UI/UX & DIGITAL
            </h3>
            <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider hidden sm:block">
              Web & Mobile Interfaces
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {uiuxImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="aspect-square bg-neutral-100 rounded-2xl overflow-hidden border-2 border-red-600/30 hover:border-red-600 shadow-md group relative"
              >
                <img 
                  src={img} 
                  alt={`UI UX ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/profile.jpg';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 02. POSTERS */}
        <div className="space-y-6">
          <div className="flex justify-between items-end border-b-2 border-red-600 pb-3">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-3">
              <span className="text-red-600 font-mono">02.</span> POSTERS
            </h3>
            <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider hidden sm:block">
              Commercial & Print Poster Media
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posterImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="aspect-square bg-neutral-100 rounded-2xl overflow-hidden border-2 border-red-600/30 hover:border-red-600 shadow-md group relative"
              >
                <img 
                  src={img} 
                  alt={`Poster ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/profile.jpg';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 03. LOGOS */}
        <div className="space-y-6">
          <div className="flex justify-between items-end border-b-2 border-red-600 pb-3">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-3">
              <span className="text-red-600 font-mono">03.</span> LOGOS
            </h3>
            <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider hidden sm:block">
              Vector Marks & Identity Logos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {logoImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="aspect-square bg-neutral-100 rounded-2xl overflow-hidden border-2 border-red-600/30 hover:border-red-600 shadow-md group relative"
              >
                <img 
                  src={img} 
                  alt={`Logo ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/profile.jpg';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 04. VIDEOS */}
        <div className="space-y-6">
          <div className="flex justify-between items-end border-b-2 border-red-600 pb-3">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-3">
              <span className="text-red-600 font-mono">04.</span> VIDEOS
            </h3>
            <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider hidden sm:block">
              Motion Graphics & Promo Reels
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoSources.map((vSrc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="aspect-video bg-black rounded-2xl overflow-hidden border-2 border-red-600/40 shadow-lg relative"
              >
                <video 
                  src={vSrc} 
                  controls 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Instagram CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-10 border-2 border-red-600 shadow-2xl flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-red-500 block">
              EXPLORE MORE CREATIVE WORKS
            </span>
            <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
              WANT TO SEE MORE DESIGNS?
            </h4>
            <p className="text-neutral-400 text-sm">
              Check out our latest visual projects, branding identity, and motion assets on Instagram.
            </p>
          </div>

          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-2xl font-mono font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-red-600/30 shrink-0"
          >
            <span>@FAHAR.STUDIO</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
