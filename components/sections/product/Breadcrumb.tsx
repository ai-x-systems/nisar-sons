import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full border-b border-line bg-fog">
      <div className="container flex items-center gap-1.5 py-3.5 text-[12.5px] overflow-x-auto whitespace-nowrap">
        <a href="/" className="flex items-center text-graphite-light hover:text-brand transition-colors">
          <Home className="w-3.5 h-3.5" />
        </a>
        {items.map((item, i) => (
          <span key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-graphite-light/50" />
            {item.href && i !== items.length - 1 ? (
              <a href={item.href} className="text-graphite-light hover:text-brand transition-colors font-medium">
                {item.label}
              </a>
            ) : (
              <span className="text-charcoal font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
