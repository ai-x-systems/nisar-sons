"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "Brands", href: "/#brands" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];
const PRODUCT_LINKS = ["Power Tools", "Hand Tools", "Electrical Goods", "Pipe Fittings", "Welding Equipment"].map((label) => ({ label, href: "/#contact" }));
const BRAND_LINKS = ["Dormer", "Hitachi", "Morita", "Elora", "Pard"].map((label) => ({ label, href: "/#brands" }));

export default function Footer() {
  return (
    <footer id="contact" aria-labelledby="footer-heading" className="bg-charcoal text-white/70">
      <h2 id="footer-heading" className="sr-only">Contact Nisar Sons</h2>
      <div className="container py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <a href="/" className="inline-flex items-center">
            <Image src="/brand/nisar-sons-logo.png" alt="Nisar Sons" width={825} height={252} loading="lazy" className="h-10 w-auto" />
          </a>
          <p className="mt-5 text-[13.5px] leading-relaxed max-w-sm">
            Industrial tools, hardware and engineering supplies, sourced from
            50+ global brands and delivered nationwide since decades.
          </p>

          <address className="mt-6 space-y-3 text-[13.5px] not-italic">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-brand-bright shrink-0" aria-hidden="true" />
              <span>Industrial Area, Karachi, Pakistan</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-bright shrink-0" aria-hidden="true" />
              <a href="tel:+923000000000" className="hover:text-white transition-colors">+92 300 0000000</a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-brand-bright shrink-0" aria-hidden="true" />
              <a href="mailto:sales@nisarsons.com" className="hover:text-white transition-colors">sales@nisarsons.com</a>
            </div>
          </address>

          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-[#25D366] text-charcoal font-medium text-[13.5px] px-4 py-2.5 rounded-lg hover:brightness-95 transition"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Chat on WhatsApp
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        <FooterCol title="Quick Links" items={QUICK_LINKS} />
        <FooterCol title="Products" items={PRODUCT_LINKS} />
        <FooterCol title="Brands" items={BRAND_LINKS} />
      </div>

      <div className="container pb-16">
        <div className="w-full h-52 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
          <div className="flex items-center gap-2 text-white/55 text-[13px] font-mono tracking-wide">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            GOOGLE MAPS EMBED — WAREHOUSE LOCATION
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-white/55">
          <p>© {new Date().getFullYear()} Nisar Sons. All rights reserved.</p>
          <p className="font-mono tracking-wide">NS · INDUSTRIAL SUPPLY CO.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <p className="font-mono text-[11px] tracking-widest2 uppercase text-white/55">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="text-[13.5px] hover:text-white transition-colors">{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
