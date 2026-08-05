import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-charcoal px-6">
      <div className="text-center max-w-md">
        <p className="eyebrow text-brand-bright">Error 404</p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white mt-3 tracking-tight">Page not found</h1>
        <p className="mt-4 text-[15px] text-white/65 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved. Head back to the homepage to keep browsing our catalog.
        </p>
        <Button href="/" variant="primary" size="lg" className="mt-8">Back to Homepage</Button>
      </div>
    </main>
  );
}
