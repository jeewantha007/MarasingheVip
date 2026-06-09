import { Star, Clock, Gem, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Premium Quality",
      description: "Made using carefully selected ingredients.",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Long Lasting Aroma",
      description: "Rich fragrance that lasts longer.",
    },
    {
      icon: <Gem className="w-8 h-8 text-primary" />,
      title: "Handcrafted Excellence",
      description: "Attention to every detail.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Trusted Brand",
      description: "Delivering quality products with consistency.",
    },
  ];

  return (
    <section className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
