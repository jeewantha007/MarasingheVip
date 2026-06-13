import Image from "next/image";
import profileImg from "../../app/assets/profile.jpeg";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 w-full" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Heading */}
        <h2 className="font-bodoni text-3xl md:text-[2.5rem] text-[#4A3B2C] uppercase tracking-[0.18em] mb-4 leading-snug text-center">
          About Us
        </h2>

        {/* Decorative Line */}
        <div className="w-16 h-[2px] bg-[#8B5E3C] mb-14"></div>

        {/* Side-by-Side Layout */}
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-14 items-start w-full">

          {/* Profile Image - Left Side, constrained height */}
          <div className="w-full md:w-5/12 shrink-0 flex flex-col items-center md:items-end">
            <Image
              src={profileImg}
              alt="M.M Mahesh Marasinghe"
              className="w-full aspect-[5/4] object-cover object-top shadow-md rounded-sm"
              priority
            />
            
            {/* Real Name & Address Block */}
            <div className="mt-6 text-center md:text-right w-full max-w-[400px]">
              <h3 className="font-bodoni text-2xl text-[#4A3B2C] uppercase tracking-wider font-semibold">
                M.M Mahesh Marasinghe
              </h3>
              <p className="text-[#C4A052] text-sm uppercase tracking-[0.2em] mt-1 mb-3 font-semibold">
                Founder
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
          <div className="w-full md:w-7/12 flex flex-col gap-5 text-[16.5px]">
            <p className="text-gray-500 leading-[1.8] font-light">
              MARA Singhe Premium Incense Sticks is a proudly Sri Lankan brand founded by M.M. Mahesh Marasinghe, driven by a vision to create premium-quality incense products that combine tradition, craftsmanship, and exceptional fragrance experiences.
            </p>
            <p className="text-gray-500 leading-[1.8] font-light">
              As a growing business in the incense industry, MARA Singhe is dedicated to producing high-quality incense sticks that bring peace, positivity, and elegance into homes, religious spaces, and everyday life. Every product is carefully crafted using selected ingredients and refined fragrance blends to deliver a rich and long-lasting aromatic experience.
            </p>
            <p className="text-gray-500 leading-[1.8] font-light">
              Our journey began with a simple commitment: to offer incense sticks that stand apart through quality, consistency, and attention to detail. From fragrance selection to product packaging, every aspect of MARA Singhe reflects our passion for excellence and our desire to create products that customers can trust.
            </p>
            <p className="text-gray-500 leading-[1.8] font-light">
              The MARA Singhe collection currently features distinctive fragrances such as Nature Bliss (Jasmine Fragrance), Ocean Breeze (Blue Lotus Fragrance), and China Flower Fragrance, each designed to create a unique atmosphere of relaxation, spirituality, and wellbeing.
            </p>
            <p className="text-gray-500 leading-[1.8] font-light">
              At MARA Singhe, we believe that fragrance has the power to transform moments, elevate moods, and create meaningful experiences. Our mission is to become a trusted name in premium incense products by continuously delivering quality, innovation, and customer satisfaction.
            </p>
            <p className="text-gray-500 leading-[1.8] font-light">
              As we continue to grow, we remain committed to preserving the timeless tradition of incense while introducing modern standards of quality and presentation that reflect the values of our brand.
            </p>
            <p className="text-[#C4A052] font-semibold italic mt-2 text-lg">
              MARA Singhe Premium Incense Sticks — Crafted for Fragrance, Inspired by Tradition.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}