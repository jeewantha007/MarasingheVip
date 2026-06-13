"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
        className={`bg-navy text-ivory text-sm hidden md:block overflow-hidden transition-all duration-500 ease-in-out ${
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
      <header className="w-full bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 relative">
            {/* Break-out Circular Logo Area */}
            <div className="absolute left-0 top-1 bg-white rounded-full p-2 shadow-md flex items-center justify-center w-20 h-20 md:w-28 md:h-28 z-50 transition-transform hover:scale-105">
              <Image src={logo} alt="MARA සිංහ Logo" height={86} priority style={{ width: "auto" }} className="object-contain" />
            </div>
            
            {/* Spacer to prevent overlap with absolute logo */}
            <div className="w-20 md:w-32 flex-shrink-0"></div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              <a href="#home" className="text-gray-900 font-semibold tracking-wide hover:text-primary transition-colors text-base uppercase">Home</a>
              <a href="#about" className="text-gray-900 font-semibold tracking-wide hover:text-primary transition-colors text-base uppercase">About Us</a>
              <a href="#products" className="text-gray-900 font-semibold tracking-wide hover:text-primary transition-colors text-base uppercase">Products</a>
              <a href="#contact" className="text-gray-900 font-semibold tracking-wide hover:text-primary transition-colors text-base uppercase">Contact</a>
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
        <div 
          className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out border-t border-gray-100 ${
            isMobileMenuOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden py-0 border-t-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 px-6">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 font-semibold tracking-wide hover:text-primary transition-colors text-base uppercase block">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 font-semibold tracking-wide hover:text-primary transition-colors text-base uppercase block">About Us</a>
            <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 font-semibold tracking-wide hover:text-primary transition-colors text-base uppercase block">Products</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 font-semibold tracking-wide hover:text-primary transition-colors text-base uppercase block">Contact</a>
          </nav>
        </div>
      </header>
    </div>
  );
}
