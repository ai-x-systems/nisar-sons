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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nisar Sons",
  url: "https://www.nisarsons.com",
  logo: "https://www.nisarsons.com/brand/nisar-sons-emblem.png",
  description: "Industrial tools, power tools, welding equipment, pipe fittings and electrical goods supplier serving Pakistan nationwide.",
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  areaServed: "PK",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <main id="main-content" className="overflow-x-hidden">
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
    </>
  );
}
