import Navbar from "./components/layout/Navbar";
import Hero from "./components/section/Hero";
import TopProducts from "./components/section/TopProducts";
import AllProducts from "./components/section/AllProducts";
import WhyChoose from "./components/section/WhyChoose";
import Tools from "./components/section/Tools";
import CTA from "./components/section/CTA";
import Footer from "./components/layout/Footer";
import NexusPricing from "./components/section/NexusPricing";


function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <TopProducts />
      <AllProducts />
      <NexusPricing />
      <WhyChoose />
      <Tools />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
