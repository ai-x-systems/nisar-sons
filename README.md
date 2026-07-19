# Nisar Sons — Homepage

Premium B2B homepage for an industrial tools & hardware supplier, built with
Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui-style components,
Framer Motion and Lucide icons.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Design system

- **Colors** — charcoal `#14181B` (steel/near-black), graphite `#3A4147`
  (secondary text), brand green `#1E6B45` / bright `#2F9461` (CTA + accents),
  white, fog `#F4F5F6` (section backgrounds), hairline `#E3E5E7`.
- **Type** — Oswald (display/headlines, condensed & engineered), Inter (body),
  IBM Plex Mono (part codes, eyebrows, spec labels).
- **Signature device** — corner-bracket "registration marks" (see
  `.bracket-frame` in `globals.css`), borrowed from technical drawings and
  spec sheets, plus part-code style eyebrows (e.g. `NS-PWR-1042`) that echo a
  real industrial parts catalog.

## Structure

```
app/
  layout.tsx        Fonts + metadata
  page.tsx           Assembles all sections
  globals.css         Tokens, bracket-frame signature, base styles
components/
  ui/button.tsx       shadcn-style button (cva variants)
  sections/           Navbar, Hero, BrandsCarousel, ProductCategories,
                      FeaturedProducts, AboutStats, WhyChooseUs,
                      IndustriesServed, CTASection, Footer
```

## Notes for launch

- Replace the Unsplash placeholder images in `Hero.tsx` and
  `FeaturedProducts.tsx` with real product/warehouse photography.
- Swap the text wordmarks in `BrandsCarousel.tsx` for actual brand logo
  files once available (SVG preferred, ~120x40).
- Update WhatsApp number, phone, email and address in `Footer.tsx`.
- Drop in a real Google Maps iframe embed in place of the placeholder block
  in `Footer.tsx`.
- Wire the "Request Quote" buttons to a real quote form or modal — currently
  static, since this is a lead-gen site with no checkout flow.
