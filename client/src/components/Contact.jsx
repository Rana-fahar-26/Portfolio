import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 bg-white text-black font-sans overflow-hidden w-full"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-4 mb-16">
          <div className="w-3 h-12 bg-red-600 rounded-full" />
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-red-600 font-sans">
            GET IN TOUCH
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Details Column (Frameless Clean View) */}
          <div className="space-y-10 py-2">
            {/* Email */}
            <div className="flex items-center space-x-5">
              <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 shadow-md">
                ✉
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-mono font-black uppercase tracking-widest text-red-600 mb-1">
                  EMAIL ME
                </p>
                <a href="mailto:ranafaharinam@gmail.com" className="text-xl sm:text-2xl font-black text-black hover:text-red-600 transition-colors break-all tracking-tight">
                  ranafaharinam@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center space-x-5">
              <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 shadow-md">
                📞
              </div>
              <div>
                <p className="text-xs font-mono font-black uppercase tracking-widest text-red-600 mb-1">
                  PHONE NUMBER
                </p>
                <a href="tel:03142557894" className="text-xl sm:text-2xl font-black text-black hover:text-red-600 transition-colors tracking-tight">
                  03142557894
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-5">
              <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 shadow-md">
                📍
              </div>
              <div>
                <p className="text-xs font-mono font-black uppercase tracking-widest text-red-600 mb-1">
                  LOCATION
                </p>
                <p className="text-xl sm:text-2xl font-black text-black tracking-tight">
                  Sahiwal, Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-red-600 border-4 border-red-700 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6"
          >
            <div>
              <label className="block text-xs font-mono font-black uppercase tracking-widest text-white mb-2">
                YOUR NAME
              </label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required 
                className="w-full bg-white text-black font-bold placeholder-neutral-400 px-4 py-4 rounded-xl outline-none focus:ring-4 focus:ring-black/20 transition-all text-base"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-black uppercase tracking-widest text-white mb-2">
                YOUR EMAIL
              </label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required 
                className="w-full bg-white text-black font-bold placeholder-neutral-400 px-4 py-4 rounded-xl outline-none focus:ring-4 focus:ring-black/20 transition-all text-base"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-black uppercase tracking-widest text-white mb-2">
                MESSAGE
              </label>
              <textarea 
                name="message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required 
                className="w-full bg-white text-black font-bold placeholder-neutral-400 px-4 py-4 rounded-xl outline-none focus:ring-4 focus:ring-black/20 transition-all resize-none text-base"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-black hover:bg-neutral-900 text-white font-mono font-black text-base uppercase tracking-wider py-4 rounded-xl transition-all shadow-xl hover:scale-[1.01] active:scale-[0.99]"
            >
              SEND MESSAGE
            </button>
          </motion.form>

        </div>

      </div>
    </section>
  );
}
