"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  size: string;
  subtitle: string;
  shortFeatures: string[];
  fullFeatures: string[];
  description: string;
  imagePlaceholder: string;
  themeColor: string;
}

const productsData: Product[] = [
  {
    id: "ocean-breeze",
    name: "Ocean Breeze",
    price: "Rs. 150",
    size: "30g",
    subtitle: "Blue Lotus Inspired",
    shortFeatures: ["Refreshing atmosphere", "Relaxation", "Stress relief"],
    fullFeatures: [
      "Sticks per Pack: 24",
      "Net Weight: 30g ± 5g",
      "Burning Time: Approximately 75 ± 5 minutes",
      "Made in Sri Lanka",
    ],
    description:
      "Immerse your space in the tranquil essence of the ocean. Ocean Breeze is specifically formulated to create a calming, stress-free environment perfect for meditation, yoga, or unwinding after a long day.",
    imagePlaceholder: "Ocean Breeze Image",
    themeColor: "text-navy",
  },
  {
    id: "nature-bliss",
    name: "Nature Bliss",
    price: "Rs. 150",
    size: "30g",
    subtitle: "Jasmine Inspired",
    shortFeatures: ["Natural freshness", "Positive mood", "Calm environment"],
    fullFeatures: [
      "Sticks per Pack: 24",
      "Net Weight: 30g ± 5g",
      "Burning Time: Approximately 75 ± 5 minutes",
      "Made in Sri Lanka",
    ],
    description:
      "Nature Bliss brings the uplifting scent of blooming jasmine into your home. Its sweet, delicate aroma is known to elevate the mood, promote positivity, and provide an all-day lingering freshness.",
    imagePlaceholder: "Nature Bliss Image",
    themeColor: "text-navy",
  },
  {
    id: "royal-rose",
    name: "Royal Rose",
    price: "Rs. 150",
    size: "30g",
    subtitle: "Rose Inspired",
    shortFeatures: ["Romantic fragrance", "Elegant ambiance", "Long-lasting aroma"],
    fullFeatures: [
      "Sticks per Pack: 24",
      "Net Weight: 30g ± 5g",
      "Burning Time: Approximately 75 ± 5 minutes",
      "Made in Sri Lanka",
    ],
    description:
      "Our most luxurious offering, Royal Rose captures the timeless elegance of fresh roses. Designed to create a romantic and sophisticated ambiance, this premium kit is perfect for special rituals and exquisite gifting.",
    imagePlaceholder: "Royal Rose Image",
    themeColor: "text-navy",
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle product active

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % productsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
  };

  const handleInquire = () => {
    setSelectedProduct(null);
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bodoni text-3xl md:text-[2.5rem] text-navy uppercase tracking-[0.18em] mb-4 leading-snug text-center">Our Premium Collection</h2>
          <div className="w-16 h-[2px] bg-[#C4A052] mx-auto mb-14"></div>
        </div>

        <div className="relative h-[550px] md:h-[600px] w-full flex items-center justify-center overflow-hidden px-4">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-10 z-40 p-3 sm:p-4 rounded-full bg-[#FAF7F0] border border-[#C4A052]/30 text-[#C4A052] shadow-xl hover:bg-[#C4A052] hover:text-white transition-all cursor-pointer group"
          >
            <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-10 z-40 p-3 sm:p-4 rounded-full bg-[#FAF7F0] border border-[#C4A052]/30 text-[#C4A052] shadow-xl hover:bg-[#C4A052] hover:text-white transition-all cursor-pointer group"
          >
            <ChevronRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="relative w-full max-w-6xl h-full flex justify-center items-center">
            <AnimatePresence initial={false}>
              {productsData.map((product, index) => {
                // Calculate position relative to active index
                const offset = index - activeIndex;
                const isCenter = offset === 0;
                
                // For 3 items: if offset is -1 or +2 -> left. If +1 or -2 -> right.
                // We normalize offset for wrap around.
                const length = productsData.length;
                let normalizedOffset = offset;
                if (offset < -1) normalizedOffset += length;
                if (offset > 1) normalizedOffset -= length;

                const isLeft = normalizedOffset === -1;
                const isRight = normalizedOffset === 1;

                if (!isCenter && !isLeft && !isRight) return null; // Hidden if > 3 items

                let xPos = "0%";
                let zIndex = 10;
                let scale = 0.85;
                let opacity = 0.4;
                let filter = "blur(4px)";

                if (isCenter) {
                  xPos = "0%";
                  zIndex = 30;
                  scale = 1;
                  opacity = 1;
                  filter = "blur(0px)";
                } else if (isLeft) {
                  xPos = "-105%";
                  zIndex = 20;
                } else if (isRight) {
                  xPos = "105%";
                  zIndex = 20;
                }

                // Make mobile offsets smaller
                const mobileXPos = isCenter ? "0%" : isLeft ? "-40%" : "40%";
                const mdXPos = xPos;

                return (
                  <motion.div
                    key={product.id}
                    animate={{
                      x: typeof window !== "undefined" && window.innerWidth < 768 ? mobileXPos : mdXPos,
                      scale: scale,
                      opacity: opacity,
                      zIndex: zIndex,
                      filter: filter,
                    }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    className={`absolute w-[300px] sm:w-[360px] md:w-[420px] rounded-none overflow-hidden border border-[#C4A052]/20 bg-[#FAF7F0] flex flex-col
                      ${isCenter ? "shadow-[0_30px_60px_rgba(18,18,69,0.15)]" : "shadow-md cursor-pointer"}
                    `}
                    onClick={() => {
                      if (!isCenter) setActiveIndex(index);
                    }}
                  >
                    {/* ~80% Image Area */}
                    <div className="h-[300px] sm:h-[340px] bg-white/40 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500">
                      {/* Ancient decorative frame inside image */}
                      <div className="absolute inset-3 border border-[#C4A052]/10 rounded-sm pointer-events-none transition-all duration-500"></div>
                      
                      <span className="text-[#C4A052]/60 font-bodoni text-xl italic tracking-widest">{product.imagePlaceholder}</span>
                      
                      {/* Overlay Price Tag - Ancient style */}
                      <div className="absolute top-6 right-6 font-bodoni text-sm font-bold text-navy tracking-widest">
                        {product.price}
                      </div>
                    </div>

                    {/* ~20% Text Area */}
                    <div className="p-6 flex flex-col items-center text-center flex-1 justify-end border-t border-[#C4A052]/10 relative mt-2 bg-[#FAF7F0]">
                      <span className="absolute -top-3 bg-[#FAF7F0] px-4 font-bodoni text-[10px] font-semibold text-[#C4A052] tracking-[0.2em] uppercase">
                        {product.size}
                      </span>

                      <h3 className="font-bodoni text-2xl font-bold text-navy tracking-wide mb-2">{product.name}</h3>
                      <p className="font-light text-gray-500 text-sm mb-6 px-4 leading-relaxed italic line-clamp-1">{product.subtitle}</p>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isCenter) setSelectedProduct(product);
                          else setActiveIndex(index);
                        }}
                        className={`w-full py-4 bg-transparent border border-[#C4A052] text-[#C4A052] transition-all font-bodoni uppercase tracking-[0.15em] text-xs font-bold cursor-pointer
                          ${isCenter ? "hover:bg-[#C4A052] hover:text-white" : "opacity-0"}
                        `}
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#FAF7F0] border border-[#C4A052]/30 rounded-none shadow-[0_30px_60px_rgba(18,18,69,0.15)] overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-[#FAF7F0] border border-[#C4A052]/20 hover:bg-[#C4A052]/10 transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5 text-[#C4A052]" />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-5/12 bg-white/40 h-64 md:h-auto flex items-center justify-center relative border-b md:border-b-0 md:border-r border-[#C4A052]/20">
                <div className="absolute inset-4 border border-[#C4A052]/10 rounded-sm pointer-events-none"></div>
                <span className="text-[#C4A052]/60 font-bodoni text-xl italic tracking-widest">{selectedProduct.imagePlaceholder}</span>
              </div>

              {/* Details Side */}
              <div className="w-full md:w-7/12 p-8 sm:p-10 md:p-12 flex flex-col overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bodoni text-3xl md:text-4xl font-bold text-navy tracking-wide">{selectedProduct.name}</h3>
                  <div className="text-xl font-bodoni font-bold text-[#C4A052] tracking-widest mt-1">{selectedProduct.price}</div>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-[#FAF7F0] border border-[#C4A052]/20 px-3 py-1 font-bodoni text-[10px] font-semibold text-[#C4A052] tracking-[0.2em] uppercase">
                    {selectedProduct.size}
                  </span>
                  <span className="text-sm font-light text-gray-500 italic">{selectedProduct.subtitle}</span>
                </div>

                <div className="w-12 h-[1px] bg-[#C4A052]/40 mb-6"></div>

                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                  {selectedProduct.description}
                </p>

                <h4 className="font-bodoni text-xs font-semibold text-[#C4A052] uppercase tracking-[0.2em] mb-4">Product Features</h4>
                <ul className="text-sm text-gray-600 mb-10 space-y-3 flex-1 font-light">
                  {selectedProduct.fullFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#C4A052] mr-3 font-bodoni">•</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleInquire}
                  className="w-full py-4 bg-transparent border border-[#C4A052] text-[#C4A052] hover:bg-[#C4A052] hover:text-white transition-all font-bodoni text-xl italic tracking-[0.1em] cursor-pointer"
                >
                  Inquire to Order
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
