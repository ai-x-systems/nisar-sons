"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard, { type ProductCardData } from "@/components/sections/ProductCard";

const RELATED: ProductCardData[] = [
  { title: "H.S.S Center Drill Set", brand: "Dormer", code: "NS-CUT-A210", img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop" },
  { title: "Taper Shank Drill Bit", brand: "Dormer", code: "NS-CUT-A340", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop" },
  { title: "Step Drill Bit — Titanium Coated", brand: "Elora", code: "NS-CUT-A455", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop" },
  { title: "Carbide End Mill 4-Flute", brand: "Hitachi", code: "NS-CUT-A560", img: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=800&auto=format&fit=crop" },
];

export default function RelatedProducts() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <section aria-labelledby="related-products-heading" className="py-20 bg-fog">
      <div className="container">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">You May Also Need</p>
            <h2 id="related-products-heading" className="font-display text-2xl sm:text-[1.75rem] font-semibold text-charcoal mt-3 leading-tight tracking-tight">
              Related Products
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button type="button" onClick={() => scroll(-1)} aria-label="Scroll related products left" className="w-10 h-10 rounded-full border border-line bg-white flex items-center justify-center hover:border-brand-dark hover:text-brand-dark transition-colors">
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label="Scroll related products right" className="w-10 h-10 rounded-full border border-line bg-white flex items-center justify-center hover:border-brand-dark hover:text-brand-dark transition-colors">
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul ref={scrollerRef} className="flex gap-5 mt-10 overflow-x-auto snap-x snap-mandatory pb-2 list-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {RELATED.map((p, i) => (
            <motion.li
              key={p.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="snap-start shrink-0 w-[240px] sm:w-[260px]"
            >
              <ProductCard product={p} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
