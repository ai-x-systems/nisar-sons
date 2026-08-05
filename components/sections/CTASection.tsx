"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section aria-labelledby="cta-heading" className="py-20 bg-brand relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-[0.08]" aria-hidden="true" />
      <div className="container relative flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-[2.15rem] font-semibold text-white leading-tight tracking-tight max-w-xl"
        >
          Looking for Reliable Industrial Supplies?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Button href="#contact" variant="light" size="lg" className="group border-white/0 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)]">
            Get a Free Quote
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
