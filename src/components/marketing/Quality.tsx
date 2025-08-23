import Link from "next/link";

export function Quality() {
  return (
    <section className="bg-cream">
      <div className="container py-16">
        <div className="rounded-card bg-white p-10 border border-ink/5 shadow-ambient">
          <h3 className="font-display text-2xl md:text-3xl">Quality you can trust.</h3>
          <p className="mt-3 text-ink/70">
            Third-party lab tested. GMP facility. Transparent ingredients. Batch-level reports.
          </p>
          <Link href="/lab-reports" className="inline-block mt-6 text-ink underline underline-offset-4">
            View lab reports →
          </Link>
        </div>
      </div>
    </section>
  );
}
