export default function SectionHeading({
  eyebrow,
  title,
  sub,
  light,
  as = "h2",
  id,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  light?: boolean;
  as?: "h2" | "h3";
  id?: string;
}) {
  const Heading = as;
  return (
    <div className="max-w-2xl">
      <p className={`eyebrow ${light ? "text-brand-bright" : ""}`}>{eyebrow}</p>
      <Heading
        id={id}
        className={`font-display text-3xl sm:text-[2.35rem] font-semibold mt-3 leading-tight tracking-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </Heading>
      {sub && (
        <p
          className={`mt-3.5 text-[15px] leading-relaxed ${
            light ? "text-white/70" : "text-graphite-light"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
