"use client";

import { Star, Clock, Gem, ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Star className="w-7 h-7 text-[#C4A052]" />,
      title: "Premium Quality",
      description: "Crafted using the finest, ethically sourced botanicals and fragrances.",
    },
    {
      icon: <Clock className="w-7 h-7 text-[#C4A052]" />,
      title: "Long Lasting Aroma",
      description: "Formulated to provide a lingering, consistent scent throughout the day.",
    },
    {
      icon: <Gem className="w-7 h-7 text-[#C4A052]" />,
      title: "Handcrafted Excellence",
      description: "Meticulous attention to detail ensures absolute perfection in every drop.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#C4A052]" />,
      title: "Trusted Brand",
      description: "A legacy of delivering unmatched quality and sensory wellness.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 md:py-20 bg-navy relative overflow-hidden text-white">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C4A052]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C4A052]/30 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C4A052]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants}>
            <h2 className="font-bodoni text-3xl md:text-[2.5rem] text-white uppercase tracking-[0.18em] mb-4 leading-snug text-center">
              The MARA සිංහ Difference
            </h2>
          </motion.div>
          <motion.div variants={itemVariants} className="w-16 h-[2px] bg-[#C4A052] mx-auto mb-14"></motion.div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the pinnacle of luxury and serenity. We blend timeless tradition with modern sophistication.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              variants={itemVariants}
              key={idx} 
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 p-6 rounded-xl text-center flex flex-col items-center hover:bg-white/[0.05] hover:border-[#C4A052]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#C4A052]/10 rounded-full flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(196,160,82,0.15)]">
                {feature.icon}
              </div>
              <h3 className="font-bodoni text-lg font-bold mb-3 text-white tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
