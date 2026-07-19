"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, FileDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] tracking-widest2 uppercase text-brand bg-brand/10 px-2.5 py-1 rounded">
          Dormer
        </span>
        <span className="text-graphite-light/40 text-[12px]">|</span>
        <span className="text-[12.5px] text-graphite-light">Cutting Tools / Drill Bits</span>
      </div>

      <h1 className="font-display text-[1.85rem] sm:text-[2.35rem] font-semibold text-charcoal mt-3 leading-[1.1] tracking-tight">
        Dormer H.S.S Drill Bit A100 — Straight Shank
      </h1>

      <p className="mt-3 font-mono text-[12.5px] tracking-wide text-graphite-light">
        SKU: NS-CUT-A100 &nbsp;·&nbsp; DIN 338 &nbsp;·&nbsp; Jobber Series
      </p>

      <div className="flex items-center gap-2 mt-5">
        <CheckCircle2 className="w-[18px] h-[18px] text-brand" strokeWidth={2} />
        <span className="text-[13.5px] font-medium text-charcoal">In Stock</span>
        <span className="text-[13px] text-graphite-light">— ships within 24–48 hrs</span>
      </div>

      <p className="mt-6 text-[15px] text-graphite-light leading-relaxed max-w-md">
        Precision-ground high-speed steel drill bit built to DIN 338
        tolerances, engineered for consistent hole accuracy across steel,
        cast iron and non-ferrous metals on the shop floor.
      </p>

      <div className="flex flex-wrap gap-3 mt-8">
        <Button variant="primary" size="lg" className="group">
          Request a Quote
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-[#25D366]/40 text-[#128C4A] hover:bg-[#25D366] hover:text-charcoal hover:border-[#25D366]"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp Us
        </Button>
        <Button variant="ghost" size="lg" className="border border-line">
          <FileDown className="w-4 h-4" />
          Download Catalogue
        </Button>
      </div>
    </motion.div>
  );
}
