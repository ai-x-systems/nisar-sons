"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Truck, Tags, HeadsetIcon, Boxes, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const FEATURES = [
  { icon: BadgeCheck, title: "Premium Brands", desc: "Certified, authentic stock from 50+ global manufacturers." },
  { icon: Truck, title: "Fast Delivery", desc: "Dispatch network reaching project sites nationwide." },
  { icon: Tags, title: "Competitive Pricing", desc: "Direct-import margins passed on to bulk buyers." },
  { icon: HeadsetIcon, title: "Technical Support", desc: "Product specs and application guidance on call." },
  { icon: Boxes, title: "Bulk Orders", desc: "Warehouse capacity built for project-scale quantities." },
  { icon: ShieldCheck, title: "Trusted Supplier", desc: "Two decades of consistent, on-spec fulfilment." },
];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-choose-us-heading" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-[0.06]" aria-hidden="true" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Why Nisar Sons"
          title="Why Choose Us"
          sub="Built for buyers who need the right part, on time, every time."
          id="why-choose-us-heading"
          light
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 list-none">
          {FEATURES.map((f, i) => (
            <motion.li
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.06] hover:border-white/20 transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-brand/20 text-brand-bright">
                <f.icon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-semibold text-white mt-5">{f.title}</h3>
              <p className="text-[13.5px] text-white/65 mt-1.5 leading-relaxed">{f.desc}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
