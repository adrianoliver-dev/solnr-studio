import { Hero, Manifesto } from "@/components/storefront";

export default function Page() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Manifesto />
      {/* Other sections like FeaturedCapsules and ProductGrid will be added here */}
      
      {/* Temporary content until components are fully implemented */}
      <section className="flex min-h-[50vh] flex-col items-center justify-center p-24 text-center">
        <div className="max-w-2xl space-y-8">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[--color-text-muted] uppercase">
            Established 2026
          </span>
          <h2 className="text-4xl md:text-6xl tracking-tight leading-none text-[--color-text-primary] font-display">
            The New Standard
          </h2>
          <p className="text-lg text-[--color-text-secondary] max-w-md mx-auto leading-relaxed">
            Reserved for those who understand that restraint is the ultimate statement.
          </p>
        </div>
      </section>
    </main>
  );
}
