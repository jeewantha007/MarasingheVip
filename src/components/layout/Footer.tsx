export default function Footer() {
  return (
    <footer className="bg-navy text-ivory py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-primary mb-4">MARA Singhe</h3>
            <p className="text-sm opacity-80">Premium Incense Sticks crafted for elegance and peace.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#home" className="hover:text-primary">Home</a></li>
              <li><a href="#products" className="hover:text-primary">Products</a></li>
              <li><a href="#about" className="hover:text-primary">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>info@marasinghevip.lk</li>
              <li>+94 XX XXX XXXX</li>
              <li>Sri Lanka</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4 opacity-80">
              {/* Social icons will go here */}
              <a href="#" className="hover:text-primary">FB</a>
              <a href="#" className="hover:text-primary">IG</a>
            </div>
          </div>
        </div>
        <div className="border-t border-ivory/20 mt-12 pt-8 text-center text-sm opacity-60">
          <p>&copy; 2026 MARA Singhe Premium Incense. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
