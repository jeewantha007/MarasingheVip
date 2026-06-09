export default function Experience() {
  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Abstract smoke/gradient effects would go here */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl mix-blend-screen opacity-50"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl mix-blend-screen opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-bodoni text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Transform Every Moment Into a <span className="text-primary italic">Fragrant Experience</span>
        </h2>
        <p className="text-ivory/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Elevate your space with our premium incense collection, crafted to bring tranquility and luxury to your daily rituals.
        </p>
        <button className="px-10 py-5 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 text-lg">
          Discover MARA
        </button>
      </div>
    </section>
  );
}
