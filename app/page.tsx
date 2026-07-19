import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import BrandsCarousel from "@/components/sections/BrandsCarousel";
import ProductCategories from "@/components/sections/ProductCategories";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import AboutStats from "@/components/sections/AboutStats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import IndustriesServed from "@/components/sections/IndustriesServed";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandsCarousel />
      <ProductCategories />
      <FeaturedProducts />
      <AboutStats />
      <WhyChooseUs />
      <IndustriesServed />
      <CTASection />
      <Footer />
    </main>
  );
}
