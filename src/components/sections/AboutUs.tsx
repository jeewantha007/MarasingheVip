export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-ivory relative">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8">
              <span className="font-bodoni text-3xl text-primary font-bold">M</span>
            </div>
            <h2 className="font-bodoni text-4xl md:text-5xl font-bold text-text-dark mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              MARA Singhe is dedicated to creating premium incense products that blend tradition, quality, and fragrance excellence. 
              Our mission is to enrich everyday experiences through carefully crafted aromatic products designed for homes, spiritual spaces, and moments of relaxation.
            </p>
            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-bodoni text-xl font-bold mb-4">Our Promise</h4>
              <p className="text-gray-600">
                We are committed to using only carefully selected ingredients to ensure a rich, consistent, and long-lasting aroma in every product we create.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-gray-600 font-medium">Premium Quality</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center mt-12">
              <div className="text-4xl font-bold text-primary mb-2">10k+</div>
              <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center col-span-2">
              <div className="text-4xl font-bold text-primary mb-2">Carefully Selected</div>
              <div className="text-sm text-gray-600 font-medium">Ingredients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
