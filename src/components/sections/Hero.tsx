"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 relative overflow-hidden bg-light-bg text-center">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/40 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] pointer-events-none"></div>
      
      {/* Decorative Gold Glow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center mt-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 flex items-center justify-center w-full"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50 mr-6"></div>
          <h2 className="font-bodoni text-5xl md:text-7xl text-[#C4A052] font-normal tracking-[0.05em] uppercase drop-shadow-sm">
            Incense
          </h2>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50 ml-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="font-poppins text-4xl md:text-[5.5rem] font-bold text-[#1A1A1A] tracking-[0.25em] uppercase mb-8 leading-none">
            Fragrances
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
            Explore our exquisite collection of pure fragrances, meticulously crafted to elevate your incense experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="px-10 py-4 bg-[#A38A70] text-white text-sm font-semibold tracking-[0.2em] uppercase hover:bg-[#8B735A] transition-all duration-300 flex items-center gap-3 mb-20 shadow-[0_4px_20px_rgba(163,138,112,0.3)] hover:shadow-[0_6px_25px_rgba(163,138,112,0.4)] hover:-translate-y-0.5 relative overflow-hidden group">
            <span className="relative z-10">Discover More</span> 
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
          </button>
        </motion.div>

        {/* Product Visual Area Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative w-full max-w-5xl mx-auto h-[450px] flex flex-col items-center justify-end"
        >
          {/* Top Tier Products Placeholder */}
          <div className="absolute top-0 w-4/5 h-56 bg-white/40 border border-white/60 rounded-xl flex flex-col items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md z-0 transition-all hover:bg-white/50">
            <span className="text-[#C4A052] font-medium tracking-widest uppercase text-sm">Top Tier Products Placeholder</span>
            <span className="text-xs text-gray-400 mt-3 italic font-bodoni">Insert botanical imagery here</span>
          </div>

          {/* Bottom Shelf/Tier Products Placeholder */}
          <div className="relative w-full h-48 bg-white/80 border border-white/80 rounded-xl flex items-center justify-center shadow-[0_20px_40px_rgb(0,0,0,0.06)] backdrop-blur-xl z-10 translate-y-10 transition-all hover:shadow-[0_25px_50px_rgb(0,0,0,0.08)]">
            <span className="text-[#1A1A1A] font-medium tracking-widest uppercase text-sm">Front Row Products Placeholder</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
