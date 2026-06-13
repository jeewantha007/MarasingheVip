import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="pt-8 pb-12 md:py-24 bg-white text-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Golden Crown/Crest Icon Placeholder */}
        <div className="w-12 h-12 rounded-full border border-[#C4A052] flex items-center justify-center text-[#C4A052] mb-8">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        
        {/* Decorative Line */}
        <div className="w-16 h-[1px] bg-[#C4A052]/50 mb-10"></div>
        
        {/* Heading */}
        <h2 className="font-bodoni text-3xl md:text-[2.5rem] text-[#4A3B2C] uppercase tracking-[0.15em] mb-12 leading-snug">
          The Art of Fragrance <br />
          & Cosmetics
        </h2>
        
        {/* Paragraph */}
        <p className="text-gray-500 text-[15px] md:text-[16px] leading-[1.8] tracking-wide max-w-[850px] mx-auto font-light">
          Immerse yourself in our world where every drop tells a story. Our meticulously blended fragrances and premium cosmetic products transform ordinary moments into extraordinary experiences. Each product is carefully crafted using quality ingredients to ensure a smooth, long-lasting essence that soothes the senses and elevates your daily routines. Let our premium collection cleanse your space, nourish your skin, and reconnect you with moments of inner harmony.
        </p>
        
      </div>
    </section>
  );
}
