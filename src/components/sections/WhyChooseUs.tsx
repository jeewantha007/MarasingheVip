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
              className="bg-navy border-[2px] border-[#C4A052]/30 p-8 rounded-none text-center flex flex-col items-center hover:bg-[#C4A052]/5 hover:border-[#C4A052] hover:-translate-y-1 transition-all duration-500 relative group"
            >
              {/* Ancient corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#C4A052]/50 group-hover:bg-[#C4A052] transition-colors"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#C4A052]/50 group-hover:bg-[#C4A052] transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#C4A052]/50 group-hover:bg-[#C4A052] transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#C4A052]/50 group-hover:bg-[#C4A052] transition-colors"></div>

              <div className="w-16 h-16 border border-[#C4A052]/50 rounded-none rotate-45 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(196,160,82,0.1)] group-hover:rotate-0 transition-transform duration-500 bg-[#FAF7F0]/5">
                <div className="-rotate-45 group-hover:rotate-0 transition-transform duration-500">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-bodoni text-xl font-bold mb-4 text-[#C4A052] tracking-wide uppercase">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed font-light italic">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
