"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Phone, Globe, Building2 } from "lucide-react";

export default function Contact() {
  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden text-navy">
      {/* Decorative Golden Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C4A052]/20 to-transparent"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#C4A052]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Details */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerVariants}
            className="pt-4"
          >
            <motion.h2 variants={fadeUpVariants} className="font-bodoni text-3xl md:text-[2.5rem] text-navy uppercase tracking-[0.18em] mb-4 leading-snug lg:text-left text-center">
              Connect With Us
            </motion.h2>
            <motion.div variants={fadeUpVariants} className="w-16 h-[2px] bg-[#C4A052] mb-10 mx-auto lg:mx-0"></motion.div>
            <motion.p variants={fadeUpVariants} className="text-gray-600 mb-12 text-lg font-light leading-relaxed max-w-md">
              We would love to hear from you. For any inquiries regarding our premium fragrances and cosmetics collection, please reach out to our dedicated team.
            </motion.p>
            
            <motion.div variants={staggerVariants} className="space-y-8">
              <motion.div variants={fadeUpVariants} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/5 border border-navy/10 rounded-full flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-[#C4A052]" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1 tracking-wide">Headquarters</h4>
                  <p className="text-gray-600 font-light">MARA සිංහ Premium Fragrances & Cosmetics</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUpVariants} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/5 border border-navy/10 rounded-full flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-[#C4A052]" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1 tracking-wide">Website</h4>
                  <a href="https://marasinghevip.lk" className="text-gray-600 font-light hover:text-[#C4A052] transition-colors">marasinghevip.lk</a>
                </div>
              </motion.div>

              <motion.div variants={fadeUpVariants} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/5 border border-navy/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#C4A052]" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1 tracking-wide">Email</h4>
                  <p className="text-gray-600 font-light">info@marasinghevip.lk</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Side: Sleek Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#FAF7F0] border border-[#C4A052]/20 p-8 md:p-12 rounded-xl shadow-[0_20px_60px_rgba(18,18,69,0.12)] relative z-10"
            >
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <label htmlFor="name" className="block font-bodoni text-xs font-semibold text-[#C4A052] uppercase tracking-[0.2em] mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-0 py-2 bg-transparent border-0 border-b border-[#C4A052]/30 text-navy focus:outline-none focus:ring-0 focus:border-[#C4A052] transition-colors placeholder-gray-400/70"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="phone" className="block font-bodoni text-xs font-semibold text-[#C4A052] uppercase tracking-[0.2em] mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-0 py-2 bg-transparent border-0 border-b border-[#C4A052]/30 text-navy focus:outline-none focus:ring-0 focus:border-[#C4A052] transition-colors placeholder-gray-400/70"
                      placeholder="076 009 3140"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="email" className="block font-bodoni text-xs font-semibold text-[#C4A052] uppercase tracking-[0.2em] mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-0 py-2 bg-transparent border-0 border-b border-[#C4A052]/30 text-navy focus:outline-none focus:ring-0 focus:border-[#C4A052] transition-colors placeholder-gray-400/70"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="message" className="block font-bodoni text-xs font-semibold text-[#C4A052] uppercase tracking-[0.2em] mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={3}
                    className="w-full px-0 py-2 bg-transparent border-0 border-b border-[#C4A052]/30 text-navy focus:outline-none focus:ring-0 focus:border-[#C4A052] transition-colors resize-none placeholder-gray-400/70"
                    placeholder="How can we assist you today?"
                  ></textarea>
                </div>
                <button 
                  type="button" 
                  className="w-full py-5 bg-transparent border border-[#C4A052] text-[#C4A052] font-bodoni text-xl italic tracking-[0.1em] hover:bg-[#C4A052] hover:text-white transition-all duration-500 mt-6 group flex items-center justify-center gap-3"
                >
                  Send Inquiry
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
