import Image from "next/image";
import profileImg from "../../app/assets/profile.jpeg";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-[#FAFAFA] text-center w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Golden Crown/Crest Icon Placeholder */}
        <div className="w-12 h-12 rounded-full border border-[#C4A052] flex items-center justify-center text-[#C4A052] mb-6">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        
        {/* Heading */}
        <h2 className="font-bodoni text-3xl md:text-[2.5rem] text-[#4A3B2C] uppercase tracking-[0.15em] mb-4 leading-snug">
          About Us
        </h2>

        {/* Decorative Line */}
        <div className="w-16 h-[1px] bg-[#C4A052]/50 mb-16"></div>
        
        {/* Bulletproof Flexbox Layout for Side-by-Side */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start w-full text-left">
          
          {/* Profile Image - Left Side */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-end shrink-0">
            {/* Added a subtle frame around the image to prevent container collapse */}
            <div className="w-full max-w-[420px] bg-white p-2 shadow-sm rounded-sm">
              <Image 
                src={profileImg} 
                alt="Profile" 
                className="w-full h-auto object-cover rounded-sm shadow-inner"
                priority
              />
            </div>
          </div>
          
          {/* Text Content - Right Side */}
          <div className="w-full md:w-7/12 flex flex-col gap-5 pt-2">
            <p className="text-gray-500 text-[15px] leading-[1.9] font-light">
              Eden Fragrances operates as a distinguished brand under its mother company, ND Incense Products
              (Pvt) Ltd, a well-established name in the incense industry for over two decades. Eden Fragrances has
              built a strong reputation for reliability, expertise, and long-standing relationships within the
              fragrance and incense sticks manufacturing sector.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.9] font-light">
              For more than 20 years, we have been dedicated to sourcing and supplying essential incense
              fragrances that form the backbone of incense stick manufacturing. Our commitment to quality and
              consistency has made us the preferred supplier to Sri Lanka's leading incense stick manufacturers,
              firmly establishing us as the top fragrance supplier in the industry.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.9] font-light">
              What sets Eden Fragrances apart is our unwavering focus on excellence and variety. We import and
              distribute an extensive portfolio of approximately 150 exclusive incense fragrances, including some of
              the rarest and most sought-after scents available in the market. These fragrances are supplied
              exclusively by us, ensuring uniqueness, authenticity, and superior quality.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.9] font-light">
              Beyond the local market, Eden Fragrances is supported by established international partnerships
              across South East Asia, enabling access to a diverse range of high-quality incense fragrances.
              Essentially, the fragrances that are included in finished products are further exported to European
              countries, reflecting the global standard and acceptance of our products.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.9] font-light">
              Today, Eden Fragrances proudly holds the position of Sri Lanka's leading incense fragrance brand,
              built on decades of expertise, trusted partnerships, and a passion for creating scents that define
              excellence.
            </p>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
