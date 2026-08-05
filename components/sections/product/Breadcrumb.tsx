import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full border-b border-line bg-fog">
      <div className="container flex items-center gap-1.5 py-3.5 text-[12.5px] overflow-x-auto whitespace-nowrap">
        <a href="/" aria-label="Home" className="flex items-center text-graphite-light hover:text-brand-dark transition-colors">
          <Home className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-graphite-light/50" aria-hidden="true" />
              {item.href && !isLast ? (
                <a href={item.href} className="text-graphite-light hover:text-brand-dark transition-colors font-medium">
                  {item.label}
                </a>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="text-charcoal font-medium">
                  {item.label}
                </span>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
