import Image from "next/image";
import logo from "../../app/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 relative text-ivory py-8 md:py-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C4A052]/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <Image src={logo} alt="MARA සිංහ Logo" height={100} style={{ width: "auto" }} className="object-contain mb-4 md:mb-6" />
            <p className="text-xs md:text-sm opacity-80 leading-relaxed">Premium Fragrances & Cosmetics crafted for elegance and wellbeing.</p>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#home" className="hover:text-primary">Home</a></li>
              <li><a href="#products" className="hover:text-primary">Products</a></li>
              <li><a href="#about" className="hover:text-primary">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-bold mb-3 md:mb-4 tracking-wide text-[#C4A052]">Contact Info</h4>
            <ul className="space-y-2 text-xs md:text-sm opacity-80">
              <li>info@marasinghevip.lk</li>
              <li>076 009 3140</li>
              <li>Sri Lanka</li>
            </ul>
          </div>
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <h4 className="font-bold mb-3 md:mb-4 tracking-wide text-[#C4A052]">Follow Us</h4>
            <div className="flex space-x-4 opacity-90 mt-2">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C4A052] hover:text-navy transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C4A052] hover:text-navy transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C4A052] hover:text-navy transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C4A052] hover:text-navy transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.36 6.34 6.34 0 0 0 6.25-6.36V7.93a8.36 8.36 0 0 0 3.16.8V5.3a5.27 5.27 0 0 1-1.09.28z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 md:mt-10 pt-6 text-center text-xs opacity-50">
          <p>&copy; 2026 MARA සිංහ Premium Fragrances & Cosmetics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
