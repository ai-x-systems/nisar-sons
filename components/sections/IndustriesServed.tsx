"use client";

import { motion } from "framer-motion";
import { Building2, Factory, Fuel, Cog, Car, Landmark } from "lucide-react";
import SectionHeading from "./SectionHeading";

const INDUSTRIES = [
  { icon: Building2, title: "Construction" },
  { icon: Factory, title: "Manufacturing" },
  { icon: Fuel, title: "Oil & Gas" },
  { icon: Cog, title: "Engineering" },
  { icon: Car, title: "Automotive" },
  { icon: Landmark, title: "Infrastructure" },
];

export default function IndustriesServed() {
  return (
    <section aria-labelledby="industries-heading" className="py-24 bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Sectors"
          title="Industries Served"
          sub="Supplying the operations that build, move and power the country."
          id="industries-heading"
        />
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-14 list-none">
          {INDUSTRIES.map((ind, i) => (
            <motion.li
              key={ind.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center text-center gap-3 rounded-xl border border-line bg-fog/60 py-8 px-3 hover:bg-white hover:border-brand/30 hover:shadow-card transition-all duration-300"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-line text-brand-dark">
                <ind.icon className="w-5 h-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <p className="text-[13.5px] font-medium text-charcoal">{ind.title}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
