import type { Metadata, Viewport } from "next";
import { Oswald, Inter, IBM_Plex_Mono } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-oswald", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });

const SITE_URL = "https://www.nisarsons.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nisar Sons | Industrial Tools, Hardware & Engineering Supplies — Pakistan",
    template: "%s | Nisar Sons",
  },
  description:
    "Nisar Sons supplies premium industrial tools, power tools, welding equipment, pipe fittings, electrical goods and engineering solutions across Pakistan. 20+ years, 50+ global brands, nationwide delivery.",
  keywords: [
    "industrial tools Pakistan",
    "power tools supplier",
    "hand tools wholesale",
    "welding equipment Pakistan",
    "pipe fittings supplier",
    "electrical goods wholesale",
    "Nisar Sons",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nisar Sons | Industrial Tools & Hardware Supplier in Pakistan",
    description: "Premium industrial tools, power tools, welding equipment, pipe fittings and electrical goods. Trusted nationwide since decades.",
    url: SITE_URL,
    siteName: "Nisar Sons",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nisar Sons | Industrial Tools & Hardware Supplier in Pakistan",
    description: "Premium industrial tools, power tools, welding equipment, pipe fittings and electrical goods, delivered nationwide.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14181B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:text-charcoal focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
