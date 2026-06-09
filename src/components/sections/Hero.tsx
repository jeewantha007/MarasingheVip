export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold leading-tight text-text-dark">
              Experience the Art of <span className="text-primary">Premium Fragrance</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Crafted with carefully selected ingredients to create a rich aromatic experience that brings peace, elegance, and positive energy to every space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors">
                Explore Collection
              </button>
              <button className="px-8 py-4 border border-navy text-navy rounded-md font-medium hover:bg-navy hover:text-white transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Placeholder for Product Image */}
            <div className="w-full max-w-md h-full bg-ivory border-2 border-dashed border-primary rounded-lg flex items-center justify-center">
              <span className="text-primary font-medium">Product Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
