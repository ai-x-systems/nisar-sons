"use client";

import { motion } from "framer-motion";
import { ArrowRight, PackageSearch, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-end min-h-[92vh] overflow-hidden bg-charcoal"
    >
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/60 to-transparent" />
        <div className="absolute inset-0 bg-blueprint bg-grid opacity-40" />
      </div>

      <div className="container relative pb-20 pt-40">
        <div className="max-w-3xl bracket-frame text-white/90 p-8 sm:p-10 -ml-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-brand-bright mb-5"
          >
            NS · CATALOG · EST. INDUSTRIAL SUPPLY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.5rem] sm:text-6xl font-display font-semibold text-white leading-[1.05] tracking-tight"
          >
            Trusted Industrial Tools &amp; Hardware Supplier in Pakistan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-6 text-[15.5px] sm:text-base text-white/70 leading-relaxed max-w-xl font-body"
          >
            Supplying premium industrial tools, power tools, welding equipment,
            pipe fittings, electrical goods and engineering solutions since
            years — built on precision sourcing and nationwide reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-9 flex flex-wrap gap-3.5"
          >
            <Button variant="primary" size="lg" className="group">
              Request a Quote
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-charcoal hover:border-white"
            >
              Browse Products
            </Button>
          </motion.div>
        </div>

        {/* Spec strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 max-w-3xl border border-white/10"
        >
          {[
            { icon: ShieldCheck, label: "Certified Brands", value: "50+ Global Partners" },
            { icon: PackageSearch, label: "Inventory On Hand", value: "1000+ SKUs" },
            { icon: Wrench, label: "Field Experience", value: "20+ Years" },
          ].map((item) => (
            <div key={item.label} className="bg-charcoal/70 px-5 py-4 flex items-center gap-3">
              <item.icon className="w-[18px] h-[18px] text-brand-bright shrink-0" strokeWidth={1.75} />
              <div>
                <p className="font-mono text-[10px] tracking-widest2 uppercase text-white/45">
                  {item.label}
                </p>
                <p className="text-white text-[13.5px] font-medium mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
