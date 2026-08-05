"use client";

import { motion } from "framer-motion";
import { Target, Flame, Timer, Ruler, ShieldCheck, BadgeCheck } from "lucide-react";

const FEATURES = [
  { icon: Target, title: "Precision Ground Flutes", desc: "Consistent chip clearance and cut accuracy." },
  { icon: Flame, title: "High Heat Resistance", desc: "HSS-M2 construction holds edge under friction." },
  { icon: Timer, title: "Long Service Life", desc: "Fewer bit changes across production runs." },
  { icon: Ruler, title: "Consistent Hole Accuracy", desc: "Ground to h8 tolerance, run after run." },
  { icon: ShieldCheck, title: "Corrosion Resistant Finish", desc: "Bright finish protects against workshop moisture." },
  { icon: BadgeCheck, title: "DIN 338 Standard", desc: "Certified to internationally recognised spec." },
];

export default function ProductFeatures() {
  return (
    <section aria-labelledby="features-heading" className="py-20 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-[0.06]" aria-hidden="true" />
      <div className="container relative">
        <p className="eyebrow text-brand-bright">Built In</p>
        <h2 id="features-heading" className="font-display text-2xl sm:text-[1.75rem] font-semibold text-white mt-3 leading-tight tracking-tight max-w-xl">
          Features
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 list-none">
          {FEATURES.map((f, i) => (
            <motion.li
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-white/20 transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-brand/20 text-brand-bright">
                <f.icon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="font-display text-[15.5px] font-semibold text-white mt-5">{f.title}</h3>
              <p className="text-[13px] text-white/65 mt-1.5 leading-relaxed">{f.desc}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
