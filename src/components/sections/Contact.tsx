export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-bodoni text-4xl md:text-5xl font-bold text-text-dark mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-12 text-lg">
              We would love to hear from you. For any inquiries regarding our premium fragrances and cosmetics collection, please reach out to us.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-navy mb-2">Business</h4>
                <p className="text-gray-600">MARA සිංහ Premium Fragrances & Cosmetics</p>
              </div>
              <div>
                <h4 className="font-bold text-navy mb-2">Website</h4>
                <a href="https://marasinghevip.lk" className="text-primary hover:underline">marasinghevip.lk</a>
              </div>
              <div>
                <h4 className="font-bold text-navy mb-2">Email</h4>
                <p className="text-gray-600">info@marasinghevip.lk</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="+94 XX XXX XXXX"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="w-full py-4 bg-navy text-white rounded-md font-medium hover:bg-navy-light transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
