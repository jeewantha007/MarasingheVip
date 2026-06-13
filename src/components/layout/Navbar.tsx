"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../app/assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 transition-all duration-300">
      {/* Top Bar with smooth hide animation */}
      <div 
        className={`bg-navy border-b border-[#C4A052]/30 text-ivory text-xs uppercase tracking-widest font-bodoni hidden md:block overflow-hidden transition-all duration-500 ease-in-out ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
        }`}
      >
        <div className="py-2 px-4 max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              076 009 3140
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Mahesh.fintaxlegal@gmail.com
            </span>
          </div>
          <div>
            <span>Island-wide Delivery Available</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="w-full bg-[#FAF7F0]/95 backdrop-blur-md shadow-sm border-b-[2px] border-[#C4A052]/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 relative">
            {/* Break-out Logo Crest */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="absolute left-0 top-0 bg-[#FAF7F0] rounded-b-[2rem] md:rounded-b-[3.5rem] border-b-[2px] border-x-[2px] border-[#C4A052]/40 shadow-[0_15px_30px_rgba(18,18,69,0.08)] flex items-center justify-center w-24 h-[6rem] md:w-32 md:h-[8.5rem] z-50 pt-2 transition-transform duration-500 hover:scale-105 cursor-pointer">
              <Image src={logo} alt="MARA සිංහ Logo" height={95} priority style={{ width: "auto", maxHeight: "85%" }} className="object-contain" />
            </button>
            
            {/* Spacer to prevent overlap with absolute logo */}
            <div className="w-20 md:w-32 flex-shrink-0"></div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-bodoni text-navy font-bold tracking-[0.15em] hover:text-[#C4A052] transition-colors text-sm uppercase">Home</button>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="font-bodoni text-navy font-bold tracking-[0.15em] hover:text-[#C4A052] transition-colors text-sm uppercase">About Us</button>
              <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="font-bodoni text-navy font-bold tracking-[0.15em] hover:text-[#C4A052] transition-colors text-sm uppercase">Products</button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="font-bodoni text-navy font-bold tracking-[0.15em] hover:text-[#C4A052] transition-colors text-sm uppercase">Contact</button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-900 hover:text-primary focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute w-full bg-[#FAF7F0] shadow-lg border-t-2 border-[#C4A052]/30 overflow-hidden"
            >
              <nav className="flex flex-col space-y-6 px-8 py-6">
                <button onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-bodoni text-navy font-bold tracking-[0.15em] hover:text-[#C4A052] transition-colors text-sm uppercase block text-left">Home</button>
                <button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="font-bodoni text-navy font-bold tracking-[0.15em] hover:text-[#C4A052] transition-colors text-sm uppercase block text-left">About Us</button>
                <button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }} className="font-bodoni text-navy font-bold tracking-[0.15em] hover:text-[#C4A052] transition-colors text-sm uppercase block text-left">Products</button>
                <button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="font-bodoni text-navy font-bold tracking-[0.15em] hover:text-[#C4A052] transition-colors text-sm uppercase block text-left">Contact</button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-[6.5rem] right-6 z-50 p-3 bg-[#C4A052] text-white rounded-full shadow-lg hover:bg-navy transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
