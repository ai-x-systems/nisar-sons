"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const RELATED = [
  {
    title: "H.S.S Center Drill Set",
    brand: "Dormer",
    code: "NS-CUT-A210",
    img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Taper Shank Drill Bit",
    brand: "Dormer",
    code: "NS-CUT-A340",
    img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Step Drill Bit — Titanium Coated",
    brand: "Elora",
    code: "NS-CUT-A455",
    img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Carbide End Mill 4-Flute",
    brand: "Hitachi",
    code: "NS-CUT-A560",
    img: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=800&auto=format&fit=crop",
  },
];

export default function RelatedProducts() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-fog">
      <div className="container">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">You May Also Need</p>
            <h2 className="font-display text-2xl sm:text-[1.75rem] font-semibold text-charcoal mt-3 leading-tight tracking-tight">
              Related Products
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-line bg-white flex items-center justify-center hover:border-brand hover:text-brand transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-line bg-white flex items-center justify-center hover:border-brand hover:text-brand transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-5 mt-10 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {RELATED.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group snap-start shrink-0 w-[240px] sm:w-[260px] rounded-xl bg-white border border-line overflow-hidden shadow-card hover:shadow-cardHover transition-all duration-300"
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
              <div className="p-4">
                <p className="font-mono text-[10.5px] tracking-widest2 uppercase text-brand">
                  {p.brand}
                </p>
                <h3 className="font-display text-[14.5px] font-semibold text-charcoal mt-1 leading-snug">
                  {p.title}
                </h3>
                <Button variant="light" size="sm" className="w-full mt-3.5">
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
