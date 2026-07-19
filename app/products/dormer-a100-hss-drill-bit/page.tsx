import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Breadcrumb from "@/components/sections/product/Breadcrumb";
import ProductGallery from "@/components/sections/product/ProductGallery";
import ProductInfo from "@/components/sections/product/ProductInfo";
import ProductOverviewSpecs from "@/components/sections/product/ProductOverviewSpecs";
import ProductApplications from "@/components/sections/product/ProductApplications";
import ProductFeatures from "@/components/sections/product/ProductFeatures";
import RelatedProducts from "@/components/sections/product/RelatedProducts";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=1200&auto=format&fit=crop",
];

export const metadata: Metadata = {
  title: "Dormer H.S.S Drill Bit A100 Straight Shank | Nisar Sons",
  description:
    "Buy Dormer A100 High Speed Steel straight shank drill bit — DIN 338, 118° point angle, jobber length. In stock at Nisar Sons, nationwide delivery across Pakistan. Request a bulk quote.",
  keywords: [
    "Dormer A100 drill bit",
    "HSS drill bit Pakistan",
    "straight shank drill bit",
    "DIN 338 drill bit supplier",
    "Dormer tools Pakistan",
  ],
  openGraph: {
    title: "Dormer H.S.S Drill Bit A100 Straight Shank | Nisar Sons",
    description:
      "Precision-ground HSS drill bit to DIN 338 standard. In stock, nationwide delivery. Request a bulk quote from Nisar Sons.",
    type: "website",
  },
};

export default function ProductPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <div className="pt-[72px]">
        <Breadcrumb
          items={[
            { label: "Products", href: "/#products" },
            { label: "Cutting Tools", href: "/#products" },
            { label: "Dormer A100 Drill Bit" },
          ]}
        />

        <section className="py-14 sm:py-16 bg-white">
          <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ProductGallery
              images={GALLERY_IMAGES}
              productTitle="Dormer H.S.S Drill Bit A100 Straight Shank"
            />
            <ProductInfo />
          </div>
        </section>
      </div>

      <ProductOverviewSpecs />
      <ProductApplications />
      <ProductFeatures />
      <RelatedProducts />
      <CTASection />
      <Footer />
    </main>
  );
}
