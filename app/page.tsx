export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <div className="max-w-2xl space-y-8">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[--color-text-muted] uppercase">
          Established 2026
        </span>
        <h1 className="text-6xl md:text-8xl tracking-tight leading-none text-[--color-text-primary]">
          SOLNR STUDIO
        </h1>
        <p className="text-lg text-[--color-text-secondary] max-w-md mx-auto leading-relaxed">
          The new standard in quiet luxury. 
          Reserved for those who understand that restraint is the ultimate statement.
        </p>
        <div className="pt-8">
          <button className="px-12 py-4 border border-[--color-accent] text-[--color-accent] text-xs font-medium tracking-[0.2em] uppercase hover:bg-[--color-accent] hover:text-[--color-base] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            Explore Collection
          </button>
        </div>
      </div>
    </main>
  );
}
