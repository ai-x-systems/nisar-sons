"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ZoomIn } from "lucide-react";

export default function ProductGallery({
  images,
  productTitle,
}: {
  images: string[];
  productTitle: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      <div className="bracket-frame relative aspect-square rounded-xl border border-line bg-fog overflow-hidden text-brand">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={images[active]}
            alt={`${productTitle} — view ${active + 1}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <span className="absolute top-4 left-4 flex items-center gap-1.5 font-mono text-[10px] tracking-widest2 uppercase bg-charcoal/80 text-white px-2.5 py-1.5 rounded">
          <ZoomIn className="w-3 h-3" />
          NS-CUT-A100
        </span>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-4">
        {images.map((img, i) => (
          <button
            key={img + i}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={`relative aspect-square rounded-lg overflow-hidden border transition-all duration-200 ${
              active === i
                ? "border-brand ring-2 ring-brand/25"
                : "border-line hover:border-charcoal/30"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
