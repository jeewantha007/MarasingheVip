import Image from "next/image";
import profileImg from "../../app/assets/profile.jpeg";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-[#FAFAFA] w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Heading */}
        <h2 className="font-bodoni text-3xl md:text-[2.5rem] text-[#4A3B2C] uppercase tracking-[0.18em] mb-4 leading-snug text-center">
          About Us
        </h2>

        {/* Decorative Line */}
        <div className="w-16 h-[2px] bg-[#8B5E3C] mb-14"></div>

        {/* Side-by-Side Layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start w-full">

          {/* Profile Image - Left Side, constrained height */}
          <div className="w-full md:w-5/12 shrink-0 flex flex-col items-center md:items-end">
            <Image
              src={profileImg}
              alt="M.M Mahesh Marasinghe"
              className="w-full h-auto max-h-[520px] object-cover object-top shadow-md"
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
          <div className="w-full md:w-7/12 flex flex-col gap-5">
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
              tradition, quality, and excellence.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}