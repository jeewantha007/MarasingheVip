import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="pt-8 pb-12 md:py-24 bg-[#FAF7F0] text-center relative border-b border-[#C4A052]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Golden Crown/Crest Icon Placeholder */}
        <div className="relative w-14 h-14 bg-[#FAF7F0] border border-[#C4A052] flex items-center justify-center text-[#C4A052] mb-10 rotate-45">
          <svg className="w-6 h-6 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        
        {/* Decorative Line */}
        <div className="w-24 h-[1px] bg-[#C4A052]/50 mb-12"></div>
        
        {/* Heading */}
        <h2 className="font-bodoni text-3xl md:text-[2.5rem] text-navy uppercase tracking-[0.18em] mb-12 leading-snug">
          The Art of Fragrance <br />
          <span className="italic text-[#C4A052] text-2xl md:text-3xl">& Cosmetics</span>
        </h2>
        
        {/* Paragraph */}
        <div className="relative">
          <span className="absolute -top-10 -left-6 text-8xl text-[#C4A052]/10 font-bodoni leading-none pointer-events-none select-none">"</span>
          <p className="text-gray-600 text-[15px] md:text-[16px] leading-[2] tracking-wide max-w-[850px] mx-auto font-light relative z-10 italic">
            <span className="font-bodoni text-3xl text-navy float-left mr-2 leading-[0.8] mt-1 not-italic">I</span>mmerse yourself in our world where every drop tells a story. Our meticulously blended fragrances and premium cosmetic products transform ordinary moments into extraordinary experiences. Each product is carefully crafted using quality ingredients to ensure a smooth, long-lasting essence that soothes the senses and elevates your daily routines. Let our premium collection cleanse your space, nourish your skin, and reconnect you with moments of inner harmony.
          </p>
        </div>
        
      </div>
    </section>
  );
}
