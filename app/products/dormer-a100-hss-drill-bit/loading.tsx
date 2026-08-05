export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center" role="status" aria-label="Loading">
      <div className="w-10 h-10 rounded-full border-2 border-line border-t-brand-dark animate-spin" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
