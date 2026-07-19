"use client";

import { motion } from "framer-motion";
import { HardHat, Factory, Wrench, Layers } from "lucide-react";

const APPLICATIONS = [
  { icon: HardHat, title: "Construction & Fabrication", desc: "Site drilling into structural steel and fixtures." },
  { icon: Factory, title: "Engineering Workshops", desc: "Precision hole-making on production and job-shop floors." },
  { icon: Wrench, title: "Maintenance & Repair", desc: "General-purpose drilling for MRO teams and technicians." },
  { icon: Layers, title: "Sheet Metal Work", desc: "Clean entry on flat and curved metal sheet surfaces." },
];

export default function ProductApplications() {
  return (
    <section className="py-20 bg-fog">
      <div className="container">
        <p className="eyebrow">Where It&apos;s Used</p>
        <h2 className="font-display text-2xl sm:text-[1.75rem] font-semibold text-charcoal mt-3 leading-tight tracking-tight max-w-xl">
          Applications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {APPLICATIONS.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl bg-white border border-line p-6 hover:shadow-card transition-shadow duration-300"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-brand/10 text-brand">
                <app.icon className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <h3 className="font-display text-[15.5px] font-semibold text-charcoal mt-5">
                {app.title}
              </h3>
              <p className="text-[13px] text-graphite-light mt-1.5 leading-relaxed">
                {app.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
