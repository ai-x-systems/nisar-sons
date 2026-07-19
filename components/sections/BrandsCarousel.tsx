"use client";

import { motion } from "framer-motion";

const BRANDS = ["Dormer", "Hitachi", "Morita", "Elora", "Pard", "Ferret", "Me Tolex"];
// Duplicated once for a seamless marquee loop.
const TRACK = [...BRANDS, ...BRANDS];

export default function BrandsCarousel() {
  return (
    <section id="brands" className="border-y border-line bg-fog py-11 overflow-hidden">
      <div className="container flex items-center gap-8 mb-7">
        <p className="eyebrow whitespace-nowrap">Authorized For</p>
        <div className="h-px flex-1 bg-line" />
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-fog to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-fog to-transparent z-10" />

        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          {TRACK.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex items-center justify-center h-12 px-2 shrink-0"
            >
              <span className="font-display text-[22px] tracking-tight text-graphite/60 hover:text-charcoal transition-colors font-medium whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
