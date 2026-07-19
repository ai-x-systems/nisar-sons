import type { Metadata } from "next";
import { Oswald, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nisar Sons | Industrial Tools, Hardware & Engineering Supplies — Pakistan",
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
  openGraph: {
    title: "Nisar Sons | Industrial Tools & Hardware Supplier in Pakistan",
    description:
      "Premium industrial tools, power tools, welding equipment, pipe fittings and electrical goods. Trusted nationwide since decades.",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
