"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../../app/assets/hero.png";

export default function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] flex flex-col items-center justify-center pt-32 pb-16 relative overflow-hidden bg-light-bg text-center">



      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/40 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] pointer-events-none"></div>

      {/* Flower Rain Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 25 }).map((_, i) => {
          const left = `${(i * 17) % 100}%`;
          const delay = (i * 1.3) % 15;
          const duration = 15 + (i % 5) * 3;
          const scale = 0.4 + (i % 4) * 0.15;

          return (
            <motion.div
              key={i}
              className="absolute top-[-10%]"
              style={{ left }}
              animate={{
                y: ["0vh", "120vh"],
                x: ["0px", `${(i % 2 === 0 ? 60 : -60)}px`, "0px"],
                rotate: [0, 180, 360],
              }}
              transition={{
                y: { duration, repeat: Infinity, ease: "linear", delay },
                x: { duration: duration * 0.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay },
                rotate: { duration: duration * 0.8, repeat: Infinity, ease: "linear", delay },
              }}
            >
              {/* Elegant Petal shape */}
              <div
                className="w-5 h-5 bg-[#C4A052]/30 rounded-[50%] rounded-tr-sm backdrop-blur-sm shadow-sm"
                style={{ transform: `scale(${scale}) rotate(45deg)` }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Decorative Gold Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center mt-8 flex-1">

        {/* TOP TITLES & TEXT */}
        <div className="flex flex-col items-center z-10 w-full mt-4 md:mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center w-full mb-3"
          >
            <div className="h-px w-8 bg-[#C4A052]/50 mr-4"></div>
            <h2 className="font-bodoni text-xl md:text-3xl text-[#C4A052] font-normal tracking-[0.2em] uppercase">
              PREMIUM
            </h2>
            <div className="h-px w-8 bg-[#C4A052]/50 ml-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="font-poppins text-4xl md:text-6xl font-bold text-[#1A1A1A] tracking-[0.3em] uppercase leading-none">
              FRAGRANCES
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="px-4 mb-4"
          >
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light tracking-wide text-center">
              Explore the first chapter of the MARA Singhe journey, featuring premium aromatic products crafted with exceptional fragrances and uncompromising quality.
            </p>
          </motion.div>
        </div>

        {/* IMAGE & CTA BUTTON */}
        <div className="relative w-full max-w-[1400px] flex flex-col items-center justify-center flex-1 mt-4 md:mt-8">
          
          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full relative flex justify-center items-center"
          >
            <Image
              src={heroImg}
              alt="MARA Singhe Product Range"
              className="w-full max-w-[1200px] h-auto object-contain drop-shadow-xl"
              priority
            />

            {/* Button Positioned perfectly in the middle of the image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button className="px-12 py-4 bg-red-600 text-white text-sm font-bold tracking-[0.15em] uppercase hover:bg-red-700 transition-colors duration-300 shadow-sm hover:shadow-md whitespace-nowrap">
                Discover More &rarr;
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Carousel Pagination Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center gap-3 mt-8 mb-6 z-20 relative"
        >
          <div className="w-2 h-2 rounded-full border border-gray-400 bg-transparent cursor-pointer"></div>
          <div className="w-2 h-2 rounded-full border border-gray-400 bg-transparent cursor-pointer"></div>
          <div className="w-2 h-2 rounded-full bg-gray-800 cursor-pointer"></div>
        </motion.div>
      </div>
    </section>
  );
}
