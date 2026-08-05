"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "Brands", href: "/#brands" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-line shadow-[0_2px_16px_rgba(20,24,27,0.06)]"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <nav className="container flex items-center justify-between h-[72px]" aria-label="Primary">
        <a href="/" className="flex items-center shrink-0 py-2">
          <Image
            src="/brand/nisar-sons-logo.png"
            alt="Nisar Sons"
            width={825}
            height={252}
            priority
            className="h-9 sm:h-10 w-auto"
          />
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13.5px] font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-graphite hover:text-brand-dark"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="/#contact" variant="primary" size="default">
            Request Quote
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 -mr-2 ${scrolled ? "text-charcoal" : "text-white"}`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t border-line px-5 pb-6 pt-2">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] font-medium text-graphite border-b border-line last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button
            href="/#contact"
            variant="primary"
            size="default"
            className="w-full mt-5"
            onClick={() => setOpen(false)}
          >
            Request Quote
          </Button>
        </div>
      )}
    </header>
  );
}
