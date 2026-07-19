"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ProductCategories";
import { Button } from "@/components/ui/button";

const PRODUCTS = [
  {
    title: "Cordless Impact Drill 18V",
    brand: "Hitachi",
    code: "NS-PWR-1042",
    img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Precision HSS Twist Drill Set",
    brand: "Dormer",
    code: "NS-CUT-2210",
    img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Inverter Arc Welding Machine",
    brand: "Morita",
    code: "NS-WLD-3387",
    img: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Combination Wrench Set 8pc",
    brand: "Elora",
    code: "NS-HND-0556",
    img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-fog">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Stock"
            title="Featured Products"
            sub="A snapshot of what's moving through the warehouse this month."
          />
          <Button variant="outline" size="default">
            View Full Catalog
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group rounded-xl bg-white border border-line overflow-hidden shadow-card hover:shadow-cardHover transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal/5">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 font-mono text-[10px] tracking-wide bg-charcoal/80 text-white px-2 py-1 rounded">
                  {p.code}
                </span>
              </div>

              <div className="p-5">
                <p className="font-mono text-[11px] tracking-widest2 uppercase text-brand">
                  {p.brand}
                </p>
                <h3 className="font-display text-[16.5px] font-semibold text-charcoal mt-1.5 leading-snug">
                  {p.title}
                </h3>
                <Button variant="light" size="sm" className="w-full mt-4">
                  Request Quote
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
