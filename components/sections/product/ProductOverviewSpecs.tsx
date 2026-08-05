"use client";

import { motion } from "framer-motion";

const SPECS: [string, string][] = [
  ["Material", "High Speed Steel (HSS-M2)"],
  ["Shank Type", "Straight Shank"],
  ["Point Angle", "118°"],
  ["Flute Type", "Standard Helix"],
  ["Diameter Range", "0.5 mm – 20 mm"],
  ["Surface Finish", "Bright (Uncoated)"],
  ["Standard", "DIN 338"],
  ["Tolerance", "h8"],
  ["Length Series", "Jobber Length"],
  ["Recommended Use", "Steel, Cast Iron, Non-Ferrous Metals"],
];

export default function ProductOverviewSpecs() {
  return (
    <section id="specifications" aria-labelledby="overview-heading" className="py-20 bg-white">
      <div className="container grid lg:grid-cols-5 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <p className="eyebrow">Overview</p>
          <h2 id="overview-heading" className="font-display text-2xl font-semibold text-charcoal mt-3 leading-tight tracking-tight">
            Built for accuracy, batch after batch
          </h2>
          <div className="mt-5 space-y-4 text-[14.5px] text-graphite-light leading-relaxed">
            <p>
              The Dormer A100 straight shank drill bit is manufactured from
              high-speed steel and ground to DIN 338 tolerances, giving
              fabricators and maintenance teams a dependable general-purpose
              bit for everyday drilling work.
            </p>
            <p>
              Its standard helix flute clears chips efficiently while the
              118° point angle centres cleanly on contact, reducing walking
              on flat and curved surfaces alike. Supplied straight-shank for
              compatibility with standard chucks across drill presses and
              hand drills.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <h3 className="eyebrow">Technical Specifications</h3>
          <div className="mt-5 rounded-xl border border-line overflow-hidden">
            <table className="w-full text-left">
              <caption className="sr-only">Technical specifications for the Dormer H.S.S Drill Bit A100</caption>
              <tbody>
                {SPECS.map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-fog" : "bg-white"}>
                    <th scope="row" className="w-[42%] sm:w-[36%] px-5 py-3.5 font-mono text-[11.5px] tracking-wide uppercase text-graphite-light font-medium align-top">
                      {label}
                    </th>
                    <td className="px-5 py-3.5 text-[13.5px] text-charcoal font-medium">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
