import React from 'react';
import { motion } from 'framer-motion';

const designCategories = [
  {
    categoryTitle: "Fahar Studio",
    tagline: "Brand Identity & Visual Systems",
    isRedBg: true,
    isVideo: false,
    items: [
      { id: "01", mediaUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" },
      { id: "02", mediaUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80" },
      { id: "03", mediaUrl: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    categoryTitle: "Posters",
    tagline: "Commercial & Print Poster Media",
    isRedBg: false,
    isVideo: false,
    items: [
      { id: "01", mediaUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80" },
      { id: "02", mediaUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80" },
      { id: "03", mediaUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    categoryTitle: "Logos",
    tagline: "Vector Marks & Identity Logos",
    isRedBg: true,
    isVideo: false,
    items: [
      { id: "01", mediaUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80" },
      { id: "02", mediaUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
      { id: "03", mediaUrl: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    categoryTitle: "Videos",
    tagline: "Motion Graphics & Promo Reels",
    isRedBg: false,
    isVideo: true,
    items: [
      { id: "01", mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-fast-line-lights-animation-41558-large.mp4" },
      { id: "02", mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-red-and-white-abstract-lines-41561-large.mp4" },
      { id: "03", mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-41552-large.mp4" }
    ]
  }
];

export default function Design() {
  const getCardAnimation = (idx) => {
    if (idx === 0) {
      return {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.7, ease: "easeOut" }
      };
    } else if (idx === 2) {
      return {
        initial: { opacity: 0, x: 100 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.7, ease: "easeOut" }
      };
    } else {
      return {
        initial: { opacity: 0, y: -70, scale: 1.08 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.8, delay: 0.25, ease: "easeOut" }
      };
    }
  };

  return (
    <section id="design" className="py-24 bg-black text-white px-6 sm:px-12 border-b border-white/20 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Main Section Header */}
        <div className="border-l-4 border-red-600 pl-5">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white font-sans">
            Designs
          </h2>
          <p className="text-sm font-sans text-gray-400 mt-2 tracking-wide uppercase font-semibold">
            Fahar Studio • Posters • Logos • Videos
          </p>
        </div>

        {/* 4 Category Groups */}
        <div className="space-y-16 font-sans">
          {designCategories.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              
              {/* Category Subheading */}
              <div className="border-b border-white/20 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide font-sans flex items-center gap-3">
                  <span className="text-red-600 font-mono text-xl">0{groupIdx + 1}.</span>
                  {group.categoryTitle}
                </h3>
                <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-widest">
                  {group.tagline}
                </span>
              </div>

              {/* Grid Container */}
              <div className={`p-6 sm:p-8 transition-colors ${group.isRedBg ? 'bg-[#800020] border border-white/30' : 'bg-transparent'}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans relative">
                  {group.items.map((item, itemIdx) => {
                    const anim = getCardAnimation(itemIdx);
                    const isCenterCard = itemIdx === 1;

                    return (
                      <motion.div
                        key={itemIdx}
                        initial={anim.initial}
                        whileInView={anim.whileInView}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={anim.transition}
                        className={`relative ${isCenterCard ? 'z-20 md:-mt-2' : 'z-10'}`}
                      >
                        {/* Thin White Border Media Frame */}
                        <div className="bg-black border border-white/30 p-2 h-72 w-full flex items-center justify-center overflow-hidden shadow-2xl">
                          {group.isVideo ? (
                            <video
                              src={item.mediaUrl}
                              controls
                              muted
                              loop
                              playsInline
                              className="w-full h-full object-cover border border-white/20 block"
                            />
                          ) : (
                            <img
                              src={item.mediaUrl}
                              alt={`${group.categoryTitle} ${item.id}`}
                              className="w-full h-full object-cover border border-white/20 block"
                            />
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Instagram Call-To-Action Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-neutral-950 border border-white/20 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-red-600 transition-colors"
        >
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
              EXPLORE MORE CREATIVE WORKS
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide font-sans">
              Want to see more designs?
            </h4>
            <p className="text-xs text-gray-400 font-sans">
              Check out our latest visual projects, branding identity, and motion assets on Instagram.
            </p>
          </div>

          <a 
            href="https://www.instagram.com/fahar.studio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#800020] hover:bg-red-600 text-white px-6 py-3.5 border border-white/30 font-extrabold text-xs uppercase tracking-widest transition-all font-sans group flex-shrink-0"
          >
            {/* Instagram Logo Icon */}
            <svg className="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@fahar.studio</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
