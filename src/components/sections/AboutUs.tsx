import Image from "next/image";
import profileImg from "../../app/assets/profile.jpeg";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 w-full bg-[#FAF7F0] border-y border-[#C4A052]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Heading */}
        <h2 className="font-bodoni text-3xl md:text-[2.5rem] text-navy uppercase tracking-[0.18em] mb-4 leading-snug text-center">
          About Us
        </h2>

        {/* Decorative Line */}
        <div className="w-16 h-[2px] bg-[#C4A052] mb-16 mx-auto"></div>

        {/* Side-by-Side Layout */}
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-14 items-start w-full">

          {/* Profile Image - Left Side, constrained height */}
          <div className="w-full md:w-5/12 shrink-0 flex flex-col items-center md:items-end">
            <div className="relative p-3 bg-[#FAF7F0] border-[3px] border-[#C4A052] shadow-[0_20px_40px_rgba(18,18,69,0.15)] group">
              {/* Ancient decorative frame lines */}
              <div className="absolute inset-1.5 border border-[#C4A052] opacity-50 pointer-events-none z-10 transition-all duration-700 group-hover:inset-2"></div>
              <div className="absolute -inset-2 border border-[#C4A052]/30 pointer-events-none z-10"></div>
              
              {/* Corner accents for the ancient frame look */}
              <div className="absolute -top-1 -left-1 w-4 h-4 bg-[#C4A052] pointer-events-none z-20"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#C4A052] pointer-events-none z-20"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-[#C4A052] pointer-events-none z-20"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#C4A052] pointer-events-none z-20"></div>

              <Image
                src={profileImg}
                alt="M.M Mahesh Marasinghe"
                className="w-full aspect-[4/5] object-cover object-top sepia-[0.15] contrast-[1.05] group-hover:sepia-0 transition-all duration-700"
                priority
              />
            </div>
            
            {/* Real Name & Address Block */}
            <div className="mt-8 text-center md:text-right w-full max-w-[400px]">
              <h3 className="font-bodoni text-2xl text-navy uppercase tracking-wider font-semibold">
                M.M Mahesh Marasinghe
              </h3>
              <p className="text-[#C4A052] text-xs uppercase tracking-[0.25em] mt-2 mb-4 font-semibold font-bodoni">
                Founder & Creator
              </p>
              <div className="flex flex-col items-center md:items-end gap-1 text-gray-500 text-sm font-light leading-relaxed">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C4A052]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  16/8/1 Thalangama North, Koswatta, Battaramulla
                </span>
              </div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="w-full md:w-7/12 flex flex-col gap-6 text-[15px] pl-0 md:pl-10 relative">
            {/* Large Decorative Quote */}
            <span className="absolute -top-10 -left-4 text-9xl text-[#C4A052]/10 font-bodoni leading-none pointer-events-none select-none">"</span>
            
            <p className="text-gray-600 leading-[2] font-light relative z-10">
              <span className="font-bodoni text-3xl text-navy float-left mr-2 leading-[0.8] mt-2">M</span>ARA සිංහ Premium Fragrances & Cosmetics is a proudly Sri Lankan brand founded by M.M. Mahesh Marasinghe, driven by a vision to create premium-quality products that combine tradition, craftsmanship, and exceptional wellness experiences.
            </p>
            <p className="text-gray-600 leading-[2] font-light">
              As a growing business in the beauty and fragrance industry, MARA සිංහ is dedicated to producing high-quality items that bring peace, positivity, and elegance into homes and everyday life. Every product is carefully crafted using selected ingredients and refined blends to deliver a rich and long-lasting experience.
            </p>
            <p className="text-gray-600 leading-[2] font-light">
              Our journey began with a simple commitment: to offer fragrances and cosmetics that stand apart through quality, consistency, and attention to detail. From ingredient selection to product packaging, every aspect of MARA සිංහ reflects our passion for excellence and our desire to create products that customers can trust.
            </p>
            <p className="text-gray-600 leading-[2] font-light">
              The MARA සිංහ collection features distinctive fragrances and nourishing cosmetics, each designed to create a unique atmosphere of relaxation, beauty, and wellbeing.
            </p>
            <p className="text-gray-600 leading-[2] font-light">
              At MARA සිංහ, we believe that fragrance and self-care have the power to transform moments, elevate moods, and create meaningful experiences. Our mission is to become a trusted name in premium cosmetics by continuously delivering quality, innovation, and customer satisfaction.
            </p>
            <p className="text-gray-600 leading-[2] font-light">
              As we continue to grow, we remain committed to preserving timeless traditions while introducing modern standards of quality and presentation that reflect the values of our brand.
            </p>
            
            <div className="mt-8 border-t border-[#C4A052]/20 pt-8">
              <p className="text-[#C4A052] font-bodoni italic text-xl md:text-2xl tracking-wide leading-relaxed">
                "Crafted for Elegance, Inspired by Tradition."
              </p>
              <p className="text-navy font-bodoni uppercase tracking-[0.2em] text-xs font-bold mt-4">
                — MARA සිංහ Premium Fragrances
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}