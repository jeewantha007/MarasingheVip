"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import heroImg from "../../app/assets/hero.png";
// import heroImg2 from "../../app/assets/hero2.png";
// import heroImg3 from "../../app/assets/hero3.png";

const images = [heroImg];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setActive((p) => (p + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[100dvh] flex flex-col relative overflow-hidden bg-light-bg text-center pt-28 sm:pt-32 md:pt-36"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] pointer-events-none" />

      {/* Flower Rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 18 }).map((_, i) => {
          const left = `${(i * 23) % 100}%`;
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
                x: ["0px", `${i % 2 === 0 ? 60 : -60}px`, "0px"],
                rotate: [0, 180, 360],
              }}
              transition={{
                y: { duration, repeat: Infinity, ease: "linear", delay },
                x: { duration: duration * 0.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay },
                rotate: { duration: duration * 0.8, repeat: Infinity, ease: "linear", delay },
              }}
            >
              <div
                className="w-3 h-3 sm:w-5 sm:h-5 bg-[#C4A052]/30 rounded-[50%] rounded-tr-sm backdrop-blur-sm shadow-sm"
                style={{ transform: `scale(${scale}) rotate(45deg)` }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Gold Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col flex-1">
        {/* Titles */}
        <div className="flex flex-col items-center z-10 w-full shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center w-full mb-1 sm:mb-2"
          >
            <div className="h-px w-6 sm:w-8 bg-[#C4A052]/50 mr-3 sm:mr-4" />
            <h2 className="font-bodoni text-sm sm:text-xl md:text-3xl text-[#C4A052] font-normal tracking-[0.2em] uppercase">
              PREMIUM
            </h2>
            <div className="h-px w-6 sm:w-8 bg-[#C4A052]/50 ml-3 sm:ml-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-2 sm:mb-4"
          >
            <h1 className="font-poppins font-bold text-[#1A1A1A] tracking-[0.15em] sm:tracking-[0.3em] uppercase leading-none text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.2rem]">
              FRAGRANCES
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="px-4"
          >
            <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light tracking-wide text-center">
              Explore the first chapter of the MARA Singhe journey, featuring premium
              aromatic products crafted with exceptional fragrances and uncompromising quality.
            </p>
          </motion.div>
        </div>

        {/* Image + CTA */}
        <div className="relative w-full max-w-[1400px] mx-auto flex flex-col items-center justify-center mt-2 sm:mt-4 md:mt-6 flex-1 min-h-[45vh] sm:min-h-[55vh] md:min-h-[75vh]">
          <div className="w-full relative flex justify-center items-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full absolute inset-0 flex justify-center items-center"
              >
                <Image
                  src={images[active]}
                  alt="MARA Singhe Product Range"
                  className="w-auto h-full max-w-full object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute z-20 px-6 sm:px-10 md:px-12 py-3 sm:py-4 text-white text-xs sm:text-sm md:text-base font-bold tracking-[0.15em] uppercase shadow-lg whitespace-nowrap rounded-sm"
              style={{ backgroundColor: "#B58E62" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#A37B53")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#B58E62")}
            >
              Discover More &rarr;
            </motion.button>
          </div>
        </div>

        {/* Pagination Dots */}
        {images.length > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center gap-3 py-3 sm:py-4 z-20 relative shrink-0"
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full border border-gray-400 transition-colors ${active === i ? "bg-gray-800" : "bg-transparent"
                  }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}