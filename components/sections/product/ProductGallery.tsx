"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ZoomIn } from "lucide-react";

export default function ProductGallery({
  images,
  productTitle,
  sku,
}: {
  images: string[];
  productTitle: string;
  sku: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full" role="group" aria-label="Product image gallery">
      <div className="bracket-frame relative aspect-square rounded-xl border border-line bg-fog overflow-hidden text-brand-dark">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[active]}
              alt={`${productTitle} — view ${active + 1} of ${images.length}`}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <span className="absolute top-4 left-4 flex items-center gap-1.5 font-mono text-[10px] tracking-widest2 uppercase bg-charcoal/80 text-white px-2.5 py-1.5 rounded">
          <ZoomIn className="w-3 h-3" aria-hidden="true" />
          {sku}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-4">
        {images.map((img, i) => (
          <button
            type="button"
            key={img + i}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1} of ${images.length}`}
            aria-pressed={active === i}
            className={`relative aspect-square rounded-lg overflow-hidden border transition-all duration-200 ${
              active === i ? "border-brand ring-2 ring-brand/25" : "border-line hover:border-charcoal/30"
            }`}
          >
            <Image src={img} alt="" fill loading="lazy" sizes="120px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
