"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 flex items-center justify-center overflow-hidden">
      {/* 
        Parallax Background Image 
        To add a real image, replace bg-white above with: bg-[url('/your-image.jpg')] bg-cover bg-center bg-fixed
      */}
      <div className="absolute inset-0 bg-[#FAF7F0]"></div>
      
      {/* Subtle gold accent instead of multi-color gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF7F0] via-[#FAF7F0] to-[#C4A052]/20 bg-fixed"></div>

      {/* Decorative top/bottom ancient borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#C4A052]/20"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#C4A052]/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-center lg:justify-end">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#FAF7F0]/90 backdrop-blur-md border border-[#C4A052]/40 p-6 sm:p-8 md:p-10 rounded-sm shadow-xl max-w-lg w-full text-center lg:text-left mx-4 sm:mx-0 relative"
        >

          <h2 className="font-bodoni text-lg sm:text-xl md:text-2xl text-navy uppercase tracking-[0.18em] mb-3 leading-snug lg:text-left text-center relative z-10">
            More Than a Product—<br />
            <span className="text-[#C4A052] italic text-2xl md:text-3xl mt-1 block">A Daily Ritual.</span>
          </h2>
          
          <div className="w-16 h-[2px] bg-[#C4A052] mx-auto lg:mx-0 mb-6 relative z-10"></div>
          
          <p className="text-gray-600 text-sm leading-[2] font-light mb-8 relative z-10">
            Immerse yourself in our curated collection of botanical fragrances and nourishing cosmetics. Designed for those who value tranquility, elegance, and the ultimate self-care experience.
          </p>

          <button 
            onClick={scrollToProducts}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#C4A052] text-[#C4A052] text-xs uppercase tracking-[0.2em] font-bold rounded-none hover:bg-[#C4A052] hover:text-white transition-all duration-500 cursor-pointer relative z-10 font-bodoni"
          >
            Explore the Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
}
