"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 sm:py-32 md:py-48 bg-gray-100 flex items-center justify-center overflow-hidden">
      {/* 
        Parallax Background Image 
        To add a real image, replace bg-white above with: bg-[url('/your-image.jpg')] bg-cover bg-center bg-fixed
      */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Subtle gold accent instead of multi-color gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#C4A052]/10 bg-fixed"></div>

      {/* Optional dark overlay to ensure text contrast if a real image is used */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-center lg:justify-end">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-md border border-white/40 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl max-w-md w-full text-center lg:text-left mx-4 sm:mx-0"
        >
          <h2 className="font-bodoni text-xl sm:text-2xl md:text-3xl text-navy uppercase tracking-[0.18em] mb-3 leading-snug lg:text-left text-center">
            More Than a Product—<br />
            <span className="text-[#C4A052]">A Daily Ritual.</span>
          </h2>
          
          <div className="w-12 h-[2px] bg-[#C4A052] mx-auto lg:mx-0 mb-6"></div>
          
          <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed font-light">
            Immerse yourself in our curated collection of botanical fragrances and nourishing cosmetics. Designed for those who value tranquility, elegance, and the ultimate self-care experience.
          </p>

          <button 
            onClick={scrollToProducts}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-navy text-white text-xs uppercase tracking-[0.15em] font-bold rounded hover:bg-[#121245] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            Explore the Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
}
