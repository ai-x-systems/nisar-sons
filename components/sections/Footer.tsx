"use client";

import { Cog, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const QUICK_LINKS = ["Home", "Products", "Brands", "About", "Contact"];
const PRODUCT_LINKS = ["Power Tools", "Hand Tools", "Electrical Goods", "Pipe Fittings", "Welding Equipment"];
const BRAND_LINKS = ["Dormer", "Hitachi", "Morita", "Elora", "Pard"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white/70">
      <div className="container py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Company info */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-9 h-9 rounded-[6px] bg-brand text-white">
              <Cog className="w-5 h-5" strokeWidth={2.25} />
            </span>
            <span className="font-display font-semibold text-[19px] text-white tracking-tight">
              NISAR SONS
            </span>
          </div>
          <p className="mt-5 text-[13.5px] leading-relaxed max-w-sm">
            Industrial tools, hardware and engineering supplies, sourced from
            50+ global brands and delivered nationwide since decades.
          </p>

          <div className="mt-6 space-y-3 text-[13.5px]">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-brand-bright shrink-0" />
              <span>Industrial Area, Karachi, Pakistan</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-bright shrink-0" />
              <span>+92 300 0000000</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-brand-bright shrink-0" />
              <span>sales@nisarsons.com</span>
            </div>
          </div>

          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-[#25D366] text-charcoal font-medium text-[13.5px] px-4 py-2.5 rounded-lg hover:brightness-95 transition"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>

        <FooterCol title="Quick Links" items={QUICK_LINKS} />
        <FooterCol title="Products" items={PRODUCT_LINKS} />
        <FooterCol title="Brands" items={BRAND_LINKS} />
      </div>

      {/* Map placeholder */}
      <div className="container pb-16">
        <div className="w-full h-52 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
          <div className="flex items-center gap-2 text-white/40 text-[13px] font-mono tracking-wide">
            <MapPin className="w-4 h-4" />
            GOOGLE MAPS EMBED — WAREHOUSE LOCATION
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-white/40">
          <p>© {new Date().getFullYear()} Nisar Sons. All rights reserved.</p>
          <p className="font-mono tracking-wide">NS · INDUSTRIAL SUPPLY CO.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[11px] tracking-widest2 uppercase text-white/40">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-[13.5px] hover:text-white transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
