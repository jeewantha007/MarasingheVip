"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
    >
      <div className="relative flex items-center justify-center">
        {/* Continuous Ripple Effect */}
        <div className="absolute inset-0 w-full h-full rounded-full bg-[#25D366] animate-ping opacity-70" style={{ animationDuration: '3s' }}></div>
        
        {/* Main Interactive Button */}
        <motion.a 
          href="https://wa.me/94760093140" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
          aria-label="Contact us on WhatsApp"
          whileHover={{ scale: 1.15, rotate: -10, boxShadow: "0px 15px 30px rgba(37, 211, 102, 0.6)" }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
        >
          <MessageCircle className="w-8 h-8" />
        </motion.a>
      </div>
    </motion.div>
  );
}
