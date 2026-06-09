import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Intro from "../components/sections/Intro";
import AboutUs from "../components/sections/AboutUs";
import Products from "../components/sections/Products";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Intro />
  <AboutUs />
        <Products />
      
        <WhyChooseUs />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
// Force Recompile
