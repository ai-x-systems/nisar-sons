"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProductCard, { type ProductCardData } from "./ProductCard";
import { Button } from "@/components/ui/button";

const PRODUCTS: ProductCardData[] = [
  { title: "Cordless Impact Drill 18V", brand: "Hitachi", code: "NS-PWR-1042", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop" },
  { title: "Precision HSS Twist Drill Set", brand: "Dormer", code: "NS-CUT-2210", img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop" },
  { title: "Inverter Arc Welding Machine", brand: "Morita", code: "NS-WLD-3387", img: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=800&auto=format&fit=crop" },
  { title: "Combination Wrench Set 8pc", brand: "Elora", code: "NS-HND-0556", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop" },
];

export default function FeaturedProducts() {
  return (
    <section id="featured-products" aria-labelledby="featured-products-heading" className="py-24 bg-fog">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Stock"
            title="Featured Products"
            sub="A snapshot of what's moving through the warehouse this month."
            id="featured-products-heading"
          />
          <Button href="#contact" variant="outline" size="default">Request Full Catalogue</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
