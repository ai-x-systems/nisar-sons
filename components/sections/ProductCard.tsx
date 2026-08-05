import Image from "next/image";
import { Button } from "@/components/ui/button";

export interface ProductCardData {
  title: string;
  brand: string;
  code: string;
  img: string;
}

export default function ProductCard({
  product,
  quoteHref = "#contact",
  priority = false,
}: {
  product: ProductCardData;
  quoteHref?: string;
  priority?: boolean;
}) {
  return (
    <div className="group h-full rounded-xl bg-white border border-line overflow-hidden shadow-card hover:shadow-cardHover transition-shadow duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-fog">
        <Image
          src={product.img}
          alt={product.title}
          fill
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute top-3 left-3 font-mono text-[10px] tracking-wide bg-charcoal/80 text-white px-2 py-1 rounded">
          {product.code}
        </span>
      </div>

      <div className="p-5">
        <p className="font-mono text-[11px] tracking-widest2 uppercase text-brand-dark">
          {product.brand}
        </p>
        <h3 className="font-display text-[16px] font-semibold text-charcoal mt-1.5 leading-snug">
          {product.title}
        </h3>
        <Button href={quoteHref} variant="light" size="sm" className="w-full mt-4">
          Request Quote
        </Button>
      </div>
    </div>
  );
}
