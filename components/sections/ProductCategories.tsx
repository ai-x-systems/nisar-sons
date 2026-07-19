"use client";

import { motion } from "framer-motion";
import {
  Drill,
  Hammer,
  Zap,
  GitBranch,
  Flame,
  Scissors,
  ArrowUpRight,
} from "lucide-react";

const CATEGORIES = [
  { code: "PWR·01", title: "Power Tools", icon: Drill, desc: "Drills, grinders & cordless systems" },
  { code: "HND·02", title: "Hand Tools", icon: Hammer, desc: "Wrenches, sockets & precision sets" },
  { code: "ELC·03", title: "Electrical Goods", icon: Zap, desc: "Cables, switchgear & fittings" },
  { code: "PPF·04", title: "Pipe Fittings", icon: GitBranch, desc: "Fittings, valves & couplings" },
  { code: "WLD·05", title: "Welding Equipment", icon: Flame, desc: "Machines, electrodes & PPE" },
  { code: "CUT·06", title: "Cutting Tools", icon: Scissors, desc: "Blades, bits & abrasives" },
];

export default function ProductCategories() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Catalog"
          title="Product Categories"
          sub="Six core divisions covering every stage of an industrial or construction operation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {CATEGORIES.map((cat, i) => (
            <motion.a
              href="#"
              key={cat.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group bracket-frame relative rounded-xl border border-line bg-white p-7 shadow-card hover:shadow-cardHover hover:border-charcoal/15 transition-all duration-300 text-charcoal"
            >
              <div className="flex items-start justify-between">
                <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-fog text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <cat.icon className="w-[22px] h-[22px]" strokeWidth={1.75} />
                </span>
                <span className="font-mono text-[10px] tracking-widest2 text-graphite-light/60 mt-1">
                  {cat.code}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-charcoal mt-6">
                {cat.title}
              </h3>
              <p className="text-[13.5px] text-graphite-light mt-1.5 leading-relaxed">
                {cat.desc}
              </p>

              <div className="flex items-center gap-1.5 mt-5 text-[13px] font-medium text-brand">
                View range
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  light,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={`eyebrow ${light ? "text-brand-bright" : ""}`}>{eyebrow}</p>
      <h2
        className={`font-display text-3xl sm:text-[2.35rem] font-semibold mt-3 leading-tight tracking-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-3.5 text-[15px] leading-relaxed ${
            light ? "text-white/65" : "text-graphite-light"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
