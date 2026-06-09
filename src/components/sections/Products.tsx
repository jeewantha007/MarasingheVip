export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text-dark mb-4">Our Premium Collection</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="group rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
            <div className="h-64 bg-gray-50 flex items-center justify-center">
              <span className="text-gray-400">Ocean Breeze Image</span>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-2xl font-bold mb-2">Ocean Breeze</h3>
              <p className="text-sm text-blue-600 font-medium mb-4">Blue Lotus Inspired</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Refreshing atmosphere</li>
                <li>• Relaxation</li>
                <li>• Stress relief</li>
              </ul>
              <button className="w-full py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded">
                Learn More
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
            <div className="h-64 bg-gray-50 flex items-center justify-center">
              <span className="text-gray-400">Nature Bliss Image</span>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-2xl font-bold mb-2">Nature Bliss</h3>
              <p className="text-sm text-green-600 font-medium mb-4">Jasmine Inspired</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Natural freshness</li>
                <li>• Positive mood</li>
                <li>• Calm environment</li>
              </ul>
              <button className="w-full py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded">
                Learn More
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
            <div className="h-64 bg-gray-50 flex items-center justify-center">
              <span className="text-gray-400">Royal Rose Image</span>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-2xl font-bold mb-2">Royal Rose</h3>
              <p className="text-sm text-burgundy font-medium mb-4">Rose Inspired</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Romantic fragrance</li>
                <li>• Elegant ambiance</li>
                <li>• Long-lasting aroma</li>
              </ul>
              <button className="w-full py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
