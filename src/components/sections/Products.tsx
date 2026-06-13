"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div key={product.id} className="group rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col">
              <div className="h-64 bg-gray-50 flex items-center justify-center relative">
                <span className="text-gray-400">{product.imagePlaceholder}</span>
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm text-sm font-bold text-navy">
                  {product.price}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bodoni text-2xl font-bold">{product.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded bg-gray-100 ${product.themeColor}`}>
                    {product.size}
                  </span>
                </div>
                <p className={`text-sm font-medium mb-4 ${product.themeColor}`}>{product.subtitle}</p>
                <ul className="text-sm text-gray-600 mb-6 space-y-2 flex-1">
                  {product.shortFeatures.map((feat, idx) => (
                    <li key={idx}>• {feat}</li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded font-semibold"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
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
              className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-20"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-5/12 bg-gray-50 h-64 md:h-auto flex items-center justify-center relative border-b md:border-b-0 md:border-r border-gray-100">
                <span className="text-gray-400 font-medium">{selectedProduct.imagePlaceholder}</span>
              </div>

              {/* Details Side */}
              <div className="w-full md:w-7/12 p-6 sm:p-8 md:p-10 flex flex-col overflow-y-auto">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bodoni text-3xl font-bold text-navy">{selectedProduct.name}</h3>
                  <div className="text-xl font-bold text-primary">{selectedProduct.price}</div>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-sm font-semibold px-2 py-1 rounded bg-gray-100 ${selectedProduct.themeColor}`}>
                    {selectedProduct.size}
                  </span>
                  <span className={`text-sm font-medium ${selectedProduct.themeColor}`}>{selectedProduct.subtitle}</span>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <h4 className="font-bold text-navy mb-4">Product Features</h4>
                <ul className="text-sm text-gray-600 mb-8 space-y-3 flex-1">
                  {selectedProduct.fullFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2 mt-0.5">•</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleInquire}
                  className="w-full py-4 bg-navy text-white hover:bg-navy-light transition-colors rounded shadow-md font-bold tracking-wide uppercase text-sm"
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
