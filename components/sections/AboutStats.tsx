"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "20+", label: "Years Experience" },
  { value: "1000+", label: "Products" },
  { value: "50+", label: "Global Brands" },
  { value: "Nationwide", label: "Supply Network" },
];

export default function AboutStats() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">About Nisar Sons</p>
          <h2 className="font-display text-3xl sm:text-[2.35rem] font-semibold text-charcoal mt-3 leading-tight tracking-tight">
            Two decades of keeping Pakistan&apos;s industries running
          </h2>
          <div className="mt-6 space-y-4 text-[15px] text-graphite-light leading-relaxed">
            <p>
              Nisar Sons has grown from a single hardware counter into a
              nationwide supply partner for contractors, manufacturers and
              engineering firms. We source directly from over fifty
              internationally certified brands, so every drill bit, welding
              rod and pipe fitting that leaves our warehouse meets the
              standard your project demands.
            </p>
            <p>
              We built our reputation on stock availability, technical
              knowledge and a delivery network that reaches project sites
              across the country — not just our storefront. That&apos;s the
              difference between a hardware shop and an industrial supply
              partner.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="grid grid-cols-2 gap-px bg-line border border-line rounded-xl overflow-hidden"
        >
          {STATS.map((s) => (
            <div key={s.label} className="bg-fog p-8">
              <p className="font-display text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
                {s.value}
              </p>
              <p className="font-mono text-[11px] tracking-widest2 uppercase text-graphite-light mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
